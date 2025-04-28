# Explorer Utilities

Utilities for generating explorer links for various IOTA entities.

## Functions

### getExplorerLink
```ts
function getExplorerLink(
    linkConfig: ExplorerLinkConfig,
    activeAddress: string | null,
    network: NetworkId,
): string | null
```
Generates an explorer link for various IOTA entities.

### getObjectUrl
```ts
function getObjectUrl(
    objectID: string,
    network: NetworkId,
    customExplorer: string,
    moduleName?: string | null,
): string
```
Generates a URL for viewing an object in the explorer.

### getTransactionUrl
```ts
function getTransactionUrl(
    txDigest: string,
    network: NetworkId,
    customExplorer: string,
): string
```
Generates a URL for viewing a transaction in the explorer.

### getAddressUrl
```ts
function getAddressUrl(
    address: string,
    network: NetworkId,
    customExplorer: string,
): string
```
Generates a URL for viewing an address in the explorer.

### getValidatorUrl
```ts
function getValidatorUrl(
    address: string,
    network: NetworkId,
    customExplorer: string,
): string
```
Generates a URL for viewing a validator in the explorer.

## Types

### ExplorerLinkType
```ts
enum ExplorerLinkType {
    Address = 'address',
    Object = 'object',
    Transaction = 'transaction',
    Validator = 'validator',
}
```

### ExplorerLinkConfig
```ts
type ExplorerLinkConfig =
    | {
          type: ExplorerLinkType.Address;
          address?: string;
          useActiveAddress?: false;
      }
    | {
          type: ExplorerLinkType.Address;
          useActiveAddress: true;
      }
    | { type: ExplorerLinkType.Object; objectID: string; moduleName?: string }
    | { type: ExplorerLinkType.Transaction; transactionID: string }
    | { type: ExplorerLinkType.Validator; validator: string };
```

## Usage Examples

```tsx
// Get address URL
const addressUrl = getExplorerLink(
    { type: ExplorerLinkType.Address, address: "0x123..." },
    null,
    "devnet"
);

// Get transaction URL
const txUrl = getExplorerLink(
    { type: ExplorerLinkType.Transaction, transactionID: "0xabc..." },
    null,
    "devnet"
);

// Get object URL with module
const objectUrl = getExplorerLink(
    {
        type: ExplorerLinkType.Object,
        objectID: "0xdef...",
        moduleName: "my_module"
    },
    null,
    "devnet"
);
```