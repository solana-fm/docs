---
title: Block
---

For more Information on Blocks: https://docs.solana.com/proposals/block-confirmation



### Elements of Blocks
* number : `<Float>` Unique Identifier of a Block 
* hash: `<String>` The Hash of the Block
* fetchstatus: `<Int>` 
* isConfirmed: `<Boolean>` If the Block is Confirmed in the ledger
* proposer: `<String>` The Proposer of the Block
* parent: `<String>` The Parent of the Block 
* isSkipped: `<Boolean>` If an Block is skipped
* epochId: `<Float>` The epoch the block belongs to
* finality: `<Boolean>` Confirmation of the Block
* timestamp: `<DateTime>` 
* transactions: `<Object>` The transactions that matches the returned block numbers



### blocks

#### ** Parameters ** : 
- paging: (Optional) 
  - page: `<Int>` 
  - limit: `<Int>` 
- from: `<DateTime>` 
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

### blockByNumber
Returns a specific instance of a block


#### ** Parameters ** : 
* Number: `<Int>` (Required) Block Number

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
* paging: (Optional) 
  - page: `<Int>` 
  - limit: `<Int>` 

#### Example:
```
query{
  solana{
    blocksByEpochId(epochId:"213"){
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
- to `<DateTime>`

#### Example:

```
query {
  solana {
    blockCount(date: { from: "2021-06-29T20:00:00Z", to: "2021-06-29T23:59:59Z" })
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "blockCount": 2090
    }
  }
}
```

### blocksCreatedByTimeRange

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)
* paging: (Optional) 
  - page: `<Int>` 
  - limit: `<Int>`

#### Example:

```
query {
  solana {
    blocksCreatedByTimeRange(time: {from: "2021-06-29T20:00:00Z", to: "2021-06-29T23:59:59Z", resolution: ONE_MIN}) {
     time
     value 
    }
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "blocksCreatedByTimeRange": [
        {
          "time": "2021-06-29T23:32:00.000Z",
          "value": 69
        },
        {
          "time": "2021-06-29T23:33:00.000Z",
          "value": 78
        },
        {
          "time": "2021-06-29T23:34:00.000Z",
          "value": 80
        },
        {
          "time": "2021-06-29T23:35:00.000Z",
          "value": 82
        },
        {
          "time": "2021-06-29T23:36:00.000Z",
          "value": 75
        },
        {
          "time": "2021-06-29T23:37:00.000Z",
          "value": 69
        },
        {
          "time": "2021-06-29T23:38:00.000Z",
          "value": 79
        },
        {
          "time": "2021-06-29T23:39:00.000Z",
          "value": 74
        },
        {
          "time": "2021-06-29T23:40:00.000Z",
          "value": 66
        },
        {
          "time": "2021-06-29T23:41:00.000Z",
          "value": 73
        },
        {
          "time": "2021-06-29T23:42:00.000Z",
          "value": 87
        },
        {
          "time": "2021-06-29T23:43:00.000Z",
          "value": 61
        },
        {
          "time": "2021-06-29T23:44:00.000Z",
          "value": 114
        },
        {
          "time": "2021-06-29T23:45:00.000Z",
          "value": 69
        },
        {
          "time": "2021-06-29T23:46:00.000Z",
          "value": 65
        },
        {
          "time": "2021-06-29T23:47:00.000Z",
          "value": 79
        },
        {
          "time": "2021-06-29T23:48:00.000Z",
          "value": 78
        },
        {
          "time": "2021-06-29T23:49:00.000Z",
          "value": 70
        },
        {
          "time": "2021-06-29T23:50:00.000Z",
          "value": 93
        },
        {
          "time": "2021-06-29T23:51:00.000Z",
          "value": 65
        },
        {
          "time": "2021-06-29T23:52:00.000Z",
          "value": 80
        },
        {
          "time": "2021-06-29T23:53:00.000Z",
          "value": 73
        },
        {
          "time": "2021-06-29T23:54:00.000Z",
          "value": 74
        },
        {
          "time": "2021-06-29T23:55:00.000Z",
          "value": 72
        },
        {
          "time": "2021-06-29T23:56:00.000Z",
          "value": 71
        }
      ]
    }
  }
}
```

### uniqueValidators

#### ** Parameters ** :
- from `<DateTime>`
- to `<DateTime>`

#### Example:

```
query {
  solana {
    uniqueValidators(date: {from: "2021-06-29T20:00:00Z", to: "2021-06-29T23:59:59Z"})
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "uniqueValidators": 0
    }
  }
}
```

### uniqueValidatorsinTimeRange

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)
- paging: (Optional) 
  - page: `<Int>` 
  - limit: `<Int>`

#### Example:

```
query {
  solana {
    uniqueValidatorsinTimeRange(time: {from: "2021-06-29T20:00:00Z", to: "2021-06-29T23:59:59Z", resolution: ONE_MIN}) {
      time
      value
    }
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "uniqueValidatorsinTimeRange": [
        {
          "time": "2021-06-29T23:32:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:33:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:34:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:35:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:36:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:37:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:38:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:39:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:40:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:41:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:42:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:43:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:44:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:45:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:46:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:47:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:48:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:49:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:50:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:51:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:52:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:53:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:54:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:55:00.000Z",
          "value": 0
        },
        {
          "time": "2021-06-29T23:56:00.000Z",
          "value": 0
        }
      ]
    }
  }
}
```
