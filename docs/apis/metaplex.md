---
title: Metaplex
---

Metaplex is a collection of tools, smart contracts, and more designed to make the process of creating and launching NFTs easier. To fully utilise and understand the data returned from these APIs, you should familiarise yourself with the Metaplex documentation which can be found here: https://docs.metaplex.com

### Elements of Metaplex
* **txHash**: `<String>` The hash that uniquely identifies a transaction.
* **bidder**: `<String>` The account hash belonging to the bidder.
* **bidderTokenAccount**: `<String>` The account hash belonging to account storing the bidder's tokens.
* **pot**: `<String>` The account hash belonging to the program in charge of handling the pot events.
* **potAccount**: `<String>` The account hash belonging to the account storing the pot tokens.
* **auctionAccount**: `<String>` The account hash belonging to the account storing the pot tokens.
* **mint**: `<String>` The hash that uniquely identifies a token.
* **auction**: `<String>` The hash that uniquely identifies an auction.
* **bidderPotPda**: `<String>` The account hash belonging to the program storing auction, auction_program_id, auction_id, bidder_key.
* **authority**: `<String>` The account hash belonging to the account that has the authority to update the auction.
* **auctionMint**: `<String>` The token hash belonging to the token involved in the auction.
* **tokenProgram**: `<String>` The account hash belonging to the program that provides decorator structs to a token mint.
* **auctionExtended**: `<String>` The account hash belonging to the account that stores additional data fields which prevents the Metaplex smart contract from breaking. See more: https://docs.metaplex.com/architecture/deep_dive/auction#auctiondataextended
* **auctionProgram**: `<String>` The account hash belonging to the program that contains mechanics for collecting payment from bidders, for keeping track of a winners list, and handling bid placement and cancellation.
* **paymentAccount**: `<String>` The account hash belonging to the account that will pay the transaction fee incurred in the bid.
* **store**: `<String>` The account hash belonging to the account storing the store details. This hash uniquely identifies a store in Metaplex.
* **resource**: `<String>` This is an ID which uniquely identifies the object being auctioned off.
* **bidderPayingAccount**: `<String>` The account hash belonging to the account which the bidder is using to place a bid.
* **potSpl**: `<String>` The ATA which stores the tokens for the pot account
* **transferAuthority**: `<String>` The account hash belonging to the account with the authority to transfer ownership of a token.
* **payer**: `<String>` The account hash belonging to the account that will sign the transaction.
* **amount**: `<Int>` Amount of Solana placed as a bid in Lamports.
* **winners**: `<Int>` The number of winners involved in an auction.
* **endAuctionAt**: `<Int>` The lifespan of an auction.
* **endAuctionGap**: `<Int>` The time after the previous where the auction ends. Most auctions do not use this so it is not uncommon to see a 0 value. See more: https://docs.metaplex.com/storefront/auction#gap-time
* **priceFloor**: `<String>` Refers to the floor price of the token.
* **tickSize**: `<String>` The amount of price increment for each bid. (Amount of Solana in Lamports.)
* **gapTickSizePercentage**: `<Int>` The minimum percentage increase each bid must make when bidding in the ending phase of an auction. This is used together with endAuctionGap.
* **instantSalePrice**: `<String>` The price that will allow a bidder to buy the token instantly in Lamports.
* **creator**: `<String>` The account hash belonging to the account that created the auction.
* **revealedPrice**: `<String>` Inner instructions ( Yet to index, will come soon!)
* **revealedSalt**: `<String>` Inner instructions ( Yet to index, will come soon!)
* **newAuthority**: `<String>` The account hash belonging to the new account that has been given authority to update the auction.
* **vault/vaultAccount**: `<String>` The account hash belonging to an account that stores safety deposit boxes.
* **vaultProgram**: `<String>` The account hash belonging to the program that handles the vault events.
* **auctionManagerAccount**: `<String>` The account hash belonging to the auction manager. The purpose of an AuctionManager is to understand that an Auction object is auctioning off the contents of a Vault, and that the contents of a Vault are different types of NFT arrangements. See more: https://docs.metaplex.com/architecture/deep_dive/metaplex#auctionmanager
* **auctionWinnerTokenTypeTracker**: `<String>` The PDA of an auction manager that checks if the token provided by the auction winner is compatible.
* **combinedVaultAccount**: `<String>` The PDA of an auction manager that "opens" a vault so the current authority could, if they wanted, withdraw the tokens inside it.
* **safetyDepositBoxAccount**: `<String>` The account that keeps track of the token account which contains the tokens, its vault, and what order in the vault it maintains. The safety deposit box doesn't actually store any tokens - it contains a store key that points to an spl-token account that contains the tokens. It's more of a foreign key join table between the vault and the store.
* **storeKey**: `<String>` The account hash belonging to the spl token account that contains the tokens.
* **payoutTicketInfo**: `<String>` The account hash belonging to the account that stores the information of the payout ticket. To find out more on payout tickets see https://docs.metaplex.com/architecture/deep_dive/metaplex#payoutticket
* **destinationAccount**: `<String>` The account hash belonging to an associated token account that stores the same mint type as the accept payment account.
* **auctionManagerStore**: `<String>` The account hash belonging to the store tagged to the auction manager.
* **acceptPaymentAccount**: `<String>` The account hash belonging to that account which will store the winning bids.
* **safetyDepositConfigAccount**: `<String>` The account hash belonging to the account that stores the safety deposit box configurations.
* **potentialPayingTokenAccount**: `<String>` The account hash belonging to the account that is potentially making payment for the bid. See more on participation NFTs: https://docs.metaplex.com/architecture/deep_dive/metaplex#types-of-token-sales
* **newEdition**: `<String>` The account hash belonging to the account storing the data on the NFT print. See more: https://docs.metaplex.com/architecture/deep_dive/overview#edition
* **masterEdition**: `<String>` The token hash of a master edition token. See more: https://docs.metaplex.com/about/terminology#master-edition
* **newTokenMint**: `<String>` The token hash of a print. See more: https://docs.metaplex.com/about/terminology#print
* **editionPda**: `<String>` The account hash of the PDA that prevents the user from having both a print and the Master Edition.
* **whitelistedCreator**: `<String>` The account hash belonging to the account of a whitelistedCreator. See more: https://docs.metaplex.com/architecture/deep_dive/metaplex#whitelistedcreator
* **timestamp**: `<Datetime>`

### List all cancelled bids

This query takes in the following parameters and returns the transactions involved in the cancellation of bids in the specified time range.

