# EditorStateOptions

What a new editor state starts with (`createEditorState`). Every field is optional.

## Properties

### ariaLabel?

> `optional` **ariaLabel?**: `string`

The accessible name of the editable text (`aria-label`), when no visible label names it. Default: none.

***

### ariaLabelledBy?

> `optional` **ariaLabelledBy?**: `string`

The `id` (or space-separated ids) of the element(s) that name the editable text (`aria-labelledby`). Default: none.

***

### checkSpelling?

> `optional` **checkSpelling?**: `boolean`

Draw spelling squiggles when the environment's spell service is on. Turn it
off for an editor where a squiggle could not be fixed. Default true.

***

### codeLanguages?

> `optional` **codeLanguages?**: readonly `LanguageDescription`[]

The languages fenced code blocks are highlighted in, matched by the
fence's info string — for example `languages` from
`@codemirror/language-data` (install it beside the editor), or a list of
your own `LanguageDescription`s. Each language's grammar loads the first
time a fence uses it. Default: none — fenced code shows unhighlighted.

***

### diagrams?

> `optional` **diagrams?**: `boolean`

Render ```` ```mermaid ```` fences as diagrams. With `false`, they show as
ordinary code blocks and Mermaid is never loaded — for a page that must not
download it, or whose Content Security Policy cannot allow Mermaid's inline
styles (see the self-hosting guide). Default true. With the
`/no-diagrams` and `/no-renderers` entries, which do not contain Mermaid,
diagrams render only through your own `renderDiagram` (environment).

***

### doc?

> `optional` **doc?**: `string`

The Markdown source to edit. Default: the empty document.

***

### docPath?

> `optional` **docPath?**: `string` \| `null`

The document's absolute path, or null for an unsaved one. Relative links and images resolve against it, and pasted images are stored beside it. Default: null.

***

### editable?

> `optional` **editable?**: `boolean`

May the user change the document? `false` makes the editor read-only in
every mode — no typing, pasting, dropping, task-checkbox toggling or
property editing, and no editing controls drawn; it can still be
focused, selected, searched and copied, and links still open. Live
preview then renders like reading mode. Change it with
`editor.setEditable`. Default true.

***

### environment?

> `optional` **environment?**: [`EditorOwnEnvironment`](/editor/docs/api/type-aliases/editorownenvironment/)

This editor's own environment: the color scheme, clipboard, external
links, refused-link notice, spelling and host keys for this editor only.
A member given here replaces the page's default
(`configureEditorEnvironment`); one left out falls back to it. Change it
with `editor.setEnvironment`. Default: none (the page's defaults).

***

### extensions?

> `optional` **extensions?**: `Extension` \| readonly `Extension`[]

Your own CodeMirror extensions, installed in this state beside the editor's.
They stay installed in every mode and travel with the state.

***

### fromState?

> `optional` **fromState?**: `EditorState`

Take over an existing CodeMirror state — from an editor this one
replaces — with its document, selection and undo history (the history
of `@codemirror/commands`' `history()`, the same copy of the package as
this editor's). Its other extensions are not carried over. `doc` and
`selection` are then ignored. Default: none.

***

### height?

> `optional` **height?**: `"fill"` \| `"auto"`

How tall the editor is. `"fill"`: the parent's height — give the parent
one; the editor scrolls inside it. `"auto"`: the content's height — the
editor grows as lines are added and the page scrolls, as a form field
would (a `min-height` on `.ome-root` keeps it from collapsing when empty).
Default `"fill"`.

***

### host?

> `optional` **host?**: [`EditorHost`](/editor/docs/api/interfaces/editorhost/)

The per-document callbacks (change, links, images, attachments, completion, outline). Default: none.

***

### id?

> `optional` **id?**: `string`

The `id` of the editable text element, so a `<label for>` with that id
focuses the editor when clicked. Give the label's text to screen readers
with `ariaLabelledBy` (a `<label for>` does not name a non-form element).
Default: none.

***

### mode?

> `optional` **mode?**: [`EditorMode`](/editor/docs/api/type-aliases/editormode/)

Live preview (default), plain source, or read-only reading mode.

***

### selection?

> `optional` **selection?**: `object`

Where the caret starts (UTF-16 offsets into `doc`). Default: the start of the document.

#### anchor

> **anchor**: `number`

#### head?

> `optional` **head?**: `number`
