---
title: Instruction
---

For more information on Instructions: https://docs.solana.com/developing/programming-model/transactions#instructions

### Elements of Instructions
* txInstructionId: `<Int>` 
* instructionTypeId: `<Int>` 
* transactionHash: `<String>` 
* program: `<String>` 
* data: `<String>` Data an instruction has
* parentIndex: `<Int>` 
* timestamp: `<Datetime>`


### intructions

#### ** Parameters ** : 
- from: `<DateTime>` 
- to: `<DateTime>` 
- paging: 
  - page: `<Int>` 
  - limit: `<Int>`


#### Example:
```
query{
	solana{
   intructions{
    txInstructionId
    transactionHash
  	}
	}
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "intructions": [
        {
          "txInstructionId": 0,
          "transactionHash": "4ATViT4FmkNdK52vakMC1BGFmzWjioF6cmsM4uXKhKSi6AuQzX2ueuKd7r2c5eqUxPPtbNCwJnH6nhAhLsj955YF"
        }
```
