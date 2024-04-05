import * as path from "path";
import * as vscode from "vscode";

export function openFile(lineno, lines) {
    // Get current line
    const line = lines[lineno]
    // Line must start with INCL
    if (line.toLowerCase().startsWith('incl')) {
        // Get include file name
        const quotes = ["'", '"', "`"]
        for (var quote of quotes) {
            if (line.includes(quote)) {
                var line_split = line.split(quote)
                if (line_split.length < 3) {
                    var filename = (line.trim() + lines[lineno+1].trim()).split(quote)[1]
                } else {
                    var filename = line_split[1]
                }
                break
            }
        }
        // Get current include file path relative to origin file
        const filepath = path.join(path.dirname(vscode.window.activeTextEditor.document.uri.toString()), filename)
        const openpath = vscode.Uri.parse(filepath)
        // Open file
        vscode.window.showTextDocument(openpath)
    } else {
        vscode.window.showErrorMessage("Unable to open include file!")
    }

}