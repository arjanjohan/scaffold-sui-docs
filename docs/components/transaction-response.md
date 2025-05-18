# TransactionResponse

A component that displays transaction status and results in a user-friendly format. It shows success/failure states, transaction hash links, and error messages when applicable.

## Features
- Shows transaction success/failure status with emoji indicators (✅/❌)
- Provides clickable explorer link for successful transactions
- Displays error messages for failed transactions
- Automatically integrates with the current network's explorer
- Clean, centered presentation in a rounded container

## Screenshot
![wallet button example](../../static/img/receipt.png)

## Usage

```tsx
import { TransactionResponse } from "~~/components/scaffold-sui";
const result = await submitTransaction("create", []);

// In your component
<TransactionResponse
  transactionResponse={result}
/>
```

## Parameter
| Parameter | Type | Description |
|-----------|------|-------------|
| **transactionResponse** (optional) | `TransactionResponseType` | The transaction response object containing status and details |

The `TransactionResponseType` has the following structure:
```ts
{
  transactionSubmitted: boolean;
  success?: boolean;
  transactionHash?: string;
  message?: string;
}
```

## Notes
- Only renders when `transactionSubmitted` is true
- Uses the current network's explorer URL for transaction links