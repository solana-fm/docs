For more information on Transactions: https://docs.solana.com/developing/programming-model/transactions

### Elements of Transactions
* Hash: `<String>` Unique Identifier of a Transaction
* IsConfirmed: `<Boolean>` If a transaction is confirmed
* Block: `<String>` Block the Transaction is in
* Result: `<String>` 
* Fee: `<Float>` Fee of the transaction (in Lamports)
* Timestamp: `<Float>` Time of the Transaction (in Epochs)
* ProgramLog: `<String>` 
* TransactionStatus: `<String>` Status of the Transaction 

### Transactions
Returns the first 25 Transactions 


#### ** Parameters ** : 

None

#### Example:
```
query{
	transactions{
    hash
    fee
  }
}
```

#### Result:
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

### TransactionByTxnHash
Returns a specific instance of a transaction.

#### ** Parameters ** : 
* Hash: `<String>` Transaction Hash 

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

### TransactionCount

#### ** Parameters ** : 
* timeFrame: `<enum>` 1D/1W/1M




