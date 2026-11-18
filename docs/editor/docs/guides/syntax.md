# Markdown syntax

The editor reads CommonMark and GitHub Flavored Markdown, plus a few extensions: math, front
matter, image sizes, Mermaid diagrams and callout fold marks. Everything else is shown exactly as
written. It is never hidden or dropped, and the editor never rewrites your source to "fix" it.

The tables below are generated from the editor's test vectors, so they say what the editor does,
not what we hope it does. Each vector is checked on every test run.

## What the editor reads

"Rendered" means drawn in place, with the marks hidden when the caret is elsewhere. "Shown as
written" means the text stays as you typed it, with no special treatment.

### CommonMark

| Syntax | Example | Support | Notes |
| --- | --- | --- | --- |
| Headings | `# Title` | Rendered | ATX (`#` to `######`) and setext (a line underlined with `=` or `-`). Headings get GitHub-style anchor ids. |
| Emphasis and strong | `*em* **strong**` | Rendered | `*` and `_`. The marks hide when the caret is elsewhere. |
| Code spans | `` `code` `` | Rendered | Nothing inside a code span is Markdown, dollar signs included. |
| Links | `[text](https://example.com)` | Rendered | Inline, reference (`[text][ref]`) and autolinks (`<https://…>`). A `[label]` with no definition stays text, brackets visible. |
| Images | `![alt](cat.png)` | Rendered | Local paths go through the host's `resolveImage`. See also image size below. |
| Lists | `- item / 1. item` | Rendered | Bullet (`-`, `*`, `+`) and ordered (`1.`, `1)`) lists, nested to any depth. |
| Block quotes | `> quoted` | Rendered |  |
| Code blocks | `` ```ts … ``` `` | Rendered | Fenced (with syntax highlighting by info string) and indented. |
| Thematic breaks | `***` | Rendered | Three or more `*`, `-` or `_` on a line of their own. |
| Backslash escapes | `\*not emphasis\*` | Rendered | The backslash hides when the caret is elsewhere and in reading mode, like other marks; the source keeps it. |
| Entity references | `&amp; &copy;` | Rendered |  |
| Raw HTML | `<b>hi</b>` | Shown as written | Shown as source text, never interpreted (see Untrusted content). |

### GFM

| Syntax | Example | Support | Notes |
| --- | --- | --- | --- |
| Tables | `\| a \| b \|` | Rendered | With column alignment. Cells render inline Markdown and edit in place. |
| Task lists | `- [ ] todo` | Rendered | Clicking a checkbox changes only `[ ]` / `[x]`. |
| Strikethrough | `~~gone~~` | Rendered | Exactly two tildes. A single `~x~` is text (GitHub strikes it). |
| Autolinks (bare URLs) | `www.example.com` | Rendered |  |
| Alerts (callouts) | `> [!NOTE]` | Rendered | NOTE, TIP, IMPORTANT, WARNING, CAUTION, any case. |

### Extensions

