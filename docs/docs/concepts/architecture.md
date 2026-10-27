# Architecture

Three pieces, all on your machine.

```text
 your agent ──stdio──► openmd mcp ─┐
                                   ├─ local socket ─► OpenMarkdown app ─► your .md files
 you, a script ──────► openmd ─────┘
```

## The app

A desktop app: a Rust core and the editor in a system web view (Tauri). It reads and writes your files, watches them for changes on disk, and listens on a local socket for requests from `openmd`. Nothing listens on the network.

## `openmd`

A small command-line program that ships inside the app. `openmd notes.md` asks the running app to open a file, starting the app first if needed. `openmd --wait` holds until you finish editing, for [`$EDITOR` handoff](/docs/agent/editor-handoff/). See [CLI](/docs/reference/cli/).

## The MCP server

`openmd mcp` is the same program, speaking the Model Context Protocol over stdio. Your agent starts it; it turns each [tool call](/docs/reference/mcp-tools/) into a request to the app over the same socket. It keeps no state of its own and needs no network.

Because edits go through the app, an agent's change lands in the note you have open, merged with what you are typing, instead of racing you on disk. When the app is not running, the tools say so and the agent can fall back to editing the file directly.

## The sidebar terminal

Agents started in OpenMarkdown's terminal get a token in their environment. When such an agent connects through `openmd mcp`, the token ties its MCP connection to that terminal session. That is how the intercom knows which agent a message is for, and whether it is listening.

## The Claude Code plugin

Markdown files only: one skill that tells Claude Code when to use the tools, a few slash commands, and an entry that registers `openmd mcp`. [Plugin skills](/docs/agent/plugin-skills/).
