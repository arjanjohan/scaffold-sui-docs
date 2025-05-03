# useGetObjectOrPastObject

Fetches an object by its ID, and if the object doesn't exist or is deleted, attempts to find a past version of the object.

## Usage
```tsx
const { data: object, isLoading } = useGetObjectOrPastObject(objectId);
```

This example fetches an object by its ID, and if the object is not found or deleted, it will attempt to find a past version of the object by looking through transaction history.

## Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| **objectId** | string | The ID of the object to fetch |

## Return Value
* `data`: The object data with all requested options
* `isViewingPastVersion`: Boolean indicating if the returned object is a past version
* `isLoading`: Boolean indicating if the query is in progress
* `error`: Error object if the query failed