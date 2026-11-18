import{w as l,u as r,v as d}from"./index-I3-Tfd5X.js";import"./preload-helper-BE6tXj1V.js";const i=document.getElementById("editor"),e=document.getElementById("language");let t=null,n=`---
title: Language
tags: [demo]
---

# UI language

The editor's own words, like the property controls above and the find panel (Cmd/Ctrl+F), follow the language you pick.

\`\`\`js
console.log("the copy button's tooltip too");
\`\`\`
`;function o(a){t&&(n=t.getDoc(),t.destroy()),l({language:a}),t=r(i,d({doc:n}))}e.addEventListener("change",()=>o(e.value));o(e.value);
