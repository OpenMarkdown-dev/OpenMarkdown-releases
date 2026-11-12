# Use it in any framework

The editor is plain TypeScript and DOM. Any framework that gives you an element after it is in
the page, and a hook for when it leaves, can host it. The pattern is always the same:

1. When the element is mounted, call `createEditorState` and `mountEditor`.
2. When the element is removed, call `editor.destroy()`.
3. Send changes up from `host.onChange`. Push outside changes in with `editor.setDoc`, only when
   they differ from `editor.getDoc()`.

## Vue

```vue
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { createEditorState, mountEditor, type MarkdownEditor } from "@openmarkdown-dev/editor";

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<{ "update:modelValue": [doc: string] }>();
const el = ref<HTMLDivElement>();
let editor: MarkdownEditor | null = null;

onMounted(() => {
  const state = createEditorState({
    doc: props.modelValue,
    host: { onChange: (doc, isUserEdit) => isUserEdit && emit("update:modelValue", doc) },
  });
  editor = mountEditor(el.value!, state);
});
watch(() => props.modelValue, (doc) => {
  if (editor && editor.getDoc() !== doc) editor.setDoc(doc);
});
onBeforeUnmount(() => editor?.destroy());
</script>

<template>
  <div ref="el" style="height: 480px" />
</template>
```

## Svelte

```svelte
<script lang="ts">
  import { onMount } from "svelte";
  import { createEditorState, mountEditor } from "@openmarkdown-dev/editor";

  export let doc = "";
  let el: HTMLDivElement;

  onMount(() => {
    const editor = mountEditor(el, createEditorState({
      doc,
      host: { onChange: (next, isUserEdit) => { if (isUserEdit) doc = next; } },
    }));
    return () => editor.destroy();
  });
</script>

<div bind:this={el} style="height: 480px"></div>
```

## Web component

```ts
import { createEditorState, mountEditor, type MarkdownEditor } from "@openmarkdown-dev/editor";

class MarkdownEditorElement extends HTMLElement {
  private editor: MarkdownEditor | null = null;

  connectedCallback() {
    const state = createEditorState({
      doc: this.textContent ?? "",
      host: {
        onChange: (doc, isUserEdit) => {
          if (isUserEdit) this.dispatchEvent(new CustomEvent("change", { detail: doc }));
        },
      },
    });
    this.textContent = "";
    this.editor = mountEditor(this, state);
  }

  disconnectedCallback() {
    this.editor?.destroy();
    this.editor = null;
  }
}
customElements.define("markdown-editor", MarkdownEditorElement);
```

## A plain `<script>` tag

Without a bundler, load the package and its peers from a CDN that resolves bare imports, for
example [esm.sh](https://esm.sh):

```html
<div id="editor" style="height: 480px"></div>
<script type="module">
  import { createEditorState, mountEditor } from "https://esm.sh/@openmarkdown-dev/editor";

  mountEditor(document.getElementById("editor"), createEditorState({ doc: "# Hello\n" }));
</script>
```
