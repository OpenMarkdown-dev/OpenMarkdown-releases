# Markdown dialect

OpenMarkdown reads and writes plain CommonMark with GitHub Flavored Markdown (GFM). Your files stay ordinary `.md`: any other editor, GitHub, or a plain text viewer can open them.

## What renders

| You write | You get |
| --- | --- |
| `# …` to `###### …` | Headings, H1 to H6 |
| `**bold**` · `*italic*` · `~~strike~~` | **bold**, *italic*, ~~strikethrough~~ |
| `` `inline code` `` | Inline code |
| ` ```lang ` … ` ``` ` | Fenced code block with syntax highlighting |
| `[text](url)` | Links |
| `![alt](path)` | Images, from local paths and URLs |
| `- item` · `1. item` | Unordered and ordered lists |
| `- [ ]` · `- [x]` | Task lists; the boxes stay clickable |
| `> quote` | Blockquotes |
| `---` | Horizontal rule |
| `\| a \| b \|` | Tables |

## Where it differs

Each writing below is either something OpenMarkdown accepts beyond GFM, or something GFM accepts that OpenMarkdown reads more narrowly. For each one: what it looks like on GitHub and in plain text, so you know what other readers of the file will see.

### Callouts

A blockquote whose first line is exactly one of `[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]` or `[!CAUTION]` (any case) renders as a coloured callout.

```markdown
> [!WARNING]
> Back up before you migrate.
```

- **On GitHub:** the same callout (GitHub calls them alerts).
- **In plain text:** an ordinary blockquote with `[!WARNING]` on its first line.

### Callouts with a fold mark

Obsidian adds `-` or `+` after the type (`> [!note]-`) to make a callout collapsible. OpenMarkdown recognises the mark and renders the callout like any other. It does not fold it.

- **On GitHub:** not recognised as an alert; it shows as a plain blockquote with `[!note]-` visible.
- **In plain text:** unchanged.

### Math

Inline `$…$` and block `$$…$$` TeX render as math.

```markdown
Inline $E = mc^2$, and a block:

$$
\int_0^1 x^2\,dx = \frac{1}{3}
$$
```

- **On GitHub:** rendered as math too.
- **In plain text:** the TeX source, with its `$` delimiters.

### Agent mentions

`@agent` and `@agent(name)` are highlighted, so a request to your agent stands out in a note.

```markdown
- [ ] @agent shorten this paragraph
- [ ] @agent(reviewer) check the spelling
```

- **On GitHub:** plain text in a repository file. (In issues and comments, GitHub may treat `@agent` as a mention of a real user.)
- **In plain text:** unchanged.

### Frontmatter

YAML between `---` lines at the very top of a file renders as a Properties block.

```markdown
---
title: Launch plan
tags: [launch, q4]
---
```

- **On GitHub:** a key/value table.
- **In plain text:** the YAML, with its `---` lines.

### Image size

A width, or a width and height, after a `|` in the alt text sets the image's size. Dragging an image's corner in the editor writes the same thing.

```markdown
![Diagram|300](diagram.png)
![Diagram|300x200](diagram.png)
```

Inside a table cell, write the `|` as `\|`.

- **On GitHub:** the image at its own size; `|300` stays in the alt text, out of sight.
- **In plain text:** unchanged.

### Strikethrough takes exactly two tildes

This one is narrower than GFM. Only `~~text~~` is strikethrough. A single `~text~`, and three or more tildes, stay as you typed them. This matches Obsidian and keeps things like `H~2~O` readable.

- **On GitHub:** `~~text~~` is strikethrough too, but GitHub also strikes `~text~`.
- **In plain text:** unchanged.
