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
* transactions: `[Object]` Transaction Object where the account Hashes matches the transactions 
* inputs: `[Object]` Account Inputs Object where the account Hashes matches the account Inputs 

### accountTransactions
Returns accountTransactions 

#### ** Parameters ** : 
- paging: (Optional) 
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
* transactionHash: `<String>` (required)
* paging: (Optional) 
  - page: `<int>` 
  - limit: `<int>` 

#### Example:
```
query{
  solana{
    accountTransactionsByHash(transactionHash:"4YoJosRJXh7XcNEnXvcdrVTDVF9MNbLMjAPnRUL1rwnU79CtcbKznJV4Yw8T3RAvU923oV4DE3XkBhA9BWhdtWeY"){
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
      "transactionHash": "4YoJosRJXh7XcNEnXvcdrVTDVF9MNbLMjAPnRUL1rwnU79CtcbKznJV4Yw8T3RAvU923oV4DE3XkBhA9BWhdtWeY",
      "account": "9bRDrYShoQ77MZKYTMoAsoCkU7dAR24mxYCBjXLpfEJx"
    }
  }
}
```

### accountTransactionsByRole
Returns Account Transactions by Role

#### ** Parameters ** : 
* accountTransactionRole: `<Enum>` The role of an account in a transaction. 
* paging: (Optional) 
  - page: `<int>` 
  - limit: `<int>` 


#### Example:
```
query{
  solana{
    accountTransactionByHash(transactionHash:"4YoJosRJXh7XcNEnXvcdrVTDVF9MNbLMjAPnRUL1rwnU79CtcbKznJV4Yw8T3RAvU923oV4DE3XkBhA9BWhdtWeY"){
      transactionHash
      account
      accountTransactionRole
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
      "accountTransactionRole": "2"
    }
  }
}
```


### accountTransactionsByAccount

#### ** Parameters ** : 
* account: `<String>` The hash of an account (required)
* paging: (Optional) 
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
    accountsCreated(timeStamp: "2021-05-05")
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
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)
- paging: (Optional) 
  - page: `<int>` 
  - limit: `<int>` 

#### Example:

```
query {
  solana {
    accountActiveOverTime(ƒtime:{from:"2021-08-01T05:30:30Z",to:"2021-09-10T20:30:30Z",resolution:ONE_MIN}){
    timestamp
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
      "accountActiveOverTime": []
    }
  }
}
```






