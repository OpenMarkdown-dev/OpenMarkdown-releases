# configureEditorEnvironment

> **configureEditorEnvironment**(`env`): `void`

Set the page's defaults (`EditorEnvironment`): what every editor uses for a
member its own `environment` does not give, and the page-wide UI
`language`. Call once at startup, before the first editor mounts; a later
call replaces the whole set. Optional: without it (and without a per-editor
`environment`) the editor is light, English, and has no clipboard,
external-link, spelling or host-key behaviour.

## Parameters

### env

[`EditorEnvironment`](/editor/docs/api/interfaces/editorenvironment/)

## Returns

`void`
