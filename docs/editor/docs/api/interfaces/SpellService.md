# SpellService

A spell checker keyed by "spell document" numbers (one per top-level editor,
so the checker can keep per-editor ignore lists).

## Methods

### check()

> **check**(`doc`, `paragraphs`): `Promise`\<[`SpellMiss`](/editor/docs/api/interfaces/spellmiss/)[][] \| `null`\>

Misspellings for each paragraph, in order; null when the check could not run.

#### Parameters

##### doc

`number`

##### paragraphs

`string`[]

#### Returns

`Promise`\<[`SpellMiss`](/editor/docs/api/interfaces/spellmiss/)[][] \| `null`\>

***

### closeDocument()

> **closeDocument**(`doc`): `void`

The editor of `doc` is gone.

#### Parameters

##### doc

`number`

#### Returns

`void`

***

### isOn()

> **isOn**(): `boolean`

Is spell checking on right now?

#### Returns

`boolean`

***

### newDocument()

> **newDocument**(): `number`

A fresh spell-document number for a top-level editor.

#### Returns

`number`

***

### onChange()

> **onChange**(`cb`): () => `void`

Follow the on / off state; returns the unsubscribe.

#### Parameters

##### cb

(`on`) => `void`

#### Returns

() => `void`

***

### suggestions()

> **suggestions**(`doc`, `paragraph`, `from`, `to`): `Promise`\<`string`[]\>

Up to five suggestions for `paragraph.slice(from, to)`, in the checker's order.

#### Parameters

##### doc

`number`

##### paragraph

`string`

##### from

`number`

##### to

`number`

#### Returns

`Promise`\<`string`[]\>
