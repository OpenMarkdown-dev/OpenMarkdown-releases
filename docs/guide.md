<!--
  Maintained plain-Markdown mirror of guide.html, for agents and answer engines
  that prefer Markdown over HTML. Served at openmarkdown.dev/guide.md via the
  existing site/ sync. Keep it semantically equivalent to guide.html.

  DRIFT NOTE: this is currently a hand-maintained copy. If guide.html and this
  file start drifting, promote it to a generated artifact (a small build step,
  the same pattern as scripts/build-install-page.mjs) so there is one source.
  Tracked as a follow-up in docs/growth/README.md.
-->
# OpenMarkdown — Guide

Everything the front page points at: the Markdown syntax it renders, every
keyboard shortcut, the `openmd` CLI, and how to put your agent on the same page.

## See it in action

A one-take look at the whole thing — you and your agent editing the same live
`.md`, then the quick cuts: <https://youtu.be/n70C9is_BvU> (opens on YouTube;
nothing loads from there until you click).

## Markdown syntax

What OpenMarkdown renders in live preview and reading mode. Anything it doesn't
recognise falls back to a plain code block — your text is never eaten.

| You write | You get |
| --- | --- |
| `# …` / `## …` / `###` | Headings, through H6 |
| `**bold**` · `*italic*` · `~~strike~~` | **bold**, *italic*, ~~strikethrough~~ |
| `` `inline code` `` | Inline code |
| ` ```lang … ``` ` | Fenced code block with syntax highlighting |
| `[text](url)` | Links |
| `![alt](path)` | Images — local paths and URLs |
| `- item` · `1. item` | Unordered and ordered lists |
| `- [ ]` / `- [x]` | Task lists — checkboxes stay clickable, even in reading mode |
| `> quote` | Blockquotes |
| `---` | Horizontal rule |
| `\| a \| b \|` | Tables |
| `--- … ---` at top | YAML frontmatter, folded |

**Three views, one file:** *live preview* renders as you type, *source* shows
every marker at one size (great for commit messages and prompts), and *reading*
is the clean rendered page. One button cycles all three.

## Keyboard shortcuts

Standard Mac shortcuts — nothing to relearn. `⌘P` opens a command palette that
finds the rest.

| Key | Does |
| --- | --- |
| `⌘P` | Command palette — files, then `>` for commands, `@` for headings |
| `⌘⇧P` | Command palette, straight into command mode |
| `⌘F` | Find & replace |
| `⌘B` · `⌘I` | Bold · italic |
| `⌘S` | Save now (it also autosaves when you pause) |
| `⌘Z` · `⌘⇧Z` | Undo · redo |
| `⌃Tab` · `⌃⇧Tab` | Next / previous tab |
| `⌘1`–`⌘8` · `⌘9` | Jump to the Nth tab · last tab |
| `⌘W` · `⌘⇧W` | Close tab · close window |
| `⌘ +` · `⌘ −` · `⌘0` | Zoom in · out · reset |

## The `openmd` CLI

Four commands, three flags. Every one talks to the app already running on your
machine — nothing leaves your disk.

| You run | It does |
| --- | --- |
| `openmd notes.md` | Opens the file in OpenMarkdown (`open` is implied; several files open several tabs) |
| `openmd reveal plan.md "Auth"` | Opens the file and scrolls to the heading — exact match, then case-insensitive, then prefix; without a heading it just opens and activates |
| `openmd status` | What's open right now — folder, tabs, active file. Never launches the app |
| `openmd mcp` | Runs the MCP server on stdio, for agents to spawn: `claude mcp add openmd -- openmd mcp` |
| `--wait` | Blocks until you close the tab — the `EDITOR="openmd --wait"` contract git and agents rely on |
| `--source git` | Labels the session tab with who's asking |
| `--json` | One line of machine-readable JSON on stdout, for scripts |

Exit codes and the fine print: `openmd --help`.

## Put your agent on the same page

OpenMarkdown talks to your terminal and your agent three ways — a CLI, an MCP
server, and a Claude Code plugin. They stack: install once, and your agent can
open, reveal, and read the same file you're looking at.

1. **Install the `openmd` CLI.** Settings → CLI → install. It drops an `openmd`
   command on your PATH.
2. **Make it your `$VISUAL`.** One toggle in Settings points `$VISUAL` at
   OpenMarkdown. Git commit messages and Claude Code's `Ctrl+G` now open here.
3. **Connect your agent.** The fastest path: hand it one sentence and it installs
   itself — <https://openmarkdown.dev/install> walks Claude Code, Codex, Gemini
   CLI, opencode, or any MCP client through it. For Claude Code by hand, add the
   marketplace and install the plugin — or wire the MCP server straight in:
   `claude mcp add openmd -- openmd mcp`. Your agent gains seven tools —
   `open_file`, `reveal`, `get_context`, `execute_command`, `read_section`,
   `write_section`, `wait_for_change` — and, on Claude Code, a skill that teaches
   it when to use them.

Everything runs on plain files, locally. The CLI and MCP server forward to the app
on your machine — nothing leaves your disk, and your agent reads exactly the page
you see.

## Languages

The interface ships in **中文 · 日本語 · English**, following your system language
with a manual override in Settings. Missing your language?
[Start a discussion](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/discussions)
or [open an issue](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/issues).
