import * as vscode from "vscode";

export function initializeWebview(context: vscode.ExtensionContext) {
    // Create and show panel
    const panel = vscode.window.createWebviewPanel(
        "femView",
        "FEM View",
        vscode.ViewColumn.Two,
        {}
    );
    // Set HTML Content
    panel.webview.html = getWebviewContent(context, panel)
    // Return panel for command registration
    return panel;
}

function getWebviewContent(context: vscode.ExtensionContext, panel: vscode.WebviewPanel) {
    // const threejs = vscode.Uri.file(context.extensionPath+"node_modules/three/build/three.js");
    // const threejsUri = panel.webview.asWebviewUri(threejs)
    const femview = vscode.Uri.file(context.extensionPath+"client/src/fem_view.js");
    const femviewUri = panel.webview.asWebviewUri(femview)
    return `
    <!DOCTYPE html>
    <html>
        <head lang="en">
            <meta charset="utf-8">
            <title>My first three.js app</title>
            <style>
                body { margin: 0; }
            </style>
        </head>
        <body>
            ${vscode.window.activeTextEditor.document.fileName}
            <script type="module" src="${femviewUri}"></script>
        </body>
    </html>
    `
    // return `<!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Cat Coding</title>
    // </head>
    // <body>
    //     <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
    // </body>
    // </html>`
}