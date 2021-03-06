---
title: Transaction
---

For more information on Transactions: https://docs.solana.com/developing/programming-model/transactions

### Elements of Transactions

- hash: `<String>` Unique Identifier of a Transaction
- isConfirmed: `<Bool>`
- block: `<String>`
- Status: `<Int>`
- fee: `<Float>` Fee of the transaction (in Lamports)
- timestamp: `<DateTime>`
- signatures: `<Object>` Transaction_Signatures Object where the transaction Hashes matches the transactions_signature's hashes
- logs: `<Object>` Transaction_Logs Object where the transaction Hashes matches the transactions_log's hashes

### transactions

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- paging:
  - page: `<Int>`
  - limit: `<Int>`

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

- Hash: `<String>` (required)

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

### transactionsByStatus



#### ** Parameters ** :

- status: `<Enum>` (Required)
- from: `<DateTime>`
- to: `<DateTime>`
- paging:
  - page: `<Int>`
  - limit: `<Int>`

#### Example:

```
{
  solana {
    transactionsByStatus(
      status: SUCCESS
      date: {from: "2021-11-21T06:01:44Z", to: "2021-11-21T10:01:44Z"}
    ) {
      hash
      block
    }
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

Returns number of transactions in a given time range

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
      "transactionsByStatus": [
        {
          "hash": "32Wj9W1QKyKLTJ8185FyrQaqCpgSwwDxpUdwhvpZaYuNVFwxPMbAxM8gFiUiH7XBAAEVBs3UkBmRUwGPsPzJtTPv",
          "block": 107942424
        },
        {
          "hash": "3Z5nYtMBa5ZLE52NNf6M4dHr8MDZUpqz1VtkeWfUhWDd7BcJG938RHtpQCt3amBfCZKJjioFcWHh4vaPy44R4FZy",
          "block": 107942424
        },
        {
          "hash": "5V2qJdzGVKPCDSFkNyua1xibzDEmvMgVgo9aK4vkp6KrgTYPGV82prV4avCnygzriSM9hjudLHT12dQvT3xotnP2",
          "block": 107942424
        }
    }
  }
}
```

### transactionsByTimeRange

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)
- paging: (Optional)
  - page: `<Int>`
  - limit: `<Int>`

#### Example:

```
{
  solana {
    transactionsByTimeRange(
      time: {from: "2021-11-10T00:00:00Z", to: "2021-11-10T04:00:00Z", resolution: ONE_HOUR}
    ) {
      time
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
      "transactionsByTimeRange": [
        {
          "time": "2021-11-10T00:00:00.000Z",
          "value": 9238273
        },
        {
          "time": "2021-11-10T01:00:00.000Z",
          "value": 9486447
        },
        {
          "time": "2021-11-10T02:00:00.000Z",
          "value": 9076769
        },
        {
          "time": "2021-11-10T03:00:00.000Z",
          "value": 9492853
        },
        {
          "time": "2021-11-10T04:00:00.000Z",
          "value": 2973
        }
      ]
    }
  }
}
```

### successfulTransactionsByTimeRange

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)
- paging: (Optional)
  - page: `<Int>`
  - limit: `<Int>`

#### Example:

```
{
  solana {
    successfulTransactionsByTimeRange(
      time: {from: "2021-11-10T00:00:00Z", to: "2021-11-10T04:00:00Z", resolution: ONE_HOUR}
    ) {
      time
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
      "successfulTransactionsByTimeRange": [
        {
          "time": "2021-11-10T00:00:00.000Z",
          "value": 7840902
        },
        {
          "time": "2021-11-10T01:00:00.000Z",
          "value": 8122396
        },
        {
          "time": "2021-11-10T02:00:00.000Z",
          "value": 7801792
        },
        {
          "time": "2021-11-10T03:00:00.000Z",
          "value": 8120565
        },
        {
          "time": "2021-11-10T04:00:00.000Z",
          "value": 2023
        }
      ]
    }
  }
}
```

### failedTransactionsByTimeRange

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)
- paging: (Optional)
  - page: `<Int>`
  - limit: `<Int>`

