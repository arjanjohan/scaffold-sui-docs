# useTargetNetwork

Retrieves the connected wallet's network from scaffold.config or defaults to the first network in the list if the wallet is not connected. Also provides functionality to switch networks.

## Usage
```tsx
const { targetNetwork, setTargetNetwork, availableNetworks } = useTargetNetwork();
```

This example gets the current network and provides functions to manage network selection.

## Return Value
* `targetNetwork`: The current target network as `Chain` object
* `setTargetNetwork`: Function to switch to a different network
* `availableNetworks`: Array of all available networks from scaffold.config

## Notes
- Networks are configured in `scaffold.config.ts`
- Provides type-safe network configuration