# useGetCoinBalance

Fetches the balance of a specific coin type for an address.

## Usage
```tsx
const { balance, isLoading, error } = useGetCoinBalance("0x2::iota::IOTA", address);
```

This example fetches the IOTA balance for the specified address.

## Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| **coinType** | string | The type of coin to fetch balance for |
| **address** (optional) | string \| null | The address to fetch balance for |

## Return Value
* `balance`: The coin balance as a bigint
* `isLoading`: Boolean indicating if the query is in progress
* `error`: Error object if the query failed
* `isError`: Boolean indicating if the query resulted in an error