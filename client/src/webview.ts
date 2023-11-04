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
    const tweakpane = vscode.Uri.file(context.extensionPath+"/node_modules/tweakpane/dist/tweakpane.js");
    const tweakpaneUri = panel.webview.asWebviewUri(tweakpane)
    const tweakpanep = vscode.Uri.file(context.extensionPath+"/node_modules/@tweakpane/plugin-essentials/dist/tweakpane-plugin-essentials.js")
    const tweakpanepUri = panel.webview.asWebviewUri(tweakpanep)
    const stats = vscode.Uri.file(context.extensionPath+"/node_modules/three/examples/jsm/libs/stats.module.js")
    const statsUri = panel.webview.asWebviewUri(stats)
    // const path = vscode.Uri.file(context.extensionPath+'/node_modules/@types/node/path.d.ts');
    // const pathUri = panel.webview.asWebviewUri(path);
    const femload = fs.readFileSync(context.extensionPath+"/client/src/femload.js").toString()
    const femview = fs.readFileSync(context.extensionPath+"/client/src/femview.js").toString()
    return `
    <!DOCTYPE html>
    <html>
        <head lang="en">
            <meta charset="utf-8">
            <title>My first three.js app</title>
            <style>
                body {
                    margin: 0;
                    background: var(--vscode-editor-background);
                }
                * {
                    font-family: var(--vscode-editor-font-family);
                    // font-size: var(--vscode-editor-font-size);
                }
                .tp-rotv_t {
                    font-weight: bold;
                }
            </style>
            <script type="importmap">
                {
                    "imports": {
                        "three": "${threejsUri}",
                        "TrackballControls": "${trackballUri}",
                        "tweakpane": "${tweakpaneUri}",
                        "@tweakpane": "${tweakpanepUri}",
                        "stats": "${statsUri}"
                    }
                }
            </script>
        </head>
        <body>
            <script>
                var modelContent=${JSON.stringify(content)}
            </script>
            <script type="module">
                ${femload}
                ${femview}
            </script>
        </body>
    </html>
    `
}