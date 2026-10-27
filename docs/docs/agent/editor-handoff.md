# $EDITOR handoff

Many command-line tools hand you a file to write and wait for you to finish: `git commit`, and Claude Code's <kbd>⌃G</kbd> to write a long prompt. Point them at OpenMarkdown and that file opens in a tab instead of in a terminal editor.

macOS and Linux.

## Set it up

Turn on **Settings → System integration → $VISUAL editor**. It needs the [command-line tool](/docs/start/install/#turn-on-the-command-line-tool) on first. New terminals then have:

```sh
export VISUAL="openmd --wait --source claude"
```

The line goes into `~/.zshrc` (and `~/.bash_profile` or `~/.bashrc` if you have one), inside a marked block. Turning the switch off removes the block and nothing else. A `VISUAL` you set yourself is left alone.

To do it by hand, for one tool, or for `EDITOR` instead:

```sh
export EDITOR="openmd --wait"
git config --global core.editor "openmd --wait"
```

## What you see

The file opens in its own tab, in [source mode](/docs/using/editor/#three-modes), since a commit message or a prompt is text for a program. A bar names who asked (`editing for: git`, from `--source`) and has two buttons:

| You | The tool gets |
| --- | --- |
| **Done**, <kbd>⌘↩</kbd>, or close the tab | Your text, saved. `openmd` exits `0` and the tool carries on. |
| **Discard** | `openmd` exits `3`. Git, for one, then aborts the commit. The file itself is not rolled back. |

Then the tab closes and you are back where you were.

## Details

`--wait` takes one file. Exit codes and the rest of the options: [CLI](/docs/reference/cli/).
