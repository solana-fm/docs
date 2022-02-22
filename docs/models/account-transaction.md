---
title: Account Transaction
---

### Elements of Account Transactions
* transactionHash: `<String>` Unique Identifier of a Transaction
* account: `<String>` Hash of an Account
* role: `<Enum>` Role of an account in a transaction
  - None
  - FeePayer
  - Signer
  - ReadOnly
  - ReadWrite
* timestamp: `<DateTime>`


### accountTransactions
Returns accountTransactions

#### ** Parameters ** :
- paging:
  - page: `<int>` Start of Page
  - limit: `<int>`
- from: `<DateTime>`
- to: `<DateTime>`

#### Example:
```
query{
  solana{
    accountTransactions{
      transactionHash
      account
    }
  }
}
```

#### Result:
```
{
  "data": {
    solana{
      "accountTransactions": [
        {
          "transactionHash": "4YoJosRJXh7XcNEnXvcdrVTDVF9MNbLMjAPnRUL1rwnU79CtcbKznJV4Yw8T3RAvU923oV4DE3XkBhA9BWhdtWeY",
          "account": "Vote111111111111111111111111111111111111111"
        },
        {
          "transactionHash": "5UWiw5opuQhpgakKNCUTaFZgZEjZMR6KesLVjo3x3e3vEZeeNKskkvw6YYmePcHGMUCN6soLgKfnVeA3mFzz5nnj",
          "account": "Vote111111111111111111111111111111111111111"
        }
      }

```

### accountTransactionsByHash

#### ** Parameters ** :
* txHash: `<String>` (required)
* paging: (Optional)
  - page: `<int>`
  - limit: `<int>`

#### Example:
```
query{
  solana{
    accountTransactionsByHash(txHash:"4YoJosRJXh7XcNEnXvcdrVTDVF9MNbLMjAPnRUL1rwnU79CtcbKznJV4Yw8T3RAvU923oV4DE3XkBhA9BWhdtWeY"){
      transactionHash
      account
    }
  }
}
```

#### Result:
```
{
  "data": {
    "accountTransactionsByHash": {
      "txHash": "4YoJosRJXh7XcNEnXvcdrVTDVF9MNbLMjAPnRUL1rwnU79CtcbKznJV4Yw8T3RAvU923oV4DE3XkBhA9BWhdtWeY",
      "account": "9bRDrYShoQ77MZKYTMoAsoCkU7dAR24mxYCBjXLpfEJx"
    }
  }
}
```

### accountTransactionsByRole
Returns Account Transactions by Role

#### ** Parameters ** :
* role: `<Enum>` The role of an account in a transaction. (Required)
* paging:
  - page: `<int>`
  - limit: `<int>`


#### Example:
```
query{
  solana{
    accountTransactionByHash(transactionHash:"4YoJosRJXh7XcNEnXvcdrVTDVF9MNbLMjAPnRUL1rwnU79CtcbKznJV4Yw8T3RAvU923oV4DE3XkBhA9BWhdtWeY"){
      transactionHash
      account
      role
    }
  }
}
```

#### Result:
```
{
  "data": {
    "accountTransactionByHash": {
      "transactionHash": "4YoJosRJXh7XcNEnXvcdrVTDVF9MNbLMjAPnRUL1rwnU79CtcbKznJV4Yw8T3RAvU923oV4DE3XkBhA9BWhdtWeY",
      "account": "9bRDrYShoQ77MZKYTMoAsoCkU7dAR24mxYCBjXLpfEJx",
      "role": "2"
    }
  }
}
```


### accountTransactionsByAccount

#### ** Parameters ** :
* account: `<String>` The hash of an account (required)
* paging:
  - page: `<int>`
  - limit: `<int>`

#### Example:
```
query{
  solana{
    accountTransactionByHash(transactionHash:"4YoJosRJXh7XcNEnXvcdrVTDVF9MNbLMjAPnRUL1rwnU79CtcbKznJV4Yw8T3RAvU923oV4DE3XkBhA9BWhdtWeY"){
      transactionHash
      account
    }
  }
}
```

#### Result:
```
{
  "data": {
    "accountTransactionByHash": {
      "transactionHash": "4YoJosRJXh7XcNEnXvcdrVTDVF9MNbLMjAPnRUL1rwnU79CtcbKznJV4Yw8T3RAvU923oV4DE3XkBhA9BWhdtWeY",
      "account": "9bRDrYShoQ77MZKYTMoAsoCkU7dAR24mxYCBjXLpfEJx"
    }
  }
}
```

### accountTransactionsByPk
Returns specific instance of an Account Transaction

#### ** Parameters ** :
* accountTransactionRole: `<Enum>` The role of an account in a transaction (required)
* transactionHash: `<String>` The transaction hash (required)
* account: `<String>` The account hash (required)


#### Example:
```
query {
  solana {
    accountTransactionByPk(txHash: "3rNNt2pxYq3LyEXAdhcP5skfbcxgwka6zPVfvKDXnjqDKYvCU16pqGbbJ8nNqGdenMi5zaxGnYGcqXM9bBHEzhYb", accountHash: "11111111111111111111111111111111", role: NONE) {
      account
      role
      timestamp
    }
  }
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "accountTransactionByPk": {
        "account": "11111111111111111111111111111111",
        "role": "NONE",
        "timestamp": "2021-08-11T03:54:04.000Z"
      }
    }
  }
}
```

### accountActive
Returns number of active Accounts within a time period

#### ** Parameters ** :
- from: `<DateTime>`
- to: `<DateTime>`

#### Example:

```
query {
  solana {
    accountsCreated(from: "2021-05-05T00:00:00Z", to: "2021-05-05T04:00:00Z")
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "accountActive": 10094
    }
  }
}
```

### accountActiveOverTime

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (Required) (ONE_DAY,ONE_WEEK,ONE_MONTH)
- paging:
  - page: `<int>`
  - limit: `<int>`

#### Example:

```
  query{
    solana{
accountActiveOverTime(time: {resolution: ONE_SECOND,from:"2021-08-11T03:40:04Z",to:"2021-08-11T06:00:04Z"}){
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
      "accountActiveOverTime": [
        {
          "time": "2021-08-11T03:54:04.000Z",
          "value": 774
        },
        {
          "time": "2021-08-11T03:54:05.000Z",
          "value": 1830
        },
        {
          "time": "2021-08-11T03:54:06.000Z",
          "value": 2343
        },
        {
          "time": "2021-08-11T03:54:07.000Z",
          "value": 1841
        },
        {
          "time": "2021-08-11T03:54:10.000Z",
          "value": 1805
        },
        {
          "time": "2021-08-11T03:54:11.000Z",
          "value": 2070
        },
        {
          "time": "2021-08-11T03:54:12.000Z",
          "value": 2696
        },
        {
          "time": "2021-08-11T03:54:14.000Z",
          "value": 2435
        },
        {
          "time": "2021-08-11T03:54:15.000Z",
          "value": 2226
        },
        {
          "time": "2021-08-11T03:54:16.000Z",
          "value": 1808
        },
        {
          "time": "2021-08-11T03:54:17.000Z",
          "value": 2592
        },
        {
          "time": "2021-08-11T03:54:18.000Z",
          "value": 2640
        },
        {
          "time": "2021-08-11T03:54:19.000Z",
          "value": 1151
        },
        {
          "time": "2021-08-11T03:54:20.000Z",
          "value": 1981
        }
      ]
    }
  }
}
```






