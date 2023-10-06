## [EXPAND](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/fms/TOC.EXPAND.xhtml) - Concatenates New DBset Members

Concatenates additional DBset members on an existing permanent DBset previously defined with an INIT statement.

#### Format:

```nastran
EXPAND dbset-name LOGlCAL=( log-namei [(max-sizei)]...)
```

#### Example:

```nastran
ASSIGN
DBMEM02=’physical file name’
EXPAND
DBALL LOGICAL=(DBMEM02)
```

This would create and add the DBset member DBMEM02 to the existing DBset DBALL.

```text
┌────────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                       │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ dbset-name │ The name of a DBset previously defined with an INIT statement.                                │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ log-namei  │ Specifies the logical name of a DBset member. log-namei may also be referenced on an ASSIGN   │
│            │ statement which refers to the physical file name of the DBset member.                         │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ max-sizei  │ Specifies the maximum size in blocks, words or bytes of a DBset member. For storage units     │
│            │ specified in words or bytes, the size must be followed by one of the following unit keywords: │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│            │ For example, 100MB = 100 megabytes, 1.5GB = 1.2 gigabytes = 1536 megabytes, and 2.5M = 2.5    │
│            │ megawords = 2560 kilowords. The size of a block in words is defined by BUFFSlZE.              │
└────────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remark:

1. On all computers with dynamic file allocation, the physical filename of a DBset member may be specified on an ASSIGN statement:

     ```nastran
     ASSIGN log-name=’physical filename’
     ```

     If an ASSIGN statement is not specified for the member, then a name is automatically assigned. The naming convention is described in   Database Concepts    in the MSC Nastran Reference Guide .
