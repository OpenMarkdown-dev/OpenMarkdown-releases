# Theming

The editor paints only with `--ome-*` custom properties: colours, fonts, the type size,
the line height, the text column's width and the space around it. Each one has a light and
a dark default, and the editor switches between them with the environment's `colorScheme`
([environment](/editor/docs/guides/environment/)). There is no CSS file to import.

## Where to put your styles

The editor's root element has the class **`.ome-root`**. Put your tokens, and any layout
rule of your own such as a border or a `min-height`, on that class:

```css
.ome-root {
  --ome-bg: #fffdf7;
  --ome-accent: #0b6bcb;
  --ome-font: "Inter", system-ui, sans-serif;
}
```

Setting tokens on `:root` has no effect. The editor declares its defaults on `.ome-root`
at zero specificity, so any selector that targets `.ome-root` wins, and an inherited value
does not.

Do not select `.cm-editor`. While a table cell or a property value is being edited, the
editor puts a second, small editor inside it, and that one is a `.cm-editor` too. A rule
such as `.my-field .cm-editor { min-height: 320px }` also lands on the cell's editor and
stretches its table row. The nested editor's root has the class **`.ome-nested`** and
never `.ome-root`, so a rule on `.ome-root` cannot reach it. It takes the root's token
values by inheritance: you do not need to style it.

These two classes and the `data-ome-scheme` attribute below are the editor's public
styling hooks. Every other class name inside the editor is internal and may change
between versions.

## Light and dark

The editor's root carries `data-ome-scheme="light"` or `data-ome-scheme="dark"`, and it
changes when the environment's `colorScheme` does. Give each scheme its own values with
that attribute:

```css
.ome-root[data-ome-scheme="light"] { --ome-accent: #0b6bcb; }
.ome-root[data-ome-scheme="dark"] { --ome-accent: #6cb6ff; }
```

This attribute is the one supported way to tell the schemes apart. CodeMirror's own light
and dark classes are generated names that change between builds, so do not select on them.

## Tokens

| Token | Used for |
| --- | --- |
| `--ome-bg` | The document surface: the editor's background, and the find bar's and menus'. |
| `--ome-fg` | Body text and the caret: the editor's text color. |
| `--ome-muted` | Quiet surfaces. |
| `--ome-muted-fg` | Secondary text: Markdown marks, placeholders, resting controls. |
| `--ome-border` | Hairlines: table rules, quote bars, frames. |
| `--ome-accent` | Links, selection, find hits, focus, list marks. |
| `--ome-danger` | Errors, such as a search with no match. |
| `--ome-agent` | The `@agent` mention. |
| `--ome-spelling` | The spelling squiggle. |
| `--ome-code-bg` | Inline code, code blocks, table headers (translucent). |
| `--ome-callout-note`, `--ome-callout-tip`, `--ome-callout-important`, `--ome-callout-warning`, `--ome-callout-caution` | The five callout kinds. |
| `--ome-state-hover`, `--ome-state-selected` | Hover and selected layers on controls. |
| `--ome-radius` | The corner radius of controls. |
| `--ome-font`, `--ome-font-mono` | The prose and code font stacks. No font files are shipped. |
| `--ome-font-size` | The body text size (default `16px`). Headings, code and everything else in the document are sized relative to it. |
| `--ome-line-height` | The body line height (default `1.7`). |
| `--ome-content-width` | The text column's maximum width (default `41rem`). `100%` makes it as wide as the editor. |
| `--ome-padding-x` | The space between the editor's left and right edges and the text column (default `2.5rem`). Fold toggles for headings and list items sit in it. |
| `--ome-padding-y` | The space above the first line (default `2rem`), and below the last one when the editor grows with its content. |
| `--ome-syntax-keyword`, `--ome-syntax-string`, `--ome-syntax-number`, `--ome-syntax-function`, `--ome-syntax-type`, `--ome-syntax-property` | Code highlighting. One value is used for both schemes. |

## Fit the host page

By default the editor brings its own look: an off-white surface, a centred 41rem column
and its own fonts. To make it look like part of your page instead, take your page's text
settings and let the column fill the editor:

```css
.ome-root {
  --ome-bg: #ffffff; /* your page's background colour */
  --ome-fg: inherit;
  --ome-font: inherit;
  --ome-font-size: inherit;
  --ome-line-height: inherit;
  --ome-content-width: 100%;
  --ome-padding-x: 1.5rem;
  --ome-padding-y: 0.75rem;
}
```

`inherit` on a token means "use the page's value": the editor then takes the text color,
font, size and line height of the element you mounted it in. This works as long as no
ancestor of the editor sets that `--ome-*` token itself.

Give `--ome-bg` your page's actual background colour rather than `transparent`: the find
bar and the editor's menus are painted with it, and a transparent one would let the text
show through them. Keep `--ome-padding-x` at about `1.5rem` if you want the fold toggles
next to headings and list items; with `0` they sit outside the editor's edge.

## Height

By default the editor fills its parent and scrolls inside it, so give the parent a height.
Below the last line it leaves room to scroll that line up to a comfortable reading height.

For an editor that grows with its content, like a form field or a comment box, pass
`height: "auto"` when you create the state:

```ts
import { createEditorState, mountEditor } from "@openmarkdown-dev/editor";

const editor = mountEditor(document.getElementById("field")!, createEditorState({ doc: "", height: "auto" }));
```

The editor is then as tall as its text, the page scrolls instead of the editor, and the
space below the last line is `--ome-padding-y`, the same as above the first. The parent
needs no height. To keep an empty editor from collapsing, give it a minimum height:

```css
.ome-root {
  min-height: 12rem;
}
```

A click anywhere in that minimum height places the caret, as a click below the text does
in a full-height editor.

## Beyond tokens

Anything the tokens do not cover can be styled with CodeMirror's own theme extensions, passed
through `extensions` on `createEditorState`. Class names inside the editor are not part of the
public API and may change between versions; the tokens, `.ome-root`, `.ome-nested` and
`data-ome-scheme` are.
