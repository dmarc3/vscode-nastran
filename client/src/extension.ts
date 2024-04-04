 /* ----------------------------------------------------------------------- */
"use strict";

import * as path from "path";
import * as vscode from "vscode";
import { TreeDataProvider } from "./treeview";
import { executeFind } from "./find";
import { executeNastran, setKeywords, showKeywords } from "./execute";
import { setComment, insertComment } from "./comments";
import { openFile } from "./open";

import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
} from "vscode-languageclient/node";

let client: LanguageClient;

function getClientOptions(): LanguageClientOptions {
    return {
        // Register the server for plain text documents
        documentSelector: [
            { scheme: "file", language: "nastran" },
            { scheme: "untitled", language: "nastran" },
        ],
        markdown: {
            isTrusted: true,
        },
        outputChannelName: "[pygls] NastranLanguageServer",
        synchronize: {
            // Notify the server about file changes to '.clientrc files contain in the workspace
            fileEvents: vscode.workspace.createFileSystemWatcher("**/.clientrc"),
        },
    };
}

function startLangServer(
    command: string,
    args: string[],
    cwd: string
): LanguageClient {
    const serverOptions: ServerOptions = {
        args,
        command,
        options: { cwd },
    };

    return new LanguageClient(command, serverOptions, getClientOptions());
}

export function activate(context: vscode.ExtensionContext): void {
    // Production - Client is going to run the server (for use within `.vsix` package)
    const cwd = path.join(__dirname, "..", "..");
    const pythonPath = vscode.workspace
        .getConfiguration("python")
        .get<string>("defaultInterpreterPath");

    if (!pythonPath) {
        throw new Error("`python.defaultInterpreterPath` is not set");
    }
    client = startLangServer(pythonPath, ["-m", "server.server"], cwd);
    // Execute on file edit
    vscode.workspace.onDidChangeTextDocument((e: vscode.TextDocumentChangeEvent) => {
        if (e.document.languageId === "nastran") {
            // Update sections and send to server
            includeHierarchyProvider.getSections()
            client.sendRequest('custom/getSections', includeHierarchyProvider.sections)
        }
    });
    // Execute on file change
    vscode.window.onDidChangeActiveTextEditor((e: vscode.TextEditor) => {
        if (e.document.languageId === "nastran") {
            if (!path.basename(e.document.fileName).startsWith("find_")) {
                var isInclude = false
                for (var include of includeHierarchyProvider.includes) {
                    const basename = path.basename(e.document.fileName)
                    if (include.endsWith(basename)) {
                        isInclude = true
                    }
                }
                if (!isInclude) {
                    vscode.commands.executeCommand('includeHierarchy.buildHierarchy')
                }
            }
        }
    });
    // Register Tree View
    const includeHierarchyProvider = new TreeDataProvider();
    vscode.window.registerTreeDataProvider(
        'includeHierarchy',
        includeHierarchyProvider
    );
    // Register Commands
    vscode.commands.registerCommand('includeHierarchy.buildHierarchy', () => {
        // Register Tree View
        includeHierarchyProvider.reset()
        includeHierarchyProvider.getIncludes(vscode.window.activeTextEditor.document.fileName)
        includeHierarchyProvider.getSections()
        includeHierarchyProvider.refresh()
        client.sendRequest('custom/getIncludes', includeHierarchyProvider.includes)
        client.sendRequest('custom/getSections', includeHierarchyProvider.sections)
        client.sendRequest('custom/getLines', includeHierarchyProvider.lines)
        }
    );
    vscode.commands.registerCommand('find', () => {
        executeFind(includeHierarchyProvider.includes)
        }
    );
    vscode.commands.registerCommand('execute', () => {
        executeNastran(path.basename(vscode.window.activeTextEditor.document.fileName), context)
        }
    );
    vscode.commands.registerCommand('insert_short_comment', () => {
        insertComment(context, "short_comment")
        }
    );
    vscode.commands.registerCommand('insert_long_comment', () => {
        insertComment(context, "long_comment")
        }
    );
    vscode.commands.registerCommand('set_short_comment', () => {
        setComment(context, "Enter short field delineation comment:", "short_comment")
        }
    );
    vscode.commands.registerCommand('set_long_comment', () => {
        setComment(context, "Enter long field delineation comment:", "long_comment")
        }
    );
    vscode.commands.registerCommand('set_keywords', () => {
        setKeywords(context)
        }
    );
    vscode.commands.registerCommand('show_keywords', () => {
        showKeywords(context)
        }
    );
    vscode.commands.registerCommand('open_file', () => {
        const lineno = vscode.window.activeTextEditor.selection.active.line
        const lines = vscode.window.activeTextEditor.document.getText().split('\n')
        openFile(lineno, lines)
        }
    );
    client.onReady().then(() => {
        if (includeHierarchyProvider.includes.length != 0) {
            includeHierarchyProvider.getSections()
        } else {
            vscode.commands.executeCommand('includeHierarchy.buildHierarchy')
        }
        client.sendRequest('custom/getIncludes', includeHierarchyProvider.includes)
        client.sendRequest('custom/getSections', includeHierarchyProvider.sections)
        client.sendRequest('custom/getLines', includeHierarchyProvider.lines)
    });
    context.subscriptions.push(client.start());
}

export function deactivate(): Thenable<void> {
    return client ? client.stop() : Promise.resolve();
}
