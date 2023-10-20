import * as vscode from "vscode";
import * as fs from 'fs';

export function initializeWebview(context: vscode.ExtensionContext, includes: string[]) {
    // Create and show panel
    const panel = vscode.window.createWebviewPanel(
        "femView",
        "FEM View",
        vscode.ViewColumn.Two,
        {enableScripts: true}
    );
    // Read FEM
    const content = readFEM(includes)
    // Set HTML Content
    panel.webview.html = getWebviewContent(context, panel, content)
    // Return panel for command registration
    return panel;
}

function readFEM(includes: string[]) {
    var lines = {}
    for (var include of includes) {
        // lines = lines.concat(fs.readFileSync(include).toString().split("\n"))
        lines[include] = fs.readFileSync(include).toString().split("\n")
    }
    return lines
}

function getWebviewContent(context: vscode.ExtensionContext, panel: vscode.WebviewPanel, content: object) {
    const trackball = vscode.Uri.file(context.extensionPath+"/node_modules/three/examples/jsm/controls/TrackballControls.js");
    const trackballUri = panel.webview.asWebviewUri(trackball)
    const threejs = vscode.Uri.file(context.extensionPath+"/node_modules/three/build/three.module.js");
    const threejsUri = panel.webview.asWebviewUri(threejs)
    // const femview = vscode.Uri.file(context.extensionPath+"/client/src/fem_view.js");
    // const femviewUri = panel.webview.asWebviewUri(femview)
    const javascript = fs.readFileSync(context.extensionPath+"/client/src/femview.js").toString()
    return `
    <!DOCTYPE html>
    <html>
        <head lang="en">
            <meta charset="utf-8">
            <title>My first three.js app</title>
            <style>
                body { margin: 0; }
            </style>
            <script type="importmap">
                {
                    "imports": {
                        "three": "${threejsUri}",
                        "TrackballControls": "${trackballUri}"
                    }
                }
            </script>
        </head>
        <body>
            <script>
                var modelContent=${JSON.stringify(content)}
            </script>
            <script type="module">
                ${javascript}
            </script>
        </body>
    </html>
    `
//     <script>
//     import { OrbitControls } from "${orbitUri}";
// </script>
}