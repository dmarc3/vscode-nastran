 /* ----------------------------------------------------------------------- */
"use strict";

import * as path from "path";
import * as vscode from "vscode";
import { TreeDataProvider } from "./treeview";
import { executeFind } from "./find";
import { executeNastran, setKeywords, showKeywords } from "./execute";
import { insertComment } from "./insert";
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
            { scheme: "file", language: "f06" },
            { scheme: "untitled", language: "f06" },
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
    context.subscriptions.push(client.start());
    // Register Tree View
    const includeHierarchyProvider = new TreeDataProvider();
    vscode.window.registerTreeDataProvider(
        'includeHierarchy',
        includeHierarchyProvider
    );
    // Register Commands
    vscode.commands.registerCommand('includeHierarchy.buildHierarchy', () =>
        includeHierarchyProvider.refresh()
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
        insertComment(
            vscode.window.activeTextEditor,
            '$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$\n'
        )
        }
    );
    vscode.commands.registerCommand('insert_long_comment', () => {
        insertComment(
            vscode.window.activeTextEditor,
            '$---1---$-------2-------$-------3-------$-------4-------$-------5-------$---6---$\n'
        )
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
}

export function deactivate(): Thenable<void> {
    return client ? client.stop() : Promise.resolve();
}
