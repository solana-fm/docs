---
title: Best Practices
sidebar_position: 3
---
# Best Practices
1. Queries that specify from and to timestamp parameters are the **MOST** ideal.
2. Select only the elements of a query which you require.
3. Use Pagination to increase performance.

## Common Parameters
These parameters are common across all queries.

1. **from and to**
   1. These parameters are used to specify the time range for your query in the format of YYYY-MM-DDTHH:MM:SSZ.
   2. If the time range between from and to is more than 1 day, the value of from would be based off the value of to -1 day
   3. By default if unspecified, the time range would be set from your current time -1 day to your current time of query.
2. **limit**
   1. This parameter is used to specify the number of records shown per page.
   2. By default if unspecified, the limit would be 25. The maximum limit per page is 100.
3. **page**
   1. This parameter is used to specify the page number to be shown.
   2. By default if unspecified, the first page of records would be shown.

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

