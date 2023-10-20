import * as path from "path";
import * as fs from 'fs';
import * as vscode from "vscode";

export class TreeDataProvider implements vscode.TreeDataProvider<IncludeFile> {
    public includes: string[];
    public sections: object;
    constructor() {
        this.includes = [];
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
        for (var line of lines) {
            if (line.toLowerCase().includes('include')) {
                return true
            }
        }
        return false
    }

    private getIncludes(element: string): IncludeFile[] {
        const lines = fs.readFileSync(element).toString().split("\n");
        this.includes = [element]
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
                    const fileName = path.join(path.dirname(element), line)
                    if (fs.existsSync(fileName)) {
                        if (this.hasIncludes(fileName)) {
                            includes.push(new IncludeFile(line, vscode.TreeItemCollapsibleState.Expanded, fileName))
                            this.includes.push(fileName)
                        } else {
                            includes.push(new IncludeFile(line, vscode.TreeItemCollapsibleState.None, fileName))
                            this.includes.push(fileName)
                        }
                    } else {
                        includes.push(new MissIncludeFile(line, vscode.TreeItemCollapsibleState.None, fileName))
                        this.includes.push(fileName)
                    }
                }
            }
        }
        return includes
    }

    public getSections = () => {
        this.sections = {"ID": null, "CEND": null, "BEGIN_BULK": null}
        if (this.includes.length > 0) {
            var include_no = 0
            while (Object.values(this.sections).some(x => x === null)) {
                if (this.includes[include_no] === vscode.window.activeTextEditor.document.fileName) {
                    var lines = vscode.window.activeTextEditor.document.getText().toString().split("\n");
                } else {
                    var lines = fs.readFileSync(this.includes[include_no]).toString().split("\n");
                }
                for (const [line_no, line] of lines.entries()) {
                    if (this.sections["ID"] === null) {
                        if (line.toUpperCase().startsWith("ID")) {
                            this.sections["ID"] = [include_no, line_no]
                        }
                    }
                    if (this.sections["CEND"] === null) {
                        if (line.toUpperCase().startsWith("CEND")) {
                            this.sections["CEND"] = [include_no, line_no]
                        }
                    }
                    if (this.sections["BEGIN_BULK"] === null) {
                        if (line.toUpperCase().startsWith("BEGIN BULK")) {
                            this.sections["BEGIN_BULK"] = [include_no, line_no]
                        }
                    }
                }
                include_no += 1;
                if (include_no === this.includes.length) {
                    break
                }
            }
        }
    }

    private _onDidChangeTreeData: vscode.EventEmitter<IncludeFile | undefined | null | void> = new vscode.EventEmitter<IncludeFile | undefined | null | void>();
    readonly onDidChangeTreeData: vscode.Event<IncludeFile | undefined | null | void> = this._onDidChangeTreeData.event;
  
    refresh(): void {
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