---
title: Account Instruction
---
Account instructions are accounts that store a set of instructions targeting accounts.

### Elements of Account Instruction
* **txInstructionId**: `<Float>` The refers to the index of the instruction.
* **transactionHash**: `<String>` The hash that uniquely identifies a transaction.
* **parentIndex**: `<Int>` parentIndex of value -1 represents a parent instruction while any other value represents another instruction nested under a parent instruction.
* **index**: `<Float>` Index refers to the index of an account involved in the transaction.
* **account**: `<String>` The hash that uniquely identifies an account.
* **timestamp**: `<DateTime>`

:::note The unique account instruction hash can be derived by taking the the txinstructionId + transactionHash + parentIndex

#### Sample
0 + transactionHash + 1 would mean that the instruction is nested under the parent instruction of index 1 with the first index
0 + transactionHash + -1 would mean that the instruction is a parent instruction at the first index

### AccountInstruction GetAll

This query takes in the following parameters and returns all account instructions in a specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/account-instructions?from=2021-11-01&to=2021-11-02
```
#### Sample returned results
```
[
    {
        "txInstructionId": 0,
        "transactionHash": "5Gxjz5rrbHHk3ZHdBLN6MAia8n6krSCqwaRHy48yk5XTPJirMSxMSEDMiswiNKLPYyoLovExsxta587MWaTVbhUy",
        "parentIndex": -1,
        "account": "SysvarC1ock11111111111111111111111111111111",
        "index": 2,
        "timestamp": "2021-11-01T16:00:00Z"
    },
    {
        "txInstructionId": 0,
        "transactionHash": "Kt2j1NfsaSqsmKhCBfsE6gpYPW2gFnjkJFWZ5LcYpLjjCF7yqgT3RpTHGCj32RuwQRChm53kNkhM3fEKMwcR5yM",
        "parentIndex": -1,
        "account": "SysvarC1ock11111111111111111111111111111111",
        "index": 2,
        "timestamp": "2021-11-01T16:00:00Z"
    },
    ...
]
```

