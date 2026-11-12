import{v as c,r as h,u as i}from"./index-DJtWu5tj.js";import"./preload-helper-BE6tXj1V.js";const r=matchMedia("(prefers-color-scheme: dark)");let n=r.matches?"dark":"light";const t=new Set,o=e=>{n=e,t.forEach(s=>s(e))};r.addEventListener("change",()=>o(r.matches?"dark":"light"));c({colorScheme:{current:()=>n,subscribe(e){return t.add(e),()=>t.delete(e)}}});h(document.getElementById("editor"),i({doc:`# A serif editor

The font, the [link colour](https://openmarkdown.dev) and the corners come from \`--ome-*\` tokens.

> [!TIP]
> Light and dark each have their own defaults. The button switches between them.
`}));const d=document.getElementById("scheme"),a=()=>d.textContent=n==="dark"?"Light":"Dark";t.add(a);a();d.addEventListener("click",()=>o(n==="dark"?"light":"dark"));
