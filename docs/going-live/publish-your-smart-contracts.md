---
sidebar_position: 1
---

# Publish Your Smart Contracts

When publishing a new Move smart contract, you must first initialize an IOTA account and fund it with the native token. You can use this command:
```
yarn account
```

This command will create a new IOTA account if you haven't configured one already.

To publish your smart contracts from your account, use this command:

```
yarn deploy
```

This command publishes the smart contracts, and updates the deployed addresses in the NextJS directory. This way they are always up to date on your frontend.