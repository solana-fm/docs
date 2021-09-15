---
title: Account Transaction
---

### Elements of Account Transactions 
* transactionHash: `<String>` Unique Identifier of a Transaction
* account: `<String>` Hash of an Account
* role: `<String>` Role of an account in a transaction 
* timestamp: `<DateTime>`

### accountTransactions
Returns accountTransactions 

#### ** Parameters ** : 
* Paging: (Optional) `<int>` 
  - Page: `<int>`Start of Page 
- from: `<DateTime>` (Required)
- to: `<DateTime>` (Required)
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

### accountTransactionByHash
Returns an instance of Account Transaction.

#### ** Parameters ** : 
* transactionHash: `<String>` The Hash of a transaction (required)

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

### Result:
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

### accountTransactionsByRole
Returns Account Transactions by Role

#### ** Parameters ** : 
* accountTransactionRole: `<String>` The role of an account in a transaction. 
* Paging: (Optional) `<int>` 
  - Page: `<int>`Start of Page 

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

### accountTransactionByHash
Returns an instance of Account Transaction.

#### ** Parameters ** : 
* transactionHash: `<String>` The Hash of a transaction (required)

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

### Result:
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
* accountTransactionRole: `<String>` The role of an account in a transaction (required)
* transactionHash: `<String>` The transaction Hash (required)
* account: `<String>` The account Hash (required)


#### Example:
```
query{
  solana{
    accountTransactionByPk(transactionHash:"4YoJosRJXh7XcNEnXvcdrVTDVF9MNbLMjAPnRUL1rwnU79CtcbKznJV4Yw8T3RAvU923oV4DE3XkBhA9BWhdtWeY",account:"Vote111111111111111111111111111111111111111",accountTransactionRole:"4"){
      account
      transactionHash
      accountTransactionRole
    }
  }
}
```

#### Result:
```
something wrong
```

### accountActive

Returns number of active Accounts
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
      "accountActive": 10094
    }
  }
}
```

### accountActiveOverTime

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: ``
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)

### Example:

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

### Result:

```
{
  "data": {
    "solana": {
      "accountActiveOverTime": []
    }
  }
}
```






