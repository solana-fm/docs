---
title: Step Finance
---

### Elements of Step Finance
* **txHash**: `<String>` The account hash belonging to the transaction.
* **swapLocation**: `<String>` The account hash belonging to the program of the token swap.
* **tradeFeeNumerator**: `<Int>` The numerator used to calculate trade fees.
* **tradeFeeDenominator**: `<Int>` The denominator used to calculate trade fees.
* **ownerTradeFeeNumerator**: `<Int>` The numerator used to calculate owner trade fees.
* **ownerTradeFeeDenominator**: `<Int>` The denominator used to calculate owner trade fees.
* **ownerWithdrawFeeNumerator**: `<Int>` The numerator used to calculate trade fees.
* **ownerWithdrawFeeDenominator**: `<Int>` The denominator used to calculate trade fees.
* **hostFeeNumerator**: `<Int>` The numerator used to calculate host fees.
* **hostFeeDenominator**: `<Int>` The denominator used to calculate host fees.
* **flowType**: `<enum>`
  - Deposit = 0
  - Withdraw = 1
* **pegPda**: `<String>` The account hash belonging to the peg's program derived account which stores the peg's data.
* **swapAuthority**: `<String>` The account hash belonging to the account that handles the swap.
* **user**: `<String>` The account hash belonging to the account user transfer authority.
* **source**: `<String>` The account hash belonging to the user who initiated the swap.
* **destination**: `<String>` The account hash belonging to the destination account assigned to the user.
* **target**: `<String>` The account hash belonging to the target account to deposit into.
* **poolTokenAmount**: `<Int>` The amount to transfer set by the current exchange rate and size of the pool.
* **tokenAmount**: `<Int>` Refers to the maximum amount if depositing and minimum amount if withdrawing to prevent excessive slippage.
* **poolAccount**: `<String>` The account hash belonging to an account used to deposit generated tokens or a source pool account.
* **poolMintAccount**: `<String>` The account hash belonging to an account with pool token mint, used to generate trading fees.
* **poolFeeAccount**: `<String>` The account hash belonging to an account in charge of collecting fees.
* **curveType**: `<enum>`
  - Constant Product = 0
  - Constant Price = 1
  - Stable = 2
  - Offset = 3
* **nonce**: `<Int>` Refers to the nonce used to create valid program addresses.
* **poolNonce**: `<Int>` Refers to the nonce used to create valid program addresses for the pool.
* **swapAuthority**: `<String>` The account hash belonging to the account authorised to make the swap.
* **tokenAAccount**: `<String>` The account hash belonging to the account storing the tokens to be swapped.
* **tokenBAccount**: `<String>` The account hash belonging to the account storing the tokens to be swapped into.
* **pegSupplyAccount**: `<String>` The account hash belonging to the account used to deposit the initial pool token supply.
* **poolMint**: `<String>` The hash of the pool token mint.
* **sourceToken**: `<String>` The hash of the token to be swapped.
* **destinationToken**: `<String>` The hash of the token to be swapped into.
* **amountIn**: `<Int>` The amount deposited in Lamports.
* **minimumAmountOut**: `<Int>` The minimum withdraw amount in Lamports.
* **flags**: `<Int>` Refers to the flags defining the swab behaviour.
* **swapType**: `<enum>`
  - Normal = 0
  - Routed = 1
* **timestamp**: `<Datetime>`

:::note
Fees are calculated by numerator/denominator and returns a percentage
::: 

### List all peg updates

