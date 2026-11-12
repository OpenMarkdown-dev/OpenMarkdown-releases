import{r,u as d}from"./index-DdGPNERJ.js";import"./preload-helper-BE6tXj1V.js";const o=new Map;let c=0;const l={async saveAttachment(e,n,s){const t=`uploads/${++c}-${(s??"image").replace(/[^\w.-]+/g,"-")}`;o.set(t,URL.createObjectURL(new Blob([n.slice()])));const a=document.createElement("li");return a.textContent=`${t} (${n.length} bytes)`,document.getElementById("uploads").append(a),t},resolveImage:e=>o.get(e)??(e.startsWith("https://")?e:null)};r(document.getElementById("editor"),d({doc:`# Paste an image

Copy a screenshot and paste it here, or drop an image file. Drag its corner to resize.

`,docPath:"/notes/example.md",host:l}));
