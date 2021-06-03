---
title: Epoch
---

For more information on Epochs: https://docs.solana.com/terminology#epoch

### Elements of Epochs
* id: `<ID>` Unique Identifier of an Epoch
* startTimestamp: `<Float>` Start time of an Epoch
* endTimestamp: `<Float>` End time of an epoch
* blocks: `[Blocks]` Accessing blocks via an epoch


### epochById
Returns a specific Epoch


#### ** Parameters ** : 
* id: `<ID>` (required) Unique Identifier of an Epoch


#### Example:
```
query{
	epochById(epochId:123){
endTimestamp
  }
}
```

### Result:
```

  
```