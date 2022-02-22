---
title: Instruction
---
An instruction is the smallest contiguous unit of execution logic in a program. An instruction specifies which program it is calling, which accounts it wants to read or modify, and additional data that serves as auxiliary input to the program. A client can include one or multiple instructions in a transaction. An instruction may contain one or more cross-program invocations.

### Elements of Instructions
* **txInstructionId**: `<Int>` The refers to the index of the instruction.
* **instructionTypeId**: `<Int>`
* **transactionHash**: `<String>` The hash that uniquely identifies an account a transaction.
* **program**: `<String>` The account hash belonging to a program that stores the instructions.
* **data**: `<String>` The account hash belonging to a program that stores the program's data.
* **parentIndex**: `<Int>` parentIndex of value -1 represents the parent instruction while any other value represents another instruction nested under the parent.
* **timestamp**: `<Datetime>`

### Instruction GetAll

This query takes in the following parameters and returns all instructions in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/instructions?from=2022-01-01&to=2022-01-02
```
#### Sample returned results
```
[
    {
        "txInstructionId": 0,
        "transactionHash": "21MQYNxiy6WFiWPgHVTqTVHs5hjLGphWsjxsoEuB9aQUAWSKhd3myqfY9Wt9u3yiUn2QPcNgrsqpHAGjHW8DMWBj",
        "parentIndex": -1,
        "timestamp": "2022-01-01T16:00:00Z",
        "instructionTypeId": 0,
        "program": "mv3ekLzLbnVPNxjSKvqBpU3ZeZXPQdEC3bp5MDEBG68",
        "data": "[7,0,0,0]"
    },
    {
        "txInstructionId": 0,
        "transactionHash": "4Mqno55A1S9fpTaQJo695rvbvUdFVQMJCYnwSiELqE8iE1vDiaKADKr3qQXTKgibYP5FJYQzM5gVwWQ3qUZn2hy5",
        "parentIndex": -1,
        "timestamp": "2022-01-01T16:00:00Z",
        "instructionTypeId": 0,
        "program": "Vote111111111111111111111111111111111111111",
        "data": "[2,0,0,0,3,0,0,0,0,0,0,0,134,139,208,6,0,0,0,0,135,139,208,6,0,0,0,0,136,139,208,6,0,0,0,0,150,131,30,9,175,6,36,16,142,242,218,12,180,89,53,42,92,240,80,7,126,145,89,149,85,48,115,77,114,26,77,37,1,129,122,208,97,0,0,0,0]"
    },
     ...
]
```

### Instruction GetByProgram

This query takes in the following parameters and returns all instructions of a specified program in the specified time range.

#### ** Parameters ** :

- **program**: `<String>` The account hash belonging to a program that stores the instructions
- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/instructions/TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA?from=2022-01-01&to=2022-01-02
```
#### Sample returned results
```
[
    {
        "txInstructionId": 1,
        "transactionHash": "4RW87MyZue6gi8NrefZQDwzzAPMVgPV9Bp1dhJYXq7LGzCGFxnBPVxuAQ7hxW8YrXFDcgVXGcGn9f8EUPEz5B2FF",
        "parentIndex": -1,
        "timestamp": "2022-01-01T16:00:00Z",
        "instructionTypeId": 0,
        "program": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        "data": "[3,160,134,1,0,0,0,0,0]"
    },
    {
        "txInstructionId": 1,
        "transactionHash": "4JhuiToZUSPxWGn6b4guaczkjVDFTs3FNBXyJGzU81VypLYFaShH4aL6jqNgsZv3r8uSWbSmb5WmFdURrMQXUFzi",
        "parentIndex": 2,
        "timestamp": "2022-01-01T16:00:00Z",
        "instructionTypeId": 0,
        "program": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        "data": "[0,0,143,2,229,20,229,228,247,232,238,121,118,91,159,250,243,53,135,48,227,127,158,95,80,69,27,202,53,188,0,29,115,30,1,143,2,229,20,229,228,247,232,238,121,118,91,159,250,243,53,135,48,227,127,158,95,80,69,27,202,53,188,0,29,115,30]"
    },
    {
        "txInstructionId": 0,
        "transactionHash": "4L8NfdSHtkaVcXLggeC46fn4zfwCxfDDph96p1Xj2t2qscwNqVf3jUQZpzpfN9jEJ3s4qSvCrcoN82pPGftD6Y2A",
        "parentIndex": -1,
        "timestamp": "2022-01-01T16:00:00Z",
        "instructionTypeId": 0,
        "program": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        "data": "[9]"
    },
    ...
]
```
