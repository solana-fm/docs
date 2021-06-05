---
title: Instruction Property
---

### Elements of Instruction Property
* id: `<Float>` The unique Id of an Instruction Property
* instructionId: `<Float>` Unique Id of an Instruction 
* key: `<String>` 
* value: `<String>` 
* instruction: `<Instruction>` 

### instructionProperties
Returns instruction Properties

#### ** Parameters ** : 
* Paging: (Optional) `<int>` 
  - Page: `<int>` Start of Page 

#### Example:
```
query{
	solana{
   instructionProperties{
    id
    instructionId
    key
    value
  	}
	}
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "instructionProperties": [
        {
          "id": 1,
          "instructionId": 1,
          "key": "hash",
          "value": "4pxhAVJsDkfGw3WukcmjyWbtJ3oP4biVhqe5xG9za94W"
        }
```

### instructionPropertiesByInstructionId
Returns instruction property instance with instructionid input

#### ** Parameters ** : 
* instructionId: `<Float>` (required)

#### Example:
```
query{
	solana{
   instructionPropertiesByInstructionId(instructionId:1){
    id
    key
  	}
	}
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "instructionPropertiesByInstructionId": [
        {
          "id": 1,
          "key": "hash"
        },
        {
          "id": 2,
          "key": "timestamp"
        },
        {
          "id": 4,
          "key": "slots"
        }
```
### instructionPropertiesByKey
Returns instruction property instance with key input

#### ** Parameters ** : 
* key: `<String>` (required)
* Paging: (Optional) `<int>` 
  - Page: `<int>` Start of Page 

#### Example:
```
query{
	solana{
   instructionPropertiesByKey(key:"timestamp"){
    id
    key
  	}
	}
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "instructionPropertiesByKey": [
        {
          "id": 2,
          "key": "timestamp"
        },
        {
          "id": 5,
          "key": "timestamp"
        }
```
### instructionPropertiesByParent
Returns instruction property instance with parent key

#### ** Parameters ** : 
* key: `<String>` (required)
* Paging: (Optional) `<int>` 
  - Page: `<int>` Start of Page 

#### Example:
```
query{
	solana{
   instructionPropertiesByParent(key:"slots"){
    id
    key
  	}
	}
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "instructionPropertiesByParent": [
        {
          "id": 6,
          "key": "slots/0"
        },
        {
          "id": 8,
          "key": "slots/1"
        }
```

### instructionPropertyById
Returns specific instance of instruction Property 

#### ** Parameters ** : 
* id: `<Float>` (required)

#### Example:
```
query{
	solana{
   instructionPropertyById(id:1){
    id
    key
  	}
	}
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "instructionPropertyById": {
        "id": 1,
        "key": "hash"
      }
    }
  }
}
```