:::note
It may be important to note that currently you cannot change or place a new bid until you cancel the old one on Metaplex.
:::
#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/cancelled-bids?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "5a4NHMjCU4W3Ho5tuEyKHYpSkqREa6PfnAB8Rvk9Kx3JWuxDijVgBwgLLidpWXHCJRorWD2D6D8kFPGQRxUK5ypT",
        "bidder": "33mMVQwm9Nmm1mk4nG72VHHGV1CNvAvVSq5Kq3hshpBW",
        "bidderTokenAccount": "2tXzw2C9m3EvVMLGpzmenBoCsHCb3JhWRMcDn9NeTdWJ",
        "resource": "3RXfkp6RUdAYVmtJaB3iQxS95yjc3TLXu4uQRR3auM66",
        "pot": "5RGZvG5VAPyiBBvaaobYbqu5uMhzgSvzBJxHy1SP6iFz",
        "potAccount": "74jKsUoBw2QVt1yH7bHbZ5422EQHVn8r46aPZgBwvzMg",
        "metadata": "J4VTR76CG6ywPPhCMXvTJdtD5Pk42uGn5TDaBjaDNtVV",
        "auctionAccount": "8hZdiwShoGBPsNwgfr779fwnKiuf2CDFJNcZ11woaQR6",
        "mint": "5JsgH6pL55eRPfTpESf8YhrEHSBrdebJGfHS5Pio3uJK",
        "timestamp": "2021-10-06T23:48:30Z"
    },
    {
        "txHash": "57qKwWrDNTPJHvcuDfoaBZgYLcNSRWaRiCMxuDiZe7GGZWdiwLyzZJborAwDrLFCtoXPyaVQ6wmHH9XnA8L6WTo2",
        "bidder": "33mMVQwm9Nmm1mk4nG72VHHGV1CNvAvVSq5Kq3hshpBW",
        "bidderTokenAccount": "FrHJE6yruHFEfJk9rmuM5R6KmQS644WDNEZHnVZD86Td",
        "resource": "CPiUZ83CnZX1GPPbkgqA9SGPdoaeSsraTSobm49rJwYS",
        "pot": "DKxrX4AXy7xS4tuv3JbUPgeTgBdhX3NpLT4dWZRdJvfa",
        "potAccount": "H4KQ5Gi4iVUgxtaJ5t6N6B3aUxsskmhWzWkuKhHeWRej",
        "metadata": "2YJtf5awv4Bj7ZJfJwi38MzyxhZcdeMad4KxnK7zmGpq",
        "auctionAccount": "JaDutvoAKz7UrhMcvjkgaB7tbce7cv7jeswSZFMg486",
        "mint": "6oRdEexqLcswwBdzzrnsa2omENpsvahAP6UpdKXyEtsW",
        "timestamp": "2021-10-06T23:48:23Z"
    }
    ...
]
```

### List all claimed bids

This query takes in the following parameters and returns the transactions involved in claiming bids in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/claimed-bids?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "4bUKj6vfmWEbjsgRiS9Pz8Bhq6ttVPZvGVAoHGPz7sgHydQihQXxprU8Pum9eND9cbjkkjXRAqVmpVtRjawGvjbr",
        "auction": "DAhpLbVpsNiiBR2As2wszmoA1X7KHiuAEbpDAFsxqdHW",
        "destination": "HngZ1vqfheLFwA7rg6Y7mhU35a3xXmcRE9B9QWvDFKq7",
        "bidder": "33mMVQwm9Nmm1mk4nG72VHHGV1CNvAvVSq5Kq3hshpBW",
        "bidderPotTokenAccount": "9ybR5g5ezkjE6yG9CRVrwbeohMpiJvPRkNMW5uTt6zon",
        "bidderPotPda": "77a5eEs1XAg9wZ5JZNYKaayrECRFh8hcLBJDCsxfUDB4",
        "authority": "Bkde88kx5DaDPprq767j7eis2BBLD72RtjnwZsArQdH2",
        "auctionMint": "So11111111111111111111111111111111111111112",
        "tokenProgram": "",
        "auctionExtended": "BBdJBMYQ3RRmgPwWMshyQAeijfhkpvy8AiRd8tS8HvCy",
        "auctionProgram": "auctxRXPeJoc4817jDhf4HbjnhEcr1cCXenosMhK5R8",
        "store": "BdhccwXfKBZCS3VK4uhSsyRjBEPv7ujZb3qj6obNb6Jh",
        "resource": "9PdbtmwxLSHt8srS93dXwmYSbn22dALGmPJv1oAcH4BT",
        "timestamp": "2021-10-06T23:46:42Z"
    },
    {
        "txHash": "4bUKj6vfmWEbjsgRiS9Pz8Bhq6ttVPZvGVAoHGPz7sgHydQihQXxprU8Pum9eND9cbjkkjXRAqVmpVtRjawGvjbr",
        "auction": "DAhpLbVpsNiiBR2As2wszmoA1X7KHiuAEbpDAFsxqdHW",
        "destination": "HngZ1vqfheLFwA7rg6Y7mhU35a3xXmcRE9B9QWvDFKq7",
        "bidder": "33mMVQwm9Nmm1mk4nG72VHHGV1CNvAvVSq5Kq3hshpBW",
        "bidderPotTokenAccount": "9ybR5g5ezkjE6yG9CRVrwbeohMpiJvPRkNMW5uTt6zon",
        "bidderPotPda": "77a5eEs1XAg9wZ5JZNYKaayrECRFh8hcLBJDCsxfUDB4",
        "authority": "Bkde88kx5DaDPprq767j7eis2BBLD72RtjnwZsArQdH2",
        "auctionMint": "So11111111111111111111111111111111111111112",
        "tokenProgram": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        "auctionExtended": "BBdJBMYQ3RRmgPwWMshyQAeijfhkpvy8AiRd8tS8HvCy",
        "auctionProgram": "auctxRXPeJoc4817jDhf4HbjnhEcr1cCXenosMhK5R8",
        "store": null,
        "resource": "9PdbtmwxLSHt8srS93dXwmYSbn22dALGmPJv1oAcH4BT",
        "timestamp": "2021-10-06T23:46:42Z"
    }
]
```

### List all placed bids

