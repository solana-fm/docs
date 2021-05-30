For more Information on AccountsInputs: https://docs.solana.com/developing/programming-model/accounts



### Elements of Account Inputs
* TransactionHash : `<String>` The hash of a specific transaction
* Account: `<String>` The hash of a specific account
* TokenId: `<String>` The ID of a specific Token
* PreBalance: `<Float>` The Pre Balance of an account in Lamports
* PostBalance: `<Float>` The Post Balance of an account in Lamports
* CreatedAt: `<Float>` Time (in epochs) it was created at  


### AccountInputs
Returns first 25 accounts

#### ** Parameters ** : 

None 

#### Example:
```
query{
	accountInputs{
    transactionHash
    account
  }
}
```


#### Result:
```

```

### AccountBalanceByAccAndTxHash
Returns a specific instance of an Account Input after a transaction.

#### ** Parameters ** : 
* transactionHash: `<String>` (required)
* account: `<String>` (required) Account Hash

#### Example:
```
query{
	accountBalanceByAccAndTxHash(accHash: "asfasfa",txHash: "124124"){
  }
}
```

#### Result:
```

```


### AccountBalanceByToken
Returns the number of transactions of a specific token within a time period.

#### ** Parameters ** : 
* TokenId: `<String>` (required)
* TimeFrame: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)


### Example: 
```
query{
	accountBalanceByToken(tokenId:"",timeFrame:ONE_DAY){
	}
}
```