This query takes in the following parameters and returns the transactions involving peg updates in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/step-finance/swap/peg-fee-updates?from=2022-02-14T00:00:00Z&to=2022-02-14T23:59:59Z
```
#### Sample returned results
```
[
    {
        "txHash":"3NuyFGQUDTUB6epRbuj7s7DDpXwBf8Un4fkJUWScsAJARUTLZa6yMjR4EGPCcsATWKMFKTf4d7JENQMd1UNJWkGV",
        "swapLocation":"BXtygDLL5UWjo7giTy48fwRxFLf5wBwZDCJiQUAkKJdr",
        "tradeFeeNumerator":20,
        "tradeFeeDenominator":10000,
        "ownerTradeFeeNumerator":10,
        "ownerTradeFeeDenominator":10000,
        "ownerWithdrawFeeNumerator":0,
        "ownerWithdrawFeeDenominator":0,
        "hostFeeNumerator":-1,
        "hostFeeDenominator":-1,
        "timestamp":"2022-02-14T21:48:31Z"
    }
]
```

### List all peg flows

This query takes in the following parameters and returns transactions interacting with the pool in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/step-finance/swap/peg-fee-updates?from=2022-02-14T00:00:00Z&to=2022-02-14T23:59:59Z
```
#### Sample returned results
```
[
    {
         "txHash":"4YjUUVLndfEe8dxvzxgEgXkxyvBK48zMmozyasBNCePTuGYY1EKksAvnZ7t5SDTFcXNSjnsGwra9KiykYGK1N2M",
         "flowType":0,
         "pegPda":"52m12tnCLQNfuEEPqRkKpp6iEHDC1eF9PpVDd6MvvQ1P",
         "swapAuthority":"QjrwXgFyrYRDsv9bSBW4vsXFeN2iC5MsqQDioyhWSCH",
         "user":"GLSV3ms5bF2b1ti7me8QRrMshNjjHoF1mfks4AoXo5hn",
         "source":"LcYjMidyjG5XEwevx12pa6grbEtp8Mb3wRxXEg1HSeS",
         "target":"8XsBxdcSMLBpKRu4WGx9mu9uQEWxW9882vMKJAzk1j9H",
         "poolTokenAmount":1606308429,
         "tokenAmount":200000000000,
         "poolAccount":"DqWgpeLFBv8RunXKuJDFEYZmjiaFLmqg4KbtPNzuWboH",
         "poolMintAccount":"6aKujPwWsgYTFRi759omTLsisP8sAZ6b96XVSoYUMzs2",
         "poolFeeAccount":null,
         "timestamp":"2022-02-14T23:56:45Z"
    },
    {
         "txHash":"4YjUUVLndfEe8dxvzxgEgXkxyvBK48zMmozyasBNCePTuGYY1EKksAvnZ7t5SDTFcXNSjnsGwra9KiykYGK1N2M",
         "flowType":0,
         "pegPda":"52m12tnCLQNfuEEPqRkKpp6iEHDC1eF9PpVDd6MvvQ1P",
         "swapAuthority":"QjrwXgFyrYRDsv9bSBW4vsXFeN2iC5MsqQDioyhWSCH",
         "user":"GLSV3ms5bF2b1ti7me8QRrMshNjjHoF1mfks4AoXo5hn",
         "source":"EMc9a9X9sAiutby4c1ygPv1yubDZFRvEd4PBCVPP5wc4",
         "target":"7JEAXVzJSXv3HaXQcuVRF5nW1VuCpDSbysWdmadSAnaG",
         "poolTokenAmount":1606308428,
         "tokenAmount":7321106000,
         "poolAccount":"DqWgpeLFBv8RunXKuJDFEYZmjiaFLmqg4KbtPNzuWboH",
         "poolMintAccount":"6aKujPwWsgYTFRi759omTLsisP8sAZ6b96XVSoYUMzs2",
         "poolFeeAccount":null,
         "timestamp":"2022-02-14T23:56:45Z"
    },
    ...
]
```

### List all swap pegs

