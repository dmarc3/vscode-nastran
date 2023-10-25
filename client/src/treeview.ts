import * as path from "path";
import * as fs from 'fs';
import * as vscode from "vscode";

export class TreeDataProvider implements vscode.TreeDataProvider<IncludeFile> {
    public includes: string[];
    public lines: object[];
    public sections: object;
    constructor() {
        this.includes = [];
        this.lines = [];
    }

    getTreeItem(element: IncludeFile): vscode.TreeItem {
        if (vscode.window.activeTextEditor.document.languageId === "nastran") {
            return element;
        }
    }
  
    getChildren(element?: IncludeFile): Thenable<IncludeFile[]> {
        if (vscode.window.activeTextEditor.document.languageId === "nastran") {
            if (element) {
                const includes = this.getIncludes(element.origin)
                return Promise.resolve(includes);
            }
            const origin = vscode.window.activeTextEditor.document.fileName
            return Promise.resolve([new IncludeFile(path.basename(origin), vscode.TreeItemCollapsibleState.Expanded, origin)]);
        }
    }

    private hasIncludes(fileName: string): boolean {
        const lines = fs.readFileSync(fileName).toString().split("\n");
        var state = false
        for (const line of lines) {
            this.lines.push({"include": fileName, "line": line})
            if (line.toLowerCase().startsWith('incl')) {
                state = !state
            }
        }
        return state
    }

    private getIncludes(element: string): IncludeFile[] {
        const lines = fs.readFileSync(element).toString().split("\n");
        this.includes.push(element)
        this.lines = []
        var includes = []
        var skip = false
        for (var [index, line] of lines.entries()) {
            if (!skip) {
                if (line.toLowerCase().startsWith('incl')) {
                    if (line.includes("'")) {
                        var line_split = line.split("'")
                        if (line_split.length < 3) {
                            var file = (line + lines[index+1]).split("'")[1]
                        } else {
                            var file = line_split[1]
                        }
                    } 
                    if (line.includes('"')) {
                        var line_split = line.split('"')
                        if (line_split.length < 3) {
                            var file = (line + lines[index+1]).split('"')[1]
                        } else {
                            var file = line_split[1]
                        }
                    }
                    const fileName = path.join(path.dirname(element), file)
                    if (fs.existsSync(fileName)) {
                        this.lines.push({"include": element, "line": line});
                        if (line_split.length < 3) {
                            this.lines.push({"include": element, "line": lines[index+1]})
                            skip = true;
                        }
                        if (this.hasIncludes(fileName)) {
                            includes.push(new IncludeFile(file, vscode.TreeItemCollapsibleState.Expanded, fileName))
                            this.includes.push(fileName)
                        } else {
                            includes.push(new IncludeFile(file, vscode.TreeItemCollapsibleState.None, fileName))
                            this.includes.push(fileName)
                        }
                    } else {
                        this.lines.push({"include": element, "line": line});
                        if (line_split.length < 3) {
                            this.lines.push({"include": element, "line": lines[index+1]})
                        }
                        includes.push(new MissIncludeFile(file, vscode.TreeItemCollapsibleState.None, fileName))
                        this.includes.push(fileName)
                    }
                } else {
                    this.lines.push({"include": element, "line": line});
                }
            } else {
                skip = false;
            }
        }
        return includes
    }

    public getSections = () => {
        this.sections = {"CEND": null, "BEGIN_BULK": null}
        if (this.includes.length > 0) {
            for (const [index, value] of this.lines.entries()) {
                if (Object.values(this.sections).every(x => x !== null)) {
                    break
                }
                if (this.sections["CEND"] === null) {
                    if (value["line"].toUpperCase().startsWith("CEND")) {
                        this.sections["CEND"] = index
                    }
                }
                if (this.sections["BEGIN_BULK"] === null) {
                    if (value["line"].toUpperCase().startsWith("BEGIN BULK")) {
                        this.sections["BEGIN_BULK"] = index
                    }
                }
            }
        }
    }

    private _onDidChangeTreeData: vscode.EventEmitter<IncludeFile | undefined | null | void> = new vscode.EventEmitter<IncludeFile | undefined | null | void>();
    readonly onDidChangeTreeData: vscode.Event<IncludeFile | undefined | null | void> = this._onDidChangeTreeData.event;
  
    refresh(): void {
      this.includes = [];
      this.getIncludes(vscode.window.activeTextEditor.document.fileName)
      this._onDidChangeTreeData.fire();
      this.getSections();
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