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

## Block Rewards
Elements of block rewards are inner joined with other tables via a "from" and "to" timestamp together with account_hash

### Tables that inner joins with Block Rewards
1. account-instruction
  - Joined via account_hash & timestamp 

#### Example 
```
query {
    solana {
       blockRewards {
         account
         hash
         rewardType
         amount
         postBalance
         timestamp
        accountInstructions {
          txInstructionId
          transactionHash
          parentIndex
          account
          index
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
      "blockRewards": [
        {
          "account": "XkCriyrNwS3G4rzAXtG5B1nnvb5Ka1JtCku93VqeKAr",
          "hash": "5FhHfUvMu1Y8Pm6LDB1iQJXz8mYF2uur1cQpbwMJ2i5",
          "rewardType": "RENT",
          "amount": 334,
          "postBalance": 4023371849772,
          "timestamp": "2022-03-04T15:03:20.000Z",
          "accountInstructions": [
            {
              "txInstructionId": 0,
              "transactionHash": "2EX8EXvFjNcn2BXYt2EDumGAi6eUg23HHAKcfF7evdWmJjUcg4Nt1Vb6bWyBhyP3Hof4y5tNcxCwphjR3uXXHnjJ",
              "parentIndex": -1,
              "account": "XkCriyrNwS3G4rzAXtG5B1nnvb5Ka1JtCku93VqeKAr",
              "index": 3,
              "timestamp": "2022-03-04T15:03:20.000Z"
            },
            {
              "txInstructionId": 0,
              "transactionHash": "3i4rAUNFgaEGNofftqdA244v5AP225FDHU4ygmcc8g67gAwJDP7h9ykVNmktTnff6x7Ch3GCNTR6F14y1sCq4Yu6",
              "parentIndex": -1,
              "account": "XkCriyrNwS3G4rzAXtG5B1nnvb5Ka1JtCku93VqeKAr",
              "index": 3,
              "timestamp": "2022-03-04T15:03:20.000Z"
            }
          ]
        },
```
## Instructions
Elements of instructions are inner joined with other tables via a "from" and "to" timestamp together with eiher a transaction_hash

### Tables that inner joins with Instructions
1. account-input
2. account-instruction
3. account-transaction
4. transaction-signature
5. transaction-log 
6. transaction

#### Example 
```
query {
    solana {
      instructions {
        txInstructionId
        instructionTypeId
        transactionHash
        program
        data
        parentIndex
        timestamp
        transactionLogs {
          transactionHash
          line
          data
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
      "instructions": [
        {
          "txInstructionId": 0,
          "instructionTypeId": 0,
          "transactionHash": "2MWWRtLFggMezPqSvmAPJasYVkcNJSF874a1mWw1wDKwC7ArQdYuLd3TmFqXgCNAboKrcRpv4hmZk38yuQnJdrVy",
          "program": "Vote111111111111111111111111111111111111111",
          "data": "[2,0,0,0,5,0,0,0,0,0,0,0,145,198,91,7,0,0,0,0,146,198,91,7,0,0,0,0,147,198,91,7,0,0,0,0,148,198,91,7,0,0,0,0,149,198,91,7,0,0,0,0,115,10,39,250,35,210,26,70,5,116,231,116,253,127,198,121,10,63,111,247,88,18,163,155,13,97,153,76,23,48,59,229,1,51,42,34,98,0,0,0,0]",
          "parentIndex": -1,
          "timestamp": "2022-03-04T15:03:20.000Z",
          "transactionLogs": [
            {
              "transactionHash": "2MWWRtLFggMezPqSvmAPJasYVkcNJSF874a1mWw1wDKwC7ArQdYuLd3TmFqXgCNAboKrcRpv4hmZk38yuQnJdrVy",
              "line": 0,
              "data": "Program Vote111111111111111111111111111111111111111 invoke [1]",
              "timestamp": "2022-03-04T15:03:20.000Z"
            },
            {
              "transactionHash": "2MWWRtLFggMezPqSvmAPJasYVkcNJSF874a1mWw1wDKwC7ArQdYuLd3TmFqXgCNAboKrcRpv4hmZk38yuQnJdrVy",
              "line": 1,
              "data": "Program Vote111111111111111111111111111111111111111 failed: custom program error: 0x0",
              "timestamp": "2022-03-04T15:03:20.000Z"
            }
          ]
        },
```

## Transaction

Elements of transaction are inner joined with other tables via a "from" and "to" timestamp together with transaction_hash


### Tables that inner joins with Transaction
1. account-instructiom
2. account-transaction 
3. instruction
4. transaction-signature
5. transaction-log 

#### Example 
```
query {
    solana {
     transactions {
       block
       status
       fee
       timestamp
      transactionSignatures {
        signature
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
      "transactions": [
        {
          "block": 123455135,
          "status": "INSTRUCTION_ERROR",
          "fee": 5000,
          "timestamp": "2022-03-04T15:03:20.000Z",
          "transactionSignatures": []
        },
        {
          "block": 123455135,
          "status": "INSTRUCTION_ERROR",
          "fee": 5000,
          "timestamp": "2022-03-04T15:03:20.000Z",
          "transactionSignatures": []
        },
        {
          "block": 123455135,
          "status": "INSTRUCTION_ERROR",
          "fee": 5000,
          "timestamp": "2022-03-04T15:03:20.000Z",
          "transactionSignatures": []
        },
        {
          "block": 123455135,
          "status": "INSTRUCTION_ERROR",
          "fee": 5000,
          "timestamp": "2022-03-04T15:03:20.000Z",
          "transactionSignatures": []
        }
```

