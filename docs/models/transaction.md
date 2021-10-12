---
title: Transaction
---

For more information on Transactions: https://docs.solana.com/developing/programming-model/transactions

### Elements of Transactions
* hash: `<String>` Unique Identifier of a Transaction
* isConfirmed: `<Bool>` 
* block: `<String>` 
* Status: `<Int>` 
* fee: `<Float>` Fee of the transaction (in Lamports)
* timestamp: `<DateTime>`
* signatures: `<Object>` Transaction_Signatures Object where the transaction Hashes matches the transactions_signature's hashes 
* logs: `<Object>` Transaction_Logs Object where the transaction Hashes matches the transactions_log's hashes 

### transactions
Returns Transactions 


#### ** Parameters ** : 
* Paging: (Optional) `<int>` 
  - Page: `<int>` Start of Page 
- from: `<DateTime>` (Required)
- to: `<DateTime>` (Required)


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

### transactionByTxHash
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
Returns number of transactions in a given time 

#### ** Parameters ** :
- from `<DateTime>`
- to `<DateTime>`

#### Example:

```
query {
  solana {
     transactionCount(date: { from: "2021-05-30T00:00:00Z", to: "2021-06-30T00:00:00Z" })
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "transactionCount": 1369869
    }
  }
}
```
### transactionsByTimeRange

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)

### Example:

```
query {
  solana {
    blocksCreatedByTimeRange(time:{from:"2021-08-01T05:30:30Z",to:"2021-09-10T20:30:30Z",resolution:ONE_MIN}){
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
      "blocksCreatedByTimeRange": []
    }
  }
} 
```
### medianFees
Returns median fees over time range

#### ** Parameters ** :
- from `<DateTime>`
- to `<DateTime>`

#### Example:

```
query {
  solana {
    blockCount(from: "2021-05-05")
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "blockCount": 10094
    }
  }
}
```
### totalMedianInTimeRange

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)

### Example:

```
query {
  solana {
    blocksCreatedByTimeRange(time:{from:"2021-08-01T05:30:30Z",to:"2021-09-10T20:30:30Z",resolution:ONE_MIN}){
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
      "blocksCreatedByTimeRange": []
    }
  }
} 
```
### totalFees
Returns Total Fees in Time Range

#### ** Parameters ** :
- from `<DateTime>`
- to `<DateTime>`

#### Example:

```
query {
  solana {
    blockCount(from: "2021-05-05")
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "blockCount": 10094
    }
  }
}
```
### totalFeesInTimeRange

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)

### Example:

```
query {
  solana {
    blocksCreatedByTimeRange(time:{from:"2021-08-01T05:30:30Z",to:"2021-09-10T20:30:30Z",resolution:ONE_MIN}){
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
      "blocksCreatedByTimeRange": []
    }
  }
} 
```

### transactionByBlockNumber
Returns a specific instance of a transaction.

#### ** Parameters ** : 
* block: `<Float>` (required) 

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



