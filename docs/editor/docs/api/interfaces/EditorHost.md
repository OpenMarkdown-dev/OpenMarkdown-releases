# EditorHost

What the editor calls back into, per document: pass it as `host` to
`createEditorState`. The editor reads each member through the object when it
needs it, so you can change the object later without rebuilding the state.

Every member is optional: a capability the host does not provide is switched
off quietly (no error, no notice) and the rest of the editor carries on.
Window-wide capabilities live in the editor environment
(`configureEditorEnvironment`).

## Properties

### getFolder?

> `optional` **getFolder?**: () => `string` \| `null`

The root folder of the user's files, for link-target completion. A getter,
read each time completion opens. Null, or absent: completion uses the
document's own directory.

#### Returns

`string` \| `null`

***

### listFiles?

> `optional` **listFiles?**: (`root`) => `Promise`\<`string`[]\>

The linkable files under `root`, as root-relative paths (link-target
completion). Absent: file completion offers nothing; heading completion is
unaffected.

#### Parameters

##### root

`string`

#### Returns

`Promise`\<`string`[]\>

***

### onChange?

> `optional` **onChange?**: (`doc`, `isUserEdit`, `docPath`) => `void`

The document changed; `doc` is the whole new source. `isUserEdit` is true for
typing, pasting and other user actions, false for programmatic changes
(`setDoc`). `docPath` is the document the change happened in, so a host that
swaps documents can drop a change for one that is no longer shown.

#### Parameters

##### doc

`string`

##### isUserEdit

`boolean`

##### docPath

`string` \| `null`

#### Returns

`void`

***

### onMoved?

> `optional` **onMoved?**: () => `void`

The selection, scroll position or document moved (debounced); use it to remember the position.

#### Returns

`void`

***

### onOutline?

> `optional` **onOutline?**: (`outline`) => `void`

The heading outline changed; null when the view is going away (clear yours).

#### Parameters

##### outline

`Heading`[] \| `null`

#### Returns

`void`

***

### onUnsupportedPaste?

> `optional` **onUnsupportedPaste?**: (`reason`, `count`) => `void`

Images were pasted or dropped but could not be stored, so nothing was
inserted: `reason` is `"no-save-attachment"` (neither `saveAttachment`
nor `uploadImage`) or `"no-doc-path"` (only `saveAttachment`, and the
document has no path to store them beside); `count` is how many images.
Only a notice — the editor itself stays silent and the document is
unchanged. Use it to tell the user. Absent: nothing happens.

#### Parameters

##### reason

`"no-save-attachment"` \| `"no-doc-path"`

##### count

`number`

#### Returns

`void`

***

### openLink?

> `optional` **openLink?**: (`absPath`, `fragment`) => `void`

A link to a local file was followed (Cmd/Ctrl+click; a plain click in reading
mode): `absPath` is the target resolved against the document's directory, and
`fragment` its decoded `#fragment` without the `#` (`other.md#setup` →
`"setup"`), or null. The host decides whether the file exists, how to open it
and whether to go to the fragment. Absent: local links do nothing.

#### Parameters

##### absPath

`string`

##### fragment

`string` \| `null`

#### Returns

`void`

***

### resolveImage?

> `optional` **resolveImage?**: (`src`) => `string` \| `null`

Map an image target as written (`![](src)`) to a URL the page may load, or
null to show the source instead. Script-capable URLs are dropped whatever
this returns. Absent: only absolute `https:` images load. It may be called
more than once for the same image, so keep it free of side effects; when its
answer changes, call `editor.refreshImages()`.

#### Parameters

##### src

`string`

#### Returns

`string` \| `null`

***

### saveAttachment?

> `optional` **saveAttachment?**: (`docPath`, `bytes`, `hint`) => `Promise`\<`string` \| `null`\>

Store pasted / dropped image bytes beside `docPath`. `hint` is the file's
name, or its MIME type. Resolves the document-relative path to link, or null
when the save failed (report it yourself); then the editor inserts nothing.
Only called when the document has a path (for one without, see
`uploadImage`). Absent: image paste / drop stores nothing and inserts
nothing, unless `uploadImage` is given.

#### Parameters

##### docPath

`string`

##### bytes

`Uint8Array`

##### hint

`string` \| `null`

#### Returns

`Promise`\<`string` \| `null`\>

***

### uploadImage?

> `optional` **uploadImage?**: (`bytes`, `hint`) => `Promise`\<`string` \| `null`\>

Store pasted / dropped image bytes wherever the host keeps images (an upload
endpoint, a CMS media library), for a document with or without a path.
`hint` is the file's name, or its MIME type. Resolves the link target to
write — any URL or path `resolveImage` will accept, valid as a Markdown link
target (percent-encode spaces) — or null when the upload failed (report it
yourself); then the editor inserts nothing. When the document has a path
and `saveAttachment` is given too, `saveAttachment` is used instead.
Absent (and no `saveAttachment` for a document with a path): image paste /
drop stores nothing and inserts nothing.

#### Parameters

##### bytes

`Uint8Array`

##### hint

`string` \| `null`

#### Returns

`Promise`\<`string` \| `null`\>
