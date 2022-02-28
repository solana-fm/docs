---
title: Account Transaction
---
Account transactions refer to all accounts involved in transactions.

### Elements of Account Transaction
* **transactionHash**: `<String>` The hash that uniquely identifies an account a transaction.
* **account**: `<String>` The hash that uniquely identifies an account.
* **role**: `<Enum>` Role of an account in a transaction.
  - None = 0
  - FeePayer = 1
  - Signer = 2
  - ReadOnly = 3
  - ReadWrite = 4
* **timestamp**: `<DateTime>`

### List all account transactions

This query takes in the following parameters and returns all accounts involved in transactions in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/account-transactions?from=2022-01-01&to=2022-01-02
```
#### Sample returned results
```
[
    {
        "transactionHash": "QStNBYC67wYYkYmphEEZbXd8pP5rSvxAZ36eSnVnBroCrqtL6txxNNFccCzcjC7yodbfxGHzY15nzCtjo5yQ9ph",
        "account": "FR3SPJmgfRSKKQ2ysUZBu7vJLpzTixXnjzb84bY3Diif",
        "role": 0,
        "timestamp": "2022-01-01T16:00:00Z"
    },
    {
        "transactionHash": "yzf9ALS4uayhnr2d8RdzeckKJXmAtJmhcbvXN49SgFpPGKCp2VVVH2HTNN7HYsWJLLqDicvghhWDmTjuqEdUwSm",
        "account": "SysvarRent111111111111111111111111111111111",
        "role": 0,
        "timestamp": "2022-01-01T16:00:00Z"
    },
    {
        "transactionHash": "88s1ch4pkpT9PpAJhSuWHmNT7wTsGkQkxFGcJripzoBtAisApP6Y97ZEHr78C49RoTAVC4KPga6qw1GR2knf5xZ",
        "account": "mv3ekLzLbnVPNxjSKvqBpU3ZeZXPQdEC3bp5MDEBG68",
        "role": 0,
        "timestamp": "2022-01-01T16:00:00Z"
    },
    ...
]
```

### Retrieves account transactions by a specific account

This query takes in the following parameters and returns all transactions involving a specified account in the specified time range.

#### ** Parameters ** :

- **account**: `<String>` The hash that uniquely identifies an account
- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/account-transactions/transactions/5u6rWLd5cfEioX14rdchPEBKUmxThziAKxbyadXU8nZUbL9VQqdMsX1H4Qk3oSRJZZipSToz3r6W5WpkK9H9i8Ez?from=2022-01-01&to=2022-01-02
```
#### Sample returned results
```
[
    {
        "transactionHash": "5u6rWLd5cfEioX14rdchPEBKUmxThziAKxbyadXU8nZUbL9VQqdMsX1H4Qk3oSRJZZipSToz3r6W5WpkK9H9i8Ez",
        "account": "C93eFMEWACgFkqc3QjaY3UgeY8reFTcDh8SrHy7rwGzL",
        "role": 0,
        "timestamp": "2022-01-01T16:00:00Z"
    },
    {
        "transactionHash": "5u6rWLd5cfEioX14rdchPEBKUmxThziAKxbyadXU8nZUbL9VQqdMsX1H4Qk3oSRJZZipSToz3r6W5WpkK9H9i8Ez",
        "account": "DzpARSggzEgNc2HLdrMEguSf9KGPh5RG1NMBqNnF8ZuU",
        "role": 0,
        "timestamp": "2022-01-01T16:00:00Z"
    },
    {
        "transactionHash": "5u6rWLd5cfEioX14rdchPEBKUmxThziAKxbyadXU8nZUbL9VQqdMsX1H4Qk3oSRJZZipSToz3r6W5WpkK9H9i8Ez",
        "account": "BVktiXyU9xYQeSKbicGRa7MCuzQrUzY5Euxe5qa3mhuW",
        "role": 0,
        "timestamp": "2022-01-01T16:00:00Z"
    },
    ...
]
```

### Retrieve account transactions by a specific role

This query takes in the following parameters and returns all transactions involving a specified role in the specified time range.

#### ** Parameters ** :

- **role**: `<Enum>` Role of an account in a transaction
  - None = 0
  - FeePayer = 1
  - Signer = 2
  - ReadOnly = 3
  - ReadWrite = 4
- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/account-transactions/roles/1?from=2022-01-01&to=2022-01-02
```
#### Sample returned results
```
[
    {
        "transactionHash": "4wLVz6ELoeAT3ymGVLTCxevXBEatamTKw62xdcsq6LYb9C2kiHaxXoRVHyM2qeoQW2iMmMGt5xJPCP6PHo7rb17B",
        "account": "HfeFy4G9r77iyeXdbfNJjYw4z3NPEKDL6YQh3JzJ9s9f",
        "role": 1,
        "timestamp": "2022-01-01T16:00:00Z"
    },
    {
        "transactionHash": "3795237FCiHuBJgSY1mi1aQiMgkS8zCYovVjC2SsCqWjnTETBKwR2CW26VUXH1VBH4S7UjvCK2RsLGqKzkHgmeZ7",
        "account": "7Sur3cy2efJGv8Qomn35p5k6HqMMcE8juWMBX8sCc96r",
        "role": 1,
        "timestamp": "2022-01-01T16:00:00Z"
    },
    {
        "transactionHash": "35VZsAnXaYN4W8T6H3YCmTAVZQPuH7vL77NdkfxQLFfZhxMCuvSkK1WEnTWYYi7QknH7ZtxZxvvaMQuJpegANTny",
        "account": "Bx6R7GBNsFCt7KJUZw5yrbvdhL1EYcXPhkUBnS2t3c7E",
        "role": 1,
        "timestamp": "2022-01-01T16:00:00Z"
    },
    ...
]
```


