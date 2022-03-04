---
title: Nested Queries
sidebar_position: 5
---
Using SolanaFM, you can dive deeper into the Solana blockchain by navigating through these nested queries. Models are joined via a hash and timestamp

![Alt text](../build/assets/images/nest-queries.gif)

## Account Input 

Elements of account inputs are inner joined with other tables either via a "from" and "to" timestamp 
1. transaction_hash
2. account_hash 

### Tables that inner joins with Account Input 
1. account-instruction
2. account-transaction 
3. transaction
4. transaction-signature
5. transaction-log 
6. transaction-instruction 

#### Example 
```
query {
    solana {
       accountInputs {
         transactionHash
         account
         tokenId
         preBalance
         postBalance
         timestamp
        accountTransactions {
          transactionHash
          account
          role
          timestamp
        }
       }
    }
}
```


#### Result 
```
xxx
```