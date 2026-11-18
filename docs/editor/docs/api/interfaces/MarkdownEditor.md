# MarkdownEditor

A mounted editor (`mountEditor`): the CodeMirror view plus the operations a
host needs. Call `destroy` when the editor leaves the page.

## Properties

### view

> **view**: `EditorView`

The underlying CodeMirror view — the escape hatch for anything not covered here.

## Methods

### closeSearch()

> **closeSearch**(): `void`

Close the find panel and give the keys back to the text.

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Tear the view down and drop the color-scheme subscription.

#### Returns

`void`

***

### docPath()

> **docPath**(): `string` \| `null`

The shown state's document path, or null for an unsaved document (it travels with the state).

#### Returns

`string` \| `null`

***

### editable()

> **editable**(): `boolean`

Whether the user may change the document (it travels with the state).

#### Returns

`boolean`

***

### focus()

> **focus**(): `void`

Give the editor the keyboard focus.

#### Returns

`void`

***

### getDoc()

> **getDoc**(): `string`

The current Markdown source, byte for byte what is being edited.

#### Returns

`string`

***

### isSearchOpen()

> **isSearchOpen**(): `boolean`

Is the find panel open?

#### Returns

`boolean`

***

### isUnedited()

> **isUnedited**(`file`): `boolean`

Is the document unchanged from `file` (what `openMarkdownFile` or
`openMarkdownText` returned)? The same test `saveMarkdownFile` uses to
return the original bytes: for an unsaved-changes indicator.

#### Parameters

##### file

###### text

`string`

#### Returns

`boolean`

***

### mode()

> **mode**(): [`EditorMode`](/editor/docs/api/type-aliases/editormode/)

The shown state's mode (it travels with the state).

#### Returns

[`EditorMode`](/editor/docs/api/type-aliases/editormode/)

***

### openSearch()

> **openSearch**(): `void`

Open the find panel and focus its field, as Mod+F does. It works in every mode.

#### Returns

`void`

***

### redo()

> **redo**(): `boolean`

Redo the last undone change, as Mod+Shift+Z does. Returns false when there was nothing to redo.

#### Returns

`boolean`

***

### refreshImages()

> **refreshImages**(): `void`

Ask the host's `resolveImage` again for every image, after its answer
changed (the reader allowed remote images, say). An image that resolved to
null showed its source; it now shows the picture if the new answer is a URL.

#### Returns

`void`

***

### revealText()

> **revealText**(`text`): `boolean`

Select the first occurrence of `text` (from the start of the document)
and scroll it into view, the way Find shows its current match — a match
in a table cell scrolls that cell in. The editor is not focused (call
`focus`). Returns false, and moves nothing, when `text` is empty or not in
the document.

#### Parameters

##### text

`string`

#### Returns

`boolean`

***

### setDoc()

> **setDoc**(`doc`): `void`

Make `doc` the document, for example after the file changed on disk. Only
the range that differs is replaced, so the scroll position, selection and
folds outside it stay where they were (an agent appending a line does not
move the reader). The same text does nothing. Not an undo step, and not a
user edit: `onChange` reports it with `isUserEdit` false.

#### Parameters

##### doc

`string`

#### Returns

`void`

***

### setDocPath()

> **setDocPath**(`path`): `void`

The shown state's document moved (rename) or was given a path (empty state → note).

#### Parameters

##### path

`string` \| `null`

#### Returns

`void`

***

### setEditable()

> **setEditable**(`editable`): `void`

Allow or forbid changing the document (`EditorStateOptions.editable`); document, selection and history are kept.

#### Parameters

##### editable

`boolean`

#### Returns

`void`

***

### setEnvironment()

> **setEnvironment**(`environment`): `void`

Replace this editor's own environment (`EditorStateOptions.environment`):
the members given override the page's defaults from now on, a new color
scheme applies at once. It travels with the state.

#### Parameters

##### environment

[`EditorOwnEnvironment`](/editor/docs/api/type-aliases/editorownenvironment/)

#### Returns

`void`

***

### setMode()

> **setMode**(`mode`): `void`

Switch between live preview, source and reading mode; document, selection and history are kept.

#### Parameters

##### mode

[`EditorMode`](/editor/docs/api/type-aliases/editormode/)

#### Returns

`void`

***

### syncAmbient()

> **syncAmbient**(): `void`

After swapping a state in (`editor.view.setState(state)`): bring what is the
window's, not the document's — the light / dark half of CodeMirror's base
theme — in line with now. A parked state kept the value it had when it left.

#### Returns

`void`

***

### undo()

> **undo**(): `boolean`

Undo the last change, as Mod+Z does. Returns false when there was nothing to undo (or the editor is not editable).

#### Returns

`boolean`
