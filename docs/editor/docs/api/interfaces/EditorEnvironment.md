# EditorEnvironment

The editor environment: the capabilities that are not about one document —
the color scheme, the clipboard, external links, spelling, host keys and the
UI language. Give each editor its own with `createEditorState({ environment })`
(and change it later with `editor.setEnvironment`); `configureEditorEnvironment`
sets the page's defaults, which every editor uses for the members it was not
given. Per-document needs go through `EditorHost` instead.

Every member is optional: what the host leaves out is switched off quietly —
no error, no notice, no fallback of the editor's own — except the two
renderers, whose absence means the entry's built-in one. An editor mounted with
no environment configured at all is light, English, editable, and has no
copy, external-link, spelling or host-key behaviour.

## Properties

### colorScheme?

> `optional` **colorScheme?**: [`ColorSchemeSource`](/editor/docs/api/interfaces/colorschemesource/) \| [`ColorScheme`](/editor/docs/api/type-aliases/colorscheme/)

Light or dark: a fixed `"light"` / `"dark"` (change it with
`editor.setEnvironment`), or a live source — its value now, and a
subscription to changes (returns the unsubscribe), which the editor
follows while it is mounted.

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
on a change. Left out, or not one the editor ships: English. Page-wide
only: set it with `configureEditorEnvironment` (a per-editor
`environment` has no `language`).

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

### renderDiagram?

> `optional` **renderDiagram?**: [`DiagramRenderer`](/editor/docs/api/type-aliases/diagramrenderer/)

Your own diagram renderer, used for every ```` ```mermaid ```` fence in
place of the editor's built-in Mermaid — for example your page's own copy
of Mermaid, so the page loads one, or to have diagrams at all with an entry
that carries no built-in one (`/no-diagrams`, `/no-renderers`). Left out:
the entry's built-in renderer, if it has one; else the fence stays a code
block. `EditorStateOptions.diagrams: false` turns diagrams off either way.
See `DiagramRenderer`.

***

### renderMath?

> `optional` **renderMath?**: [`MathRenderer`](/editor/docs/api/type-aliases/mathrenderer/)

Your own formula renderer, used for every `$…$` and `$$…$$` in place of
the editor's built-in one (Temml) — to draw formulas the way the rest of
your page does (MathJax, KaTeX), or to have formulas at all with an entry
that carries no built-in renderer (`/no-renderers`). Left out: the
entry's built-in renderer, if it has one; else formulas show as their TeX.
See `MathRenderer`.

***

### spell?

> `optional` **spell?**: [`SpellService`](/editor/docs/api/interfaces/spellservice/)

The spell-checking service behind the editor's own squiggles and suggestions. Absent: no spell checking.
