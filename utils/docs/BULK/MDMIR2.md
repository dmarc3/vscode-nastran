## [MDMIR2](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDMIR2.xhtml) - Module Reposition by Mirroring - Option 2

Defines a Module mirror by specifying a pair of coordinate system axes on the mirror plane in Module 0.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDMIR2  MVID    CID     RID     AXES                                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDMIR2  110             45      XZ                                              
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MVID      │ Move identification number to be referenced on an MDMOVE entry. (Integer>0).                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Coordinate system identification number of a CORDij entry. Blank or zero means basic coordinate  │
│           │ system. Module will be mirrored about CID's origin if RID is blank. (Integer ≥ 0, default=0)     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RID       │ GRID or POINT identification number or coordinates of reference point through which mirror plane │
│           │ will be applied. If RID is blank, then the origin of CID will be used (Integer ≥ 0, default=0)   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AXES      │ Coordinate system axes pair: “XY”, “XZ”, “YZ”, “YX”, “ZX”, or “ZY” (Character).                  │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. MDMIR2 can only be specified in the main Bulk Data Section (Module 0) and will cause a fatal error message if it appears after the BEGIN MODULE=n command.
2. MDMIR2 must be referenced by an MDMOVE entry in order to reposition a Module.
3. CORDij, GRID or POINT entries referenced on this entry must be defined in the main Bulk Data Section (Module 0).
