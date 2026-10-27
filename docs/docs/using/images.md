# Images and attachments

## Adding an image

Drag an image into a note, or paste one. OpenMarkdown saves it in an `attachments/` folder next to the note and inserts a relative link:

```markdown
![](attachments/screenshot.png)
```

It never overwrites a file that is already there. Because the link is relative, the note and its images move together, and GitHub shows them too.

Links to images on the web work as well: `![](https://…)`.

## Resizing

In live preview, point at an image and drag the handle in its bottom-right corner. The height follows the width. Let go and the width is written into the file:

```markdown
![|320](attachments/screenshot.png)
```

One undo puts it back; <kbd>Esc</kbd> while dragging cancels. You can also type the size yourself, as a width (`|320`) or width and height (`|320x200`). The rules, and how GitHub shows it: [Markdown dialect → Image size](/docs/reference/markdown/#image-size).

Images without a size scale with the editor zoom.

## What shows

Local images render when they are in the note's folder or below it. An image the editor can't show displays its Markdown instead.
