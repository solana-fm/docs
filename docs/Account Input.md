For more Information on AccountsInputs: https://docs.solana.com/developing/programming-model/accounts



### Elements of Account Inputs
* transactionHash : `<String>` The hash of a specific transaction
* account: `<String>` The hash of a specific account
* tokenId: `<String>` The ID of a specific Token
* preBalance: `<Float>` The Pre Balance of an account in Lamports
* postBalance: `<Float>` The Post Balance of an account in Lamports
* createdAt: `<Float>` Time (in epochs) it was created at  


### accountInputs
Returns account Inputs. 

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

### accountBalanceByAccAndTxHash
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


### accountBalanceByToken
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

### accountBalanceByCreatedTime
Returns the number of instances in the provided time period.

#### ** Parameters ** : 
* TimeFrame: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)

### Example: 
```
query{
	accountBalanceByCreatedTime(timeFrame:ONE_DAY){
	}
}
```






