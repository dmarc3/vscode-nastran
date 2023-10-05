import * as vscode from "vscode";
import * as path from "path";
// import * as cp from "child_process";

export function executeNastran(rundeck, context) {
    if (path.extname(rundeck) !== '.f06') {
    var keywords = context.globalState.get('keywords')
    if (keywords == undefined) {
        keywords = ""
    }
    vscode.window.activeTerminal.sendText(`nastran ${rundeck} ${keywords}`)
    }
}

export async function setKeywords(context) {
    var keywords = await vscode.window.showInputBox({ignoreFocusOut:true, title:"Enter Nastran keywords:"})
    if (keywords == "") {
        keywords = undefined
    }
    await context.globalState.update('keywords', keywords)
}

export function showKeywords(context) {
    var keywords = context.globalState.get('keywords')
    if (keywords == undefined) {
        vscode.window.showInformationMessage(`No execution keywords set.`)
    } else {
        vscode.window.showInformationMessage(`Current execution keywords: ${keywords}`)
    }
}
