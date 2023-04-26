 /* ----------------------------------------------------------------------- */
"use strict";

import * as path from "path";
import * as fs from 'fs';
import * as vscode from "vscode";
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

export class TreeDataProvider implements vscode.TreeDataProvider<IncludeFile> {

    constructor(private root: string) {}
  
    getTreeItem(element: IncludeFile): vscode.TreeItem {
        return element;
    }
  
    getChildren(element?: IncludeFile): Thenable<IncludeFile[]> {
        if (element) {
            const includes = this.getIncludes(element)
            return Promise.resolve(includes);
        }
        const origin = vscode.window.activeTextEditor.document.fileName
        return Promise.resolve([new IncludeFile(path.basename(origin), vscode.TreeItemCollapsibleState.Expanded, origin)]);
    }

    private hasIncludes(fileName: string): boolean {
        const lines = fs.readFileSync(fileName).toString().split("\n");
        for (var line of lines) {
            if (line.toLowerCase().includes('include')) {
                return true
            }
        }
        return false
    }

    private getIncludes(element: IncludeFile): IncludeFile[] {
        console.log(element.origin)
        const lines = fs.readFileSync(element.origin).toString().split("\n");
        var includes = []
        for (var line of lines) {
            if (line.toLowerCase().includes('include')) {
                if (line.includes("'")) {
                    line = line.split("'")[1]
                } 
                if (line.includes('"')) {
                    line = line.split('"')[1]
                }
                const fileName = path.join(path.dirname(element.origin), line)
                console.log('  '+fileName)
                if (this.hasIncludes(fileName)) {
                    includes.push(new IncludeFile(line, vscode.TreeItemCollapsibleState.Expanded, fileName))
                } else {
                    includes.push(new IncludeFile(line, vscode.TreeItemCollapsibleState.None, fileName))
                }
            }
        }
        return includes
    }

    //     // create
    //     const tree = vscode.window.createTreeView('includeHierarchy', options);
    //     const root = path.dirname(vscode.window.activeTextEditor.document.fileName)
        
    //     // Event for tree selection
    //     tree.onDidChangeSelection(e => {
    //         const relpath = path.join(root, String(e.selection[0].label));
    //         const uri = vscode.Uri.file(relpath);
    //         vscode.commands.executeCommand(
    //             'vscode.open',
    //             uri
    //         )
    //     });

    //     // subscribe
    //     context.subscriptions.push(tree);
    // }
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
    const root = vscode.window.activeTextEditor.document.fileName
    vscode.window.registerTreeDataProvider(
        'includeHierarchy',
        new TreeDataProvider(root)
    );
    vscode.commands.registerCommand("includeHierarchy.selectNode", (item:vscode.TreeItem) => {
        // console.log(item.label);
    });
    // Register Commands
    vscode.commands.registerCommand('extension.buildIncludeTree', () => {
        // console.log('test')
    });
}

export function deactivate(): Thenable<void> {
    return client ? client.stop() : Promise.resolve();
}

class IncludeFile extends vscode.TreeItem {
    constructor(
      public readonly label: string,
      public readonly collapsibleState: vscode.TreeItemCollapsibleState,
      public readonly origin: string
    ) {
      super(label, collapsibleState);
      this.origin = this.origin;
    }
    iconPath = {
      light: path.join(__filename, '..', '..', 'icons', 'nasa-light.png'),
      dark: path.join(__filename, '..', '..', 'icons', 'nasa-dark.png')
    };
  }