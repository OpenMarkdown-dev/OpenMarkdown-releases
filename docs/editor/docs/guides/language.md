# UI language

The editor draws a few words of its own: the find panel, the copy and fold buttons, the
properties block, and image and link chips. They ship in four languages:

| Code | Language |
| --- | --- |
| `"en"` | English (the default) |
| `"zh"` | Chinese (Simplified) |
| `"ja"` | Japanese |
| `"ko"` | Korean |

Choose one with the environment, before the first editor mounts:

```ts
import { configureEditorEnvironment } from "@openmarkdown-dev/editor";

configureEditorEnvironment({ language: "ja" });
```

- The editor does not guess from the browser. Without `language`, or with a code it does not
  ship, it speaks English, so it behaves the same in every host and your app stays the one place
  that decides the language.
- The language is read when a word is drawn. Words already on screen do not redraw when you call
  `configureEditorEnvironment` again; mount the editor again (or reload) to switch a live page.
- Your document text can be in any language. Only the editor's own controls are translated.
  CJK text and emoji are edited and measured as written (table columns count them as two
  columns wide).
