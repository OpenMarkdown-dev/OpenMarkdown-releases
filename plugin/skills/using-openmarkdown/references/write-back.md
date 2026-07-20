# Write-back — section edits into the live buffer

The single home for section write-back discipline. The thin core (SKILL.md) and the `show` / `co-edit` commands route here; they do not restate this. `read_section` / `write_section`'s tool descriptions own the contract (parameters, return shapes, states) — this playbook owns *when and how to combine them*.

Only reach for this if `read_section` and `write_section` appear in your tool list.

## Prefer section writes over whole-file rewrites

- Editing a markdown file the user may have open in OpenMarkdown? Prefer `read_section` → `write_section` over rewriting the whole file with your own file tools. The section write lands inside the user's live buffer without touching what they are typing elsewhere; a whole-file rewrite races their unsaved edits and can silently lose them.
- `read_section` is also the only way to see the user's *unsaved* edits — while a file is open and dirty, your own file tools read a stale disk copy.

## The baseHash concurrency token

- `replace` requires the `baseHash` from `read_section`. A `CONFLICT` reply means the section changed under you — it carries the current content and a fresh `baseHash`: regenerate against what's actually there and retry with the new hash. **Never resend the same content blindly.**
- The same baseHash CAS is what makes multi-agent claiming safe (see `watch-loop.md`).

## When the app is closed

`NOT_RUNNING` is a safe-fallback signal, not an error to retry: with no app there is no live buffer to protect, so editing the file directly with your own tools is correct.

## After a write

`reveal` the section the user should look at — but only when it matters. Mechanical updates don't need their eyes pulled over.
