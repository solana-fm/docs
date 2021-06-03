---
title: Account Transaction
---

### Elements of Account Transactions 
* transactionHash: `<String>` Unique Identifier of a Transaction
* account: `<String>` Hash of an Account
* accountTransactionRole: `<String>` Role of an account in a transaction 
* accountNavigation: `<List>` List of accounts
* transactionHashNavigation: `<List>` List of transaction 

### accountTransactions
Returns accountTransactions 

#### ** Parameters ** : 

None

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






