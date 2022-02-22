---
title: Epoch
---

No Data Available, Coming Soon!

For more information on Epochs: https://docs.solana.com/terminology#epoch

### Elements of Epochs

* id: `<Int>`
* highestSlot: `<Float>`
* lowestSlot: `<Float>`

### epochById

Returns a specific Epoch

#### ** Parameters ** :

- id: `<String>` (required)

#### Example:

```
query{
  solana{
	  epochById(epochId:188){
      id
      highestSlot
  }
 }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "id": 236,
      "highestSlot" : 102383999
    }
  }
}

```
