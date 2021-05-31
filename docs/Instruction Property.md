### Elements of Instruction Property
* id: `<Float>` 
* instructionId: `<Float>` 
* key: `<String>` 
* value: `<String>` 
* instruction: `<Instruction>` 

### instructionProperties
Returns instruction Properties

#### ** Parameters ** : 
None

#### Example:
```
query{
	instructionProperties{
	}
}
```

#### Result:
```

```

### instructionPropertiesByInstructionId
Returns instruction property instance with instructionid input

#### ** Parameters ** : 
* instructionId: `<Float>` (required)

#### Example:
```
query{
	instructionPropertiesByInstructionId(instructionId:""){
	}
}
```

#### Result:
```

```
### instructionPropertiesByKey
Returns instruction property instance with key input

#### ** Parameters ** : 
* key: `<String>` (required)

#### Example:
```
query{
	instructionPropertiesByKey(key:""){
	}
}
```

#### Result:
```

```
### instructionPropertiesByParent
Returns instruction property instance with parent key

#### ** Parameters ** : 
* key: `<String>` (required)

#### Example:
```
query{
	instructionPropertiesByParent(key:""){
	}
}
```

#### Result:
```

```

### instructionPropertyById
Returns specific instance of instruction Property 

#### ** Parameters ** : 
* id: `<Float>` (required)

#### Example:
```
query{
	instructionPropertyById(id:2134){
	}
}
```

#### Result:
```

```
