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
## Block 
Elements of account inputs are inner joined with other tables via a "from" and "to" timestamp together with eiher a
1. number (block number) 
2. proposer (account_hash of the proposer)
3. block_hash 

### Tables that inner joins with Account Transaction 
1. account-input
  - Joined via proposer & timestamp 
2. account-instruction
- Joined via proposer & timestamp 
3. account-transaction
- Joined via proposer & timestamp 
4. transaction
- Joined via number & timestamp 
5. block rewards
- Joined via block_hash & timestamp 


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
{
  "data": {
    "solana": {
      "blocks": [
        {
          "hash": "5qpTygEqBCF9AtcnYCrwqkgGxy5YPY2iKarXdwqbwiU1",
          "fetchStatus": "FETCHED",
          "timestamp": "2022-03-04T14:44:55.000Z",
          "proposer": "DWvDTSh3qfn88UoQTEKRV2JnLt5jtJAVoiCo3ivtMwXP",
          "parent": "52DGbUKXvsAQX3Ya7rezU6CA8iK83aHAkFfSFfu5co2o",
          "epochId": 285,
          "rewards": [
            {
              "account": "DWvDTSh3qfn88UoQTEKRV2JnLt5jtJAVoiCo3ivtMwXP",
              "hash": "5qpTygEqBCF9AtcnYCrwqkgGxy5YPY2iKarXdwqbwiU1",
              "rewardType": "FEE",
              "amount": 4790000,
              "postBalance": 43021517880,
              "timestamp": "2022-03-04T14:44:55.000Z"
            },
            {
              "account": "EJ2o4Pu74oKgVy2HiXgV4YvpwPxcK8CFErhaQhTmWcWj",
              "hash": "5qpTygEqBCF9AtcnYCrwqkgGxy5YPY2iKarXdwqbwiU1",
              "rewardType": "RENT",
              "amount": -13872,
              "postBalance": 1720224,
              "timestamp": "2022-03-04T14:44:55.000Z"
            },
```

