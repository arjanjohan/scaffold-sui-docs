# useGetAllCoins

Fetches all coins of a specific type for an address, making multiple requests if necessary to get all coins.

## Usage
```tsx
const { data: coins, isLoading } = useGetAllCoins("0x2::iota::IOTA", address);
```

This example fetches all IOTA coins for the specified address, making multiple requests if there are more than 100 coins.

## Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| **coinType** | string | The type of coin to fetch |
| **address** | string | The address to fetch coins for |

## Return Value
* `data`: Array of all coin objects
* `isLoading`: Boolean indicating if the query is in progress
* `error`: Error object if the query failed