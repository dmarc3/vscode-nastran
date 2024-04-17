import * as vscode from "vscode";

export async function setComment(context, title, variable) {
    var comment = await vscode.window.showInputBox({ignoreFocusOut:true, title:`${title}`})
    if (comment == "") {
        comment = undefined
    }
    await context.globalState.update(`${variable}`, comment)
}

export function insertComment(context, key) {
    let editor = vscode.window.activeTextEditor
    var text = context.globalState.get(key)
    if (text == undefined) {
        if (key === "short_comment") {
            text = '$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$\n';
        } else {
            text = '$---1---$-------2-------$-------3-------$-------4-------$-------5-------$---6---$\n'
        }
    } else {
        text += "\n"
    }
    if (editor) {
        // Edit selection to front of current line
        var selection = editor.selection.active
        selection['e'] = 0
        // Insert text
        editor.edit(editBuilder => {
            editBuilder.insert(
                selection,
                text
            );
        });
    }
}
