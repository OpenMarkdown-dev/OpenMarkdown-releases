# configureEditorEnvironment

> **configureEditorEnvironment**(`env`): `void`

Provide the window-wide capabilities (`EditorEnvironment`). Call once at
startup, before the first editor mounts; a later call replaces the whole
environment. Optional: without it the editor is light, English, and has no
clipboard, external-link, spelling or host-key behaviour.

## Parameters

### env

[`EditorEnvironment`](/editor/docs/api/interfaces/editorenvironment/)

## Returns

`void`
