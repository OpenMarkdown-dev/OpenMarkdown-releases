---
description: One-line connectivity check — is OpenMarkdown reachable, what version, and what are you watching.
---

Report OpenMarkdown's connectivity in one line. Recipe:

1. **Probe** — call `get_context` **once**. Read `running`, `version`, `degraded`, and the current `folder` / `active` file.
2. **Report** a single summary line, using the skill's state semantics:
   - `running:false` → "OpenMarkdown isn't running." State it plainly and **stop — do not retry** (a read-only probe never launches the app).
   - `degraded:true` (tray-resident, no window) → "running, no window open" — the snapshot is last-known, so frame `active`/`folder` in the past tense.
   - otherwise → "running (v<version>), showing `<active>`".
   - If `version` looks older than what these commands or the skill assume and calls are misbehaving, say the app may need updating.
3. **Watching / listening** — append what *this* session currently holds open: the files under a `wait_for_change` co-edit watch, and whether you are on a workspace's sidebar intercom — "watching N file(s): …", "listening on `<folder>`", or "not watching anything". This is your own state — `get_context` reports the app's view, not a waiter count.

Keep it to one line unless something is wrong. Never sit in a loop re-probing.
