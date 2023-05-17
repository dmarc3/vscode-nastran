import * as path from "path";
import * as fs from 'fs';
import * as vscode from "vscode";

export async function executeFind(includes) {
    // Get selected text
    var editor = vscode.window.activeTextEditor;
    const selection = editor.document.getText(editor.selection)
    // If text not selected, ask user to type text
    var str = ""
    if (!selection) {str = await getUserInput()} else {str = editor.document.getText(editor.selection)}
    // Find occurences of text
    const found = find(str, includes)
    // Process WebView
    if (found){
        const uri = await createFindFile(str, found)
        vscode.commands.executeCommand("vscode.open", uri)
    }
}

async function getUserInput() {
    return await vscode.window.showInputBox({ignoreFocusOut:true, title:"Enter text to search Include Hierarchy for:"})
}

export function find(str, includes) {
    var found = {}
    var origin = ""
    // Read each include file
    for (const [ind, include] of includes.entries()) {
        if (ind===0) {
            origin = vscode.window.activeTextEditor.document.fileName;
            var lines = fs.readFileSync(origin).toString().split("\n")
        } else {
            var filename = path.join(path.dirname(origin), include);
            var lines = fs.readFileSync(filename).toString().split("\n")
        }
        // Loop through each line in file
        for (const [lineno, line] of lines.entries()) {
            // Test if string found
            if (line.includes(str)) {
                if (!(include in found)) {
                    found[include] = []
                }
                found[include].push([line, lineno])
            } 
        }
    }
    return found
}

function createFindFile(str, found) {
    const filename = path.join(path.dirname(vscode.window.activeTextEditor.document.fileName), "find.dat")
    // Delete file if it exists
    fs.rmSync(filename, {
        force: true,
    });
    // Build string
    var text = `$\n$ Find ${str} in Include Hierarchy for ${path.basename(vscode.window.activeTextEditor.document.fileName)}\n$\n`
    // text += '$'+'-'.repeat(108)+'$\n'
    for (let include in found) {
        console.log(`Processing ${include}`)
        for (var entry in found[include]) {
            text += `${found[include][entry][0].padEnd(108)} $ Go to ${"file:///"+path.join(path.dirname(vscode.window.activeTextEditor.document.fileName), include)+"#"+String(found[include][entry][1]+1)}\n`
            // text += '$'+'-'.repeat(108)+'$\n'
        }
    }
    // Write file
    fs.writeFileSync(filename, text, "utf-8")
    return vscode.Uri.file(filename)
}
