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
  solana{
	  instructionByKey(instructionId:1){
      id
      data
   }
  }
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "instructionByKey": {
        "id": 1,
        "data": "{\"hash\":[134,71,50,174,231,22,114,84,172,147,235,36,221,190,61,195,1,165,112,236,109,176,46,150,57,137,159,36,217,247,180,201],\"slots\":[37499],\"timestamp\":null}"
      }
    }
  }
}
```

