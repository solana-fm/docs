---
title: Best Practices
sidebar_position: 3
---
# Best Practices
1. Queries that have a from and to timestamp are the **MOST** Performant queries. 
2. Select only the elements of a query which you require. 
3. Use Pagination to increase performance. 

## Best Example 

```
query{
  solana {
    accountsActiveByTokenId(
      tokenHash: "",
      time: {from:"2021-11-20T10:00:00Z", to: "2021-11-20T14:00:00Z", resolution: ONE_HOUR}
    ) {
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
      "accountsActiveByTokenId": [
        {
          "time": "2021-11-20T14:00:00.000Z",
          "value": 2243
        },
        {
          "time": "2021-11-20T13:00:00.000Z",
          "value": 133399
        },
        {
          "time": "2021-11-20T12:00:00.000Z",
          "value": 123638
        },
        {
          "time": "2021-11-20T11:00:00.000Z",
          "value": 106969
        },
        {
          "time": "2021-11-20T10:00:00.000Z",
          "value": 107569
        }
      ]
    }
  }
}
```

