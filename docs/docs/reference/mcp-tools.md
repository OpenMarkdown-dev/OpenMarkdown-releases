# MCP tools

OpenMarkdown's MCP server is `openmd mcp`: the app you installed, answering over stdio. It gives your agent **nine tools**. Their names, descriptions and parameters below are exactly what the server sends your agent when it asks for its tools.

To connect an agent, see [Connect your agent](/docs/start/connect/).

## At a glance

| Tool | Use it to |
| --- | --- |
| [`open_file`](#open_file) | Open a markdown file in OpenMarkdown, the user's markdown app. |
| [`open_folder`](#open_folder) | Open a folder as a workspace in OpenMarkdown. |
| [`reveal`](#reveal) | Scroll the user's OpenMarkdown view to a heading. |
| [`get_context`](#get_context) | See what the user has open in OpenMarkdown: folder, tabs, active file, selected text, the heading currently in view (visibleHeading — its section anchor, pass it unchanged as read_section's heading), and executable command ids. |
| [`execute_command`](#execute_command) | Run an OpenMarkdown command by id (pick from get_context's availableCommands). |
| [`read_section`](#read_section) | Read one section of a markdown note. |
| [`write_section`](#write_section) | Update one section of a markdown note in place. |
| [`wait_for_change`](#wait_for_change) | Block until the next thing happens, so you can react to the user's whiteboard without polling. |
| [`post_message`](#post_message) | Say one line back to the user in OpenMarkdown's agent sidebar. |

## open_file

Open a markdown file in OpenMarkdown, the user's markdown app — use to put a file in front of the user. Launches the app if it is not running; creates the file if it does not exist.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | string | yes | Path to the file (absolute preferred; relative resolves against the MCP server's cwd). |

## open_folder

Open a folder as a workspace in OpenMarkdown — use to put a whole project/notes directory in front of the user (a file tree in the sidebar), not a single file. Launches the app if it is not running. The path must be an existing directory.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | string | yes | Path to an existing directory (absolute preferred; relative resolves against the MCP server's cwd). |

## reveal

Scroll the user's OpenMarkdown view to a heading — use after editing a section the user should look at. Opens the file (launching the app if needed); omit heading to just open and activate.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | string | yes | Path to an existing file (absolute preferred). |
| `heading` | string | no | Heading text or `::`-separated ancestor path, the same anchor read_section takes; matched exact then case-insensitive, never by prefix (several matches scroll to the first; a trailing #k picks the k-th when the rest names several sections; a literal #, : or \\ in heading text is written \\#, \\: or \\\\). |

## get_context

See what the user has open in OpenMarkdown: folder, tabs, active file, selected text, the heading currently in view (visibleHeading — its section anchor, pass it unchanged as read_section's heading), and executable command ids. Read-only — never launches the app; returns {"running":false} when it is not running. {"degraded":true} means the app is running without an open window (or the UI did not answer): only a possibly-stale folder/tabs/active snapshot is available, and live fields (selection, visibleHeading, availableCommands) stay unavailable until the user opens a window — retrying will not help. Every response includes version (the installed OpenMarkdown version).

No parameters.

## execute_command

Run an OpenMarkdown command by id (pick from get_context's availableCommands) — the escape hatch for actions without a dedicated tool. Acts on the user's live window; fails with NOT_RUNNING when the app is not running and NO_WINDOW when it is running tray-resident without a window.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | yes | Command id, e.g. "file.openTodayNote". |

## read_section

Read one section of a markdown note — use before editing a section, and to see the user's unsaved edits when the file is open in OpenMarkdown (your own file tools only see the stale disk copy). Returns the section content, its line range, and baseHash — the concurrency token write_section needs. Omit heading for the outline (each section's anchor, ready to pass as heading) plus whole content. Read-only; fails with NOT_RUNNING when the app is not running (then your own file tools are the right fallback).

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | string | yes | Path to an existing markdown file (absolute preferred). |
| `heading` | string | no | Heading text or `::`-separated ancestor path (e.g. "会议记录::行动项"); matched exact then case-insensitive, never by prefix; a trailing #k picks the k-th section when the rest names several, otherwise it is part of the text. A literal #, : or \\ in heading text is written \\#, \\: or \\\\ (heading `a::b` is `a\::b`). Anchors from the outline, AMBIGUOUS_HEADING candidates and get_context are already escaped — pass them unchanged. Omit for outline + whole document. |

## write_section

Update one section of a markdown note in place — prefer this over rewriting the whole file whenever OpenMarkdown may have it open: the change lands inside the user's live buffer without touching what they are typing elsewhere. append/prepend insert at the section body's end/start (no heading = document end/start); replace swaps the section body (heading line stays) and requires baseHash from read_section — on CONFLICT you get the current content and a fresh baseHash to retry with. Fails with NOT_RUNNING when the app is not running (then editing the file directly is safe — no live buffer to protect).

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | string | yes | Path to an existing markdown file (absolute preferred). Never creates files. |
| `heading` | string | no | Target section: heading text or `::`-separated ancestor path, the same anchor read_section takes (pass its outline / candidate anchors unchanged); exact then case-insensitive, never by prefix; a trailing #k picks the k-th section when the rest names several; a literal #, : or \\ in heading text is written \\#, \\: or \\\\. Omit to append/prepend at document level (prepend lands after YAML frontmatter; document-level replace is rejected). |
| `operation` | `"append"` or `"prepend"` or `"replace"` | yes | append/prepend = insert at body end/start; replace = swap the section body (children included), keeping the heading line. |
| `content` | string | yes | Markdown to write. Blank-line separation towards surrounding content is added automatically. |
| `baseHash` | string | no | Concurrency token from read_section. Required for replace; optional for append/prepend. |

## wait_for_change

Block until the next thing happens, so you can react to the user's whiteboard without polling. TWO WAKE SOURCES, and you choose which by what you pass (at least one is required): path = that file's content changed (the user saved an edit, or another writer touched it); workspace = the user sent you a message from that workspace's agent sidebar (the intercom). Pass both to wait on either. WHO GETS A MESSAGE: each intercom message is assigned to the ONE agent session the user selected in the intercom — not to whoever waited first — and only agents running in OpenMarkdown's own in-app terminal (the sidebar terminal) can receive intercom messages at all. A wait from an agent anywhere else is never woken by the intercom (its file changes and timeouts work exactly as usual), so listening only makes sense from inside the app's terminal. The two are accounted separately — an auto-save NEVER wakes a workspace-only wait, which is the point: a sidebar send is the user's explicit "I'm done typing", so it wakes you immediately with no settle delay, while file changes are debounced until writing goes quiet. Use in a loop: wake → see which source → re-read the file (never act on what you cached before the wait) → act → wait again. Returns {"changed":true,"exists":true} on a real content change (a delete is a change with exists:false), {"messages":[{"text":…,"context":…}]} on sidebar messages, {"changed":false,"timedOut":true} on timeout, or {"changed":false,"cancelled":true} when the user interrupted you while you were waiting — all normal returns, not errors; when you passed a workspace, "source" also names the wake source outright ("file" / "message" / "timeout" / "cancelled"). TIMEOUT AND CANCELLED CALL FOR OPPOSITE THINGS: a timeout means nothing happened yet, so wait again; cancelled means the user reached in and stopped you, so LEAVE THE LOOP — waiting again would undo what they just did. `messages` is ALWAYS a list, and may hold MORE THAN ONE: anything the user said while you were busy is batched into a single wake, in the order they said it. Read them all before acting — consecutive lines usually amend each other ("change this bit" … "actually change that one instead"), so treat them as one request, not as N independent tasks. Each message's context carries POSITION ONLY (file path, section heading, selection line range) — never the quoted text, so read_section it yourself to see the current content rather than a stale snapshot. Blocks THIS server: other OpenMarkdown tool calls queue behind it until it returns, so make it the last call in a loop iteration. Fails with NOT_RUNNING when the app is not running (poll with your own file tools instead) and NOT_FOUND when a given path does not exist.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | string | no | Path to an existing markdown file (absolute preferred). Wakes on that file's content changing. |
| `workspace` | string | no | Workspace root directory (the folder the user has open; get_context's `folder`). Wakes on a message the user sends from that workspace's agent sidebar. |
| `name` | string | no | What you call yourself, e.g. "codex". Display only: the intercom names you by your terminal session (e.g. "cat"); for an agent the user started by hand in a shell tab this is shown after that name ("cat · codex"). The app stores nothing and infers nothing from it. |
| `timeout_seconds` | integer | no | Max seconds to block before returning timedOut (default 120, max 600). |

## post_message

Say one line back to the user in OpenMarkdown's agent sidebar — for answers that do NOT change a file ("that syntax is fine", "done, but the third item needs your call"), which would otherwise have nowhere to go but the document. Touches no file. It lands in the intercom of the home whose in-app terminal you are running in, attributed to your session — never in whatever the user happens to be looking at. Fire-and-forget with NO delivery guarantee: if the app is not running, the sidebar is unavailable, or you are not running in OpenMarkdown's own terminal (an agent outside the app is not on the intercom), the message is dropped silently and this still succeeds — never retry, and if it truly matters, write it into the file instead. Say the RESULT, not the work: no tool names, no step-by-step, no thinking, no restating the text you just wrote (the user can see the document). One or two sentences; if you need a decision from the user, ask for it and stop.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | string | yes | The line to show, plain text. Only inline `code` and line breaks render; every other markdown mark shows as literal text. |