This query takes in the following parameters and returns the transactions involved in placing bids in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/placed-bids?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "DUEc92gmAXGL51yMpxc9KixGRr9vxXYQBA6t2U2KyjHn",
        "auction": "DUEc92gmAXGL51yMpxc9KixGRr9vxXYQBA6t2U2KyjHn",
        "bidder": "9xGrHjsAqP6X65YL46FpWAwhRawVNnGU9RJJxkHgwyaK",
        "bidderPayingAccount": "Dyxq9oncT9ydZ4iDtqVgXriZKesYzyT84ZSRjaoNzcga",
        "pot": "4jXB46j3sahbKUcVUiSYizPye72GRSQZD5CTUQsusfoZ",
        "potSpl": "Efazwsnt3RrCFnDzSwWU2Jjur42sDkdbsn8d2fFfS7Lp",
        "metadata": "BeKYsVGgPWbkvjR9TiveZBNJjsDxSDbkwML6PhsQA3oY",
        "tokenMint": "AHzAxR6H8br84hDDsDbUXzvqaYxH6TadXmKUn4ULjeH5",
        "transferAuthority": "So11111111111111111111111111111111111111112",
        "payer": "4QfcDCKSqZ2YXcyXmkSGRKqQmcgTtG4yQiG5qdSmQ4je",
        "amount": 1000000000,
        "resource": "66GyGyKR3SioiM3HNCS4gNcoVDbPdr1f5E5iMKqBGaZ8",
        "timestamp": "2021-10-06T23:47:12Z"
    },
    {
        "txHash": "DAhpLbVpsNiiBR2As2wszmoA1X7KHiuAEbpDAFsxqdHW",
        "auction": "DAhpLbVpsNiiBR2As2wszmoA1X7KHiuAEbpDAFsxqdHW",
        "bidder": "33mMVQwm9Nmm1mk4nG72VHHGV1CNvAvVSq5Kq3hshpBW",
        "bidderPayingAccount": "9EADY1DztVpfCZTTtLRBTFbbyARQcoC1iZXiSMLkfUM",
        "pot": "77a5eEs1XAg9wZ5JZNYKaayrECRFh8hcLBJDCsxfUDB4",
        "potSpl": "9ybR5g5ezkjE6yG9CRVrwbeohMpiJvPRkNMW5uTt6zon",
        "metadata": "AYsLWZe6yqRU8wXpMy28jQVoQUU1A16EKKN7jmAA442Y",
        "tokenMint": "BBdJBMYQ3RRmgPwWMshyQAeijfhkpvy8AiRd8tS8HvCy",
        "transferAuthority": "So11111111111111111111111111111111111111112",
        "payer": "6JHwsGAewLTuhSxQqttgWHhs5r3iYWwj83Fue2TfCweU",
        "amount": 0,
        "resource": "9PdbtmwxLSHt8srS93dXwmYSbn22dALGmPJv1oAcH4BT",
        "timestamp": "2021-10-06T23:46:31Z"
    }
]
```

### List all created auctions

This query takes in the following parameters and returns the transactions involved in creating auctions in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/created-auctions-v2?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "5P9qQfYAaoQvPCBpEikusVFCMAmSHtsjdnFbZ3M9HTWyKc5dM6iqpqZS8meKyve4iWvmvvRPnc5y4XVDb1vZVogz",
        "auction": "D6GG4XKDZntdw2UzADRUNpsA8KX9mAvfgPdFCRTbeSQ",
        "auctionExtended": "Ha67cfudBCZE9MNFfLFCFqEMWypeGynZZfYprvaH8RhU",
        "winners": 1,
        "endAuctionAt": 0,
        "endAuctionGap": 0,
        "tokenMint": "So11111111111111111111111111111111111111112",
        "authority": "2XVwDHNH8iKMW7sy2KU2g4LJ1rVFXUeWRgsndcQXWLf5",
        "resource": "BkuQ3YRnH9a4LZ861D2icNi7ZKtSRjr7Uoyse1f2nk1K",
        "priceFloor": 1,
        "tickSize": 0,
        "gapTickSizePercentage": 0,
        "instantSalePrice": 2000000000,
        "name": null,
        "creator": "2XVwDHNH8iKMW7sy2KU2g4LJ1rVFXUeWRgsndcQXWLf5",
        "timestamp": "2021-10-06T22:51:17Z"
    },
    {
        "txHash": "2WszMeVzcA7TvuPtz3SSyX9AdXGcb3ZCuGg83BQJ2RiDZKmGjxcLhivJB7ZiRw76CWpZtc8Pc5v8p3aoinZcecsB",
        "auction": "Fhj4LtEkxa4Y9yvvek6SiB5NTCUnGdKBTkyzmEH7Hc2y",
        "auctionExtended": "8mUg2CE9L6bT9h7k7dJ5MhzLDUd65P2nbNqZYhvWwDXm",
        "winners": 1,
        "endAuctionAt": 172800,
        "endAuctionGap": 0,
        "tokenMint": "So11111111111111111111111111111111111111112",
        "authority": "8YC3j59E8TQv5ZFGYXYebg7bo3LfSm1abqPar9tjUejQ",
        "resource": "4mwGeXg3GayTFfTVKFhEpsE4vcpMFdBe9USe3Sq4wdBq",
        "priceFloor": 1,
        "tickSize": 250000000,
        "gapTickSizePercentage": 0,
        "instantSalePrice": 0,
        "name": null,
        "creator": "8YC3j59E8TQv5ZFGYXYebg7bo3LfSm1abqPar9tjUejQ",
        "timestamp": "2021-10-06T22:14:29Z"
    }
]
```

### List all ended auctions

This query takes in the following parameters and returns the transactions involved in ending auctions in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/auctions-ended?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "5kuEvqH4ebK9ZRFv3PCUnNGxjFddRMZpy8pb4QaorAWqr9RFSJmWtwhUGAoScXdBZTdjwpAZx8MsdxZp3byxXAYc",
        "auction": "E71rW4ZSRvZ1V2snRF4q9uSTPdi2JNfhiswEp3k1pXyw",
        "authority": "8sZREGCgxsFwdUeRVHTuPwoFhLpgh4ouCkksz8ZdStnK",
        "resource": "HXEEHxqW7zg5HmJKVPZxtuzuEB7rp9oTEapcJtEtZqzi",
        "revealedPrice": 0,
        "revealedSalt": 0,
        "timestamp": "2021-10-06T21:50:30Z"
    }
]
```

### List all auction SetAuthorities

This query takes in the following parameters and returns the transactions involved in giving auction authority to a new account in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/auction-set-authorities?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "4T6zMDKCPMJRuUkd99zuX4sx1JnMEFWH5gZ1ZQ5v4btGZvZzhDjbvCctvtcZWiaUt6D4rgXVrL6oihnGAtVc7DGE",
        "auction": "4RF5oF62zBoNtDEdoUZQ1je1pkhkGYZr7tg9BH9YbBKa",
        "authority": "CCmL6MoxuL6zJRQcyenokhmC5ytWCJXhD8A2ECdzFduA",
        "newAuthority": "EUxhUWEj9WQhBPMCZeD2weFgMwPWZK22n24DUagkxBjV",
        "timestamp": "2021-10-06T23:39:05Z"
    },
    {
        "txHash": "5fE5KwGtsoyfsT2ZKPV7LDfrCQN1mJNkeXNoBb4Uy4VH433JfZt1bGmA7vV1HVPJAziFWroZhkmj9sFwujLKmh5b",
        "auction": "D6GG4XKDZntdw2UzADRUNpsA8KX9mAvfgPdFCRTbeSQ",
        "authority": "2XVwDHNH8iKMW7sy2KU2g4LJ1rVFXUeWRgsndcQXWLf5",
        "newAuthority": "HJz7GzrUVnkbFC8HR33RrXsbTnWXEYPvd1ndcVAC38aj",
        "timestamp": "2021-10-06T22:51:19Z"
    }
]
```

### List all started auctions that were previously inactive

