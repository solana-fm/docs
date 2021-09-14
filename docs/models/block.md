---
title: Block
---

For more Information on Blocks: https://docs.solana.com/developing/programming-model/accounts



### Elements of Blocks
* number : `<Float>` Unique Identifier of a Block 
* hash: `<String>` The Hash of the Block
* isConfirmed: `<Boolean>` If the Block is Confirmed in the ledger
* proposer: `<String>` The Proposer of the Block
* parent: `<String>` The Parent of the Block 
* isSkipped: `<Boolean>` If an Block is skipped
* epochId: `<Float>` The epoch the block belongs to
* finality: `<Boolean>` Confirmation of the Block
* timeStamp: `<DateTime>` 
* transactions: `<List>` The transactions involved in the Block 


### blocks
Returns Blocks

#### ** Parameters ** : 
* Paging: (Optional) `<int>` 
  - Page: `<int>`Start of Page 
- from: `<DateTime>` (Required)
- to: `<DateTime>`

#### Example:
```
query{
  solana{
    blocks(date: {from:"2021-01-09T05:30:00Z", to: "2021-10-10T05:30:00Z"} ){
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
    }
  }
}
```


### blocksByEpochId
Returns the blocks in a specific Epoch.

#### ** Parameters ** : 
* epochID: `<String>` The Id of an Epoch
* Paging: (Optional) `<int>` 
  - Page: `<int>`Start of Page 

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

### blockCount

Returns number of blocks created
#### ** Parameters ** :

- from `<DateTime>`

#### Example:

```
query {
  solana {
    blockCount(from: "2021-05-05")
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "blockCount": 10094
    }
  }
}
```

### blocksCreatedByTimeRange

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)

### Example:

```
query {
  solana {
    blocksCreatedByTimeRange(time:{from:"2021-08-01T05:30:30Z",to:"2021-09-10T20:30:30Z",resolution:ONE_MIN}){
    timestamp
    value
    }
  }
}
```

### Result:

```
{
  "data": {
    "solana": {
      "blocksCreatedByTimeRange": []
    }
  }
} 
```

### uniqueValidators

#### ** Parameters ** :

- from `<DateTime>`

#### Example:

```
query {
  solana {
    uniqueValidators(from: "2021-05-05")
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "uniqueValidators": 10094
    }
  }
}
```

### uniqueValidatorsinTimeRange

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)

### Example:

```
query {
  solana {
    uniqueValidatorsinTimeRange(time:{from:"2021-08-01T05:30:30Z",to:"2021-09-10T20:30:30Z",resolution:ONE_MIN}){
    timestamp
    value
    }
  }
}
```

### Result:

```
{
  "data": {
    "solana": {
      "uniqueValidatorsinTimeRange": []
    }
  }
}
