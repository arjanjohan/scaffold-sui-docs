# useGetOwnedObjects

Fetches objects owned by an address with pagination support and optional filtering.

## Usage
```tsx
const { data, fetchNextPage, hasNextPage } = useGetOwnedObjects(address, filter);
```

This example fetches objects owned by the specified address, with optional filtering and pagination support.

## Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| **address** | string | The address to fetch owned objects for |
| **filter** (optional) | IotaObjectDataFilter | Filter to apply to the objects |
| **maxObjectRequests** (optional) | number | Maximum number of objects to fetch per request (default: 6) |

## Return Value
* `data`: Paginated object data
* `fetchNextPage`: Function to fetch the next page of objects
* `hasNextPage`: Boolean indicating if there are more objects to fetch
* `isLoading`: Boolean indicating if the query is in progress
* `error`: Error object if the query failed