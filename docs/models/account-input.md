---
title: Account Input
---

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
* Paging: (Optional) `<int>` 
  - Page: `<int>`Start of Page 

#### Example:
```
query{
  solana{
	  accountInputs{
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
    "solana": {
      "accountInputs": [
        {
          "transactionHash": "4ATViT4FmkNdK52vakMC1BGFmzWjioF6cmsM4uXKhKSi6AuQzX2ueuKd7r2c5eqUxPPtbNCwJnH6nhAhLsj955YF",
          "account": "2PDvmDx6HeKv3wtdwmGQGmz9pGXXDKNFVvGizGGaAqxL"
        }
```

### accountBalanceByAccAndTxHash
Returns a specific instance of an Account Input after a transaction.

#### ** Parameters ** : 
* transactionHash: `<String>` (required)
* account: `<String>` (required) Account Hash

#### Example:
```
query{
  solana{
	  accountBalanceByAccAndTxHash(txHash:"4ATViT4FmkNdK52vakMC1BGFmzWjioF6cmsM4uXKhKSi6AuQzX2ueuKd7r2c5eqUxPPtbNCwJnH6nhAhLsj955YF",accHash:"SysvarS1otHashes111111111111111111111111111"){
      preBalance
      postBalance
    }
  }
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "accountBalanceByAccAndTxHash": {
        "preBalance": 1,
        "postBalance": 1
      }
    }
  }
}
```


### accountBalanceByToken
Returns the number of transactions of a specific token within a time period.

#### ** Parameters ** : 
* TokenId: `<String>` (required)
* TimeFrame: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)


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

### accountBalanceByCreatedTime
Returns the number of instances in the provided time period.

#### ** Parameters ** : 
* TimeFrame: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)

### Example: 
```
{
  "data": {
    "solana": {
      "accountBalanceByCreatedTime": 373915
    }
  }
}
```






