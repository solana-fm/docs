---
title: Native ATA
---

### Elements of Native ATA
* **transactionHash**: `<String>` The hash that uniquely identifies a transaction.
* **ataAddress**: `<String>` The hash that uniquely identifies an associated token account.
* **walletAddress**: `<String>` The hash that uniquely identifies a wallet.
* **mint**: `<String>` The hash that uniquely identifies a token.
* **timestamp**: `<Datetime>`

### List all ATA accounts

This query takes in the following parameters and returns all native associated token account in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/associated-token-accounts?from=2022-01-01&to=2022-01-02
```
#### Sample returned results
```
[
    {
        "transactionHash": "3dEz5gcEjo43eiW6v3wz9T2k6T3y45UhJF5y4giw5JZAdGsSEBG2LaCWbXg8u77uzsqbSuXKUV9NXog5PiSPrpsk",
        "ataAddress": "3pCwyzyvQVMvD5K2Y5yWQoWWkgfGVxvfs3r4UU2YfRkM",
        "walletAddress": "3DeokdY21HSELRMSVyZnt1cBDZpSYf27veH2c4nBzTTd",
        "mint": "G1qzNDmp3yxMQX1P6gZ647oBKaiVpt6Xhn98SpMB3ibQ",
        "timestamp": "2021-12-31T23:56:11Z"
    },
    {
        "transactionHash": "2pFjWCSes9q7wB13Z4xG3wjcggnKuj9eWu4s1pakmccnFtxS6CNUebsphhaqyJgxRzRfJZiSuniGvLLGmkqXGSCK",
        "ataAddress": "Gh8NRw6SjsujFGcgveUJikCDBsYGFeBWNQhRSuBpEHQB",
        "walletAddress": "ZcEbNxPqom2sHJJYBdxVdZpANgXD8jcoRFBvCoApq7p",
        "mint": "cqNTpypmbwghrf1G9VGvSENcw7M7wGSQ7JS8UTQWXwb",
        "timestamp": "2021-12-31T23:56:11Z"
    },
    ...
]
```

### List all native associated token accounts by wallet address

This query takes in the following parameters and returns the specified wallet and its associated native associated token accounts in the specified time range.

:::note
The associated token account for a given wallet address is simply a program-derived account consisting of the wallet address itself and the token mint.
One wallet may have more than one ATAs.
:::
#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/associated-token-account/ata/HgYbt5ro5FLgDF38AQnYG7cBFDiHuypCWLDP5CqmUmmY?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "3Ei3emFRAhewSa4zkM1idMUMe9jv1t3HR2i5yKBSdqoeYf7RLR8GguvzGfAXpiPqhFku85YPTRrPDnMDympHVE7U",
        "ataAddress": "EjwNPjrsaW8kWGbUHeGizNuE5AtoCYR2J7owTCVihS6M",
        "walletAddress": "3Ht6kcj2MB2i5BfJpv9bnr1CZn5whcusTZeyNRftTGdh",
        "mint": "12bhRXEXWGByNcdoot6D459YrhpLkYhmyqDRTdwRJ5T",
        "timestamp": "2021-10-06T09:53:18Z"
    },
    {
        "transactionHash": "2RWegt1R4mp4G3dU7ey4yZ12X3i1w4pPdq9Ex8WWcsSGqDpGHcbENuynReTFRmzKzdCqwozM22ZFa4xjR3TFFfuX",
        "ataAddress": "Hf9tCriJPv9CV5YPUJUrJkKF3Ru6VNY1dic9zYdEwsyi",
        "walletAddress": "3Ht6kcj2MB2i5BfJpv9bnr1CZn5whcusTZeyNRftTGdh",
        "mint": "So11111111111111111111111111111111111111112",
        "timestamp": "2021-10-06T16:27:07Z"

    }
]
```
