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
    // Set Icon
    panel.iconPath = vscode.Uri.joinPath(context.extensionUri, 'resources', 'dark', 'mesh.png');
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
    const threejs = vscode.Uri.file(context.extensionPath+"/node_modules/three/build/three.module.js");
    const threejsUri = panel.webview.asWebviewUri(threejs)
    const trackball = vscode.Uri.file(context.extensionPath+"/node_modules/three/examples/jsm/controls/TrackballControls.js");
    const trackballUri = panel.webview.asWebviewUri(trackball)
    const orbit = vscode.Uri.file(context.extensionPath+"/node_modules/three/examples/jsm/controls/OrbitControls.js");
    const orbitUri = panel.webview.asWebviewUri(orbit)
    const font = vscode.Uri.file(context.extensionPath+"/node_modules/three/examples/jsm/loaders/FontLoader.js");
    const fontUri = panel.webview.asWebviewUri(font)
    const fontPath = vscode.Uri.file(context.extensionPath+"/node_modules/three/examples/fonts/helvetiker_regular.typeface.json");
    const fontPathUri = panel.webview.asWebviewUri(fontPath)
    const textGeom = vscode.Uri.file(context.extensionPath+"/node_modules/three/examples/jsm/geometries/TextGeometry.js");
    const textGeomUri = panel.webview.asWebviewUri(textGeom)
    const chai = vscode.Uri.file(context.extensionPath+'/node_modules/chai/chai.js');
    const chaiUri = panel.webview.asWebviewUri(chai);
    // const assert = vscode.Uri.file(context.extensionPath+'/node_modules/chai-asserttype/asserttype.js');
    // const assertUri = panel.webview.asWebviewUri(assert);
    // const viewhelper = vscode.Uri.file(context.extensionPath+"/node_modules/three/examples/jsm/helpers/ViewHelper.js");
    // const viewhelperUri = panel.webview.asWebviewUri(viewhelper)
    const viewhelper = vscode.Uri.file(context.extensionPath+"/client/src/ViewHelper.js");
    const viewhelperUri = panel.webview.asWebviewUri(viewhelper)
    const femload = vscode.Uri.file(context.extensionPath+"/client/src/femload.mjs");
    const femloadUri = panel.webview.asWebviewUri(femload)
    const tweakpane = vscode.Uri.file(context.extensionPath+"/node_modules/tweakpane/dist/tweakpane.js");
    const tweakpaneUri = panel.webview.asWebviewUri(tweakpane)
    const tweakpanep = vscode.Uri.file(context.extensionPath+"/node_modules/@tweakpane/plugin-essentials/dist/tweakpane-plugin-essentials.js")
    const tweakpanepUri = panel.webview.asWebviewUri(tweakpanep)
    const stats = vscode.Uri.file(context.extensionPath+"/node_modules/three/examples/jsm/libs/stats.module.js")
    const statsUri = panel.webview.asWebviewUri(stats)
    // const path = vscode.Uri.file(context.extensionPath+'/node_modules/@types/node/path.d.ts');
    // const pathUri = panel.webview.asWebviewUri(path);
    // const femload = fs.readFileSync(context.extensionPath+"/client/src/femload.js").toString()
    const femview = fs.readFileSync(context.extensionPath+"/client/src/femview.mjs").toString()
    return `
    <!DOCTYPE html>
    <html>
        <head lang="en">
            <meta charset="utf-8">
            <title>My first three.js app</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    display: block;
                    overflow: hidden;
                    background: var(--vscode-editor-background);
                }
                * {
                    font-family: var(--vscode-editor-font-family);
                    // font-size: var(--vscode-editor-font-size);
                }
                .error {
                    position: absolute;
                    top: 50%;
                    width: 100%;
                    text-align: center;
                    font-family: var(--vscode-editor-font-family);
                    font-size: var(--vscode-editor-font-size);
                    white-space: pre;
                }
                .error_text {
                    position: absolute;
                    top: 90%;
                    right: 20%;
                    width: 60%;
                    text-align: left;
                    font-family: var(--vscode-editor-font-family);
                    font-size: var(--vscode-editor-font-size);
                    text-wrap: wrap;
                }
                .tp-rotv_t {
                    font-weight: bold;
                }
                :root {
                    --tp-base-background-color: var(--vscode-menubar-selectionBackground);
                    --tp-button-background-color: var(--vscode-menubar-selectionForeground);
                    --tp-button-background-color-active: var(--vscode-menubar-selectionBackground);
                    --tp-button-background-color-focus: var(--vscode-menubar-selectionForeground);
                    --tp-button-background-color-hover: var(--vscode-menubar-selectionForeground);
                    --tp-button-foreground-color: var(--vscode-titleBar-activeBackground);
                    --tp-container-background-color: var(--vscode-titleBar-inactiveBackground);
                    --tp-container-background-color-active: var(--vscode-titleBar-activeBackground);
                    --tp-container-background-color-focus: var(--vscode-menubar-selectionBackground);
                    --tp-container-background-color-hover: var(--vscode-menubar-selectionBackground);
                    --tp-container-foreground-color: var(--vscode-menubar-selectionForeground);
                    --tp-label-foreground-color: var(--vscode-menubar-selectionForeground);
                    --tp-input-background-color: var(--vscode-editor-background);
                    --tp-input-background-color-active: var(--vscode-editor-background);
                    --tp-input-background-color-focus: var(--vscode-menubar-selectionBackground);
                    --tp-input-background-color-hover: var(--vscode-menubar-selectionBackground);
                    --tp-input-foreground-color: var(--vscode-menubar-selectionForeground);
                }
            </style>
            <script type="importmap">
                {
                    "imports": {
                        "three": "${threejsUri}",
                        // "TrackballControls": "${trackballUri}",
                        "OrbitControls": "${orbitUri}",
                        "FontLoader": "${fontUri}",
                        "TextGeometry": "${textGeomUri}",
                        "ViewHelper": "${viewhelperUri}",
                        "tweakpane": "${tweakpaneUri}",
                        "@tweakpane": "${tweakpanepUri}",
                        "stats": "${statsUri}",
                        "chai": "${chaiUri}",
                        "femload.mjs": "${femloadUri}"
                    }
                }
            </script>
        </head>
        <body>
            <script>
                var modelContent=${JSON.stringify(content)};
            </script>
            <script>
                const fontPath="${fontPathUri}";
            </script>
            <script type="module">
                ${femview}
            </script>
            <div class=error id=error></div>
            <p class=error_text id=error_text></p>
            </body>
    </html>
    `
}
