---
title: Trade
---

### Elements of Trades
* resolution: `<Enum>` The resolution the query is returned by 
* from: `<DateTime>` The start time of a specified query 
* to: `<DateTime>` The end time of a specified query 


### TotalSerumTxCount 
Returns the total serum transactions count within a time period 

#### ** Parameters ** : 
- from: `<DateTime>` (Required)
- to: `<DateTime>` (Required)

#### Example:
```
  query{
    solana{
totalSerumTxCount(date: {from:"2021-08-11T03:50:04Z",to:"2021-08-11T03:55:04Z"})  
  }
  }
```

#### Result:
```
{
  "data": {
    "solana": {
      "totalSerumTxCount": 20
    }
  }
}

```

### serumTransactionCountHistory 
Returns a list of serum transactions count within a time period 

#### ** Parameters ** : 
* resolution: `<Enum>` (required) ONE_DAY,ONE_WEEK,ONE_MONTH
* from: `<DateTime>` The start time of a specified query 
* to: `<DateTime>` The end time of a specified query 

#### Example:
```
  query{
    solana{
serumTransactionCountHistory(time: {resolution:ONE_SECOND,from:"2021-08-11T03:50:04Z",to:"2021-08-11T03:55:04Z"}){
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
      "serumTransactionCountHistory": [
        {
          "time": "2021-08-11T03:54:04.000Z",
          "value": 1
        },
        {
          "time": "2021-08-11T03:54:05.000Z",
          "value": 1
        },
        {
          "time": "2021-08-11T03:54:06.000Z",
          "value": 2
        },
        {
          "time": "2021-08-11T03:54:11.000Z",
          "value": 1
        },
        {
          "time": "2021-08-11T03:54:12.000Z",
          "value": 2
        },
        {
          "time": "2021-08-11T03:54:14.000Z",
          "value": 2
        },
        {
          "time": "2021-08-11T03:54:15.000Z",
          "value": 1
        },
        {
          "time": "2021-08-11T03:54:16.000Z",
          "value": 2
        }
      ]
    }
  }
}
```

### TotalSerumVolume 

#### ** Parameters ** : 
- from: `<DateTime>` 
- to: `<DateTime>` 

#### Example:
```
  query{
    solana{
totalSerumVolume(date: {from:"2021-08-11T03:50:04Z",to:"2021-08-11T03:55:04Z"})  
  }
  }
   
```

#### Result:
```
{
  "data": {
    "solana": {
      "totalSerumVolume": 15
    }
  }
}
```

### serumVolumeTimeRange 
Returns a list of Serum Volume within a time period 

#### ** Parameters ** : 
* resolution: `<Enum>` (required) ONE_DAY,ONE_WEEK,ONE_MONTH
* from: `<DateTime>` The start time of a specified query 
* to: `<DateTime>` The end time of a specified query 

#### Example:
```
   query{
    solana{
serumVolumeTimeRange(time: {resolution:ONE_SECOND,from:"2021-08-11T03:50:04Z",to:"2021-08-11T03:55:04Z"}){
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
      "serumVolumeTimeRange": [
        {
          "time": "2021-08-11T03:54:04.000Z",
          "value": 1
        },
        {
          "time": "2021-08-11T03:54:05.000Z",
          "value": 2
        },
        {
          "time": "2021-08-11T03:54:06.000Z",
          "value": 1
        },
        {
          "time": "2021-08-11T03:54:11.000Z",
          "value": 1
        },
        {
          "time": "2021-08-11T03:54:12.000Z",
          "value": 1
        },
        {
          "time": "2021-08-11T03:54:14.000Z",
          "value": 0
        },
        {
          "time": "2021-08-11T03:54:15.000Z",
          "value": 1
        }
      ]
    }
  }
}
```
### totalRaydiumTxCount
Returns a list of Raydium Transaction Count within a time period 

#### ** Parameters ** : 
- from: `<DateTime>` 
- to: `<DateTime>` 

#### Example:
```
  query{
    solana{
totalRaydiumTxCount(date: {from:"2021-08-11T03:50:04Z",to:"2021-08-11T03:55:04Z"})  
  }
  }
 
```

#### Result:
```
{
  "data": {
    "solana": {
      "totalRaydiumTxCount": 11
    }
  }
}
```

### raydiumTxCountTimeRange 
Returns a list of Raydium transactions count within a time period 

#### ** Parameters ** : 
* resolution: `<Enum>` (required) ONE_DAY,ONE_WEEK,ONE_MONTH
* from: `<DateTime>` The start time of a specified query 
* to: `<DateTime>` The end time of a specified query 

