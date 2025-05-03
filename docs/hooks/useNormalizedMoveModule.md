# useNormalizedMoveModule

Fetches the normalized Move module information for a given package and module name.

## Usage
```tsx
const { data: module, isLoading } = useNormalizedMoveModule(packageId, moduleName);
```

This example fetches the normalized Move module information for the specified package and module.

## Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| **packageId** | string | The package ID containing the module |
| **moduleName** | string | The name of the module |

## Return Value
* `data`: The normalized Move module information
* `isLoading`: Boolean indicating if the query is in progress
* `error`: Error object if the query failed