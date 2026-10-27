# CLI

`openmd` is OpenMarkdown's command-line tool. Turn it on in the app under **Settings → System integration → Install the command-line tool**. This page is generated from the same text `openmd --help` prints.

## Commands

| Command | What it does |
| --- | --- |
| `openmd [open] [OPTIONS] <file>...` | open file(s) in OpenMarkdown |
| `openmd [open] <folder>` | open a folder as a workspace (an existing directory, or `openmd .`; not combinable with --wait or files) |
| `openmd reveal [--json] <file> [heading]` | open a file and scroll to a heading (exact, then case-insensitive, never by prefix; `::` path and #k as in read_section; no heading = open and activate only) |
| `openmd status [--json]` | report app state (never launches the app) |
| `openmd mcp` | run an MCP server on stdio (for MCP clients to spawn, e.g. `claude mcp add openmd -- openmd mcp`; stays alive until stdin closes) |
| `openmd --version` | print the version and exit |
| `openmd --help` | print this reference in the terminal |

## Options

| Option | What it does |
| --- | --- |
| `--wait` | block until the tab is closed (single file only); suitable for EDITOR="openmd --wait" |
| `--source <name>` | label shown on the session tab (e.g. git, claude) |
| `--json` | machine-readable single-line JSON on stdout |

## Exit codes

| Code | Meaning |
| --- | --- |
| `0` | success; with --wait: the user finished (content saved to disk) |
| `1` | runtime error (connection failed, timeout, channel closed mid-wait, heading not found — the file is still opened; a folder path written with a trailing '/' that does not exist) |
| `2` | usage error (unknown command/flag; --wait or extra files with a folder) |
| `3` | with --wait: the user explicitly discarded the session |
