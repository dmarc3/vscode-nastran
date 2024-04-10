import * as path from "path";
import * as vscode from "vscode";
import { getIncludeFilename } from "./treeview";

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
        // Get current include file path
        const filepath = getIncludeFilename(filename, vscode.window.activeTextEditor.document.fileName)
        let uri = vscode.Uri.file(filepath)
        // Open file
        vscode.window.showTextDocument(uri)
    } else {
        vscode.window.showErrorMessage("Unable to open include file!")
    }

}