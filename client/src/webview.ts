import * as vscode from "vscode";

export function initializeWebview(context: vscode.ExtensionContext) {
    // Create and show panel
    const panel = vscode.window.createWebviewPanel(
        "femView",
        "FEM View",
        vscode.ViewColumn.Two,
        {enableScripts: true}
    );
    // Set HTML Content
    panel.webview.html = getWebviewContent(context, panel)
    // Return panel for command registration
    return panel;
}

function getWebviewContent(context: vscode.ExtensionContext, panel: vscode.WebviewPanel) {
    const threejs = vscode.Uri.file(context.extensionPath+"/node_modules/three/build/three.js");
    const threejsUri = panel.webview.asWebviewUri(threejs)
    const femview = vscode.Uri.file(context.extensionPath+"/client/src/fem_view.js");
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
            <script src="${threejsUri}"></script>
            <script src="${femviewUri}"></script>
        </body>
    </html>
    `
}