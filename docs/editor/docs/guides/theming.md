# Theming

The editor paints only with `--ome-*` custom properties. Each one has a light and a dark
default, and the editor switches between them with the environment's `colorScheme`
([environment](/editor/docs/guides/environment/)). There is no CSS file to import.

To restyle the editor, set the properties **on `.cm-editor`**:

```css
.cm-editor {
  --ome-bg: #fffdf7;
  --ome-accent: #0b6bcb;
  --ome-font: "Inter", system-ui, sans-serif;
}
```

Setting them on `:root` has no effect. The editor declares its defaults on its own root at
zero specificity, so any selector that targets `.cm-editor` wins, and an inherited value does
not.

## Light and dark

The editor's root carries `data-ome-scheme="light"` or `data-ome-scheme="dark"`, and it changes
when the environment's `colorScheme` does. Give each scheme its own values with that attribute:

```css
.cm-editor[data-ome-scheme="light"] { --ome-accent: #0b6bcb; }
.cm-editor[data-ome-scheme="dark"] { --ome-accent: #6cb6ff; }
```

This attribute is the one supported way to tell the schemes apart. CodeMirror's own light and dark
classes are generated names that change between builds, so do not select on them.

## Tokens

| Token | Used for |
| --- | --- |
| `--ome-bg` | The document surface: the editor's background. |
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
| `--ome-syntax-keyword`, `--ome-syntax-string`, `--ome-syntax-number`, `--ome-syntax-function`, `--ome-syntax-type`, `--ome-syntax-property` | Code highlighting. One value is used for both schemes. |

## Size

The editor fills its parent and scrolls inside it, so give the parent a height. Text is 16px at
the editor's root, and every size inside the document is relative to it.

## Beyond tokens

Anything the tokens do not cover can be styled with CodeMirror's own theme extensions, passed
through `extensions` on `createEditorState`. Class names inside the editor are not part of the
public API and may change between versions; the tokens are.
