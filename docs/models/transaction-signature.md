---
title: Transaction Signature
---

For more information of a transaction signature: https://docs.solana.com/developing/programming-model/transactions#signatures

### Elements of Transaction Signature

- transactionHash: `<String>` 
- signature: `<String>` 
- timestamp: `<DateTime>`

### transactionSignatures

Returns Transaction Signatures

#### ** Parameters ** :
* from: `<DateTime>` 
* to: `<DateTime>` 
* paging: (Optional) 
  - page: `<Int>` 
  - limit: `<Int>`

#### Example:

```
query {
  solana {
    transactionSignatures(date: {from:"2021-01-09T05:30:00Z", to: "2021-10-10T05:30:00Z"}) {
      signature
      timestamp
    }
  }
}

```

#### Result:

```
{
  "data": {
    "solana": {
      "transactionSignatures": [
        {
          "signature": "sBBfXQirqtxfSDCdRrgziYLmtvSyfijs65PZPG9oBaBJmV2UM2wzmAQhfXYMiB18qgjN89PRbSDPx2SD9pdDozj",
          "timestamp": "2021-08-17T05:27:33.000Z"
        },
        {
          "signature": "5pyWAZ288tDDbte2euuVU3vNjaCxrxUehgyJyCtpnkfcTfhqKWqKGhv6zg43PNcPNZS2MTEsZHZL8HZTDdyELdUH",
          "timestamp": "2021-08-17T05:27:33.000Z"
        },
        {
          "signature": "5pyWAZ288tDDbte2euuVU3vNjaCxrxUehgyJyCtpnkfcTfhqKWqKGhv6zg43PNcPNZS2MTEsZHZL8HZTDdyELdUH",
          "timestamp": "2021-08-17T05:27:33.000Z"
        }
```

### transactionSignatureByTxHash

Returns of a list of transaction signatures via transaction Hash

#### ** Parameters ** :

- txHash: `<String>` (required) Unique Identifier of a transaction
- paging: (Optional) 
  - page: `<Int>` 
  - limit: `<Int>`

#### Example:

```
query {
  solana {
     transactionSignatureByTxHash(txHash: "2WEhAYuHmQrZQ59AqnhDD5W1mBVsXYQdw4Ksfy7hg3vaskygRXG7JHTEMs26UrJCH76JbFDSayjBnVzNX3KGkj8a") {
       signature
       timestamp
       transactionHash
     }
  }
}

```

#### Result:

```
{
  "data": {
    "solana": {
      "transactionSignatureByTxHash": [
        {
          "signature": "HCdrNJXorjZSYqaTeVUmrnSjaeWworxyLgV4pAraCAH6p4wJZPYuf4bzQer89g4EE6TuShsr3NAhtM5mUvnhpx5",
          "timestamp": "2021-06-30T00:17:04.000Z",
          "transactionHash": "2WEhAYuHmQrZQ59AqnhDD5W1mBVsXYQdw4Ksfy7hg3vaskygRXG7JHTEMs26UrJCH76JbFDSayjBnVzNX3KGkj8a"
        }
      ]
    }
  }
}

```
