---
title: Instruction
---

For more information on Instructions: https://docs.solana.com/developing/programming-model/transactions#instructions

### Elements of Instructions
* id: `<Float>` Unique Identifier of a Instruction
* txInstructionId: `<Int>` 
* instructionTypeId: `<Float>` 
* transactionHash: `<String>` 
* program: `<String>` 
* data: `<String>` Data an instruction has
* parentInstructionId: `<Float>` 


### intructions
Returns Instructions


#### ** Parameters ** : 
* Paging: (Optional) `<int>` 
  - Page: `<int>` Start of Page 


#### Example:
```
query{
	solana{
   intructions{
    id
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
          "id": 1,
          "txInstructionId": 0,
          "transactionHash": "4ATViT4FmkNdK52vakMC1BGFmzWjioF6cmsM4uXKhKSi6AuQzX2ueuKd7r2c5eqUxPPtbNCwJnH6nhAhLsj955YF"
        }
```

### instructionByKey
Returns a specific instance of an instruction

#### ** Parameters ** : 
* instructionID: `<Float>` (required) 

#### Example:
```
query{
	instructionByKey(instructionID:""){
  }
}
```

#### Result:
```

```

