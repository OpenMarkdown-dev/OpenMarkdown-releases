# MarkdownEditor

A mounted editor (`mountEditor`): the CodeMirror view plus the operations a
host needs. Call `destroy` when the editor leaves the page.

## Properties

### view

> **view**: `EditorView`

The underlying CodeMirror view — the escape hatch for anything not covered here.

## Methods

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

### getDoc()

> **getDoc**(): `string`

The current Markdown source, byte for byte what is being edited.

#### Returns

`string`

***

### mode()

> **mode**(): [`EditorMode`](/editor/docs/api/type-aliases/editormode/)

The shown state's mode (it travels with the state).

#### Returns

[`EditorMode`](/editor/docs/api/type-aliases/editormode/)

***

### refreshImages()

> **refreshImages**(): `void`

Ask the host's `resolveImage` again for every image, after its answer
changed (the reader allowed remote images, say). An image that resolved to
null showed its source; it now shows the picture if the new answer is a URL.

#### Returns

`void`

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
