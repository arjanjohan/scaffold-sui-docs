# Chains

In `chains.ts` the different Sui chains are defined and exported as `defaultChains`.

```ts
export type Chain = {
  id: string;
  name: string;
  url: string;
  isTestnet: boolean;
  faucet?: string;
};
```

The default Sui chains include:
- Sui Devnet
- Sui Testnet

Each chain configuration includes the necessary endpoints for interacting with the network.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| **id** | string | Unique identifier for the chain |
| **name** | string | Human-readable name of the chain |
| **url** | string | Fullnode URL for the chain |
| **isTestnet** | boolean | Whether this is a testnet chain |
| **faucet** (optional) | string | URL for the faucet if available |
