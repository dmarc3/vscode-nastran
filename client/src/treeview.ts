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
            } else {
                const origin = vscode.window.activeTextEditor.document.fileName
                return Promise.resolve([new IncludeFile(path.basename(origin), vscode.TreeItemCollapsibleState.Expanded, origin)]);
            }
        }
    }

    private hasIncludes(fileName: string): boolean {
        // Read lines from file
        const lines = fs.readFileSync(fileName).toString().split("\n");
        var state = false;
        // For each line in file...
        for (const line of lines) {
            // Save include file and line pair
            this.lines.push({"include": fileName, "line": line})
            // If include file detected, set return variable to true
            if (line.toLowerCase().startsWith('incl')) {
                state = true;
            }
        }
        return state
    }

    private getIncludes(element: string): IncludeFile[] {
        // Read lines from file
        const lines = fs.readFileSync(element).toString().split("\n");
        // Add origin file to class includes variable
        this.includes.push(element)
        // Preallocate variables
        this.lines = []
        var includes = []
        var skip = false
        // For each line in origin file...
        for (var [index, line] of lines.entries()) {
            if (!skip) {
                // If line starts with INCL
                if (line.toLowerCase().startsWith('incl')) {
                    if (line.includes("'")) { // Calculate filename if ' used
                        var line_split = line.split("'")
                        if (line_split.length < 3) {
                            var file = (line + lines[index+1]).split("'")[1]
                        } else {
                            var file = line_split[1]
                        }
                    } else if (line.includes('"')) { // Calculate filename if " used
                        var line_split = line.split('"')
                        if (line_split.length < 3) {
                            var file = (line + lines[index+1]).split('"')[1]
                        } else {
                            var file = line_split[1]
                        }
                    }  else if (line.includes('`')) { // Calculate filename if ` used
                        var line_split = line.split('`')
                        if (line_split.length < 3) {
                            var file = (line + lines[index+1]).split('`')[1]
                        } else {
                            var file = line_split[1]
                        }
                    }
                    // Get current include file path relative to origin file
                    const fileName = path.join(path.dirname(element), file)
                    // If the include file exists...
                    if (fs.existsSync(fileName)) {
                        // Save include file and line pair
                        this.lines.push({"include": element, "line": line});
                        // If include statement spans multiple lines, save next line too
                        if (line_split.length < 3) {
                            this.lines.push({"include": element, "line": lines[index+1]})
                            skip = true;
                        }
                        // If file has include files, set collapsibleState to expanded to trigger getChildren on that item
                        if (this.hasIncludes(fileName)) {
                            includes.push(new IncludeFile(file, vscode.TreeItemCollapsibleState.Expanded, fileName))
                            this.includes.push(fileName)
                        } else {
                            includes.push(new IncludeFile(file, vscode.TreeItemCollapsibleState.None, fileName))
                            this.includes.push(fileName)
                        }
                    // Else add missing items...
                    } else {
                        this.lines.push({"include": element, "line": line});
                        if (line_split.length < 3) {
                            this.lines.push({"include": element, "line": lines[index+1]})
                        }
                        includes.push(new MissIncludeFile(file, vscode.TreeItemCollapsibleState.None, fileName))
                        this.includes.push(fileName)
                    }
                } else {
                    // Save include file and line pair
                    this.lines.push({"include": element, "line": line});
                }
            } else {
                skip = false;
            }
        }
        return includes
    }

    public getSections = () => {
        // Preallocate section object
        this.sections = {"CEND": null, "BEGIN_BULK": null}
        // If non-zero include files exist... TODO: is this needed?
        if (this.includes.length > 0) {
            // For each line in total include / lines class variable...
            for (const [index, value] of this.lines.entries()) {
                // If both CEND and BEGIN BULK found, exit
                if (Object.values(this.sections).every(x => x !== null)) {
                    break
                }
                // If CEND line found, save global index
                if (this.sections["CEND"] === null) {
                    if (value["line"].toUpperCase().startsWith("CEND")) {
                        this.sections["CEND"] = index
                    }
                }
                // If BEGIN BULK found, save global index
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