#### Example:

```
{
  solana {
    failedTransactionsByTimeRange(
      time: {from: "2021-11-10T00:00:00Z", to: "2021-11-10T04:00:00Z", resolution: ONE_HOUR}
    ) {
      time
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
      "failedTransactionsByTimeRange": [
        {
          "time": "2021-11-10T00:00:00.000Z",
          "value": 1397371
        },
        {
          "time": "2021-11-10T01:00:00.000Z",
          "value": 1364051
        },
        {
          "time": "2021-11-10T02:00:00.000Z",
          "value": 1274977
        },
        {
          "time": "2021-11-10T03:00:00.000Z",
          "value": 1372288
        },
        {
          "time": "2021-11-10T04:00:00.000Z",
          "value": 950
        }
      ]
    }
  }
}
```

### medianFees

Returns median fees in a time range

#### ** Parameters ** :

- from `<DateTime>`
- to `<DateTime>`

#### Example:

```
query {
  solana {
    medianFees(date{from: "2021-05-05T05:30:30", to:"2021-05-05T07:30:30"} )
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "medianFees": 5000
    }
  }
}
```

### totalMedianInTimeRange

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)
- paging: (Optional)
  - page: `<Int>`
  - limit: `<Int>`

#### Example:

```
query {
  solana {
    totalMedianInTimeRange(time:{from:"2021-08-01T05:30:30Z",to:"2021-09-10T20:30:30Z",resolution:ONE_HOUR}){
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
      "totalMedianInTimeRange": [
        {
          "time": "2021-11-10T00:00:00.000Z",
          "value": 5000
        },
        {
          "time": "2021-11-10T01:00:00.000Z",
          "value": 5000
        },
        {
          "time": "2021-11-10T02:00:00.000Z",
          "value": 5000
        },
        {
          "time": "2021-11-10T03:00:00.000Z",
          "value": 5000
        },
        {
          "time": "2021-11-10T04:00:00.000Z",
          "value": 5000
        }
      ]
    }
  }
}
```

### totalFees

Returns Total Fees in Time Range

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`

#### Example:

```
  query{
    solana{
totalFees(date: {from:"2021-08-11T03:40:04Z",to:"2021-08-11T06:00:04Z"})
  }
  }

```

#### Result:

```
{
  "data": {
    "solana": {
      "totalFees": 187170000
    }
  }
}
```

### totalFeesInTimeRange

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)

#### Example:

```
{
  solana {
    totalFeesInTimeRange(
      time: {from: "2021-11-10T00:00:00Z", to: "2021-11-10T04:00:00Z", resolution: ONE_HOUR}
    ) {
      time
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
      "totalFeesInTimeRange": [
        {
          "time": "2021-11-10T04:00:00.000Z",
          "value": 14910000
        },
        {
          "time": "2021-11-10T03:00:00.000Z",
          "value": 47760600000
        },
        {
          "time": "2021-11-10T02:00:00.000Z",
          "value": 45659725000
        },
        {
          "time": "2021-11-10T01:00:00.000Z",
          "value": 47733290000
        },
        {
          "time": "2021-11-10T00:00:00.000Z",
          "value": 46545825000
        }
      ]
    }
  }
}
```

### transactionByBlockNumber

Returns a specific instance of a transaction.

#### ** Parameters ** :

- block: `<Float>` (Required)
- from: `<DateTime>`
- to: `<DateTime>`
- paging: 
  - page: `<Int>`
  - limit: `<Int>`


#### Example:

```
  query{
    solana{
transactionsByBlockNumber(block: 91136732) {
  hash
  timestamp
  block
  }
  }
  }
