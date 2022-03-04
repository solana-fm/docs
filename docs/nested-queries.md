---
title: Nested Queries
sidebar_position: 5
---
Using SolanaFM, you can dive deeper into the Solana blockchain by navigating through these nested queries. Models are joined via a hash and timestamp

![Alt text](../build/assets/images/nest-queries.gif)

## Account Input 

Elements of account inputs are inner joined with other tables via a "from" and "to" timestamp together with eiher a
1. transaction_hash
2. account_hash 

### Tables that inner joins with Account Input 
1. account-instruction
  - Joined via account_hash & timestamp 
2. account-transaction 
- Joined via account_hash & timestamp 
3. transaction
- Joined via transaction_hash & timestamp 
4. transaction-signature
- Joined via transaction_hash & timestamp 
5. transaction-log 
- Joined via transaction_hash & timestamp 
6. transaction-instruction 
- Joined via transaction_hash & timestamp 

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


## Account Instruction 
Elements of account inputs are inner joined with other tables via a "from" and "to" timestamp together with eiher a
1. transaction_hash
2. account_hash 

### Tables that inner joins with Account Instruction 
1. account-input
  - Joined via account_hash & timestamp 
2. account-transaction 
- Joined via account_hash & timestamp 
3. transaction-signature
- Joined via transaction_hash & timestamp 
4. transaction-log 
- Joined via transaction_hash & timestamp 
5. instruction 
- Joined via transaction_hash & timestamp 
6. transaction
- Joined via transaction_hash & timestamp 

#### Example 
```
query {
    solana {
      accountInstructions {
        txInstructionId
        transactionHash
        parentIndex
        account
        index
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

```

## Account Transaction 
Elements of account inputs are inner joined with other tables via a "from" and "to" timestamp together with eiher a
1. transaction_hash
2. account_hash 

### Tables that inner joins with Account Transaction 
1. account-input
  - Joined via account_hash & timestamp 
2. account-instruction
- Joined via account_hash & timestamp 
3. transaction
- Joined via transaction_hash & timestamp 
4. transaction-signature
- Joined via transaction_hash & timestamp 
5. transaction-log 
- Joined via transaction_hash & timestamp 
6. instruction
- Joined via transaction_hash & timestamp 

#### Example 
```
query {
    solana {
        accountTransactions {
          transactionHash
          account
          role
          timestamp
          instructions {
            txInstructionId
            instructionTypeId
            transactionHash
            program
            data
            parentIndex
            timestamp
          }
        }
    }
}

```


#### Result 
```

```
