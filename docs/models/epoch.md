---
title: Epoch
---

** Warning ** We are currently building this Query.
For more information on Epochs: https://docs.solana.com/terminology#epoch

### Elements of Epochs
* id: `<ID>` Unique Identifier of an Epoch
* highestSlot: `<Float>` 
* lowestSlot: `<Float>` 


### epochById
Returns a specific Epoch


#### ** Parameters ** : 
* id: `<ID>` (required) Unique Identifier of an Epoch


#### Example:
```
query{
	epochById(epochId:188){
endTimestamp
  }
}
```

### Result:
```
{
  "data": {
    "solana": {
      "epochById": null
    }
  }
}
  
```