```

#### Result:

```
{
  "data": {
    "solana": {
      "transactionsByBlockNumber": [
        {
          "hash": "Q6JUUqkQVRKPEH9grUMkDCJjX2gv4enA4ry4e9Lg1N9RnTAUf6ATrMYLUpJFjB6nGRYbugdta8DgEaQBkjUrctu",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "4mZVhXKgtJGJrUrvFrDsPVt9pJ6E98gPkxdEH17uCPNTq7h3n7uYWQ2owJiaEDrQ6W8PfEGFE4SP4QNioTEZE2w4",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "42NVc6CKxsgp9zVRVTSatoo5XHBFgQH8PfkLokEQq5f1FhpMyJMDxmo4kfDSrDEqdp79BVngS9cvUZPecxvEfkbj",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "3b13FkEzCUYuCUc96JmjjnvhFQcgm6PXJYXwjAuLUgPJcZkcxEdCvDahTthMHtof4eHM6Emgxv2uEwLcjSKTs81S",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "E4jhsW84DKouxBd7Eb2MGdrpXVzPcUJ2hjSBhct8gkfpuFmT276EVk9ZnRjLmcHAuw5VYaVjaN4q7tkUr1441xf",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "37EkwU7TGsvmUvAh8SKtqW97Mhw9YuiGTCf85sjGyzuWLHfoko3C9P4nKNxNcxPhHMCAgLpKLKm1zZ4BHLtC9g9m",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "2W8ZRjNBn4XoJNz7Fb1eUk5GTnKezLSVJQwBhnwkeUbcvSoNQPqsCERRtiRvf7tCnMXU1P4CC7Ag96qzmxCJcTrQ",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "3SWg5toJnqaVEvFxYcLBXbtCHCDzy6Eo26FJ5G1djyz9T3v3WzuW4YWdCkk4bVzVrPhvrrmehqAJbjsNgZN8t9bm",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "3rGwNgkTyYJo6pE8Dr6miF8R2fvSAP3g61aGpEia52jHnJbmbvJWaVKi5PiAnWitozQAffK7dPuqJFdX5bn7XBXV",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "5TyrpAZFPZjZF8dJbCX99Vemr8aXxtJVchE262rMbqDFhtbrnsXKdV6FQD77cwvWY8cYL2fevo5vRBbU45Tc4tVM",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "5LFjC9ibRzcEawUegs7eT8MSgL9mD4XCUZbiATPBtUQ8jV6cfssLgU9g42ky4AFcnqReR2YkLa5trx2iwev6ARt1",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "65wk68TS5itAw9YwLTmZ1HS7H1sAkaE6DDD3XiRXihzMJ7QaiSfvQWA1VwUCYmYEFNCgjxmgXGekNb1cj6ULpdUy",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "3uCY9WijbJHNcBqUAFGCoi5MKPu9aDgkD2jLboptfbH1ypbSiXXfUK3hARRCF814gaSKGzQasyM28VBF4hi4xukE",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "3rNNt2pxYq3LyEXAdhcP5skfbcxgwka6zPVfvKDXnjqDKYvCU16pqGbbJ8nNqGdenMi5zaxGnYGcqXM9bBHEzhYb",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "263Jv2Y8qcT1STFRTxkw2tiaobdtqzyBCHbdLkNLEvTDj6KXC4ANeKVxqacWmaU5BueApL8G6EdYhFY4c4LaSGNH",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "3VxYDxFqyW797Ph81ZTbhQhEa7zkPJSNsyW2T8RiZSsQEtpd2FutgNdBbJ4xeK68UsXiWC42WjyA6Jwp4AeBZo1J",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "2KAvYLv9qeGKn4gpW6GKAoTx39P7wgZ3PSzDvZ9zuWS4oKzksbHKfmYenAGKabh43fzaeoNN6qyPJSCyTFkvxNbT",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "32wY9LBzzpAScZUUE91Xt3gCNrPyrUsgVJNcXSnYtURPE6dx9moPCJTwNpnHTbR7fBt7XsdL9kTWtYADwPtkkpCf",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        },
        {
          "hash": "2FPApVLDY9KSCukNYhRdZRy9TwSMXYskhYE4fn7oGiPE9aXZunrQBwxtrtQ5QT7L5Tm5Gef8zaVTQf8tDCt331m2",
          "timestamp": "2021-08-11T03:54:04.000Z",
          "block": 91136732
        }
      ]
    }
  }
}
```
