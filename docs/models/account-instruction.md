---
title: Account Instruction
---

### Elements of Account Instruction
* instructionId: `<Float>` Unique Identifier of Instruction
* index: `<Float>` 
* AccountHash: `<String>` Hash of Account

### accountInstructions
Returns accountInstructions

#### ** Parameters ** : 
* Paging: (Optional) `<int>` 
  - Page: `<int>`Start of Page 

#### Example:
```
query{
	solana{
   accountInstructions{
    account
    instructionId
			}
    }
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "accountInstructions": [
        {
          "account": "4E7oqDNWg8hFiSQYNdetf7oGbQCJzrZDW1Czn5wjvXrg",
          "instructionId": 1
        }instuction.debug
```

### accountInstructionByKey
Returns a specific instance of accountInstruction

#### ** Parameters ** : 
* instructionId: `<Float>` Unique Identifier of Instruction
* index: `<Float>` 
* accountHash: `<String>` Hash of Account

#### Example:
```
query{
  solana{
	  accountInstructionByKey(accHash: "8XgHUtBRY6qePVYERxosyX3MUq8NQkjtmFDSzQ2WpHTJ",
          idx: 0,
          iId: 1){
      account
      index
      instructionId
    }
  }
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "accountInstructionByKey": {
        "account": "8XgHUtBRY6qePVYERxosyX3MUq8NQkjtmFDSzQ2WpHTJ",
        "index": 0,
        "instructionId": 1
      }
    }
  }
}
```


