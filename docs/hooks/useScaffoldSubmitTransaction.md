# useScaffoldSubmitTransaction

A type-safe hook for submitting transactions to scaffold modules, providing automatic module address resolution and type checking for function arguments.

## Usage
```tsx
const {
  submitTransaction,
  transactionInProcess,
  transactionResponse,
  clearTransactionResponse
} = useScaffoldSubmitTransaction("Counter");

// Later in your code
await submitTransaction(
  "increment",  // function name
  [amount],     // arguments (optional)
  []           // type arguments (optional)
);
```

This example shows how to submit a transaction to the Counter module's increment function.

## Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| **moduleName** | ModuleName | The name of the scaffold module to interact with |

## Return Value
* `submitTransaction`: Function to submit a transaction with the following parameters:
  * `functionName`: Name of the function to call
  * `args`: Array of arguments to pass to the function (optional)
  * `tyArgs`: Array of type arguments for generic functions (optional)
* `transactionInProcess`: Boolean indicating if a transaction is currently being processed
* `transactionResponse`: The response from the transaction submission
* `clearTransactionResponse`: Function to clear the transaction response


## Notes
- Uses `deployedModules.ts` to resolve module addresses
- To interact with modules not deployed with Scaffold IOTA, use `useScaffoldSubmitTransaction` instead.