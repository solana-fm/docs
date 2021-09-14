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

### accountInputs

Returns account Inputs.

#### ** Parameters ** :

- from: `<DateTime>` (Required)
- to: `<DateTime>`
- Paging: (Optional) `<int>`
  - Page: `<int>`Start of Page

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

### ByHash

Returns a specific account Input via transactionHash and accountHash.

#### **Parameters**:

- Hash: `<String>` (Required) The Hash of an Account

#### Example:

```
query{
  ByHash(Hash: "SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8"){
  	hash
    balance
  }
}
```

#### Result:

```
{
  "data": {
    "ByHash": {
      "hash": "SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8",
      "balance": 1141440,
    }
  }
}
```

### accountBalance

Returns balances of accounts greater than balance input.

#### ** Parameters ** :

- balance (Lamports)

#### Example:

```
query {
  solana {
    accountBalance(balance:100000 ) {
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

### accountBalanceByToken

Returns the number of transactions of a specific token within a time period.

#### ** Parameters ** :

- TokenId: `<String>` (required)
- TimeFrame: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)

### Example:

```
query{
  solana{
	accountBalanceByToken(tokenId:"",timeFrame:ONE_DAY){
	  }
  }
}
```

### Result:

```
TokenId still blank
```

### accountEarliestBalance

#### ** Parameters ** :

- AccountHash: `<String>` (required)

### Example:

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

### Result:

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

- AccountHash: `<String>` (required)

### Example:

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

### Result:

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

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: ``
- balance: `<Int>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)

### Example:

```
query {
  solana {
    accountBalancesOverTime(balance: 1000, time:{from:"2021-08-01T05:30:30Z",to:"2021-09-10T20:30:30Z",resolution:ONE_MIN}){
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
      "accountBalancesOverTime": []
    }
  }
}
```

### accountsWithHigestBalances

### Example:

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

### Result:

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

- timeStamp `<DateTime>`

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
- resolution: ``
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)

### Example:

```
query {
  solana {
    accountsCreatedOverTime(ƒtime:{from:"2021-08-01T05:30:30Z",to:"2021-09-10T20:30:30Z",resolution:ONE_MIN}){
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
      "accountBalancesOverTime": []
    }
  }
}
```

### accountSerumProviders

#### ** Parameters ** :

- timeStamp `<DateTime>`

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

## accountBalancesByToken

#### ** Parameters ** :

- timeStamp `<DateTime>`

#### Example:

```
query {
  solana {
    accountBalancesByToken(timestamp: "2021-09-09", tokenId: "SOL-LP_TOKEN") {
      preBalance
      preBalance
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
      "accountBalancesByToken": []
    }
  }
}
```
