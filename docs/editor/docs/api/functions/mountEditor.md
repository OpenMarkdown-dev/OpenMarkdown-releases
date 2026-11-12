# mountEditor

> **mountEditor**(`parent`, `state`): [`MarkdownEditor`](/editor/docs/api/interfaces/markdowneditor/)

Mount `state` (from `createEditorState`) in a new editor view appended to
`parent`, following the environment's color scheme while it lives. Returns
the editor handle; call its `destroy` when done.

## Parameters

### parent

`HTMLElement`

### state

`EditorState`

## Returns

[`MarkdownEditor`](/editor/docs/api/interfaces/markdowneditor/)
