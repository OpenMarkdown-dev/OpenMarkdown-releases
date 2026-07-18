---
name: using-openmarkdown
description: Use when producing or editing markdown documents for a user who has OpenMarkdown installed — put documents in front of them via open_file/reveal, sense what they are looking at via get_context, edit notes they may have open section-by-section via read_section/write_section instead of whole-file rewrites, respond correctly to running:false/degraded/NO_WINDOW states instead of retrying or guessing, and — only when the user asks you to watch — hold a file open as a live inbox with wait_for_change instead of polling.
---

# Using OpenMarkdown as a shared whiteboard

OpenMarkdown is the user's markdown app. Files are shared memory between you and the user; the app renders them. The tool contracts (parameters, return shapes, state definitions) live in the tool descriptions — this skill is about when and how to combine them.

## The very first run

Right after the plugin/MCP is first installed, your job is a 30-second live demo, not a feature tour: open a note, write in it while the user watches, then have them write back so they feel the file is shared both ways. The full script — the consent gate, the keeper note at `~/OpenMarkdown/Welcome_to_openmd_agent.md`, the three beats, and the graceful degrade — is in `references/first-run-guide.md`. Follow it; don't improvise your own onboarding and don't skip it silently. Ask once before you open anything (unless the user's install request already said to open a note), and never sit in an unbounded `wait_for_change`.

## When to reach for it

- You just wrote or substantially edited a markdown document the user should read → `open_file` it (or `reveal` straight to the section that matters). Don't make them ask "where is it?".
- The conversation zooms in on one section of an open document → `reveal` with that heading, so their view follows the discussion.
- You need to know what the user is working on, has selected, or is currently reading → `get_context` first, before asking them.
- Something needs doing in the app that no dedicated tool covers → `execute_command`, but see the discipline below.

## Reading the states

- `running: false` — the app is closed. Say so if relevant; `open_file`/`reveal` will launch it when you actually have something to show. Never call `get_context` in a loop hoping it comes up.
- `degraded: true` — almost always the app is tray-resident with **no window at all**. The snapshot is the user's *last-known* state: lead with that framing and report it in the past tense ("the last thing you had open was…"), never assert it as what is open right now — the tabs it lists may have been closed since. Recovery means opening a window: `open_file` the relevant document yourself, or ask the user to open one; "bring the window to the front" is meaningless when none exists. Don't retry — nothing improves until a window opens.
- `NO_WINDOW` vs `NOT_RUNNING` from `execute_command` — running-without-a-window vs not running at all. Either way the command had no live UI; if the action still matters, `open_file` something relevant first (that creates a window), then retry once.

## Escape-hatch discipline

Call `get_context` and pick an id from `availableCommands` before any `execute_command`. Never guess command ids — a typo'd id is indistinguishable from a missing feature.

## Write-back discipline

If `read_section` and `write_section` appear in your tool list:

- Editing a markdown file the user may have open in OpenMarkdown? Prefer `read_section` → `write_section` over rewriting the whole file with your own file tools. The section write lands inside the user's live buffer without touching what they are typing elsewhere; a whole-file rewrite races their unsaved edits and can silently lose them.
- `read_section` is also the only way to see the user's *unsaved* edits — while a file is open and dirty, your own file tools read a stale disk copy.
- `replace` requires the `baseHash` from `read_section`. A `CONFLICT` reply means the section changed under you — it carries the current content and a fresh `baseHash`: regenerate against what's actually there and retry with the new hash. Never resend the same content blindly.
- `NOT_RUNNING` is a safe-fallback signal, not an error to retry: with no app there is no live buffer to protect, so editing the file directly with your own tools is correct.
- After a write the user should look at, `reveal` that section — but only when it matters. Mechanical updates don't need their eyes pulled over.

## Standing watch (the whiteboard inbox)

If `wait_for_change` appears in your tool list, you can hold a file open as a shared inbox instead of polling — **but only when the user has explicitly asked you to watch**. Standing watch spends tokens on every save; never enter it on your own initiative.

The loop is: `wait_for_change` on the file → it returns → **re-read the file** (`read_section`, or your own file tools if the app is closed) → act on what's new → wait again. The return tells the two cases apart: a real change is `{changed:true}` (a delete is `changed:true, exists:false`); a clean `{changed:false, timedOut:true}` just means nothing moved before the timeout — loop and wait again, it is not an error. Always re-read before acting: a wait only returns *because* something moved, so whatever you cached before it is stale by definition.

Prefer a short `timeout_seconds` in a loop over one long hang — MCP clients time long calls out, and `wait_for_change` blocks this server, so make it the last call in an iteration: anything else you send queues behind it.

### `@agent` markers

The convention for the user to hand you work in-band is a checklist item addressed to an agent:

- `- [ ] @agent <request>` — a bare marker any watching agent may take.
- `- [ ] @agent(<name>) <request>` — a named marker only the agent with that name should take; leave others' alone.

When you finish one, **tick it and sign** as the receipt, e.g. `- [x] @agent summarize the notes above ✓claude 2026-07-11`. A ticked marker is done — **never reprocess it**. That idempotence is what makes your own write-back safe: you save, the save wakes you, you re-read, see only ticked markers, and wait again.

If more than one agent watches the same file, claim before you work: `write_section` (replace, with the `baseHash` you just read) to mark the task line as yours (append something like `⏳claude`). The baseHash is the lock — a second claimant gets `CONFLICT`, re-reads, sees it taken, and backs off. No new mechanism, just the write-back concurrency you already use.

`NOT_RUNNING` means the app — and its file watcher — isn't up: tell the user to open OpenMarkdown, or fall back to polling the file yourself with a sleep between reads. `NOT_FOUND` means the path is wrong; don't wait on a file that doesn't exist.

## When things fail

- Spawning `openmd` fails (command not found): the CLI isn't installed. Point the user to OpenMarkdown's settings → "Install command line tool". Don't retry until they confirm.
- `get_context` returns a `version` older than what a tool or field mentioned here seems to assume, and calls are failing oddly: the user's app is older than this skill — suggest updating OpenMarkdown, and work with the tools that do respond.

## Restraint

- One document, one window: if a file is already in the user's tabs (check `get_context`), `reveal` beats a second `open_file` — and for small edits to a file they already have open, do nothing; the app live-reloads.
- Don't pop windows during rapid-fire edits. Open once when the deliverable is ready to read, reveal as the discussion moves.
- Pure Q&A with no document involved needs no OpenMarkdown calls at all.

Capabilities that may exist in newer versions (forms, diff review) are documented in `references/` when they land — only rely on a tool if it actually appears in your tool list.
