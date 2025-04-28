# getModule

Use this function to get a module by name and chainId.

``` tsx
import { useTargetNetwork } from "~~/hooks/scaffold-move/useTargetNetwork";
import { getModule } from "~~/utils/scaffold-move/modulesData";

const { targetNetwork } = useTargetNetwork();
const moveModule = getModule("onchain_bio", targetNetwork.id);
```

This example uses the `getModule` function to get the `onchain_bio` module deployed on the target network.

## Parameters

| Parameter           | Type   | Description                |
| ------------------- | ------ | -------------------------- |
| **module\_address** | string | Name of the module         |
| **chainId**         | string | The id for a chain/network |

## Return Value
Returns an object of type `GenericModule`:

* `bytecode`: The raw bytecode of the module.
* `abi`: An object that contains the following:
  * `address`: The address where the module is deployed.
  * `name`: The name of the module.
  * `friends`: A list of module addresses that have access to private elements of the module.
  * `exposed_functions`: A list of functions that the module exposes, which include their name, visibility, parameters, and return types.
  * `structs`: A list of data structures defined in the module, including their fields and type information.