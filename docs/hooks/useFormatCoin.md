# useFormatCoin

Formats a coin balance based on standard coin display logic. If the balance is less than 1, it will be displayed in its full decimal form. For values greater than 1, it will be truncated to 3 decimal places.

## Usage
```tsx
const [formattedBalance, coinSymbol, queryResult] = useFormatCoin({
    balance: BigInt(1000000000),
    coinType: "0x2::sui::Sui",
    format: CoinFormat.ROUNDED,
    showSign: false
});
```

This example formats a balance of 1 Sui with rounded formatting.

## Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| **balance**  (optional) | bigint | number | string  | The coin balance to format |
| **coinType** (optional) | string | The type of the coin (defaults to Sui) |
| **format** (optional) | CoinFormat | Format type (ROUNDED or FULL) |
| **showSign** (optional) | boolean | Whether to show a + sign for positive values |

## Return Value
* `formattedBalance`: The formatted balance as a string
* `coinSymbol`: The symbol of the coin
* `queryResult`: The result of the coin metadata query