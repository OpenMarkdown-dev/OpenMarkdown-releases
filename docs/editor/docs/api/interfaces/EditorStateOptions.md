# EditorStateOptions

What a new editor state starts with (`createEditorState`). Every field is optional.

## Properties

### checkSpelling?

> `optional` **checkSpelling?**: `boolean`

Draw spelling squiggles when the environment's spell service is on. Turn it
off for an editor where a squiggle could not be fixed. Default true.

***

### diagrams?

> `optional` **diagrams?**: `boolean`

Render ```` ```mermaid ```` fences as diagrams. With `false`, they show as
ordinary code blocks and Mermaid is never loaded — for a page that must not
download it, or whose Content Security Policy cannot allow Mermaid's inline
styles (see the self-hosting guide). Default true. Ignored by the
`@openmarkdown-dev/editor/no-diagrams` entry, which never renders diagrams
and does not contain Mermaid at all.

***

### doc?

> `optional` **doc?**: `string`

The Markdown source to edit. Default: the empty document.

***

### docPath?

> `optional` **docPath?**: `string` \| `null`

The document's absolute path, or null for an unsaved one. Relative links and images resolve against it, and pasted images are stored beside it. Default: null.

***

### extensions?

> `optional` **extensions?**: `Extension`

Your own CodeMirror extensions, installed in this state beside the editor's.
They stay installed in every mode and travel with the state.

***

### host?

> `optional` **host?**: [`EditorHost`](/editor/docs/api/interfaces/editorhost/)

The per-document callbacks (change, links, images, attachments, completion, outline). Default: none.

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
