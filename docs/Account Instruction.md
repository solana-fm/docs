

### Elements of Account Instruction
* InstructionId: `<Float>` Unique Identifier of Instruction
* Index: `<Float>` 
* AccountHash: `<String>` Hash of Account

### accountInstructionByKey
Returns a specific isntance of accountInstruction

#### ** Parameters ** : 
* InstructionId: `<Float>` Unique Identifier of Instruction
* Index: `<Float>` 
* AccountHash: `<String>` Hash of Account

#### Example:
```
query{
	accountInstructionByKey(txHash:"",accHash:"",index:""){
	}
}
```

#### Result:
```

```

