# formatAmount

Utility functions for formatting amounts with support for large numbers, decimal places, and scientific notation.

## Functions

### formatAmountParts
```ts
function formatAmountParts(amount?: BigNumber | bigint | number | string | null): string[]
```
Formats an amount into parts (number and unit) with appropriate scaling (K, M, B) and decimal handling.

### formatAmount
```ts
function formatAmount(...args: Parameters<typeof formatAmountParts>): string
```
Formats an amount into a single string with appropriate scaling and decimal handling.

### countDecimalLeadingZeros
```ts
function countDecimalLeadingZeros(input: BigNumber | bigint | number | string | null): number
```
Counts the number of leading zeros after the decimal point.

### formatWithSubscript
```ts
function formatWithSubscript(input: BigNumber | bigint | number | string | null, zeroCount: number): string
```
Formats a number with subscript notation for very small numbers.

## Usage Examples

```tsx
// Basic formatting
formatAmount(1000); // "1K"
formatAmount(1000000); // "1M"
formatAmount(1000000000); // "1B"

// Decimal handling
formatAmount(0.00001); // "0.0₄1"
formatAmount(0.1); // "0.1"

// Negative numbers
formatAmount(-1000); // "-1K"
```

## Features
- Automatic scaling for large numbers (K, M, B)
- Scientific notation for very small numbers
- Support for negative numbers
- Consistent decimal place handling
- Subscript notation for very small numbers