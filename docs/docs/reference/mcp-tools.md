# OpenMarkdown MCP server

OpenMarkdown's MCP server is `openmd mcp`: the app you installed, answering over stdio. It gives your agent **13 tools**. Their names, descriptions and parameters below are exactly what the server sends your agent when it asks for its tools.

To connect an agent, see [Connect your agent](/docs/start/connect/).

## At a glance

| Tool | Use it to |
| --- | --- |
| [`list_files`](#list_files) | List the user's notes: on this computer (the folders OpenMarkdown knows — its homes and the synced folder — plus this server's working folder when it is a project) and, when the user is signed in to OpenMarkdown Anywhere, the ones only in their cloud copy. |
| [`search`](#search) | Find text in the user's notes. |
| [`read_note`](#read_note) | Read a markdown note, or one section of it. |
| [`edit_note`](#edit_note) | Change a note in place. |
| [`create_note`](#create_note) | Create a new note; never overwrites (EXISTS: edit that note instead). |
| [`get_context`](#get_context) | See what the user has open in OpenMarkdown: folder, tabs, active file, selected text, the heading currently in view (visibleHeading — its section anchor, pass it unchanged as read_note's heading), and executable command ids. |
| [`open_file`](#open_file) | Open a markdown file in OpenMarkdown, the user's markdown app. |
| [`open_folder`](#open_folder) | Open a folder as a workspace in OpenMarkdown. |
| [`reveal`](#reveal) | Scroll the user's OpenMarkdown view to a heading. |
| [`run_app_command`](#run_app_command) | Run an OpenMarkdown app command by id (pick from get_context's availableCommands). |
| [`wait_for_change`](#wait_for_change) | Block until the next thing happens, so you can react to the user's whiteboard without polling. |
| [`post_message`](#post_message) | Say one line back to the user in OpenMarkdown's agent sidebar. |
| [`my_account`](#my_account) | The user's OpenMarkdown account, through the app: whether they are signed in to OpenMarkdown Anywhere and, if so, the plan (free or Anywhere+), when it ends, storage used and its limit, and history days. |

## list_files

List the user's notes: on this computer (the folders OpenMarkdown knows — its homes and the synced folder — plus this server's working folder when it is a project) and, when the user is signed in to OpenMarkdown Anywhere, the ones only in their cloud copy. Every entry says where (local: an absolute path; cloud: cloud:<path>, the version last synced) — pass the path unchanged to the other tools. A note open in the OpenMarkdown editor is marked open: true (the active tab also active: true). When several notes match what the user names, prefer the one open in the OpenMarkdown editor (open: true; active: true first); ask the user only if that still leaves more than one. Reads the disk: unsaved typing is not reflected (read_note has it). Pages of 200 (pass nextOffset as offset). Read-only.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `folder` | string | no | Only notes inside this folder: an absolute folder on this computer, or a folder relative to each root (e.g. "projects"). Omit for all. |
| `offset` | integer | no | Start of the page: nextOffset from the previous answer. |

## search

Find text in the user's notes — the same places list_files covers, this computer first, then the cloud copy when signed in. Literal and case-insensitive (not a regex). Returns up to 100 matching lines (default 20), each with where, the path (pass it unchanged), the line number, the line, and the anchor of the section it is in (pass it to read_note as heading); a hit in a note open in the OpenMarkdown editor is marked open: true (active: true for the active tab). When several notes match what the user names, prefer the one open in the OpenMarkdown editor (open: true; active: true first); ask the user only if that still leaves more than one. Read-only.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `query` | string | yes | The text to find (at most 200 characters). |
| `folder` | string | no | Only inside this folder (absolute, or relative to each root). Omit for all notes. |
| `limit` | integer | no | Most matches to return (default 20, max 100). |

## read_note

Read a markdown note, or one section of it — use before editing, and to see the user's unsaved edits when the note is open in OpenMarkdown (your own file tools only see the stale disk copy). With a heading: the section content, its line range, and baseHash (that section's token, needed only to replace the whole section with edit_note). Omit heading for the outline (each section's anchor, ready to pass as heading) plus the whole note. Works with the app closed too (it then reads the file on disk). Read-only. Pass the path exactly as list_files or search gave it: an absolute path on this computer, or cloud:<path> for a note only in the user's OpenMarkdown cloud copy. This server decides where it goes (a file on this computer is always handled here; one that is not goes through the cloud copy when the user is signed in, else NOT_ON_THIS_COMPUTER), and the answer says where: local | cloud.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | string | yes | Path of an existing note: absolute on this computer, or exactly as list_files / search gave it (cloud:<path> for a cloud-only note). |
| `heading` | string | no | Heading text or `::`-separated ancestor path (e.g. "会议记录::行动项"); matched exact then case-insensitive, never by prefix; a trailing #k picks the k-th section when the rest names several, otherwise it is part of the text. A literal #, : or \\ in heading text is written \\#, \\: or \\\\ (heading `a::b` is `a\::b`). Anchors from the outline, AMBIGUOUS_HEADING candidates and get_context are already escaped — pass them unchanged. Omit for outline + whole document. |

## edit_note

Change a note in place — never rewrite it whole. `edits` is a list applied together, all or nothing; each edit is ONE of: {old_text, new_text} — replace an exact piece of text that occurs exactly once (the way to tick a task: `- [ ] call Anna` → `- [x] call Anna`; works anywhere, before the first heading too; NOT_FOUND or AMBIGUOUS_TEXT otherwise: copy it from read_note and include more of the surrounding text); {heading?, append | prepend: markdown} — add at the end/start of a section's body (no heading = the note's end/start; prepend lands after YAML frontmatter; no hash needed); {heading, replace: markdown, baseHash} — swap a whole section's body (children included, the heading line stays), baseHash from read_note required: on CONFLICT you get that section's current content and a fresh baseHash. Every edit is matched against the note as it is at the moment it is applied, so the user typing elsewhere — even in the same section — never gets in the way, and nothing they typed is lost; two edits claiming the same text are OVERLAPPING_EDITS. If any edit fails nothing is applied (the error names it by index). When the note is open in OpenMarkdown the edits land in the user's editor as one change; with the app closed they are written on disk, one writer at a time. The answer has applied, where, and the fresh baseHash of every section it touched (hashes, by anchor). Never creates notes (create_note does). Pass the path exactly as list_files or search gave it: an absolute path on this computer, or cloud:<path> for a note only in the user's OpenMarkdown cloud copy. This server decides where it goes (a file on this computer is always handled here; one that is not goes through the cloud copy when the user is signed in, else NOT_ON_THIS_COMPUTER), and the answer says where: local | cloud.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | string | yes | Path of an existing note: absolute on this computer, or exactly as list_files / search gave it (cloud:<path> for a cloud-only note). Never creates notes. |
| `edits` | array | yes | The edits, applied together (at most 50). Each is {old_text, new_text}, or {heading?, append}, or {heading?, prepend}, or {heading, replace, baseHash}. |
| `recreateAfterErase` | boolean | no | Only for a note in the cloud copy, after a VAULT_ERASED answer and the user's explicit yes: start a new cloud copy and write. Never set it on your own. |

## create_note

Create a new note; never overwrites (EXISTS: edit that note instead). The path must end in .md, .markdown, .mdx or .txt; folders are created as needed. An absolute path (or one relative to this server's working folder) creates it on this computer; cloud:<path> creates it in the user's OpenMarkdown cloud copy — in their synced folder when it is on this computer (sync carries it up), else directly in the cloud when they are signed in. Works with the app closed.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | string | yes | Absolute path on this computer, or cloud:<path> (relative, `/`-separated) for the cloud copy. |
| `content` | string | no | The note's markdown. Omit for an empty note. |
| `recreateAfterErase` | boolean | no | Only for a note in the cloud copy, after a VAULT_ERASED answer and the user's explicit yes: start a new cloud copy and write. Never set it on your own. |

## get_context

See what the user has open in OpenMarkdown: folder, tabs, active file, selected text, the heading currently in view (visibleHeading — its section anchor, pass it unchanged as read_note's heading), and executable command ids. Read-only — never launches the app; returns {"running":false} when it is not running. {"degraded":true} means the app is running without an open window (or the UI did not answer): only a possibly-stale folder/tabs/active snapshot is available, and live fields (selection, visibleHeading, availableCommands) stay unavailable until the user opens a window — retrying will not help. Every response includes version (the installed OpenMarkdown version).

No parameters.

## open_file

Open a markdown file in OpenMarkdown, the user's markdown app — use to put a file in front of the user. An image (png, jpg, gif, webp, svg) opens read-only in the viewer beside the document instead of as a tab — use it to show a chart or screenshot you produced. Launches the app if it is not running; creates a missing markdown file, but a missing image is an error.

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
| `heading` | string | no | Heading text or `::`-separated ancestor path, the same anchor read_note takes; matched exact then case-insensitive, never by prefix (several matches scroll to the first; a trailing #k picks the k-th when the rest names several sections; a literal #, : or \\ in heading text is written \\#, \\: or \\\\). |

## run_app_command

Run an OpenMarkdown app command by id (pick from get_context's availableCommands) — the escape hatch for actions without a dedicated tool. Acts on the user's live window; fails with NOT_RUNNING when the app is not running and NO_WINDOW when it is running tray-resident without a window.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | yes | Command id, e.g. "file.openTodayNote". |

## wait_for_change

Block until the next thing happens, so you can react to the user's whiteboard without polling. TWO WAKE SOURCES, and you choose which by what you pass (at least one is required): path = that file's content changed (the user saved an edit, or another writer touched it); workspace = the user sent you a message from that workspace's agent sidebar (the intercom). Pass both to wait on either. WHO GETS A MESSAGE: each intercom message is assigned to the ONE agent session the user selected in the intercom — not to whoever waited first — and only agents running in OpenMarkdown's own in-app terminal (the sidebar terminal) can receive intercom messages at all. A wait from an agent anywhere else is never woken by the intercom (its file changes and timeouts work exactly as usual), so listening only makes sense from inside the app's terminal. The two are accounted separately — an auto-save NEVER wakes a workspace-only wait, which is the point: a sidebar send is the user's explicit "I'm done typing", so it wakes you immediately with no settle delay, while file changes are debounced until writing goes quiet. Use in a loop: wake → see which source → re-read the file (never act on what you cached before the wait) → act → wait again. Returns {"changed":true,"exists":true} on a real content change (a delete is a change with exists:false), {"messages":[{"text":…,"context":…}]} on sidebar messages, {"changed":false,"timedOut":true} on timeout, or {"changed":false,"cancelled":true} when the user interrupted you while you were waiting — all normal returns, not errors; when you passed a workspace, "source" also names the wake source outright ("file" / "message" / "timeout" / "cancelled"). TIMEOUT AND CANCELLED CALL FOR OPPOSITE THINGS: a timeout means nothing happened yet, so wait again; cancelled means the user reached in and stopped you, so LEAVE THE LOOP — waiting again would undo what they just did. `messages` is ALWAYS a list, and may hold MORE THAN ONE: anything the user said while you were busy is batched into a single wake, in the order they said it. Read them all before acting — consecutive lines usually amend each other ("change this bit" … "actually change that one instead"), so treat them as one request, not as N independent tasks. Each message's context carries POSITION ONLY (file path, section heading, selection line range) — never the quoted text, so read_note it yourself to see the current content rather than a stale snapshot. Blocks THIS server: other OpenMarkdown tool calls queue behind it until it returns, so make it the last call in a loop iteration. Fails with NOT_RUNNING when the app is not running (poll with your own file tools instead) and NOT_FOUND when a given path does not exist.

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

## my_account

The user's OpenMarkdown account, through the app: whether they are signed in to OpenMarkdown Anywhere and, if so, the plan (free or Anywhere+), when it ends, storage used and its limit, and history days. Use it for questions like "when does my plan end?" or "how much space is left?". Signed out → signedIn:false and how to sign in; available:false means this OpenMarkdown has no cloud features. It cannot upgrade, renew or cancel: point the user to the account page in the app. Read-only.

No parameters.
