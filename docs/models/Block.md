---
title: Block
---

For more Information on Blocks: https://docs.solana.com/developing/programming-model/accounts



### Elements of Blocks
* number : `<Float>` Unique Identifier of a Block 
* hash: `<String>` The Hash of the Block
* isConfirmed: `<Boolean>` If the Block is Confirmed in the ledger
* timestamp: `<Float>` Production Time of a block 
* proposer: `<String>` The Proposer of the Block
* parent: `<String>` The Parent of the Block 
* isSkipped: `<Boolean>` If an Block is skipped
* epochId: `<Float>` The epoch the block belongs to
* finality: `<Boolean>` Confirmation of the Block
* createdAt: `<Float>` Time (in epochs) the Block was created at  
* transactions: `<List>` The transactions involved in the Block 


### blocks
Returns first 25 Blocks

#### ** Parameters ** : 

None 

#### Example:
```
query{
  solana{
    blocks{
      hash
      CreatedAt
      isSkipped
    }
  }
}
```


#### Result:
```
{
  "data": {
    "blocks": [
      {
        "hash": "DmDcyyexLcANQmQisb759G8GwWmMEdbFmd8EhWPuQKof",
        "CreatedAt": null,
        "isSkipped": false
      },
      {
        "hash": "2nprnTyVLKcQXtJyj1XGEjXgRonV2pWvRimG4eTFS5i1",
        "CreatedAt": null,
        "isSkipped": false
      },
      {
        "hash": "ADRpYBgDP2FFbakbfKxZcoaLTaE87pPXaCS6sUWRbMr4",
        "CreatedAt": null,
        "isSkipped": false
      }
```

### blockByNum
Returns a specific instance of a block


#### ** Parameters ** : 
* Number: `<int>` (Required) Block Number

#### Example:
```
query{
  solana{
    blockByNum(number: 43777){
      hash
      isConfirmed
      timestamp
    }
  }
}
```

#### Result:
```
{
  "data": {
    "blockByNum": {
      "hash": "ADRpYBgDP2FFbakbfKxZcoaLTaE87pPXaCS6sUWRbMr4",
      "isConfirmed": true,
      "timestamp": 0
    }
  }
}
```

### blockCount
Returns the number of blocks in a specific timeframe.

#### ** Parameters ** : 
* timeFrame: `<Enum>` (required) ONE_DAY,ONE_WEEK,ONE_WEEK


### blocksByEpochId
Returns the blocks in a specific Epoch.

#### ** Parameters ** : 
* epochID: `<String>` The Id of an Epoch

#### Example:
```
query{
  solana{
    blocksByEpochId(epochId:"null"){
      hash
      number
    }
  }
}
```

#### Result:
```
{
  "data": {
    "blocksByEpochId": [
      {
        "hash": "DmDcyyexLcANQmQisb759G8GwWmMEdbFmd8EhWPuQKof",
        "number": 43779
      },
      {
        "hash": "2nprnTyVLKcQXtJyj1XGEjXgRonV2pWvRimG4eTFS5i1",
        "number": 43778
      }
```

### blocksByEpochIdWithTransactions
Returns the transactions involved in the block within an epoch.

#### ** Parameters ** : 
* epochID: `<String>` (required) The Id of an Epoch

#### Example:
```
query{
  solana{
    blocksByEpochIdWithTransactions(epochId:"0"){
    hash
      number
    }
  }
}
```


#### Result:

