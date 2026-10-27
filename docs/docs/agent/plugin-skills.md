# Plugin skills

The Claude Code plugin `openmarkdown` adds one skill and four slash commands on top of the MCP tools. It is Markdown only: no hooks, nothing that runs on its own. Other agents get the [MCP tools](/docs/reference/mcp-tools/) without these.

## Skills

Claude Code reads a skill's description to decide when to use it; you do not call it yourself.

| Skill | When Claude uses it |
| --- | --- |
| `using-openmarkdown` | Use when producing or editing markdown documents for a user who has OpenMarkdown installed — put documents in front of them via open_file/reveal, sense what they are looking at via get_context, edit notes they may have open section-by-section via read_section/write_section instead of whole-file rewrites, respond correctly to running:false/degraded/NO_WINDOW states instead of retrying or guessing, and — only when the user asks you to watch or listen — hold a file open as a live inbox, or their workspace sidebar open as an intercom, with wait_for_change instead of polling. |

## Slash commands

Type these in Claude Code.

| Command | What it does |
| --- | --- |
| `/openmarkdown:co-edit [file]` | Start co-editing a markdown file live — put it in front of the user and stand watch for their edits. |
| `/openmarkdown:listen [folder]` | Listen on a workspace's OpenMarkdown sidebar — the user types there, you answer there. |
| `/openmarkdown:show [note title or topic]` | Put what you just produced in front of the user — land it in a file and open it, no "save it first" dance. |
| `/openmarkdown:status` | One-line connectivity check — is OpenMarkdown reachable, what version, and what are you watching. |