This query takes in the following parameters and returns the transactions involved in starting previously inactive auctions in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/started-inactive-auctions?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "4M1LXRb58sNxfNX5QCxdnqZ8aN1ywr5e36hBCicSf4zWgbtiGtEBj3oa7Wy54M576rhJwsnUkUQkE75cAnZZ7w8h",
        "creator": "EUxhUWEj9WQhBPMCZeD2weFgMwPWZK22n24DUagkxBjV",
        "auction": "4RF5oF62zBoNtDEdoUZQ1je1pkhkGYZr7tg9BH9YbBKa",
        "resource": "43531TVT9qT3kBtACeXRrRWCxqKQhTzAaoUXE3RSQ9hn",
        "timestamp": "2021-10-06T23:39:10Z"
    },
    {
        "txHash": "3UUn4Ds4tqp2JgmC7DCSbqVHRm45akwKeVSEYunWnhwhRDLiYo9aawvSuckqgG1XiUjyVtrX4zPEpH1BgcvmYVvS",
        "creator": "HJz7GzrUVnkbFC8HR33RrXsbTnWXEYPvd1ndcVAC38aj",
        "auction": "D6GG4XKDZntdw2UzADRUNpsA8KX9mAvfgPdFCRTbeSQ",
        "resource": "BkuQ3YRnH9a4LZ861D2icNi7ZKtSRjr7Uoyse1f2nk1K",
        "timestamp": "2021-10-06T22:51:21Z"
    }
]
```

### List all decommissioned auction managers

This query takes in the following parameters and returns the decommissioned auction managers in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/decommissioned-auction-managers?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "5kuEvqH4ebK9ZRFv3PCUnNGxjFddRMZpy8pb4QaorAWqr9RFSJmWtwhUGAoScXdBZTdjwpAZx8MsdxZp3byxXAYc",
        "auctionManager": "8sZREGCgxsFwdUeRVHTuPwoFhLpgh4ouCkksz8ZdStnK",
        "auction": "E71rW4ZSRvZ1V2snRF4q9uSTPdi2JNfhiswEp3k1pXyw",
        "authority": "8YC3j59E8TQv5ZFGYXYebg7bo3LfSm1abqPar9tjUejQ",
        "vault": "HXEEHxqW7zg5HmJKVPZxtuzuEB7rp9oTEapcJtEtZqzi",
        "store": "AonsetsXbFujbo7K91CBeyyJuXkEC2HnFjLPbsPRBHUV",
        "auctionProgram": "auctxRXPeJoc4817jDhf4HbjnhEcr1cCXenosMhK5R8",
        "vaultProgram": "vau1zxA2LbssAUEF7Gpw91zMM1LvXrvpzJtmZ58rPsn",
        "timestamp": "2021-10-06T21:50:30Z"
    }
]
```

### List all InitAuctionManagers

This query takes in the following parameters and returns the transactions involved in initialising auction managers in the specified time range.

:::note
Init refers to **initialised** which is the state of which the auction manager is in. This is the state it begins in. You provide a Created auction and a Combined vault. You can't start the auction yet though because you need to prove to this AuctionManager that the configurations you provided in your settings match the tokens in the vault.
:::
#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/init-auction-managers-v2?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "2mtMfs5PEdz7x4FTQfaXBnDggaA8M8xZcXHsTuUDXwmPYdNBwrz4ccjzNqQXa2ATHCioCDqCTNM5e75e9ZDz1ekB",
        "auctionManagerAccount": "EUxhUWEj9WQhBPMCZeD2weFgMwPWZK22n24DUagkxBjV",
        "auctionWinnerTokenTypeTracker": "FDHddqkPiCYUCGVeSmrxgqu8gNdQAKMxwnAibeLorJL3",
        "combinedVaultAccount": "43531TVT9qT3kBtACeXRrRWCxqKQhTzAaoUXE3RSQ9hn",
        "auction": "4RF5oF62zBoNtDEdoUZQ1je1pkhkGYZr7tg9BH9YbBKa",
        "authority": "CCmL6MoxuL6zJRQcyenokhmC5ytWCJXhD8A2ECdzFduA",
        "payer": "CCmL6MoxuL6zJRQcyenokhmC5ytWCJXhD8A2ECdzFduA",
        "paymentAccount": "72UMDbMKDWvAZ1HJwjLYFJ7CkyQ1tSzgq33jP8u1BJik",
        "store": "3b2YaQoAzxKDmM1PzXdY4humGfEXKWzytw21jBtKcCZV",
        "amountType": 1,
        "lengthType": 1,
        "maxRanges": 10,
        "timestamp": "2021-10-06T23:39:03Z"
    },
    {
        "txHash": "24jyD1qAHVA7ZbHLkBkrarY4MhZb2PHKCCezjJetRWnM7fsuFvd4BCap26KqFKCWZpLfNHo5jcoNtD2Kfj4JjMn7",
        "auctionManagerAccount": "HJz7GzrUVnkbFC8HR33RrXsbTnWXEYPvd1ndcVAC38aj",
        "auctionWinnerTokenTypeTracker": "5F6bffsQscoyMy8kN2eLP5koRxHgWHQFbPwKFP22rrM",
        "combinedVaultAccount": "BkuQ3YRnH9a4LZ861D2icNi7ZKtSRjr7Uoyse1f2nk1K",
        "auction": "D6GG4XKDZntdw2UzADRUNpsA8KX9mAvfgPdFCRTbeSQ",
        "authority": "2XVwDHNH8iKMW7sy2KU2g4LJ1rVFXUeWRgsndcQXWLf5",
        "payer": "2XVwDHNH8iKMW7sy2KU2g4LJ1rVFXUeWRgsndcQXWLf5",
        "paymentAccount": "5u5qiSKd9Jpi4xKYscAre2d9d3Sw1yQmHcvNRdEy2GQ2",
        "store": "CAFmKk66WuWDdsNeQUB5JRWBcqbfrMaVcwf3DmkSHEH4",
        "amountType": 1,
        "lengthType": 1,
        "maxRanges": 10,
        "timestamp": "2021-10-06T22:51:18Z"
    }
]
```

### List all auction caches

This query takes in the following parameters and returns the transactions involved in caching an auction in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/auction-caches?from=2021-10-10T00:00:00Z&to=2021-10-11T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "2HC4VH4GdH68U2RWNMtKvKRwoimTTNojBY3Z17EFSBcutnFip3KexzbM4WUYYfuRKnNyHSSWi5QmFb91oLSjUCQK",
        "auctionCache": "DSmxmf3zxacfR7KqrLkms3e2yWe64JmMjF1ubX9hEntt",
        "payer": "44kiGWWsSgdqPMvmqYgTS78Mx2BKCWzduATkfY4biU97",
        "auction": "8A6ozWvims3wmbDgkLJKJ7VfhK2jTRZ8Kaxt8eT3Ni9o",
        "safetyDepositBoxAccount": "FbJVhN2omHsE8vUJVWrxjJU15Gq6YFfaawwuinN72E7S",
        "auctionManager": "64YF3Xu2VyMZsmC3pb7bathcdPMMy26ZVk3Pp6HJdf9X",
        "storeKey": "ES6P7YMvRH96mmSCHqJrEFDgYhWNp1UdcA1J4r59ZrZo",
        "timestamp": "2021-10-10T19:54:39Z"
    },
    {
        "txHash": "4dv5yZDTTNvWEXuwYA5vY11TyZiESaDiY78XR4fpr1UAGosGdLpkYev284uv6YvPw31m81iec6nSV7qKBAWp3MWA",
        "auctionCache": "GthvcvPksaMhDqzrpiv1SXv1XPrT2sN22g1UsjtRXpTd",
        "payer": "44kiGWWsSgdqPMvmqYgTS78Mx2BKCWzduATkfY4biU97",
        "auction": "GWrDgndHuRXrg3wtHdacVKfWD32GXSgQiVDR74qgr3QE",
        "safetyDepositBoxAccount": "8JrDuFdbM1wM5vZX7R3opCr7wQonnAddES5sX3U3u2fu",
        "auctionManager": "8kpxCy7nW8Z2U8Uvfvy2awMpfoNFkUas6YAJwm5f3Mjz",
        "storeKey": "ES6P7YMvRH96mmSCHqJrEFDgYhWNp1UdcA1J4r59ZrZo",
        "timestamp": "2021-10-10T19:54:34Z"
    }
]
```

