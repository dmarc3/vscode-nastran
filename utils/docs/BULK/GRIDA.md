## [GRIDA](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.GRIDA.xhtml) - Associative GRID for PAA

Defines an associative GRID point to be used in the COMBINE step of PAA.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GRIDA   GID     ORIG_GID                                                +       
+       PARTNAME        
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GRIDA   1       1000                                                    +       
+       Left_out        
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ GID       │ GRID ID to be used in the current run. (Integer > 0)                    │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ ORIG_GID  │ GRID ID in Part being referenced. (Integer > 0)                         │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ PATNAMEi  │ Name of Part ORIG_GID is in. (Character, C64, no internal blank spaces) │
└───────────┴─────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. GRIDA entries are used only in the COMBINE step of PAA processing. They are used to allow the other entries in the current bulk data to reference GRID points or SPOINTs in Parts that are being combined to create the Assembly.
2. ORIG_GID must exist in the referenced Part. If the Part has been reduced, it must be a boundary GRID for that Part (in the A-set of that Part).
3. The GRIDA id may be treated the same as if it were defined using a GRID or SPOINT entry in the current run. The program will handle the connection to the referenced GRID/SPOINT in the Part.
4. Only dof which are in the Part A-set will be available for connection. If a GRIDA references a GRID in a Part, which has fewer than 6 dof in the Part A-set (dof available in the Part matrices), although the GRIDA will have 6 dof, only the dof which exist in the Part matrices will be connected to the Part.
