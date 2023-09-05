import * as path from "path";
import * as fs from 'fs';
import * as vscode from "vscode";

export class TreeDataProvider implements vscode.TreeDataProvider<IncludeFile> {
    public includes: string[];
    constructor() {
        this.includes = []
    }

    getTreeItem(element: IncludeFile): vscode.TreeItem {
        this.includes.push(element.origin);
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
        const lines = fs.readFileSync(element.origin).toString().split("\n");
        var includes = []
        for (var [index, line] of lines.entries()) {
            if (line.toLowerCase().includes('include')) {
                if (line.toLowerCase().startsWith('include')) {
                    if (line.includes("'")) {
                        var line_split = line.split("'")
                        if (line_split.length < 3) {
                            line_split = (line + lines[index+1]).split("'")
                        }
                        line = line_split[1]
                    } 
                    if (line.includes('"')) {
                        var line_split = line.split('"')
                        if (line_split.length < 3) {
                            line_split = (line + lines[index+1]).split('"')
                        }
                        line = line_split[1]
                    }
                    const fileName = path.join(path.dirname(element.origin), line)
                    if (fs.existsSync(fileName)) {
                        if (this.hasIncludes(fileName)) {
                            includes.push(new IncludeFile(line, vscode.TreeItemCollapsibleState.Expanded, fileName))
                        } else {
                            includes.push(new IncludeFile(line, vscode.TreeItemCollapsibleState.None, fileName))
                        }
                    } else {
                        includes.push(new MissIncludeFile(line, vscode.TreeItemCollapsibleState.None, fileName))
                    }
                }
            }
        }
        return includes
    }

    private _onDidChangeTreeData: vscode.EventEmitter<IncludeFile | undefined | null | void> = new vscode.EventEmitter<IncludeFile | undefined | null | void>();
    readonly onDidChangeTreeData: vscode.Event<IncludeFile | undefined | null | void> = this._onDidChangeTreeData.event;
  
    refresh(): void {
      this._onDidChangeTreeData.fire();
    }

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
    command = {
        "title": "Open Include File",
        "command": "vscode.open",
        "arguments": [vscode.Uri.file(this.origin)]
    }
    iconPath = {
      light: path.join(__filename, '..', '..', '..', 'resources', 'light', 'mesh.png'),
      dark: path.join(__filename, '..', '..', '..', 'resources', 'dark', 'mesh.png')
    };
  }

class MissIncludeFile extends vscode.TreeItem {
constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly origin: string
) {
    super(label, collapsibleState);
    this.origin = this.origin;
}
command = {
    "title": "Open Include File",
    "command": "vscode.open",
    "arguments": []
}
iconPath = {
    light: path.join(__filename, '..', '..', '..', 'resources', 'light', 'mesh_missing.png'),
    dark: path.join(__filename, '..', '..', '..', 'resources', 'dark', 'mesh_missing.png')
};
}