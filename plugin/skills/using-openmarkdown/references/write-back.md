# Write-back — content-anchored edits into the live buffer

The single home for write-back discipline. The thin core (SKILL.md) and the `show` / `co-edit` commands route here; they do not restate this. `read_note` / `edit_note`'s tool descriptions own the contract (parameters, return shapes, states) — this playbook owns *when and how to combine them*.

Only reach for this if `read_note` and `edit_note` appear in your tool list.

## Edit in place, never rewrite

- Changing a markdown note the user may have open in OpenMarkdown? `read_note` → `edit_note`, not a whole-file rewrite with your own file tools. The edit lands inside the user's live editor without touching what they are typing; a rewrite races their unsaved edits and can silently lose them.
- `read_note` is also the only way to see the user's *unsaved* edits — while a note is open and dirty, your own file tools read a stale disk copy.

## Pick the edit by what you are changing

`edit_note` takes a list of `edits`, applied together, all or nothing:

- **One exact piece of text** — `{old_text, new_text}`. Ticking a task, fixing a line, renaming a term. `old_text` must occur exactly once; on `AMBIGUOUS_TEXT` include more of the surrounding text. Works anywhere, including above the first heading and in frontmatter. This is the default: it is the smallest, safest edit.
- **Adding** — `{heading, append}` / `{heading, prepend}` (no heading = the note's end/start). No hash needed.
- **Rewriting a whole section** — `{heading, replace, baseHash}` with the `baseHash` from `read_note` of that section.
- Several changes at once? Put them in one call — one undo step for the user, and nothing lands half-done.

## Why the user's typing doesn't get in your way

Every edit is matched against the note **as it is when it is applied**, by its content (the exact old text, or the heading) — never by a position you read earlier. So the user can keep typing anywhere, even in the same section, and your `old_text` edit still lands as long as that exact text is still there. You only hear back when something you depend on really changed:

- `NOT_FOUND` / `AMBIGUOUS_TEXT` — the text you anchored on is gone or now appears twice: read again, re-anchor.
- `CONFLICT` (replace only) — the section changed since you read it; it carries the current content and a fresh `baseHash`. Regenerate against what's actually there. **Never resend the same content blindly.**
- `OVERLAPPING_EDITS` — two of your edits claim the same text; merge them.

The answer gives fresh per-section `hashes` for what you touched, so a follow-up `replace` needs no extra read.

## When the app is closed

The note tools keep working with the app closed: they read and write the file on disk, one writer at a time (`NOTE_BUSY` means another writer held the note for a few seconds — try again). Older OpenMarkdown versions answered `NOT_RUNNING` instead — that is still a safe-fallback signal, not an error to retry: editing the file directly with your own tools is then correct.

## Notes in the cloud copy

A path from `list_files` / `search` that starts with `cloud:` is a note only in the user's OpenMarkdown cloud copy. Pass it unchanged to `read_note` / `edit_note`: the server reaches the cloud for you (answers say `where: "cloud"` — the version last synced, no live buffer). The same rules apply; if the user changed the same lines on another computer, the cloud keeps their version beside the note as a conflict file.

## After a write

`reveal` the section the user should look at — but only when it matters. Mechanical updates don't need their eyes pulled over.
