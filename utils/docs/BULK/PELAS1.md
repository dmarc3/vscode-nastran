## [PELAS1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PELAS1.xhtml) - Defines a spring property designated by a force-deflection curve for SOL 700. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PELAS1  PID     TID                                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PELAS1  22      33                                                              
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer, no Default,  > 0)                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID       │ Identification number of a TABLED1 entry which defines the force deflection curve. (Integer, no │
│           │ Default, > 0)                                                                                   │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Unlike PELAST, when PELAS1 is used, no PELAS entry is made.
2. All PELAS and PELAS1 ID’s must be unique.
3. This entry may only be referenced by a CELAS1D entry.
