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
- **Strict Mode** runs the effect twice in development. `destroy` in the cleanup removes the
  first editor before the second mounts.

## Next.js and other server renderers

Importing the package on the server is safe, and the effect only runs in the browser, so the
component above works in a server-rendered page as it is. See [SSR](/editor/docs/guides/ssr/).
