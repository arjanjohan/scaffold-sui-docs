---
sidebar_position: 3
---

# 🪝 Hooks

Scaffold IOTA provides a collection of custom React hooks designed to simplify interactions with your deployed smart contracts. These hooks offer an easy-to-use interface for reading from and writing to the IOTA blockchain.

## Core Hooks
- `useTargetNetwork` - Manage network selection
- `useModuleAddress` - Get deployed module addresses
- `useSubmitTransaction` - Submit transactions to the blockchain
- `useScaffoldSubmitTransaction` - Type-safe transaction submission for modules you deployed using Scaffold IOTA

## Coin Management
- `useFormatCoin` - Format coin amounts for display
- `useGetCoinBalance` - Get balance for a specific coin
- `useGetAllBalances` - Get all token balances for an address
- `useGetAllCoins` - Get all coins of a specific type
- `useGetCoins` - Get paginated coins of a specific type

## Object Management
- `useGetObject` - Get a single object by ID
- `useGetObjectOrPastObject` - Get current or past version of an object
- `useGetOwnedObjects` - Get objects owned by an address
- `useScaffoldGetObject` - Get deployed objects from scaffold modules by their name
- `useNormalizedMoveModule` - Get normalized Move module information

The hooks rely on a deployment file for their core functionality:
* `packages/nextjs/modules/deployedModules.ts`

The `deployedModules.ts` file is auto-generated and updated whenever you run `yarn deploy --network`.
