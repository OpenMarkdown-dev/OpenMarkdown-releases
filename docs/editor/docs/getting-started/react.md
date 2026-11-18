# Use it in React

There is no React wrapper to install. Mount the editor in an effect, and destroy it in the
effect's cleanup:

```tsx
import { useEffect, useRef } from "react";
import { createEditorState, mountEditor, type MarkdownEditor } from "@openmarkdown-dev/editor";

export function MarkdownField({ value, onChange }: { value: string; onChange: (doc: string) => void }) {
  const parent = useRef<HTMLDivElement>(null);
  const editor = useRef<MarkdownEditor | null>(null);
  const latest = useRef(onChange);
  latest.current = onChange;

  useEffect(() => {
    const state = createEditorState({
      doc: value,
      host: { onChange: (doc, isUserEdit) => isUserEdit && latest.current(doc) },
    });
    editor.current = mountEditor(parent.current!, state);
    return () => editor.current?.destroy();
    // Mount once; later `value` changes are pushed in below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (editor.current && editor.current.getDoc() !== value) editor.current.setDoc(value);
  }, [value]);

  return <div ref={parent} style={{ height: 480 }} />;
}
```

## Why it is written this way

- **Mount once.** Rebuilding the editor on every render would lose the caret, the selection
  and the undo history. The effect has no dependencies, and later `value` changes go in through
  `setDoc`.
- **Callbacks through a ref.** The editor reads `host` through the object on every call, so
  you can mutate it, or read the latest props through a ref as above, without rebuilding the
  state.
- **Only user edits go up.** `setDoc` is not a user edit, so `isUserEdit` keeps a `value`
  pushed in from props from being echoed back to `onChange`.
- **Options go to `createEditorState`.** Highlighted code blocks, for example, are an opt-in:
  `createEditorState({ doc: value, codeLanguages: languages, host })` with `languages` from
  `@codemirror/language-data` ([install](/editor/docs/getting-started/install/#highlighted-code-blocks)).
- **Strict Mode** runs the effect twice in development. `destroy` in the cleanup removes the
  first editor before the second mounts.

## Props that change: theme, read-only, keys

Options that can change while the editor lives have a setter on the handle, so a prop maps to
one effect. Each editor keeps its own values; two editors on one page can differ:

```tsx
import { useEffect, useRef } from "react";
import { createEditorState, mountEditor, type MarkdownEditor } from "@openmarkdown-dev/editor";

export function NoteEditor({ doc, dark, readOnly, onSave }: { doc: string; dark: boolean; readOnly: boolean; onSave: () => void }) {
  const parent = useRef<HTMLDivElement>(null);
  const editor = useRef<MarkdownEditor | null>(null);
  const save = useRef(onSave);
  save.current = onSave;

  useEffect(() => {
    editor.current = mountEditor(parent.current!, createEditorState({ doc, editable: !readOnly }));
    return () => editor.current?.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => editor.current?.setEditable(!readOnly), [readOnly]);
  useEffect(() => {
    editor.current?.setEnvironment({
      colorScheme: dark ? "dark" : "light",
      handleKey: (_view, e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === "s") {
          save.current();
          return true;
        }
        return false;
      },
    });
  }, [dark]);

  return <div ref={parent} style={{ height: 480 }} />;
}
```

`setEnvironment` replaces this editor's own environment (members you leave out fall back to the
page's defaults from `configureEditorEnvironment`), and a new color scheme applies at once. See
[the environment](/editor/docs/guides/environment/).

## Next.js and other server renderers

Importing the package on the server is safe, and the effect only runs in the browser, so the
component above works in a server-rendered page as it is. See [SSR](/editor/docs/guides/ssr/).
