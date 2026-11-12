# Server-side rendering

Importing `@openmarkdown-dev/editor` does not touch `window` or `document`, so the package can be
imported by code that also runs on the server (Next.js, Nuxt, SvelteKit, Astro and the like).
Every build checks this by importing the package in plain Node.

Mounting needs a DOM. Create and mount the editor only in browser code: an effect, an
`onMounted` hook, a client-only component.

```tsx
"use client";
import { useEffect, useRef } from "react";
import { createEditorState, mountEditor } from "@openmarkdown-dev/editor";

export function Editor({ doc }: { doc: string }) {
  const el = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const editor = mountEditor(el.current!, createEditorState({ doc }));
    return () => editor.destroy();
    // Mount once; see the React guide for pushing later changes in.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div ref={el} style={{ height: 480 }} />;
}
```

## What the server can render

The server renders the empty parent element. If the page should show the document before the
script runs, render it yourself (as preformatted text or with any Markdown renderer) inside the
parent and clear it when the editor mounts.

## Bundle splitting

Math (Temml) and diagrams (Mermaid) are loaded with `import()` the first time a document shows
math or a diagram. Your bundler splits them into separate chunks; neither is in the first load
of a page whose documents have none.
