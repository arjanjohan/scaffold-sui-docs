# useGetObject

Fetches an object by its ID with normalized address handling.

## Usage
```tsx
const { data: object, isLoading } = useGetObject(objectId);
```

This example fetches an object by its ID, automatically normalizing the address if needed.

## Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| **objectId** | string \| null | The ID of the object to fetch |

## Return Value
* `data`: The object data with all requested options
* `isLoading`: Boolean indicating if the query is in progress
* `error`: Error object if the query failed