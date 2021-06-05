---
title: Transaction
---

For more information on Transactions: https://docs.solana.com/developing/programming-model/transactions

### Elements of Transactions
* hash: `<String>` Unique Identifier of a Transaction
* isConfirmed: `<Boolean>` If a transaction is confirmed
* block: `<String>` Block the Transaction is in
* result: `<String>` 
* fee: `<Float>` Fee of the transaction (in Lamports)
* timestamp: `<Float>` Time of the Transaction (in Epochs)
* programLog: `<String>` 
* transactionStatus: `<String>` Status of the Transaction 

### transactions
Returns Transactions 


#### ** Parameters ** : 
* Paging: (Optional) `<int>` 
  - Page: `<int>` Start of Page 


#### Example:
```
query{
	transactions{
    hash
    fee
  }
}
```

#### result:
```
{
  {
  "data": {
    "transactions": [
      {
        "hash": "2WGfxBa23ZoMoQ4Hsw9a4p7DR695tTRX6y6cAeURkim5LmT9axVM51iHARpR2bXQVpbDUmvAxcLqGAFK453sfwxo",
        "fee": 0
      },
      {
        "hash": "5UWiw5opuQhpgakKNCUTaFZgZEjZMR6KesLVjo3x3e3vEZeeNKskkvw6YYmePcHGMUCN6soLgKfnVeA3mFzz5nnj",
        "fee": 0
      }
```

### transactionByTxnHash
Returns a specific instance of a transaction.

#### ** Parameters ** : 
* Hash: `<String>` (required) Transaction Hash 

#### Example:
```
query{
	transactionByTxnHash(txnHash:"2WGfxBa23ZoMoQ4Hsw9a4p7DR695tTRX6y6cAeURkim5LmT9axVM51iHARpR2bXQVpbDUmvAxcLqGAFK453sfwxo"){
    block
    timestamp
  }
}
```

#### Result:
```
{
  "data": {
    "transactionByTxnHash": {
      "block": "3kF1owv5JsgpxRxdriAM3S5LHgFmUYedTSHXze9YzdCM",
      "timestamp": 0
    }
  }
}
```

### transactionCount

#### ** Parameters ** : 
* timeFrame: `<Enum>` (required) ONE_DAY,ONE_WEEK,ONE_MONTH

#### Example:
```
query{
	solana{
   transactionCount(timeFrame:ONE_DAY)
	}
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "transactionCount": 0
    }
  }
}
```


### transactionByResult
Returns Transactions by Results

#### ** Parameters ** : 
* TxnResult: `<String>` (required) The result of a transaction 
* Paging: (Optional) `<int>` 
  - Page: `<int>` Start of Page 

#### Example:
```
query{
	solana{
   transactionsByResult(txnResult:null){
    hash
	}
}
```

#### Result:
```


```



