 /* ----------------------------------------------------------------------- */
"use strict";

import * as path from "path";
import * as fs from 'fs';
import * as vscode from "vscode";
import { TreeDataProvider } from "./treeview";
import { executeFind } from "./find";
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
    vscode.commands.registerCommand('version.MSC_Nastran', () => {
        const oldstr = findCurrentVersion()
        const newstr = [
            '"MSC Nastran",',
            '"path": "./syntaxes/MSC_Nastran.json"'
        ]
        updatePackageJson(oldstr, newstr)
        vscode.commands.executeCommand("workbench.action.reloadWindow")
        }
    );
    vscode.commands.registerCommand('version.Simcenter_Nastran', () => {
        // Do something to change grammar
        vscode.commands.executeCommand("workbench.action.reloadWindow")
        }
    );
    vscode.commands.registerCommand('version.NASTRAN-95', () => {
        const oldstr = findCurrentVersion()
        const newstr = [
            '"NASTRAN-95",',
            '"path": "./syntaxes/NASTRAN-95.json"'
        ]
        updatePackageJson(oldstr, newstr)
        vscode.commands.executeCommand("workbench.action.reloadWindow")
        }
    );
    vscode.commands.registerCommand('find', () => {
        executeFind(includeHierarchyProvider.includes)
        }
    );
}

function updatePackageJson(oldstr, newstr): void {
    // const fileName = path.join(path.dirname(__filename), '..', '..', 'package.json')
    const fileName = path.join(vscode.extensions.getExtension("mbakke.vscode-nastran").extensionPath, 'package.json')
    var lines = fs.readFileSync(fileName).toString()
    for(let i=0; i<oldstr.length; i++){
        lines = lines.split(oldstr[i]).join(newstr[i])
    }
    fs.writeFileSync(fileName, lines)
}

function findCurrentVersion(): any {
    const fileName = path.join(path.dirname(__filename), '..', '..', 'package.json')
    var lines = fs.readFileSync(fileName).toString().split('\n')
    var oldstr = []
    // Alias name
    for (var i=lines.length; i--;) {
        if (lines[i].indexOf('        "aliases": [')>=0) break;
    }
    oldstr.push(lines[i+1].trim())
    // Grammar name
    for (var i=lines.length; i--;) {
        if (lines[i].indexOf('"scopeName": "source.nastran",')>=0) break;
    }
    oldstr.push(lines[i+1].trim())
    return oldstr
}

export function deactivate(): Thenable<void> {
    return client ? client.stop() : Promise.resolve();
}
