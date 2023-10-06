## [MDBNDRY](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDBNDRY.xhtml) - Module to Module Boundary Point Definitions

Defines a list of grid points in a module for the automatic boundary search between a specified Module or between all other Modules. In other words, the automatic boundary search will only search for connections in this list.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBNDRY MIDA    MIDB    GIDA1   GIDA2   GIDA3   GIDA4   GIDA5   GIDA6   +       
+       GIDA7   GIDA8   etc.                                                    
```

#### Examples 1:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBNDRY 400     4       10      20      30      40                              
```

#### Examples 2:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBNDRY 400     ALL     10      20      30      THRU    35                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MIDA      │ Module identification number. (Integer ≥ 0, Default=0)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MIDB      │ Reference Module identification number. (Integer ≥ 0 or Character “ALL”; Default=ALL)          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GIDAi     │ Identification number of a boundary grid point in the Module MIDA. (Integer > 0 or “THRU”; for │
│           │ “THRU” option, GID1 < GID2.)                                                                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. MDBNDRY may only be specified in the Main Bulk Data Section and cannot be specified in other BEGIN MODULE sections.
2. This entry is valid only if Modules exist.