### List all started auctions

This query takes in the following parameters and returns the transactions involved in starting auctions in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/started-auctions?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "4M1LXRb58sNxfNX5QCxdnqZ8aN1ywr5e36hBCicSf4zWgbtiGtEBj3oa7Wy54M576rhJwsnUkUQkE75cAnZZ7w8h",
        "auctionManager": "EUxhUWEj9WQhBPMCZeD2weFgMwPWZK22n24DUagkxBjV",
        "auction": "4RF5oF62zBoNtDEdoUZQ1je1pkhkGYZr7tg9BH9YbBKa",
        "auctionManagerAuthority": "CCmL6MoxuL6zJRQcyenokhmC5ytWCJXhD8A2ECdzFduA",
        "store": "auctxRXPeJoc4817jDhf4HbjnhEcr1cCXenosMhK5R8",
        "auctionProgram": "SysvarC1ock11111111111111111111111111111111",
        "timestamp": "2021-10-06T23:39:10Z"
    },
    {
        "txHash": "3UUn4Ds4tqp2JgmC7DCSbqVHRm45akwKeVSEYunWnhwhRDLiYo9aawvSuckqgG1XiUjyVtrX4zPEpH1BgcvmYVvS",
        "auctionManager": "HJz7GzrUVnkbFC8HR33RrXsbTnWXEYPvd1ndcVAC38aj",
        "auction": "D6GG4XKDZntdw2UzADRUNpsA8KX9mAvfgPdFCRTbeSQ",
        "auctionManagerAuthority": "2XVwDHNH8iKMW7sy2KU2g4LJ1rVFXUeWRgsndcQXWLf5",
        "store": "auctxRXPeJoc4817jDhf4HbjnhEcr1cCXenosMhK5R8",
        "auctionProgram": "SysvarC1ock11111111111111111111111111111111",
        "timestamp": "2021-10-06T22:51:21Z"
    }
]
```

### List all emptied payment accounts

This query takes in the following parameters and returns the transactions which interacts with the empty_payment_account program in the specified time range. See more: https://docs.metaplex.com/architecture/deep_dive/metaplex#royalties

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<Int>` Start of Page
  - limit: `<Int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/emptied-payment-accounts?from=2022-02-21T00:00:00Z&to=2022-02-22T00:00:00Z
```

:::note
metadata and masterEditionMetadata are both PDAs storing data of a token. The existence of both implies that this token is a Non-Fungible Token.
:::
#### Sample returned results
```
[
    {
        "txHash": "7MKkE8cuYyoprskev6DnFpB2g6gVcwhgEDsKtHxVFMbU",
        "acceptPaymentAccount": null,
        "destinationAccount": "D2mkyRLybySoipvvcxx1kDknfZv9RofSZWvS9dnobpiP",
        "auctionManager": "BzDu2iVvbC2rmPC47VhgRQtLffdHMfspygVtctd469ZF",
        "payoutTicketInfo": "7m4T3xvtUTBLsiQfxCh5H4rWW6H1BkNAfcqCsTzFntuE",
        "payer": "2camhmXwvDnfDCnoSDuv6jQWEgR6kUNz6JiaNXqoWnxf",
        "metadata": "DcPm7ked5dWpRXyJHkh6v5UHN4cHfPcKdUitHLDwXFyb",
        "masterEditionMetadata": "AafSQpTcGJznS3ja8r8MEzsL4WfaSc2huuYJ2u5ZX9Pv",
        "safetyDepositBox": "G6K5HkEeLZgNVCVW5tpdVJ4yGw6Um72FLR9E1DKbWzoB",
        "auctionManagerStore": "GJGiTSxdNiZLQma7fCbhQ4SqNpjZhFBxpRUnZna6F4bb",
        "vault": "Gq4xXYXRQzhQaxR9U5mU27DZSBzAqxBDqBVZe2YRRghd",
        "auctionWinnerTokenTypeTracker": "WyyPk2iNXRw4k4vZcAWTirGn3KVFS58UNm17ygjDmUU",
        "safetyDepositConfig": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        "winningConfigIndex": 0,
        "winningConfigItemIndex": 0,
        "creatorIndex": 0,
        "timestamp": "2022-02-21T23:43:47Z"
    }
    ...
]
```

### List all redeemed full rights transfer bids

