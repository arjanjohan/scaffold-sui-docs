---
sidebar_position: 1
---

# Address

Display an address with a copy-to-clipboard icon and a visual blockie representation. The component offers the following features:

- Shows a shortened or full address format
- Provides a clickable link to the block explorer (can be disabled)
- Displays a blockie image unique to the address
- Includes a copy icon for easy address copying

When clicked, the address links to:
1. The block explorer of the connected wallet's network (if a wallet is connected)
2. The block explorer of the mainnet (if no wallet is connected)

This component is useful for displaying user addresses, contract addresses, or any IOTA address in a user-friendly manner.

## Usage

```tsx
import { Address } from "~~/components/scaffold-iota";
import { useCurrentAccount } from "@iota/dapp-kit";

const account = useCurrentAccount();
<Address address={connectedAccount?.address} />
```

## Parameter

| Parameter                         | Type      | Default Value | Description|
| --------------------------------- | --------- | ------------- | --------------------------------------------- |
| **address**                       | `string`  | `undefined`   | Aptos address in `0x___` format.              |
| **disableAddressLink** (optional) | `boolean` | `false`       | If `true`, disables the block explorer link when clicking on the address. |
| **format** (optional)             | `string`  | `"short"`     | Display format of the address. `"short"` shows first five characters, `"long"` shows the entire address. |
| **size** (optional)               | `string`  | `"base"`      | Size of the Address component. Options: `"xs"`, `"sm"`, `"base"`, `"lg"`, `"xl"`, `"2xl"`, `"3xl"`. `base` is default. |