#### Example:
```
  query{
    solana{
raydiumTxCountTimeRange(time: {resolution:ONE_SECOND,from:"2021-08-11T03:50:04Z",to:"2021-08-11T03:55:04Z"}){
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
      "raydiumTxCountTimeRange": [
        {
          "time": "2021-08-11T03:54:05.000Z",
          "value": 1
        },
        {
          "time": "2021-08-11T03:54:12.000Z",
          "value": 1
        },
        {
          "time": "2021-08-11T03:54:18.000Z",
          "value": 1
        },
        {
          "time": "2021-08-11T03:54:19.000Z",
          "value": 2
        }
      ]
    }
  }
}
```


### TotalRaydiumVolume 
Returns total Raydium volume within a time period 

#### ** Parameters ** : 
- from: `<DateTime>` 
- to: `<DateTime>` 

#### Example:
```
  query{
    solana{
totalRaydiumVolume(date: {from:"2021-08-11T03:50:04Z",to:"2021-08-11T03:55:04Z"})  
  }
  }
 
```

#### Result:
```
{
  "data": {
    "solana": {
      "totalRaydiumVolume": 1
    }
  }
}
```

### raydiumVolumeTimeRange 
Returns a list of Raydium Volume within a time period 

#### ** Parameters ** : 
* resolution: `<Enum>` (required) ONE_DAY,ONE_WEEK,ONE_MONTH
* from: `<DateTime>` The start time of a specified query 
* to: `<DateTime>` The end time of a specified query 

#### Example:
```
   query{
    solana{
raydiumVolumeTimeRange(time: {resolution:ONE_SECOND,from:"2021-08-11T03:50:04Z",to:"2021-08-11T03:55:04Z"}){
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
      "raydiumVolumeTimeRange": [
        {
          "time": "2021-08-11T03:54:05.000Z",
          "value": 1
        },
        {
          "time": "2021-08-11T03:54:12.000Z",
          "value": 1
        },
        {
          "time": "2021-08-11T03:54:18.000Z",
          "value": 1
        },
        {
          "time": "2021-08-11T03:54:19.000Z",
          "value": 2
        }
      ]
    }
  }
}
```


### volumeByToken 
Returns a the Volume of a specific token within a time period 

#### ** Parameters ** : 
* from: `<DateTime>` The start time of a specified query 
* to: `<DateTime>` The end time of a specified query 

#### Example:
```
  query{
    solana{
volumeByToken(date: {from:"2021-08-11T03:50:04Z",to:"2021-08-11T04:00:04Z"}, tokenId: "RBFiUqjYuy4mupzZaU96ctXJBy23sRBRsL3KivDAsFM")
  }
  }
   
```

#### Result:
```
{
  "data": {
    "solana": {
      "volumeByToken": 0
    }
  }
}
```


### volumeChangeByToken 
Returns a list of a specific token Volume within a time period 

#### ** Parameters ** : 
* resolution: `<Enum>` (required) ONE_DAY,ONE_WEEK,ONE_MONTH
* from: `<DateTime>` 
* to: `<DateTime>` 

#### Example:
```
  query{
    solana{
volumeChangeByToken(time: {resolution:ONE_SECOND,from:"2021-08-11T03:50:04Z",to:"2021-08-11T04:00:04Z"}, tokenId: "RBFiUqjYuy4mupzZaU96ctXJBy23sRBRsL3KivDAsFM"){
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
      "volumeChangeByToken": []
    }
  }
}
```

### uniqueSerumUsers 
Returns the number of unique Serum Users

#### ** Parameters ** : 
* from: `<DateTime>` The start time of a specified query 
* to: `<DateTime>` The end time of a specified query 

#### Example:
```
  query{
    solana{
uniqueSerumUsers(date: {from:"2021-08-11T03:50:04Z",to:"2021-08-11T04:00:04Z"})
  }
  }
  
```

#### Result:
```
{
  "data": {
    "solana": {
      "uniqueSerumUsers": 28
    }
  }
}
```


### totalvalLocked 

#### ** Parameters ** : 
* from: `<DateTime>` 
* to: `<DateTime>` 

#### Example:
```
  query{
    solana{
totalvalLocked(date: {from:"2021-08-11T03:50:04Z",to:"2021-08-11T03:55:04Z"})  
  }
  }
 
```

#### Result:
```
{
  "data": {
    "solana": {
      "totalvalLocked": 39055735
    }
  }
}
```


### totalvalLockedAmt 

#### ** Parameters ** : 
* from: `<DateTime>` 
* to: `<DateTime>` 

#### Example:
```
  query{
    solana{
totalvalLockedAmt(date: {from:"2021-08-11T03:50:04Z",to:"2021-08-11T03:55:04Z"})  
  }
  }
 
```

#### Result:
```
{
  "data": {
    "solana": {
      "totalvalLockedAmt": 5667377705.85
    }
  }
}
```