This query takes in the following parameters and returns transactions involving the pegging of swaps in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/step-finance/swap/pegs?from=2022-02-14T00:00:00Z&to=2022-02-15T00:00:00Z
```
#### Sample returned results
```
[
    {
         "txHash":"3NuyFGQUDTUB6epRbuj7s7DDpXwBf8Un4fkJUWScsAJARUTLZa6yMjR4EGPCcsATWKMFKTf4d7JENQMd1UNJWkGV",
         "pegPda":"BXtygDLL5UWjo7giTy48fwRxFLf5wBwZDCJiQUAkKJdr",
         "curveType":0,
         "nonce":253,
         "poolNonce":255,
         "swapAuthority":"AVBhZ2v1bzpWgDCTvVZk7hYXW6gRr3Km8dAkNYbyKBmB",
         "tokenAAccount":"Fm7vjEBtVrqZJwB6fZ4Lqj3obqJzzgjDaaiSZGiwm56b",
         "tokenBAccount":"GFjNxdPVgUUaNfChxJGAfzoYxrKkEdShwrPsQgRMtaZb",
         "pegSupplyAccount":"3iCFoCXhafAAhdyRHYHBqsP9WcBu4feZdH84xyCY1643",
         "poolMint":"EvHeaAR47E5nSX9zonWieZ8Q7X28qamnad732EeL1RWS",
         "feeReceivingAccount":"BX5UpEUuBhSKyPaZNt5qf5bLaSVTPXwRjWu3G92oqCh4",
         "timestamp":"2022-02-14T21:48:31Z"
    },
    ...
]
```

### List all swaps

This query takes in the following parameters and returns the transactions of swaps in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/step-finance/swap/pegs?from=2022-02-14T00:00:00Z&to=2022-02-15T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash":"3P2C3vjBYiwtAL2Li6axuQa6QLxa4jN5Ys8vucMH3YctNq7dmXFXpHZUwtQobFQsDygwAE1mSBH6Bvk7shksQuKF",
        "swapType":0,
        "source":"GAFTufuxZcXvGfkEcjTL7L9Qk6RY9gMK4sE6ZK4xx9n7",
        "destination":"9cone67oJs75YjuDDcNyR1whHKwzaSDTpG8o4LDVeaaZ",
        "user":"8bkAt9cwy1CEGbfGhebLKdBUvo59mvaRJv2LQUddjuet",
        "sourceToken":"8JKFUBAmhQ3wuYx2W7sHMSTTKHfBDyoRu5KDjcTdo1Uf",
        "destinationToken":"BeEJShfg2i6R3NRk8apboXRmAGoKhE9ehSwc2X1p8Vv4",
        "amountIn":20082,
        "minimumAmountOut":8498757,
        "flags":3,
        "poolMint":"DTCLddnvdNmf3d7vy9VH7b6xiqnLaMuyVxseraXPXKd6",
        "poolFeeAccount":"8fQx22AYGTGh59r4THfXrB7uteTy2WjjmGhqigrpUVi4",
        "timestamp":"2022-02-14T23:59:41Z"
    },
    {
        "txHash":"T9Bu4PU38U4o5KFRbFsz9Dj1xwEbUAt2RKTgzTQ29u3jobuNGkaQVdK6guM8yhWTJaqzTwA1x6ooBEYwQR42NEJ",
        "swapType":0,
        "source":"GAFTufuxZcXvGfkEcjTL7L9Qk6RY9gMK4sE6ZK4xx9n7",
        "destination":"9cone67oJs75YjuDDcNyR1whHKwzaSDTpG8o4LDVeaaZ",
        "user":"42gdZKcQeHEJ1SeN4BHUVQ3ybkNtkDEdC2MybsLgFngX",
        "sourceToken":"8JKFUBAmhQ3wuYx2W7sHMSTTKHfBDyoRu5KDjcTdo1Uf",
        "destinationToken":"BeEJShfg2i6R3NRk8apboXRmAGoKhE9ehSwc2X1p8Vv4",
        "amountIn":20085,
        "minimumAmountOut":8500027,
        "flags":3,
        "poolMint":"DTCLddnvdNmf3d7vy9VH7b6xiqnLaMuyVxseraXPXKd6",
        "poolFeeAccount":"8fQx22AYGTGh59r4THfXrB7uteTy2WjjmGhqigrpUVi4",
        "timestamp":"2022-02-14T23:59:30Z"
    },
    ...
]
```

