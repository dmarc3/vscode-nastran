## [MDTRAN](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDTRAN.xhtml) - Module Reposition by Translation

Defines a Module translation by specifying a vector in Module 0.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDTRAN  MVID    IDS     IDE     MAG                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDTRAN  110     72      45                                                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MVID      │ Move identification number to be referenced on an MDMOVE entry. (Integer>0).                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDS       │ GRID or POINT identification number of translation vector's starting point. (Integer>0).       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDE       │ GRID or POINT identification number of translation vector's end point. (Integer>0).            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAG       │ Magnitude of translation. If blank or zero, then the length of the vector will be used. (Real, │
│           │ Default=0.0)                                                                                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. MDTRAN can only be specified in the main Bulk Data Section (Module 0) and will cause a fatal error message if it appears after the BEGIN MODULE = n command.
2. MDTRAN must be referenced by an MDMOVE entry in order to reposition a Module.
3. GRID or POINT entries referenced on this entry must be defined in the main Bulk Data Section (Module 0).
