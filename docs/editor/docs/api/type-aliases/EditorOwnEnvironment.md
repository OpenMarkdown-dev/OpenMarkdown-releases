# EditorOwnEnvironment

> **EditorOwnEnvironment** = `Omit`\<[`EditorEnvironment`](/editor/docs/api/interfaces/editorenvironment/), `"language"`\>

One editor's environment (`createEditorState({ environment })`,
`editor.setEnvironment`): any `EditorEnvironment` member but the page-wide
`language`. A member given here replaces the page's for this editor — given
as `undefined`, it switches the page's off; left out, the page's applies.
