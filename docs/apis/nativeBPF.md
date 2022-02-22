---
title: Native BPF (Berkeley Packet Filter)
---
Solana on-chain programs are compiled via the LLVM compiler infrastructure to an Executable and Linkable Format (ELF) containing a variation of the Berkeley Packet Filter (BPF) bytecode.

Because Solana uses the LLVM compiler infrastructure, a program may be written in any programming language that can target the LLVM's BPF backend. Solana currently supports writing programs in Rust and C/C++.

BPF provides an efficient instruction set that can be executed in an interpreted virtual machine or as efficient just-in-time compiled native instructions.

For more Information on Blocks: https://docs.solana.com/developing/on-chain-programs/overview

### Elements of Native BPF
* **txHash**: `<String>` The hash that uniquely identifies a transaction.
* **program**: `<String>` The hash that uniquely identifies an executable program.
* **programData**: `<String>` The hash belonging to the program that stores the program data.
* **programAuthority**: `<String>` The hash belonging to the account that has authority to upgrade a program.
* **programBuffer**: `<String>` The hash belonging to the account that will hold the Lamports in the event that program deployment fails
* **timestamp**: `<Datetime>`

### NativeBPF GetUpgradeableClosure

This query takes in the following parameters and returns the transactions involved in a program closure in the specified time range.

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
        "txHash": "3kJt4ULrAELYiNNEXn3f69Q2LhssBGeS6JzEfKAbbucYBWgw2EUx76KQh4XEVX4k6E9hk6tShjn3TSA3y2TxVAw",
        "program": null,
        "programData": "8a1Mn3XhwwhUvJ7uGMBQJENex4HNBx6uBeCyem9w6sZb",
        "programAuthority": "7oniD5bHXfxJnfi76UUoZ8yNP6P48Lg5R4hr5QbX9xiU",
        "timestamp": "2021-12-31T18:27:38Z"
    },
    {
        "txHash": "52hHkSjz6mKxTWwosjfMc8bfduYNKSjRfUQ8LFqTPfj5rm3EeZy2UYcwUrciWR6hxfPvAdaYNfB8syKg6tc49xWm",
        "program": null,
        "programData": "N6Q7YbjkmA36JoohHEcteBJi33qVDQvw7VKR1QZ2aaD",
        "programAuthority": "HTDC2mLo2mPbz6kYKdnK7PJsedZz4i4S7UVwMM5t1Jmh",
        "timestamp": "2022-01-01T06:01:25Z"
    },
    ...
]
```

### NativeBPF GetUpgradeableDeployment

This query takes in the following parameters and returns the transactions involved in a program deployment in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api.solana.fm/api/v1/native-bpf-upgradeable-deployment?from=2022-01-01T00:00:00Z&to=2022-01-02T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "5JMF3wQPnhYtK8FxG1gKQkYQZm8XcuD8uSMzCuXFurNqrXSswy1B5Vko3HEAT7B2DnqYnyEXRe43zMk64rkVxJ3u",
        "program": "BdjT7aLyv3CnwUrn31BdwYza2j8o8N8jrLkwnb5EePEe",
        "programData": "5NDQUSJzYqEC9TapNyvrxHDDgS1u8DPb98FPY77ng4r4",
        "programAuthority": "GZC7eWyqnCZhSfHNzp54Xr383BA28ZQuph2ibKFT1hnd",
        "timestamp": "2022-01-01T19:10:56Z"
    },
    {
        "txHash": "47x7s2rwhkZiqFBcVuwkhYRNiJdkFw9m5GwJFmsDkRRiZnqDkm4KSU8cbdXhJx43CdAZhvfkfeNAbCWb9pDhWMga",
        "program": "BdjT7aLyv3CnwUrn31BdwYza2j8o8N8jrLkwnb5EePEe",
        "programData": "5NDQUSJzYqEC9TapNyvrxHDDgS1u8DPb98FPY77ng4r4",
        "programAuthority": "GZC7eWyqnCZhSfHNzp54Xr383BA28ZQuph2ibKFT1hnd",
        "timestamp": "2022-01-01T18:59:06Z"
    },
    ...
]
```

### NativeBPF GetUpgradeableUpgrade

This query takes in the following parameters and returns the transactions involved in a program upgrade in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api.solana.fm/api/v1/native-bpf-upgradeable-upgrade?from=2022-01-01T00:00:00Z&to=2022-01-02T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "2xTqN43gz3uaiBqg126kaoq54PuoiDA8NBpEdXnHyLMnyZeYsmiGAjvGQHCYZuUXJuQHicssXKvhzeGb2xkpP7Wa",
        "program": "LfyAtwukzucabGyWBwgK8DtRMhYQJSK4pedWyEW1psx",
        "programData": "u2p2Z1LgLUaL98c7adwyiQWtTEe6pjmN8ssKgFnjiyB",
        "programBuffer": "DfXwm38mYz6zKfRcfrB8PQDTvYnPgAJy8NpPKtsXZVvf",
        "programAuthority": "D3Rbhogagc1qXPttGvBLNdhoTHiUcyuwaiYcBLetwyXp",
        "timestamp": "2022-01-01T10:56:23Z"
    },
    {
        "txHash": "AccuMMpr8kGYWwfB7RWb8SSAS77VW8Qd9AUwjeH4Aspg7o3PpNm3tL81BQiya3Yt3uDSXgfggTUXWFRKKfnuNqB",
        "program": "SF1EUyhLKzxaDtV7zHMtuVXpaqsmDB8GEkNuH2235tf",
        "programData": "QR3byroJEXGp6n2q6yfAcsYK3spDjYyDiitqbjMdq1s",
        "programBuffer": "5teu3tT8Eg7Mdzo8NWb18jczz1YGQ5E9G7CaQ1dpuHS4",
        "programAuthority": "EocukSbj2VNfKdvdyycThRhDsiJ9kpdrq2zp4MCSrCQ3",
        "timestamp": "2022-01-01T02:51:12Z"
    },
    ...
]
```

### NativeBPF GetNativeWrite

This query takes in the following parameters and returns the transactions involved in writing instructions into an account.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api.solana.fm/api/v1/native-bpf-write?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "txHash": "2VaKLgReHKqdSTcd2D5coak8DYJk1tgxp3no3ChG6Gx4evFKDk3ZoZAJJBTdeX7DK31wMsopknGMkEe9oQo2F9YT",
        "program": "BPFLoader2111111111111111111111111111111111",
        "timestamp": "2021-10-16T12:41:49Z"
    },
    {
        "txHash": "4W6aUYo1CrZdV6P9XFLqQnvwGp2xetqwsRiAcuHCwMSMU4qd4RByRjXNNYFzdgFvESK3QEi7bFXmbbG3Ddf2LfgR",
        "program": "BPFLoader2111111111111111111111111111111111",
        "timestamp": "2021-10-16T12:41:49Z"
    },
    ...
]
```





