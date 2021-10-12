---
title: Account Input
---

For more Information on AccountsInputs: https://docs.solana.com/developing/programming-model/accounts

### Elements of Account Inputs

- transactionHash : `<String>` The hash of a specific transaction
- account: `<String>` The hash of a specific account
- tokenId: `<String>` The ID of a specific Token
- preBalance: `<Float>` The Pre Balance of an account in Lamports
- postBalance: `<Float>` The Post Balance of an account in Lamports
- timeStamp: `<Float>` Time (in epochs) it was created at
- transactions: `<Object>` The transactions that matches the returned account Hashes

### accountInputs

Returns account Inputs.

#### ** Parameters ** :

- from: `<DateTime>` 
- to: `<DateTime>`
- paging: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` 

#### Example:

```
query {
  solana {
    accountInputs(date: {from:"2021-01-09T05:30:00Z", to: "2021-10-10T05:30:00Z"} ){
      account
      transactionHash
    }
  }
}

```

#### Result:

```
{
  "data": {
    "solana": {
      "accountInputs": [
        {
          "account": "2Gx3UfV831BAh8uQv1FKSPKS9yajfeeD8GJ4ZNb2o2YP",
          "transactionHash": "56LkkCQL61Fpb96eTCZvSzfnUtgqanCX9ZN1QMmS4xbWg42d2fUxD7Ma5xwvSUCm82FiCJWN4jLM6jsxZmujbJn3"
        },
        {
          "account": "2MWuFpzA6bWc2Vw86shAq6oXZ3ShrVvKCg78jQCpu3Hw",
          "transactionHash": "2qCU22mz6Jj34bEpiuRigdLw53AD7J6JYEbejQo5ezDcTdqwbXdhLYHQAWU5wgSMZCPTe1e1eKiAra41oprjjNea"
        }...
```

### accountInputByPk

Returns an account Input via Primary Key

#### ** Parameters ** :

- txHash: `<String>` (Required)
- accountHash: `<String>` (Required)
- tokenId: `<String>` (Required)

#### Example:

```


```

#### Result:

```

```

### accountBalance

Returns balances of accounts greater than balance input

#### ** Parameters ** :

- balance `<Float>`(Required) 
- paging: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` 


#### Example:

```
query {
  solana {
    accountBalance(balance:100000) {
      account
      balance
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
      "accountBalance": [
        {
          "account": "EGwohnADja2jGMoEtcntFb5bte5B7gZGCJgNX5q9nmM3",
          "balance": 2039280,
          "timestamp": "2021-08-17T05:27:33.000Z"
        },
        {
          "account": "5dufuPDMAyFoAiH6jDgYkvW6C9JDoTkRnkwMEX7JS8je",
          "balance": 1503360,
          "timestamp": "2021-08-17T05:27:33.000Z"
        },
        {
          "account": "5XhGZpENXAuHC8chWuXz7nvEMFyGNDHSw5bMJHsR9z8j",
          "balance": 2039280,
          "timestamp": "2021-08-17T05:27:33.000Z"
        } ...
```

### accountBalancesByToken

Returns the account balances a specific token within a time period.

#### ** Parameters ** :

- tokenId: `<String>` (required)
- from: `<DateTime>` 
- to: `<DateTime>` 
- paging: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` 


#### Example:

```
query{
  solana{
	accountBalanceByToken(tokenId:""){
	  }
  }
}
```

#### Result:

```
TokenId still blank
```

### accountFirstBalance

#### ** Parameters ** :

- accountHash: `<String>` (required)

#### Example:

```
query {
  solana {
    accountFirstBalance(accountHash: "EGwohnADja2jGMoEtcntFb5bte5B7gZGCJgNX5q9nmM3") {
    account
    balance
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
      "accountLatestBalance": {
        "account": "EGwohnADja2jGMoEtcntFb5bte5B7gZGCJgNX5q9nmM3",
        "balance": 3,
        "timestamp": "2021-08-17T05:27:33.000Z"
      }
    }
  }
}
```
### accountLatestBalance

#### ** Parameters ** :

- accountHash: `<String>` (required)

#### Example:

```
query {
  solana {
    accountLatestBalance(accountHash: "EGwohnADja2jGMoEtcntFb5bte5B7gZGCJgNX5q9nmM3") {
    account
    balance
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
      "accountLatestBalance": {
        "account": "EGwohnADja2jGMoEtcntFb5bte5B7gZGCJgNX5q9nmM3",
        "balance": 3,
        "timestamp": "2021-08-17T05:27:33.000Z"
      }
    }
  }
}
```

### accountBalancesOverTime

#### ** Parameters ** :

- balance: `<Int>` (required)
- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)
- paging: (Optional) 
  - page: `<int>` Start of Page
  - limit: `<int>` 


#### Example:

```
query {
  solana {
    accountBalancesOverTime(balance: 1000000000, time: {from: "2021-08-11T03:54:05Z", to: "2021-08-11T07:54:05Z", resolution: ONE_MIN}) {
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
      "accountBalancesOverTime": [
        {
          "time": "2021-08-11T03:54:00.000Z",
          "value": 182087426666614140
        }
      ]
    }
  }
}
```

### accountsWithHigestBalances
- paging: (Optional) 
  - page: `<int>` Start of Page
  - limit: `<int>` 


#### Example:

```
query {
  solana {
    accountsWithHighestBalances {
      account
      balance
    }
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "accountsWithHighestBalances": [
        {
          "account": "2ojv9BAiHUrvsm9gxDe7fJSzbNZSJcxZvf8dqmWGHG8S",
          "balance": 1740799932935461
        },
        {
          "account": "6ZRCB7AAqGre6c72PRz3MHLC73VMYvJ8bi9KHf1HFpNk",
          "balance": 1631898309447264
        },
        {
          "account": "FxteHmLwG9nk1eL4pjNve3Eub2goGkkz6g6TbvdmW46a",
          "balance": 1558982179345158
        }
```

### accountsCreated
Returns number of accounts created

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`

#### Example:

```
query {
  solana {
    accountsCreated(timeStamp: "2021-05-05")
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "accountsCreated": 10094
    }
  }
}
```
### accountsCreatedOverTime

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)
- paging: (Optional) 
  - page: `<int>` Start of Page
  - limit: `<int>` 

#### Example:

```
query {
  solana {
    accountsCreatedOverTime(time: { from: "2021-08-11T03:54:05Z", to: "2021-08-11T03:54:05Z", resolution: ONE_DAY}) {
      time
      value
    }
  }
}
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "accountsCreatedOverTime": [
        {
          "time": "2021-08-11T00:00:00.000Z",
          "value": 1830
        }
      ]
    }
  }
}
```

### accountSerumProviders

#### ** Parameters ** :
- from: `<DateTime>`
- to: `<DateTime>`

#### Example:

```
query {
  solana {
    accountSerumProviders(timeStamp: "2021-05-05")
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "accountSerumProviders": 1212431
    }
  }
}
```

