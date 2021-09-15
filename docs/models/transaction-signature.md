---
title: Transaction Signature
---

For more information of a transaction signature: https://docs.solana.com/developing/programming-model/transactions#signatures

### Elements of Transaction Signature

- transactionHash: `<String>` Unique Identifier of a Transaction
- signature: `<String>` Unique Identifier of a Transaction Signature
- timestamp: `<DateTime>`

### transactionSignatures

Returns Transaction Signatures

#### ** Parameters ** :

- Paging: (Optional) `<int>`
  - Page: `<int>` Start of Page

* from: `<DateTime>` (Required)
* to: `<DateTime>` (Required)

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
- Paging: (Optional) `<int>`
  - Page: `<int>` Start of Page

#### Example:

```
query {
  solana {
    transactionSignatureBySignature(signature: "sBBfXQirqtxfSDCdRrgziYLmtvSyfijs65PZPG9oBaBJmV2UM2wzmAQhfXYMiB18qgjN89PRbSDPx2SD9pdDozj") {
      signature
      timestamp
    }
  }
}
```

#### Result:

```

```

### transactionSignatureBySignature

Returns of a specific instance of Transaction Signature via signature

#### ** Parameters ** :

- signature: `<String>` (required) Unique Identifier of a transaction signature

#### Example:

```
query{
	transactionSignatureBySignature(Signature: ""){

  }
}
```

#### Result:

```

```
