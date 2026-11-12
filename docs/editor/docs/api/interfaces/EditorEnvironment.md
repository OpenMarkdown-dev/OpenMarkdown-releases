# EditorEnvironment

The editor environment: window-wide capabilities the host provides once per
page with `configureEditorEnvironment`. Per-document needs go through
`EditorHost` instead.

Every member is optional: what the host leaves out is switched off quietly —
no error, no notice, no fallback of the editor's own. An editor mounted with
no environment configured at all is light, English, editable, and has no
copy, external-link, spelling or host-key behaviour.

## Properties

### colorScheme?

> `optional` **colorScheme?**: `object`

The window's light / dark scheme: its value now, and a subscription to changes (returns the unsubscribe).

#### current()

> **current**(): [`ColorScheme`](/editor/docs/api/type-aliases/colorscheme/)

##### Returns

[`ColorScheme`](/editor/docs/api/type-aliases/colorscheme/)

#### subscribe()

> **subscribe**(`cb`): () => `void`

##### Parameters

###### cb

(`scheme`) => `void`

##### Returns

() => `void`

***

### copyText?

> `optional` **copyText?**: (`text`) => `unknown`

Put `text` on the clipboard (code-block copy button). The host reports success / failure itself.

#### Parameters

##### text

`string`

#### Returns

`unknown`

***

### handleKey?

> `optional` **handleKey?**: (`view`, `event`) => `boolean`

Offered every key the editor's keymap sees, before CodeMirror's defaults:
return true when the host ran a binding for it (the key is consumed).

#### Parameters

##### view

`EditorView`

##### event

`KeyboardEvent`

#### Returns

`boolean`

***

### language?

> `optional` **language?**: `"zh"` \| `"ja"` \| `"ko"` \| `"en"`

The language of the editor's own UI words. Read whenever a word is drawn,
so set it before the first editor mounts; already-drawn words do not redraw
on a change. Left out, or not one the editor ships: English.

***

### openExternal?

> `optional` **openExternal?**: (`url`) => `unknown`

Open an external (non-file) link target, e.g. Cmd/Ctrl+click on `https://…`. The host owns the policy.

#### Parameters

##### url

`string`

#### Returns

`unknown`

***

### refusedLink?

> `optional` **refusedLink?**: (`url`, `scheme`) => `unknown`

The editor refused to follow a script-capable link (`javascript:` /
`vbscript:` / `data:` …, however obfuscated); `scheme` is the
scheme as a browser reads it. For telling the user only: the URL MUST NOT
be opened. Absent: the refusal is silent.

#### Parameters

##### url

`string`

##### scheme

`string`

#### Returns

`unknown`

***

### spell?

> `optional` **spell?**: [`SpellService`](/editor/docs/api/interfaces/spellservice/)

The spell-checking service behind the editor's own squiggles and suggestions. Absent: no spell checking.
