---
title: Instruction Type
---

### Elements of InstructionType
* id: `<Float>` Unique Identifier of a InstructionType
* instructionCode: `<String>` 
* program: `<String>` 
* parentInstructionType: `<Float>` 

### instructionTypes
Returns Instructionstypes


#### ** Parameters ** : 
* Paging: (Optional) `<int>` 
  - Page: `<int>` Start of Page 


#### Example:
```
query{
	solana{
   instructionTypes{
    id
    instructionCode
  	}
	}
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "instructionTypes": [
        {
          "id": 1,
          "instructionCode": "uncategorised"
        },
        {
          "id": 2,
          "instructionCode": "native_loader"
        }
```

### instructionTypeById
Returns a specific instance of an InstructionType

#### ** Parameters ** : 
* iD: `<String>` (required) 

#### Example:
```
query{
	solana{
   instructionTypeById(id:5){
    id
    instructionCode
    parentInstructionType
  	}
	}
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "instructionTypeById": {
        "id": 5,
        "instructionCode": "system",
        "parentInstructionType": null
      }
    }
  }
}
```