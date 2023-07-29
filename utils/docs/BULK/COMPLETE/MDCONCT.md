## [MDCONCT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDCONCT.xhtml) - Module Boundary Point Connections

Explicitly defines grid and scalar connection procedures for a module to module operation.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDCONCT BID     TYPE    TOL     X       Y       Z               CID     +       
+       MID1    GID1    MID2    GID2    MID3    GID3    MID4    GID4    +       
+       MID5    GID5    etc.                                                    
```

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDCONCT BID     TYPE    TOL     GRID                    MODID           +       
+       MID1    GID1    MID2    GID2    MID3    GID3    MID4    GID4    +       
+       MID5    GID5    etc.                                                    
```

#### Alternate Format:

#### Example 1:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDCONCT 123             0.4     0.5     74.12   100.3                           
        10      423     20      123                                             
```

#### Example 2:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDCONCT 123     RRBE2   0.4     777                                             
        10              20                                                      
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ BID       │ Unique Boundary identification number. (Integer > 0)                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Connection Option. (Character: “MERGE”, “RIGID”, “RRBE2”, “MRBE2” or Blank, Default=“MRBE2”. │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ TOL       │ Location tolerance to be used when searching or checking for boundary grid points. (Real;    │
│           │ Default=1.0e-5)                                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ X,Y,Z     │ Connection (Search) location. (Real, Default=0.0)                                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRID      │ Grid Identification for Connection (Search). (Integer > 0) See Remark 13.                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODID     │ Identification number of Module containing GRID. (Integer ≥ 0, Default=0)                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Coordinate System in Module 0 to be applied to XYZ location. (Integer ≥ 0, Default=0)        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ MIDi      │ Module Identification number for grid/scalar reference. (Integer ≥ 0)                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ GIDi      │ Identification number of a grid or scalar point in the reference module MIDi, which will be  │
│           │ verified to be in TOL of the Location. (Integer ≥ 0)                                         │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. MDCONCT may only be specified in the Main Bulk Data Section and cannot be placed in other BEGIN MODULE sections.
2. TOL can be used to override the default value specified on the MDBULK entries.
3. The continuation entry is optional when used in automatic searching.
4. The GIDi selections must be all of the same class, grids or scalar points.
5. All six degrees-of-freedom of grids will be defined as boundary degrees-of-freedom.
6. This entry is only valid if Modules exist.
7. When GIDi is blank or zero, then all grids of the module will be tested against the location and tolerance.
8. MIDi values can be specified more than once.
9. For TYPE=“MERGE”, the boundary grids will be moved to the location specified by MODID and connected by an RBE2 element.
10. For TYPE=“MRBE2”, the boundary grids will be moved to the location specified by MODID and only those grids that are specified as the independent grids on RBE2 elements will be used to connect the Modules.   If any of the GIDi grids are not specified as independent grids on RBE2 elements or there are no RBE2 elements then the run will terminate with User Fatal Message 6717.
11. For TYPE=“RIGID”, the boundary grids will not be moved and will be connected via RBE2 elements.
12. For TYPE=“RRBE2”, the boundary grids will not be moved and only those grids that are specified as the independent grids on RBE2 elements will be used to connect the Modules. If any of the GIDi grids are not specified as independent grids on RBE2 elements or there are no RBE2 elements then the run will terminate with User Fatal Message 6717.
13. When GRID is used, then this identification/location will be used for the independent point of the RBE2 element.
14. When scalar points are specified for GIDi, then GRID, X, Y, Z, MODID and CID should not be specified.
15. If any GIDi are not connected due to exceeding TOL then User Fatal Message 6783 will be issued.
16. If METHOD="AUTO" on the MDBULK entry and there are no MDCONCT entries specified for a given set of coincident grid points then the connection will be similar to TYPE="RIGID" as described above.
