---
title: Entity Property
---

### Elements of Entity Properties
* hash: `<String>` 
* key: `<Float>` 
* value: `<String>` 
* hash1: `<Token>`
* hashNavigation: `<Account>`


### entityProperties
Returns Entity Properties


#### ** Parameters ** : 
* Paging: (Optional) `<int>` 
  - Page: `<int>`Start of Page 


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
Returns entity Property that includes the input value 


#### ** Parameters ** : 
* value: `<String>` (required)
* Paging: (Optional) `<int>` 
  - Page: `<int>`Start of Page 

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