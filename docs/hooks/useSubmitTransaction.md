# useSubmitTransaction

Submits a transaction to a Move module with automatic signing and execution.

## Usage
```tsx
const { submitTransaction, transactionInProcess, transactionResponse, clearTransactionResponse } = useSubmitTransaction(moduleName, moduleAddress);

// Later in your code
await submitTransaction("functionName", ["arg1", "arg2"], ["typeArg1"]);
```

This example submits a transaction to call a function in the specified module with the given arguments.

## Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| **moduleName** | string | The name of the module to call |
| **moduleAddress** | string | The address where the module is deployed |

## Return Value
* `submitTransaction`: Function to submit a transaction with the following parameters:
  * `functionName`: Name of the function to call
  * `args`: Array of arguments to pass to the function
  * `tyArgs`: Array of type arguments for generic functions
* `transactionInProcess`: Boolean indicating if a transaction is currently being processed
* `transactionResponse`: The response from the transaction submission
* `clearTransactionResponse`: Function to clear the transaction response