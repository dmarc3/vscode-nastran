## [MDEXCLD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDEXCLD.xhtml) - Module to Module Excluded Boundary Point Definitions

Defines a list of grid points in a Module that will be excluded during the attachment to another Module.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDEXCLD MIDA    MIDB    GIDA1   GIDA2   GIDA3   GIDA4   GIDA5   GIDA6   +       
+       GIDA7   GIDA8   etc.                                                    
```

#### Example 1:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDEXCLD 400     4       10      20      30      40                              
```

#### Example 2:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDEXCLD 400     ALL     10      20      30      THRU    35                      
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MIDA      │ Module identification number. (Integer ≥ 0, Default=0)                                           │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MIDB      │ Reference Module identification number. (Integer ≥ 0 or Character “ALL”; Default=ALL)            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GIDAi     │ Identification number of a boundary grid point in the module MIDA to be excluded from connection │
│           │ to module MIDB. (Integer > 0 or “THRU”; for “THRU” option, GID1 < GID2.)                         │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry is only valid if Modules exist.
2. MDEXCLD may only be specified in the Main Bulk Data Section and cannot be placed in other BEGIN MODULE sections.
