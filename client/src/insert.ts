export function insertComment(editor, text) {
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
