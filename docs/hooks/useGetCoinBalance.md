# useGetCoinBalance

Fetches the balance of a specific coin type for an address by retrieving and summing up individual coin balances.

## Usage
```tsx
const { balance, isLoading, error, isError } = useGetCoinBalance(
    "0x2::sui::Sui",
    address,
    maxCoinsPerRequest // optional, defaults to 10
);
```

This example fetches the Sui balance for the specified address

## Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| **coinType** | string | The type of coin to fetch balance for |
| **address** | string | The address to fetch balance for |
| **maxCoinsPerRequest** (optional) | number | Maximum number of coins to fetch per request (default: 10) |

## Return Value
* `balance`: The total coin balance as a bigint (sum of all individual coin balances)
* `isLoading`: Boolean indicating if the query is in progress
* `error`: Error object if the query failed
* `isError`: Boolean indicating if the query resulted in an error