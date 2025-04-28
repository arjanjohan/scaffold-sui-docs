# Chains

In `chains.ts` the different Aptos and Aptos-based chains are defined and exported as `defaultChains`.

``` ts
export type Chain = {
  id: string;
  name: string;
  network: Network;
  fullnode?: string;
  indexer?: string;
  faucet?: string;
  block_explorer?: string;
};
```
The default Aptos chains only require the mandatory fields (id, name, and network). However, for custom chains, it's recommended to provide all fields to ensure a fully functional dapp.

:::warning
The Aptos devnet is frequently reset, which can result in changes to the chainId. If this occurs, you should:
1. Redeploy your modules (this process always uses the correct chainId)
2. Manually update the chainId for devnet in `packages/nextjs/utils/scaffold-move/chains.ts`
:::

## Parameters

| Parameter                      | Type    | Description                                     |
| ------------------------------ | ------- | ----------------------------------------------- |
| **id**                         | string  | Address of the module                           |
| **name**                       | string  | Name of the module                              |
| **network**                    | Network | Network  as defined in the Aptos TypeScript SDK |
| **indexer** (optional)         | string  | URL for the indexer                             |
| **faucet** (optional)          | string  | URL for the faucet                              |
| **block\_explorer** (optional) | string  | URL for the block explorer                      |

