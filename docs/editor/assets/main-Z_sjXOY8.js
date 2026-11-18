import{u as r,v as s}from"./index-DjIQYmtE.js";import"./preload-helper-BE6tXj1V.js";const o=new Map;let l=0;const d={async uploadImage(e,a){const t=`uploads/${++l}-${(a??"image").replace(/[^\w.-]+/g,"-")}`;o.set(t,URL.createObjectURL(new Blob([e.slice()])));const n=document.createElement("li");return n.textContent=`${t} (${e.length} bytes)`,document.getElementById("uploads").append(n),t},resolveImage:e=>o.get(e)??(e.startsWith("https://")?e:null)};r(document.getElementById("editor"),s({doc:`# Paste an image

Copy a screenshot and paste it here, or drop an image file. Drag its corner to resize.

`,host:d}));