This query takes in the following parameters and returns the transactions involved in transferring full rights of a token in the specified time range.
:::note
Full rights transfers are a type of NFT arrangement which involve giving away token + metadata ownership. See more: https://docs.metaplex.com/architecture/deep_dive/metaplex#types-of-token-sales
:::
#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/redeem-full-rights-transfer-bids?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "26XKViX7ATdmQ5hXcwAHWk6Hwv96JgAtZis1njRw28TUZrj9eg3ybSBUDdCKxFGKfD5K12L3Ro8cDY3iCJGbZimC",
        "auctionManager": "4nXx3RjekiSuLm5VJP83GYpHbpVwFwEMsTNUe2f5raiJ",
        "safetyDepositStorage": "99j8noqq3C6QNpgfzMDoZhF6xe5jtc69M9Fh36qhjaqH",
        "destination": "3YZQdS4Rk9MZKZMGmEpHBQENYPKjMHoddQw8SpyCjnwo",
        "bidRedemptionKey": "AgXxLehG7XSiHmZfLkxHJ22TxhT7EoxpjwitYbmUwK7r",
        "safetyDepositBox": "B2Vb2ECt5ERwNiYL8of6qLQdcrt6BpYD1HiKUxhmCFoS",
        "vault": "EuasXQjsDj7Qojc5RXTkGMt25b93MeYMNR4pqLLtNJf9",
        "vaultFractionMint": "6ByTf1kNQCEgi7tTbNziRJofWUejuQ4EKhG1qCWPE88x",
        "auction": "C3Yp2M3MiqAXyqhPmGXfa6kUc7e5jynvij2Znk12P5pK",
        "bidderMetadata": "EMJbXFs8w5rUYJRUP3g56kAJyQ3VSsQYSugbeF88wM5t",
        "bidder": "BQB1KrcdAiRu6BThUb8EzwX2YDSMCwqcd7DZPTLRyP2R",
        "payer": "BQB1KrcdAiRu6BThUb8EzwX2YDSMCwqcd7DZPTLRyP2R",
        "store": "eDNgeeJ7D18yGwnEQzgUhz4xu8dziAetxoi6jhs3rL5",
        "masterMetadata": "3FBBtSEGFdB2vfdZufbpHXnErW5fgRzrJ2nh6hsrKKTQ",
        "newMasterMetadataAuthority": "BQB1KrcdAiRu6BThUb8EzwX2YDSMCwqcd7DZPTLRyP2R",
        "transferAuthority": "BdyRpJBKmM211BfrtjehbfWT7mAcZ5rwMEGa1LMseXko",
        "safetyDepositConfig": "HybhqcoLzeGfHh6V44cD8kSX7B8hU8Rfckf53npfxFYY",
        "auctionExtended": "2SCP271VZ2UEMpjpBpa1pu4EdsSQfQGFvX3W3vvEf9wk",
        "timestamp": "2021-10-06T23:37:07Z"
    }
    ...
]
```

### List all redeemed participation bids

This query takes in the following parameters and returns the transactions involved in redeeming participation NFTs in the specified time range.
:::note
See more on participation NFTs: https://docs.metaplex.com/architecture/deep_dive/metaplex#types-of-token-sales
:::

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/redeem-participation-bids-v3?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "3zu4jLHt4qkJwavBQ1nbtqyhGEsAZZZfFdDwgHQrK3bYGbFvczHDS8kZMrzP4x4Jr65AHYiWLckrHSkieMX8XPM2",
        "winIndex": 0,
        "auctionManager": "BQ3JeDd9cTBGWpXWKAGMGAagmzya4yZzCGVZGBZNnyty",
        "safetyDepositStorageAccount": "APfiHVDPrNoBVPPYAydDMH8UPpe4zKpb23VYLS4vsgry",
        "newMintTypeAccount": "5vt2pps1quffQmTaqRddz6kEw9AMGA614AX5S43pTTuM",
        "bidRedemptionKey": "DvqyRMLY4BiuwQDHy2yyEcvShNhrRPH6PLdfnxMXFz65",
        "safetyDepositBoxAccount": "2pXAZ6CXUGCQ6ctBthfHLGQuCSERgN9X8HnYJ13HDwiW",
        "vaultAccount": "ELTht5gDaszgThZh9GAx1AM8XJDAj48KtbVdw1XsRohH",
        "safetyDepositConfigAccount": "9qRojD8evminatLjuT2hP2JEZVLUKDJ48zDkKrzaSodg",
        "auction": "32vfu2tRNKnPHKaQiSC46zyhvPYD8CoALbx34tMqK8V7",
        "bidderMetadata": "DHeUTvX1hkKq94adpW8H3zkhsP66RugQNn8KfsktnFt3",
        "bidder": "GicaK3zsbHUmpKsWZ5NUmX8qZ8v6YRFs8nGGr1Uqb4Qx",
        "payer": "GicaK3zsbHUmpKsWZ5NUmX8qZ8v6YRFs8nGGr1Uqb4Qx",
        "store": "CTRqeoWBEtD96eE3RTkwvPMm7quQtunZDA1Chic1Man8",
        "transferAuthority": "HAAAse9MZYKAZqAQeEJnebnBxrrq42Szu2xiU1gWKTWm",
        "acceptPaymentAccount": "zz82mfuwTonqDeBtaJ8UiYM4ZjQQ7JqH1pGLf53czC7",
        "potentialPayingTokenAccount": "7pymUi3nevKvoyQbUDiQvxbRKpj9xt7RSPZtKhrNecWq",
        "prizeTrackingTicket": "4HHBLZjAspvQWorSAcdWxh1EACq56P5SQiJmHV2vSFxr",
        "newMetadataKey": "DFDL9N6HEPusdRA42q2zAQktYscfjxiP8vcNUjQLDFDr",
        "newEdition": "296o8n7NMBcANioqjzbTqqwyfohH3zbrEQhEiGVTNsMk",
        "masterEdition": "EYDBK8Rd8uWsvHt9t59bUPN2K2ESvRftWtzHViUjEwYZ",
        "newTokenMint": "6co21wNL37HD22VbrEtXjAv7yGt4Dqp8nvNJQkdEZei2",
        "editionPda": "8sJ2pgfyzXi8kaqpvAPkQiMHDjRpiTiHCqXEYrCkfX7U",
        "newMintMintAuthority": "GicaK3zsbHUmpKsWZ5NUmX8qZ8v6YRFs8nGGr1Uqb4Qx",
        "vaultTokenMetadata": "BVQyWLT1LgsdZ79HgRjGb7HKkqpwJeBaquoZXL8LzEPS",
        "auctionDataExtendedAccount": "AY73BLwTeWNJYeMr5CvP621U9pKY2ybjV8U4ERgyjf3r",
        "timestamp": "2021-10-06T22:06:30Z"
    },
    {
        "txHash": "NVf2bshvat5pCQUgW72q8rYf9R8oJHtbNcFbx8b29VEJYkyyVSSkhS67HAHYbuMc44DyGwfYR6WV3nJYw7fkYkH",
        "winIndex": 0,
        "auctionManager": "BQ3JeDd9cTBGWpXWKAGMGAagmzya4yZzCGVZGBZNnyty",
        "safetyDepositStorageAccount": "APfiHVDPrNoBVPPYAydDMH8UPpe4zKpb23VYLS4vsgry",
        "newMintTypeAccount": "9Vc7kSyJksPJ7rtYZ2pxQfBz3u2yh3QzeU1dX3BQBYPC",
        "bidRedemptionKey": "BEFZ3dUQakQLyterjnmtc5ihEGtNQ6ZaLc2JCQZ6AsBA",
        "safetyDepositBoxAccount": "2pXAZ6CXUGCQ6ctBthfHLGQuCSERgN9X8HnYJ13HDwiW",
        "vaultAccount": "ELTht5gDaszgThZh9GAx1AM8XJDAj48KtbVdw1XsRohH",
        "safetyDepositConfigAccount": "9qRojD8evminatLjuT2hP2JEZVLUKDJ48zDkKrzaSodg",
        "auction": "32vfu2tRNKnPHKaQiSC46zyhvPYD8CoALbx34tMqK8V7",
        "bidderMetadata": "GnREZXMaBirFfQsnyyCUq9fjwCMcjcpwAxGDGwXECNr9",
        "bidder": "BgRzq2tzLJXZVb6ijtjBPWQKs4kQzXx11kAHTUXkS2D1",
        "payer": "BgRzq2tzLJXZVb6ijtjBPWQKs4kQzXx11kAHTUXkS2D1",
        "store": "CTRqeoWBEtD96eE3RTkwvPMm7quQtunZDA1Chic1Man8",
        "transferAuthority": "7SLZtTjQ2yCC7wyrSBhruEfMAKm3dV2kqjfDTLHGR6p",
        "acceptPaymentAccount": "zz82mfuwTonqDeBtaJ8UiYM4ZjQQ7JqH1pGLf53czC7",
        "potentialPayingTokenAccount": "DhrQwkYjF34U7tM4LtRFJTuvgxFUf9kfk5c4bWVJD1bZ",
        "prizeTrackingTicket": "4HHBLZjAspvQWorSAcdWxh1EACq56P5SQiJmHV2vSFxr",
        "newMetadataKey": "2Ai8qNZ1cXJpAGEiy2mvC7jUNmJ3CRs6FK1mUsJdp1Dx",
        "newEdition": "394v31P3MtSrVJf79nPWTxgaj5sm5xPh7ojXhYyYWDoc",
        "masterEdition": "EYDBK8Rd8uWsvHt9t59bUPN2K2ESvRftWtzHViUjEwYZ",
        "newTokenMint": "HMsgjYynW1pwJU1yLTQ9TrKvArjjUmRNAk6ApZjRYQrh",
        "editionPda": "8sJ2pgfyzXi8kaqpvAPkQiMHDjRpiTiHCqXEYrCkfX7U",
        "newMintMintAuthority": "BgRzq2tzLJXZVb6ijtjBPWQKs4kQzXx11kAHTUXkS2D1",
        "vaultTokenMetadata": "BVQyWLT1LgsdZ79HgRjGb7HKkqpwJeBaquoZXL8LzEPS",
        "auctionDataExtendedAccount": "AY73BLwTeWNJYeMr5CvP621U9pKY2ybjV8U4ERgyjf3r",
        "timestamp": "2021-10-06T19:37:46Z"
    }
    ...
]
```

