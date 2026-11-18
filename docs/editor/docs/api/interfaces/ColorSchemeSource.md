# ColorSchemeSource

A live light / dark scheme (`EditorEnvironment.colorScheme`): its value now, and its changes.

## Methods

### current()

> **current**(): [`ColorScheme`](/editor/docs/api/type-aliases/colorscheme/)

The scheme now.

#### Returns

[`ColorScheme`](/editor/docs/api/type-aliases/colorscheme/)

***

### subscribe()

> **subscribe**(`cb`): () => `void`

Follow changes; returns the unsubscribe.

#### Parameters

##### cb

(`scheme`) => `void`

#### Returns

() => `void`
