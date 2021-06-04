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
	instructions{
    
  }
}
```

#### Result:
```

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

