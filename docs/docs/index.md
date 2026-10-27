# Introduction

OpenMarkdown is a feather-light, local-first Markdown editor — fast enough that you and your agent stay on the same page.

Your notes are plain `.md` files on your disk. OpenMarkdown renders them as you type. Your agent (Claude Code, Codex, Gemini CLI, or anything that speaks MCP) edits the same files, and you see its changes the moment they land. The file is what you share; the app shows it to both of you.

## No AI inside

OpenMarkdown ships no model and no chat. It works with the agent you already run, through:

- an MCP server (`openmd mcp`), so your agent can open a note in front of you, read the part you selected, and rewrite one section without touching the rest;
- a terminal in the sidebar, where your agent can run inside the app (macOS and Linux);
- the intercom, a small panel where you and that agent talk in a line or two.

Without an agent, OpenMarkdown is a complete Markdown editor.

## See it in action

[Watch the demo →](https://youtu.be/n70C9is_BvU)

Or try the editor in your browser: [openmarkdown.dev/demo](/demo).

## Where to start

- New here: [Install](/docs/start/install/), then the [Quick start](/docs/start/quick-start/).
- Already installed: [Connect your agent](/docs/start/connect/).
- Looking something up: the [Reference](/docs/reference/cli/) pages are generated from the code, so they match the version you can download.
