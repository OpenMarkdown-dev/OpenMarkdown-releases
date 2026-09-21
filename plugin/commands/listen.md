---
description: Listen on a workspace's OpenMarkdown sidebar — the user types there, you answer there.
argument-hint: [folder]
---

Start listening on the OpenMarkdown intercom for **$ARGUMENTS** (if empty, use the workspace `get_context` reports as `folder`; if there is none, ask which folder).

This is the user's explicit go-ahead, so the skill's "listen only when asked" gate is met. **The loop, the position-only context, and the five reply rules live in `references/intercom.md` — follow it.** This recipe only fixes the tool order:

1. **Probe** — `get_context`. Confirm the app is reachable, note `version`, and read `folder`. Handle `running:false` / `degraded:true` per the SKILL's state semantics. If `wait_for_change` does not take a `workspace`, or `post_message` is missing from your tool list, this app is too old — say so and stop.
2. **Announce yourself** — pass a `name` on the wait (your own, e.g. `claude`). The sidebar shows it verbatim so the user knows who picked up; the app stores nothing and infers nothing from it.
3. **Listen** — enter the "wait for the next thing" loop from `references/intercom.md` on that workspace (short `timeout_seconds`, last call each iteration; `read_section` the position rather than trusting a quote; reply with `post_message` under the five rules).

`co-edit` and `listen` are the two ways in and they compose: `co-edit` watches one FILE for changes, `listen` watches one WORKSPACE for messages. Passing both a `path` and a `workspace` to a single wait covers both at once — one loop, two wake sources, and the return says which fired.

Leave cleanly when the user says stop: finish the iteration, tell them you have stopped listening, start no further wait.
