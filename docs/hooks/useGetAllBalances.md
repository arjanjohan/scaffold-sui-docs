# useGetAllBalances

Fetches all token balances for a given address, with automatic refetching based on configuration.

## Usage
```tsx
const { data: balances, isLoading } = useGetAllBalances(address);
```

This example fetches all token balances for the specified address, including IOTA and any other tokens.

## Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| **address** | string \| null \| undefined | The address to fetch balances for |

## Return Value
* `data`: Array of token balances, filtered and sorted
* `isLoading`: Boolean indicating if the query is in progress
* `error`: Error object if the query failed