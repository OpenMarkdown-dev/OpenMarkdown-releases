# Standing watch — the whiteboard inbox

The single home for the co-edit watch loop. The thin core (SKILL.md) and the `co-edit` command route here; they do not restate this. `wait_for_change`'s tool description owns the contract (parameters, return shapes, states) — this playbook owns *how to run the loop*.

## The gate: only watch when explicitly asked

Standing watch spends tokens on every save, so **never enter it on your own initiative** — only when the user has explicitly asked you to watch. An explicit co-edit command (e.g. `/openmarkdown:co-edit <file>` if your host provides it) *is* that ask: it opens the file and runs this exact loop, so you don't need the user to spell out "watch it, re-read when it changes." Absent such a command, wait for the user to say so in words.

Only reach for this if `wait_for_change` actually appears in your tool list.

## The loop

`wait_for_change` on the file → it returns → **re-read the file** (`read_section`, or your own file tools if the app is closed) → act on what's new → wait again.

- The return tells the two cases apart: a real change is `{changed:true}` (a delete is `{changed:true, exists:false}`); a clean `{changed:false, timedOut:true}` just means nothing moved before the timeout — loop and wait again, it is **not** an error.
- **Always re-read before acting.** A wait only returns *because* something moved, so whatever you cached before it is stale by definition.
- Prefer a short `timeout_seconds` in a loop over one long hang — MCP clients time long calls out, and `wait_for_change` blocks the server, so make it the **last call in an iteration**: anything else you send queues behind it.
- When the user says stop (or the task is plainly done), leave cleanly: finish the in-flight iteration, tell them you've stopped watching, and don't start another `wait_for_change`.

`NOT_RUNNING` means the app — and its file watcher — isn't up: tell the user to open OpenMarkdown, or fall back to polling the file yourself with a sleep between reads. `NOT_FOUND` means the path is wrong; don't wait on a file that doesn't exist.

## What the user sees while you watch

While your `wait_for_change` is parked, OpenMarkdown lights that file's tab in the agent color so the user can see someone is watching. It's **presence-only**: it shows *that* an agent is watching, never *which* one (the app can't attribute a waiter to an identity). Your identity goes in the document — the `@agent` sign-off below — not in this indicator. The light goes out the moment your wait ends (wake, timeout, or disconnect).

## `@agent` markers

The convention for the user to hand you work in-band is a checklist item addressed to an agent:

- `- [ ] @agent <request>` — a bare marker any watching agent may take.
- `- [ ] @agent(<name>) <request>` — a named marker only the agent with that name should take; leave others' alone.

When you finish one, **tick it and sign** as the receipt, e.g. `- [x] @agent summarize the notes above ✓claude 2026-07-11`. A ticked marker is done — **never reprocess it**. That idempotence is what makes your own write-back safe: you save, the save wakes you, you re-read, see only ticked markers, and wait again.

## Claiming (multi-agent arbitration)

If more than one agent watches the same file, claim before you work: `write_section` (replace, with the `baseHash` you just read) to mark the task line as yours (append something like `⏳claude`). The baseHash is the lock — a second claimant gets `CONFLICT`, re-reads, sees it taken, and backs off. No new mechanism, just the write-back concurrency from `write-back.md`.

## The user sees you working (no marker needed)

You don't need to write anything to signal "I'm on it." While you `read_section` a section and then `write_section` it, OpenMarkdown gives the user an ephemeral glow on that section in the agent color — lit when you read, cleared when you write. So your natural read → think → write already shows "an agent is working here," bridging the seconds you spend thinking. It's presence-only (never names which agent) and touches nothing on disk. Your durable trace is the content you write and the `✓` you sign, not this glow.

## Section-by-section, not whole-file

Acting on watched work is editing — follow `write-back.md`: `read_section` → `write_section` into the user's live buffer, never a whole-file rewrite that races their unsaved edits.
