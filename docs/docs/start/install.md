# Install

OpenMarkdown is free and needs no account.

## Download

| Platform | Download | Notes |
| --- | --- | --- |
| macOS | [OpenMarkdown.dmg](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases/latest/download/OpenMarkdown.dmg) | Apple silicon and Intel. Signed and notarized: open the disk image, drag OpenMarkdown to Applications, double-click. |
| Linux | [OpenMarkdown.AppImage](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases/latest/download/OpenMarkdown.AppImage) | x64. Make it executable (`chmod +x OpenMarkdown.AppImage`), then run it. |
| Windows | [OpenMarkdown-setup.exe](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases/latest/download/OpenMarkdown-setup.exe) | x64. The editor and viewer only — see below. |

Older versions are on the [releases page](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases).

## Windows: what you get

On Windows, OpenMarkdown is a full Markdown editor: open a `.md` by double-clicking it. Working with an agent — the MCP server, the sidebar terminal and the intercom — runs on macOS and Linux only. To use it from Windows today, run the Linux build under [WSL](https://learn.microsoft.com/windows/wsl/install). See [Platform support](/docs/reference/platforms/).

## First launch

OpenMarkdown opens on a Welcome note, a real file at `~/OpenMarkdown/Welcome.md`. Its first half is a short tour you type your way through; its second half is for when you connect an agent. You can open it again any time from the command palette: **Open Welcome guide**.

## Turn on the command-line tool

To let agents in your own terminal reach OpenMarkdown, turn on **Settings → System integration → Command-line tool (openmd)**. That puts `openmd` on your PATH. Check it:

```sh
openmd status
```

Agents you start in OpenMarkdown's own sidebar terminal use a copy of `openmd` that ships with the app, so they work even with this switch off.

## Updates

When a new version is out, OpenMarkdown downloads it in the background and asks you to restart. Nothing is installed until you say so, and an update check that fails (offline, say) stays silent.

## Next

[Quick start](/docs/start/quick-start/): from an empty folder to your agent editing a note, in five steps.
