# useModuleAddress

A type-safe hook for retrieving the deployed address of a module based on the current network.

## Usage
```tsx
const { moduleAddress } = useModuleAddress("Counter");
```

This example retrieves the deployed address of the "Counter" module on the current network.

## Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| **moduleName** | ModuleName | The name of the module to get the address for |

## Return Value
* `moduleAddress`: The deployed address of the module on the current network, or undefined if not found

## Notes
- Uses the `deployedModules.ts` file to look up module addresses
- Network-aware: automatically uses the correct address for the current network
- Type-safe: ModuleName type ensures only valid module names can be used