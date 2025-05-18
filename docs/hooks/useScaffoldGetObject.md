# useScaffoldGetObject

A type-safe wrapper around `useGetObject` specifically for modules deployed using Scaffold Sui, automatically handling module address resolution.

## Usage
```tsx
const { moduleAddress, data, refetch } = useScaffoldGetObject("Counter");
```

This example fetches the Counter module object and provides its address and data.

## Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| **moduleName** | ModuleName | The name of the scaffold module to fetch |

## Return Value
* `moduleAddress`: The deployed address of the module
* `data`: The module object data
* `refetch`: Function to manually refetch the object data

## Notes
- Combines `useModuleAddress` and `useGetObject` for scaffold modules
- Type-safe: ModuleName type ensures only valid module names can be used
- Automatically handles network-specific module addresses