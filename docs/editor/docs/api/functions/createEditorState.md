# createEditorState

> **createEditorState**(`options`): `EditorState`

Build an editor state: the document, caret, undo history, folds and mode,
with the whole editor (live preview, structure keys, find, folding, tables,
math, diagrams) installed. Show it with `mountEditor`; a host with several
documents keeps one state per document and swaps them into one view
(`editor.view.setState(state)`, then `editor.syncAmbient()`).

## Parameters

### options

[`EditorStateOptions`](/editor/docs/api/interfaces/editorstateoptions/)

## Returns

`EditorState`
