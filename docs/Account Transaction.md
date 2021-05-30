

### Elements of Account Transactions 
* transactionHash: `<String>` Unique Identifier of a Transaction
* account: `<String>` Hash of an Account
* accountTransactionRole: `<String>` Role of an account in a transaction 
* accountNavigation: `<List>` List of accounts
* transactionHashNavigation: `<List>` List of transaction 

### accountTransactions
Returns the first 25 accountTransactions 

#### ** Parameters ** : 

None

#### Example:
```
query{
	accountTransactions{
    transactionHash
    account
	}
}
```

#### Result:
```
{
  "data": {
    "accountTransactions": [
      {
        "transactionHash": "4YoJosRJXh7XcNEnXvcdrVTDVF9MNbLMjAPnRUL1rwnU79CtcbKznJV4Yw8T3RAvU923oV4DE3XkBhA9BWhdtWeY",
        "account": "Vote111111111111111111111111111111111111111"
      },
      {
        "transactionHash": "5UWiw5opuQhpgakKNCUTaFZgZEjZMR6KesLVjo3x3e3vEZeeNKskkvw6YYmePcHGMUCN6soLgKfnVeA3mFzz5nnj",
        "account": "Vote111111111111111111111111111111111111111"
      }

```



