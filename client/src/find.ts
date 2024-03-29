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
        const uri = await createFindFile(str, found, includes)
        vscode.commands.executeCommand("vscode.open", uri)
    }
}

async function getUserInput() {
    return await vscode.window.showInputBox({ignoreFocusOut:true, title:"Enter text to search Include Hierarchy for:"})
}

export function find(str, includes) {
    var found = {}
    // Read each include file
    for (const [ind, include] of includes.entries()) {
        var lines = fs.readFileSync(include).toString().split("\n")
        // Loop through each line in file
        for (const [lineno, line] of lines.entries()) {
            // Test if string found
            if (line.includes(str)) {
                if (!(include in found)) {
                    found[include] = []
                }
                found[include].push([line.replace(/[\n\r]+/g, ''), lineno])
            } 
        }
    }
    return found
}

function createFindFile(str, found, includes) {
    const filename = path.join(path.dirname(includes[0]), `find_${str}.dat`)
    // Delete file if it exists
    fs.rmSync(filename, {
        force: true,
    });
    // Build string
    var text = `$\n$ Find ${str} in Include Hierarchy for ${path.basename(includes[0])}\n$\n`
    // text += '$'+'-'.repeat(108)+'$\n'
    for (let include in found) {
        console.log(`Processing ${include}`)
        for (var entry in found[include]) {
            text += `${found[include][entry][0].padEnd(108)} $ Go to ${"file:///"+include+"#"+String(found[include][entry][1]+1)}\n`
            // text += '$'+'-'.repeat(108)+'$\n'
        }
    }
    // Write file
    fs.writeFileSync(filename, text, "utf-8")
    return vscode.Uri.file(filename)
}
