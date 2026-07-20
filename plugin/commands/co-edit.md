---
description: Start co-editing a markdown file live — put it in front of the user and stand watch for their edits.
argument-hint: [file]
---

Begin a live co-edit watch on **$ARGUMENTS** (if empty, ask which file, or infer the one this conversation is about — `get_context` can tell you what's open).

This is the user's explicit go-ahead to stand watch, so the skill's "watch only when asked" gate is met. **The loop semantics, `@agent` markers, claiming, and wind-down live in `references/watch-loop.md` — follow it.** This recipe only fixes the tool order:

1. **Probe** — `get_context`. Confirm the app is reachable and note `version`. Handle `running:false` / `degraded:true` per the SKILL's state semantics (opening the file in step 2 gets you a window).
2. **Present** — `open_file` the target (launches the app if closed), then `reveal` the section under discussion if there is one. Don't re-`open_file` a file already in their tabs — `reveal` instead.
3. **Stand watch** — enter the `wait_for_change` loop from `references/watch-loop.md` on the file (short `timeout_seconds` in a loop, last call each iteration; re-read on every wake before acting; process `@agent` markers idempotently). Editing on wake follows `references/write-back.md`.

Leave the loop cleanly when the user says stop, per the wind-down in `watch-loop.md`.
