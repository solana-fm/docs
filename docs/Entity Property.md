
### Elements of Entity Properties
* hash: `<String>` 
* key: `<Float>` 
* value: `<String>` 
* hash1: `<Token>`
* hashNavigation: `<Account>`


### entityProperties
Returns Entity Properties


#### ** Parameters ** : 

None

#### Example:
```
query{
	entityProperties{

  }
}
```

#### Result:
```

```

### entityPropertyByHashAndKey
Returns a specific instance of a entity Property


#### ** Parameters ** : 
* hash: `<String>` (required)
* key: `<String>` (required)



#### Example:
```
query{
	entityPropertyByHashAndKey(hash:"213", key: " "){

  }
}
```

#### Result:
```

```

### entityPropertiesByValue
Returns entity Property that has the input value 


#### ** Parameters ** : 
* value: `<String>` (required)

#### Example:
```
query{
	entityPropertiesByValue(value: " "){

  }
}
```

#### Result:
```

```