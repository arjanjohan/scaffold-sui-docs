
# useTargetNetwork

This hook retrieves the connected wallet's network from scaffold.config or defaults to the first network in the list if the wallet is not connected.

## Usage
``` tsx
const network = useTargetNetwork();
```

## Return Value

* `network`: The target network as `Chain` object.