| Syntax | Example | Support | Notes |
| --- | --- | --- | --- |
| Callout fold marks | `> [!NOTE]-` | Rendered | Obsidian's `-` / `+` after the type: rendered as the callout, nothing folds. |
| Inline math `$…$` | `$E = mc^2$` | Rendered | Pandoc's rules: a non-space after the opening `$`, a non-space before the closing `$`, no digit after it. One line. |
| Math `$$…$$` | `$$\int_0^1 x\,dx$$` | Rendered | On lines of its own: block math (may span lines). Inside a line of text: inline math, as in remark-math, Obsidian and Typora. |
| Math `\(…\)` and `\[…\]` | `\(x^2\)` | Rendered | The delimiters LLMs write. `\[ … \]` is block math when it is a paragraph of its own; on one line it needs a space inside both brackets. Otherwise these stay CommonMark escapes. |
| YAML front matter | `---⏎title: x⏎---` | Rendered | At the very start of the file; shown as an editable Properties block. |
| Image size | `![alt\|300](cat.png)` | Rendered | `\|width` or `\|widthxheight` at the end of the alt text, in pixels (Obsidian's form). |
| Mermaid diagrams | `` ```mermaid `` | Rendered | A fence with info string `mermaid`. Off with `diagrams: false` and in the `no-diagrams` entry. |
| `@agent` mentions | `@agent(reviewer)` | Rendered | Coloured with `--ome-agent`; the text is unchanged. |

### Not supported

| Syntax | Example | Support | Notes |
| --- | --- | --- | --- |
| Wikilinks | `[[Page]]` | Shown as written | A host can style them with its own CodeMirror extension (see below). |
| Footnotes | `text[^1]` | Shown as written | Both the reference and the note. A note with no space in it is a CommonMark link reference definition, so `[^1]` links to it. |
| Highlight | `==mark==` | Shown as written |  |
| Fenced containers / panels | `::: note` | Shown as written | Read as a paragraph of text. |
| Subscript / superscript | `H~2~O x^2^` | Shown as written | Use math instead: `$H_2O$`. |
| Emoji shortcodes | `:smile:` | Shown as written | Emoji characters themselves are text and show as usual. |
| Definition lists | `Term⏎: definition` | Shown as written |  |
| Math fences | `` ```math `` | Shown as written | A code block (GitHub draws it as math). Use `$$…$$`. |

### How math delimiters are read

Each row is a test vector: the source, and what the editor renders it as (formulas as `<math>`).

| You write | It renders as |
| --- | --- |
| `$E = mc^2$` | `<math>E = mc^2</math>` |
| `$x$ and $y$` | `<math>x</math> and <math>y</math>` |
| `from $20-$30` | `from $20-$30` |
| `$1,000-$2,000` | `$1,000-$2,000` |
| `costs $5 and $10` | `costs $5 and $10` |
| `that is $5` | `that is $5` |
| `$ x$ and $x $` | `$ x$ and $x $` |
| `echo $HOME $PATH` | `echo $HOME $PATH` |
| `$HOME/$USER` | `<math>HOME/</math>USER` |
| `` `$HOME/$USER` `` | `<code>$HOME/$USER</code>` |
| `\$5 and \$10` | `$5 and $10` |
| `$a\$b$` | `<math>a\$b</math>` |
| `- $5 or $x^2$` | `<ul>⏎<li>$5 or <math>x^2</math></li>⏎</ul>` |
| `\| price \| formula \|⏎\| - \| - \|⏎\| $5 \| $x$ \|` | `<div class="om-table-wrap">⏎<table>⏎<thead>⏎<tr><th>price</th><th>formula</th></tr>⏎</thead>⏎<tbody>⏎<tr><td>$5</td><td><math>x</math></td></tr>⏎</tbody>⏎</table>⏎</div>` |
| `$$x^2$$` | `<math display="block">x^2</math>` |
| `$$⏎\int_0^1 x\,dx⏎$$` | `<math display="block">\int_0^1 x\,dx</math>` |
| `inline $$x^2$$ here` | `inline <math>x^2</math> here` |
| `$$x$$ then text` | `<math>x</math> then text` |
| `$$$x$$$` | `$$$x$$$` |
| `\(x^2\) inline` | `<math>x^2</math> inline` |
| `a \( x \) b` | `a <math>x</math> b` |
| `\(\) and \(a` | `() and (a` |
| `\[ x^2 \]` | `<math display="block">x^2</math>` |
| `\[⏎x = 1⏎\]` | `<math display="block">x = 1</math>` |
| `\[x\]` | `[x]` |
| `- \[x\] item` | `<ul>⏎<li>[x] item</li>⏎</ul>` |
| `\[ a \] b \[ c \]` | `[ a ] b [ c ]` |
| `text⏎\[⏎x⏎\]` | `text⏎[⏎x⏎]` |

⏎ marks a line break.

## Math delimiters

Inline `$…$` follows [Pandoc's rules](https://pandoc.org/MANUAL.html#extension-tex_math_dollars),
so prices and shell variables stay text: `$20-$30` is not a formula. To write a literal dollar
sign that the editor would otherwise read as math, escape it (`\$`) or put it in a code span.
`$HOME/$USER` outside a code span is a formula, as it is in Pandoc.

`$$…$$` on lines of its own is block math. Inside a line of text it is inline math, as in
remark-math, Obsidian and Typora.

`\(…\)` and `\[…\]` are the delimiters language models often write. They are on by default.
`\[ … \]` is block math when it is a paragraph of its own: put a blank line before and after it.
On one line it needs a space inside both brackets (`\[ x \]`); a bare `\[x\]` is CommonMark's
escaped brackets and shows as `[x]`. Where neither delimiter pair is complete, a backslash before
a parenthesis or bracket is an ordinary escape.

## Syntax your host adds

The editor has no plugin API for new Markdown syntax: its grammar is fixed, and `extensions`
cannot add parse rules or block renderers. What `extensions` can do is what any CodeMirror
extension can: decorate text. That is enough to style a host's own inline syntax, such as
wikilinks. This example is the one the package's consumer test runs in Chromium, WebKit and
Firefox:

```ts
import { Decoration, MatchDecorator, ViewPlugin, type DecorationSet, type EditorView, type ViewUpdate } from "@codemirror/view";

// Style [[wikilinks]] with your own class. The text stays as written.
const wikilinks = new MatchDecorator({
  regexp: /\[\[([^\[\]\n]+)\]\]/g,
  decoration: (match) => Decoration.mark({ class: "host-wikilink", attributes: { "data-target": match[1] } }),
});

export const wikilinkStyle = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet;
    constructor(view: EditorView) {
      this.decorations = wikilinks.createDeco(view);
    }
    update(update: ViewUpdate) {
      this.decorations = wikilinks.updateDeco(update, this.decorations);
    }
  },
  { decorations: (v) => v.decorations },
);
```

```ts
import { createEditorState } from "@openmarkdown-dev/editor";

const state = createEditorState({ doc, extensions: wikilinkStyle });
```

Style `.host-wikilink` in your page, and handle clicks on it with your own DOM listener. Some
limits come with this:

- The decoration only adds a class. The editor does not know about it: copy as plain text, the
  HTML renderer (`renderHTML`) and reading mode treat the text as written.
- Replacing text with a widget (hiding the brackets) is possible in CodeMirror, but the editor's
  caret rules and copy do not know about your widget. We do not test or support it.
- Block syntax (`:::` panels, footnote sections) cannot get a renderer this way.
