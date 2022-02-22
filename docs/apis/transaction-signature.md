---
title: Transaction Signature
---

### Elements of Transaction Signature
* **transactionHash**: `<String>` The hash that uniquely identifies a transaction.
* **signature**: `<String>` The hash belonging to the account of the signer.
* **timestamp**: `<Datetime>`

### TransactionSignature GetAll

This query takes in the following parameters and returns all transaction signatures in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/transaction-signatures?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "signature": "2ve19wagicuZmzBaTWuZWgPWSzHkjynk2oXMNoSNWFDFDc1Z2Y9umH2TsyAFoQUv8q2ip98mqSRsXfebFJ2dHSJ4",
        "timestamp": "2021-10-16T23:59:59Z",
        "transactionHash": "MRCTW1EYKvEm5Zv7mHPFSyCG7pzsU726rgK88EsPHVgRPh66tX2e2Cvu9DW8BX7Q3UuSzGamNYph7VGngM5TMYa"
    },
    {
        "signature": "4WVDoC3j33qmhchEnuoANQkqqxsUAbmif5X6nHzKn3KiZfej6UZuSBw3t4zu6JYixyNqRXVxAjTFFXZ1hPxeiS9W",
        "timestamp": "2021-10-16T23:59:59Z",
        "transactionHash": "4Rg2mNoCGrCzyzr5qyqy8Y4cyRHkRAW7rRYa1eUYykNPYy2ds1f6e4NrTDkujttC9t4tiy1nw54iJsYUCvS14GmR"
    },
    ...
]
```

### TransactionSignature GetBySignature

This query takes in the following parameters and returns all transactions with a specified signature in the specified time range.

#### ** Parameters ** :

- **signature**: `<String>` The account hash belonging to account of the signer
- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/transaction-signatures/signature/EAAM5XSdcRt9c6ae9QDSyaxooSFQq5mDnDfzqtAdHkQxg6tJcYYSm3gXXFvCwnCJ13gUhhYHnBfgzHv477gfQxp?from=2022-02-18T00:00:00Z&to=2022-02-19T00:00:00Z
```
#### Sample returned results
```
[
    {
        "signature": "EAAM5XSdcRt9c6ae9QDSyaxooSFQq5mDnDfzqtAdHkQxg6tJcYYSm3gXXFvCwnCJ13gUhhYHnBfgzHv477gfQxp",
        "timestamp": "2022-02-18T08:46:55Z",
        "transactionHash": "4vfDV2KZfTeaqQAySp9Po9dhDmXpiza7ghuAZ2vR4ixJzFJdnuRzLhA8ANTGDEdx1Wz5caFAbcb7Gv336Gnie1L7"
    }
]
```

### TransactionSignature GetByTransaction

This query takes in the following parameters and returns all signatures of a specified transaction in the specified time range.

#### ** Parameters ** :

- **transactionHash**: `<String>` The Hash that uniquely identifies a transaction
- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/transaction-signatures/tx-hash/4vfDV2KZfTeaqQAySp9Po9dhDmXpiza7ghuAZ2vR4ixJzFJdnuRzLhA8ANTGDEdx1Wz5caFAbcb7Gv336Gnie1L7?from=2022-02-18T00:00:00Z&to=2022-02-19T00:00:00Z
```
#### Sample returned results
```
[
    {
        "signature": "EAAM5XSdcRt9c6ae9QDSyaxooSFQq5mDnDfzqtAdHkQxg6tJcYYSm3gXXFvCwnCJ13gUhhYHnBfgzHv477gfQxp",
        "timestamp": "2022-02-18T08:46:55Z",
        "transactionHash": "4vfDV2KZfTeaqQAySp9Po9dhDmXpiza7ghuAZ2vR4ixJzFJdnuRzLhA8ANTGDEdx1Wz5caFAbcb7Gv336Gnie1L7"
    }
]
```
