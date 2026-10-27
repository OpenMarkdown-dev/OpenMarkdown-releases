function l(i){const t=i.split(`
`),n=t.findIndex(e=>!/^[ \t\r\f\v]*$/.test(e));if(n===-1||!/^- \[[xX]\] /.test(t[n]))return null;const r=t.slice(n+1),s=r.findIndex(e=>/\S/.test(e));return s===-1?null:r.slice(s).join(`
`).replace(/\n+$/,"")}export{l as approvedNotesBody};