### List all redeemed printing

This query takes in the following parameters and returns the transactions involved in redeeming NFT prints in the specified time range.
:::note
See more on printing: https://docs.metaplex.com/architecture/deep_dive/metaplex#types-of-token-sales
:::

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/redeem-printing-v2?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```

:::note
editionOffset and winIndex is used to keep track of the relative edition offsets each person should get relative to winner #1, #2, etc. This is used for redeeming PrintingV2 bids, to ensure winner #1 gets edition #1, and so on. See: https://docs.metaplex.com/architecture/deep_dive/metaplex#prizetrackingticket
:::
#### Sample returned results
```
[
    {
        "txHash": "jZpofLQT6AveUepS89i5o1PCuem6rvTr8gP6aKiP1zdYVovLGWGCDLum2hQx8nav1ii1zQdR4hLfxt4SdFaDYir",
        "auctionManager": "BEFBMXzWFCU9xG6bhj6op5vntMWhQaig6p6Vy1T7HXRE",
        "safetyDepositTokenStorage": "z9LhUKhJ3y96ND9HFBRknWdBgXB2XsJEev9Acpr7mVJ",
        "newMintTypeAccount": "EbA35Qh3NY2kV8UZTpDvQiojYMLiCrZ7CsGCuA2E4EJD",
        "bidRedemptionKey": "FY1JnBLL7MNi2Dpu5hud5dyxvE2y5vrf32XCSuwCtxVQ",
        "safetyDepositBoxAccount": "JBUhPfr7NpVBjSB2HeSAbv4jD3Q75fwmKMiXy7fFdCv5",
        "vaultAccount": "3NFNpJYjeGqZuN5xKEZmxxmFy3vg8oMVuhbgAzm5Y6Ed",
        "safetyDepositConfig": "8XTd1W1KpQnZjA5P833HaJrZBMcKAVX88ygQ5uUmnCZk",
        "auction": "8JWWFD7Pk5gnyjQzoasZYSEaRMq7km3FY8yfrTA7HEbH",
        "bidderMetadata": "J9gjkPkqgBy1iXkpSVyxxzNYX7e1Qhyws28wMoKAo27E",
        "bidder": "7r8oBPs3vNqgqEG8gnyPWUPgWuScxXyUxtmoLd1bg17F",
        "payer": "7r8oBPs3vNqgqEG8gnyPWUPgWuScxXyUxtmoLd1bg17F",
        "store": "CTRqeoWBEtD96eE3RTkwvPMm7quQtunZDA1Chic1Man8",
        "prizeTrackingAccount": "6Vf52UgbfPnH1ikyEwsKTW4UwLpWH4Pmroa8tju89L9D",
        "newMetadata": "5W44m5UFn6v2j43WMFZ3o5bqEfSc4agLC8AJ8cQ6z339",
        "newEdition": "CE9tPyeqEy8k4bfWDxn1eUJBYsHh9bQG9YXTtHks2KNk",
        "masterEdition": "7WemGv3p1okFfjwDKNxxni43vKDuTbR4mcbFFjypTghE",
        "newTokenMint": "SYy7zxDyWBbBjxj6WokPkATkuh9bcesGj9hRsmuNjiK",
        "editionPda": "7Fgq4XrzvRSj8mj3fimnd7WB31AyVnoaDkYZS2wc5Ma5",
        "newMintAuthority": "7r8oBPs3vNqgqEG8gnyPWUPgWuScxXyUxtmoLd1bg17F",
        "vaultMetadata": "5hxvoZ6B8Z6NbKuw1LDDfonaMKx6FQAkveab37k5Vs4V",
        "auctionExtended": "3c6Auszpfz4pZnhPymwCnDNDxbBUyN1zLML1cL9CRZNM",
        "editionOffset": 4,
        "winIndex": 3,
        "timestamp": "2021-10-06T19:52:57Z"
    }
]
```

### List all store indices

This query takes in the following parameters and returns the ? in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/set-store-indices?from=2021-10-10T00:00:00Z&to=2021-10-11T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "5gCGs8aRC5mzEbfLyfrJzf4KBRiWceiPnN6nZZ1CqHAtXdtAZpgKvobGEQ74Lbc5JoBaCxyUC4Si34ntuuHNMhqW",
        "storeIndex": "BbS5FEMkFihk6vEprCGABCTGRKANL41zQUNtTn3216Pa",
        "payer": "44kiGWWsSgdqPMvmqYgTS78Mx2BKCWzduATkfY4biU97",
        "auctionCache": "DSmxmf3zxacfR7KqrLkms3e2yWe64JmMjF1ubX9hEntt",
        "storeKey": "ES6P7YMvRH96mmSCHqJrEFDgYhWNp1UdcA1J4r59ZrZo",
        "page": 0,
        "offset": 0,
        "auctionCacheAboveCurrent": "GthvcvPksaMhDqzrpiv1SXv1XPrT2sN22g1UsjtRXpTd",
        "auctionCacheBelowCurrent": null,
        "timestamp": "2021-10-10T19:54:42Z"
    },
    {
        "txHash": "3bjkmg1TaxTeo1GD2WfCrKLz7kgsvypU3Da8chQJk4efhNhFfGoMKsbZyLWHgFTmA1H6DVUW4iZMg2zuz6Z3ra4v",
        "storeIndex": "BbS5FEMkFihk6vEprCGABCTGRKANL41zQUNtTn3216Pa",
        "payer": "44kiGWWsSgdqPMvmqYgTS78Mx2BKCWzduATkfY4biU97",
        "auctionCache": "GthvcvPksaMhDqzrpiv1SXv1XPrT2sN22g1UsjtRXpTd",
        "storeKey": "ES6P7YMvRH96mmSCHqJrEFDgYhWNp1UdcA1J4r59ZrZo",
        "page": 0,
        "offset": 0,
        "auctionCacheAboveCurrent": "CW7xP9kRc67MDWzd8DnEz582BvRA6coH7js5tH28yhJh",
        "auctionCacheBelowCurrent": null,
        "timestamp": "2021-10-10T19:54:37Z"
    }
]
```

### List all V2 SetStores

