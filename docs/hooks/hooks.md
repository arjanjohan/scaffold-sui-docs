---
sidebar_position: 3
---

# 🪝 Hooks

Scaffold IOTA provides a collection of custom React hooks designed to simplify interactions with your deployed smart contracts. These hooks offer an easy-to-use interface for reading from and writing to the IOTA blockchain.

The custom hooks rely on a deployment file for their core functionality:

* `packages/nextjs/modules/deployedModules.ts`

The `deployedModules.ts` file is auto-generated and updated whenever you run `yarn deploy --network`.
