---
title: Native Token
---
Native token is a program that handles non-native transfers. Simply put, amounts not transacted in Lamports would involve this program.

### Elements of Native Token
* **transactionHash**: `<String>` The hash that uniquely identifies a transaction.
* **ataAddress**: `<String>` The hash that uniquely identifies an associated token account.
* **walletAddress**: `<String>` The hash that uniquely identifies a wallet.
* **mint**: `<String>` The hash that uniquely identifies a token.
* **timestamp**: `<Datetime>`

### Native ATA

This query takes in the following parameters and returns all native associated token account in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api.solana.fm/api/v1/native-ata?from=2022-01-01&to=2022-01-02
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

### NativeToken GetMintDelegations

This query takes in the following parameters and returns all native token delegations in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api.solana.fm/api/v1/native-token-mint-delegations?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "3jyqnGX2zoqQBtmzf8vaGE97LYNNGZQZxSZ8Mh7YrASyxR6LmZSLWARL5Y1F3mGNj7VrF3FtLRXFfT2xdg5sS9H5",
        "delegationType": 0,
        "source": "768Fn1eFw1J6wrKS6QgU3VmH7JUFPNgEb9mccWZjT5Wt",
        "delegate": "71Eve1o8eSoQhZbkuVZKvGzZghkPUzpzixdKKYmoETBb",
        "owner": "74EB6VV25L89VARyTLf3fqoMSGSEkLZhC3mPoabkBVbe",
        "amount": 24712292398,
        "decimals": 0,
        "timestamp": "2021-10-16T23:33:10Z"
    },
    {
        "transactionHash": "3jyqnGX2zoqQBtmzf8vaGE97LYNNGZQZxSZ8Mh7YrASyxR6LmZSLWARL5Y1F3mGNj7VrF3FtLRXFfT2xdg5sS9H5",
        "delegationType": 0,
        "source": "5KCoh3YW237jxkVut6tf3nopxE3Pvr9RMveTfAz4K2YW",
        "delegate": "71Eve1o8eSoQhZbkuVZKvGzZghkPUzpzixdKKYmoETBb",
        "owner": "74EB6VV25L89VARyTLf3fqoMSGSEkLZhC3mPoabkBVbe",
        "amount": -1,
        "decimals": 0,
        "timestamp": "2021-10-16T23:33:10Z"
    },
    ...
]
```

### NativeToken GetMintInflations

This query takes in the following parameters and returns the native mint inflation in the specified time range.
Mint inflation refers to the instance where the mint authority mints or burns tokens resulting in either an inflation or deflation.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api.solana.fm/api/v1/native-token-mint-inflations?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "5Ks2znXimYCTyL7r7EdKR96KEWKEXUiSCVcptcfDVEer4LidJuQ62YtLS58GNFCYJcjB4xMaFPJEh2u3h1Mn3GQW",
        "account": "7jDujZDtEDxqnofCQm1vSxBjxitoywc1cKCL4D9PyYjv",
        "mint": "4mntRxKJWib1YTWNV4aLfszF6FeziBHdwnNAwGSfKKMX",
        "amount": -2567732011,
        "decimals": 0,
        "owner": "EydkXxM9Tn34gKpzycTMahiFYSK6m9Qqw65ojuijw2i",
        "timestamp": "2021-10-16T23:44:03Z"
    },
    {
        "transactionHash": "5gPzbU4xp2T11yokmY5qkRNLtFfssMsCNQysJY2b1hZMBder87g5QcDabZf4814ukTakB8hYXqfMpvVf3u9iBwrt",
        "account": "3wMHALTXj7VuS18KNtMpNhi5m7gRhY2EJK41sYHgb8sm",
        "mint": "CHT8sft3h3gpLYbCcZ9o27mT5s3Z6VifBVbUiDvprHPW",
        "amount": -29344374098,
        "decimals": 0,
        "owner": "GAZebF73MSas8L62Rfuffza14PW3RtpaLMVpbMuyCGd",
        "timestamp": "2021-10-16T23:46:32Z"
    },
    ...
]
```

### NativeToken GetMintMovements

This query takes in the following parameters and returns the native token movements in the specified time range.
Mint movements refers to transfer of tokens between 2 accounts.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api.solana.fm/api/v1/native-token-mint-movements?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "3Zr4Hq2mouWy4B5uu4evVkJUom9G2y5VXUcr64Sd9AdByAzgV3zsUypNu4TFW3ixqPbgD8vvdGA8o9bEkaw6idE",
        "source": "13NP69uMncktTiZFYMuuMQdn35mfnA7Ui61JXdp6bYr",
        "destination": "AwuDbEBc2TFEobJ8F7gdDjzvFTkzHs4tWP9DDnE5Aegk",
        "amount": 1,
        "decimals": 0,
        "owner": "2PN4qSKgnZ9xLc4hKhGyaAgxedxP4qqzFw83SpxE9jTh",
        "timestamp": "2021-10-16T00:11:23Z"
    },
    {
        "transactionHash": "4EtdWGBtA4gbgBvmKr5LCgVevjJm1LJXmoknno6BwbdYViieSpYZr9zobE3aTucfmwN9wkQcdZXLZNSCzjiK61a9",
        "source": "18bRdTYE12vpu8rrMg4RHRji1T7Y5VKHVRXqJyj4iBg",
        "destination": "8igzKMG5G15R9iaaBFubgrAThK72YHr541Ab9V1iJdq",
        "amount": 1,
        "decimals": 0,
        "owner": "ANa8iWHMUpAsoR2V1EgWD7qvxCJ4oJJQL2jz7vimWT45",
        "timestamp": "2021-10-16T00:19:36Z"
    },
    ...
]
```


### NativeToken GetMintStates

This query takes in the following parameters and returns the native token mint states in the specified time range.
A native token mint state stores the information of the token which includes the mint authority and freeze authority.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api.solana.fm/api/v1/native-token-mint-states?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "6JSENyrZP1gr6Phuc53pr9mqKBrDGfBBLKFSH1XFJtzXBgMyWfRLTNsHiKgyCiAEGTdEDtJhYeiz1Qq9idDyDh6",
        "decimals": 0,
        "mintAuthority": "BbyNW6y6MkU1DA6TQYM3M9nNt1ki4Hsujk3ZNcMN4wKC",
        "freezeAuthority": "",
        "timestamp": "2021-10-16T00:08:38Z"
    },
    {
        "transactionHash": "3cuJ6FgohBxhWjETEGRifgLV4rzzanMNQKa1KWhVEqj448EvoaskMZfMKYAdQFaHZgaKrx2L7AJLH4r4ptiGC6k8",
        "decimals": 0,
        "mintAuthority": "FepsVNfk69NUEeLMzojAEXdiBtFkiSJFuYnTR3tZ3Lw8",
        "freezeAuthority": "",
        "timestamp": "2021-10-16T00:08:43Z"
    },
    ...
]
```








