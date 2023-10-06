## [CSPR](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CSPR.xhtml) - Springs With Offsets

Springs for use in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSPR    EID     PID     G1      G2                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CSPR    1       22      456     457                                             
```

```text
┌───────────┬─────────────────────────────────┬───────┬──────────┐
│ Describer │ Meaning                         │ Type  │ Default  │
├───────────┼─────────────────────────────────┼───────┼──────────┤
│ EID       │ Element ID. A unique number has │ I > 0 │ Required │
│           │ to be used.                     │       │          │
├───────────┼─────────────────────────────────┼───────┼──────────┤
│ PID       │ Property ID of PSPRMAT entry    │ I > 0 │ Required │
├───────────┼─────────────────────────────────┼───────┼──────────┤
│ G1        │ Gridpoint 1                     │ I > 0 │ Required │
├───────────┼─────────────────────────────────┼───────┼──────────┤
│ G2        │ Gridpoint 2.                    │ I > 0 │ Required │
└───────────┴─────────────────────────────────┴───────┴──────────┘
```
