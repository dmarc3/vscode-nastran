import * as path from "path";

export function insertComment(editor, text) {
    if (editor) {
        if (path.extname(editor.document.fileName) !== '.f06') {
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
}