This query takes in the following parameters and returns the transactions involved in setting up stores in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/set-stores-v2?from=2022-02-16T00:00:00Z&to=2022-02-17T00:00:00Z
```

:::note
The store can be either public or private, which determines whether or not AuctionManagers can sell items that have all non-whitelisted creators on them or not.
:::
#### Sample returned results
```
[
    {
        "txHash": "3QwwjbrtfDeS9fr4aevAs7iugwXL6njntHK5jjjePHMpTdaoZzL88NFFghrCg8jhib3L4dfNqGuVhwTKuMyeTi4w",
        "storeKey": "5jt3pM6cwSoi9kSpZZnYcnVaiDdGK8ASii38ZGRoHH8V",
        "storeConfigKey": "GKjwjtRLznpgKv9f7rytMNyaN729Hy79N8Q6RYAvfwpX",
        "admin": "7M1xkWMTmGxVBPGCDGrfKJBgr6LciU5sQFoZJma84Kf2",
        "payer": "7M1xkWMTmGxVBPGCDGrfKJBgr6LciU5sQFoZJma84Kf2",
        "isPublic": false,
        "settingsUri": null,
        "timestamp": "2022-02-16T17:33:00Z"
    },
    {
        "txHash": "MM7STnxc5z1GbdQ5VXHTeesPVd6DhEvXyWE3N2LHR8XzsPTCaQUZ4K1RM87F2CouRMVznFtPLRPaFXMN3ZNZWxi",
        "storeKey": "resN1ng5sfkbVFPGh5NW2zJLJyGrK8g6emyBygZFbVi",
        "storeConfigKey": "H8zkHTHeDyCEGNJRqqXdEzD2F3NCfeLnXkxcaYVk1jMU",
        "admin": "FX2sqPu69RhzxMJYSuUALvrT6LSBZyxJEbD64Q7ZF823",
        "payer": "FX2sqPu69RhzxMJYSuUALvrT6LSBZyxJEbD64Q7ZF823",
        "isPublic": false,
        "settingsUri": null,
        "timestamp": "2022-02-16T03:57:51Z"
    }
]
```

### List all SetWhitelistedCreators

This query takes in the following parameters and returns the transactions involved in giving whitelist access to an account in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/set-whitelisted-creators?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "umTYVuWSwLj1zuMLQdPaAfCsnMjCPZi898upZUmHi8SroYz2X1BXeWSvtGLzfQ7PjZtkKBp5upJTxZnSMvkP8Us",
        "whitelistedCreator": "Fs3bE4ckbPDfLNAGnMRJ8nqFCt6z8Sb13CkBqEvsEo8S",
        "admin": "EuEQ9fW6imHEk62kjDqYGUY3iXXcdhUpb7HwhuxuANij",
        "payer": "EuEQ9fW6imHEk62kjDqYGUY3iXXcdhUpb7HwhuxuANij",
        "creator": "3ixSKm6HjsYgJiJbcwVASrezqRg76x5WcK668DrVn2wJ",
        "store": "5qQsDbbjNJbELRwxARMBMh29G9QSgQHHLXvXFRyPM8SQ",
        "activated": true,
        "timestamp": "2021-10-06T23:43:05Z"
    },
    {
        "txHash": "3zLdt8hp7bReKQAXwKR6yTgBJGsbMruWVL5jiEzn8q7oKgm9uqbwAsfrx3ghZ9zUtWLBUmFMhxwe1JS84cW4BpnR",
        "whitelistedCreator": "GpxxA1XNhM19LyBLQBzhzZZwVd6x5TdopjX4y5SWDFJS",
        "admin": "BFkNN9XCmwSwB5hM5e2HxW7qoiu55tqXtvhQoc6qBks6",
        "payer": "BFkNN9XCmwSwB5hM5e2HxW7qoiu55tqXtvhQoc6qBks6",
        "creator": "BFkNN9XCmwSwB5hM5e2HxW7qoiu55tqXtvhQoc6qBks6",
        "store": "AK6ho3ByWz1yWXwxsqF3WtfSAbtA5EVgoxN6rPznSRXi",
        "activated": true,
        "timestamp": "2021-10-06T23:35:07Z"
    }
    ...
]
```

### List all validated safety deposits

This query takes in the following parameters and returns the transactions involved in calling the validate_safety_deposit_box endpoint in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/metaplex/validated-safety-deposits?from=2021-10-06T00:00:00Z&to=2021-10-07T00:00:00Z
```
#### Sample returned results
```
[
    {
        "txHash": "64tLr8DFxZTkwPuAyHqfm9bQxVuJSH7dvTAfk1VoxsQVU7ZJGvAchPGHEUeVc4ajeEBESpjEThPH4CbCsNqEyuXV",
        "key": 9,
        "order": 0,
        "winningConfigType": 1,
        "amountType": 1,
        "lengthType": 1,
        "amountRanges": [
            1,
            1
        ],
        "winningConstraint": 0,
        "nonWinningConstraint": 0,
        "fixedPrice": 0,
        "collectedToAcceptPayment": 0,
        "safetyDepositConfig": "DnkY2xVpDz4wYquarH8XF3JWGVaMZqN9rNG7bKmdM8h5",
        "auctionWinnerTokenTypeTracker": "FDHddqkPiCYUCGVeSmrxgqu8gNdQAKMxwnAibeLorJL3",
        "auctionManager": "EUxhUWEj9WQhBPMCZeD2weFgMwPWZK22n24DUagkxBjV",
        "metadata": "FwBrVktBkdWLraLpFqc14sUydVsMJL7cJNzRv3biVYd1",
        "ogAuthorityLookup": "Dbm1rpCCz5zh5LDz3zg7mvJBNhWX97zCDaeQxMRm7cfo",
        "whitelistedCreators": "C1u1PDTX5BBvYfBU3MsuX4sjdzwHGRGRPgHZ6ssfoWKe",
        "auctionManagerStoreKey": "3b2YaQoAzxKDmM1PzXdY4humGfEXKWzytw21jBtKcCZV",
        "safetyDepositBox": "GpSVpMjD5nXunAJkNCY7tkcNb1vMZ7aXFrsHY9RVHX7d",
        "safetyDepositBoxStorage": "6soa6C6dihZyZgDYRxYVf7UzCbihUXyn81CUzr4EuEyT",
        "mint": "2WmZWewKCAaySVoUXCHGeQwyW2EJLFqXxm844cg25i8j",
        "editionRecord": "4XhkMDKeJxDR6i3BBvoN1u6XJxddMCMTMVx4qW8yBDh7",
        "vaultAccount": "43531TVT9qT3kBtACeXRrRWCxqKQhTzAaoUXE3RSQ9hn",
        "authority": "CCmL6MoxuL6zJRQcyenokhmC5ytWCJXhD8A2ECdzFduA",
        "metadataAuthprity": "CCmL6MoxuL6zJRQcyenokhmC5ytWCJXhD8A2ECdzFduA",
        "payer": "CCmL6MoxuL6zJRQcyenokhmC5ytWCJXhD8A2ECdzFduA",
        "timestamp": "2021-10-06T23:39:08Z"
    }
]
```







