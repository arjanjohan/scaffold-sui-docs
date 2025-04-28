# useGetCoins

Fetches coins of a specific type for an address with pagination support.

## Usage
```tsx
const { data, fetchNextPage, hasNextPage } = useGetCoins("0x2::sui::SUI", address);
```

This example fetches SUI coins for the specified address with pagination, allowing you to load more coins as needed.

## Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| **coinType** | string | The type of coin to fetch |
| **address** (optional) | string \| null | The address to fetch coins for |
| **maxCoinsPerRequest** (optional) | number | Maximum number of coins to fetch per request (default: 10) |

## Return Value
* `data`: Paginated coin data
* `fetchNextPage`: Function to fetch the next page of coins
* `hasNextPage`: Boolean indicating if there are more coins to fetch
* `isLoading`: Boolean indicating if the query is in progress
* `error`: Error object if the query failed