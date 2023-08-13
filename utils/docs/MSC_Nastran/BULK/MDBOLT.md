## [MDBOLT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDBOLT.xhtml) - Defines the Multi-Point Constraints for a Bolt Between Two Modules

Defines a rigid bolt between two Modules by a set of MPC constraints.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBOLT  ID      GRIDC   MODC    MODT    MODB                            +       
+       TOP     GT1     GT2     GT3     GT4     GT5     GT6             +       
+               GT8     GT9     etc.                                    +       
+       BOTTOM  GB1     GB2     GB3     BG4     GB5     GB6             +       
+               GB8     GB9     etc.                                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDBOLT  100     1025    11      11      30                              +       
+       TOP     101     102     103     104     105                     +       
+       BOTTOM  1       2       3       4       5                               
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Element ID of the bolt. (Integer; Required; no Default)                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRIDC     │ Control GRID ID where forces or displacements are applied. (Integer; no Default; Required)       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TOP       │ Enter the character string TOP to define the start of the entry that defines all of the grids at │
│           │ the “top” of the bolt intersection with the structure. (Integer; no Default)                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODC      │ Module containing the GRID entry for GRIDC. (Integer; Default=0, If MODC>0 then must be same as  │
│           │ MODT or MODB)                                                                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODT      │ Module containing the GRID entries for GTi. (Integer; Default=0)                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODB      │ Module containing the GRID entries for GBi. (Integer; Default=0)                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GT1, GT2, │ Grid IDs of the grid points at the top of the bolt intersection. (Integer; no Default)           │
│ etc.      │                                                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BOTTOM    │ Enter the character string BOTTOM to define the start of the entry that defines all of the grids │
│           │ at the “bottom” of the bolt intersection with the structure (do not enter the ID for GRIDC).     │
│           │ (Integer; no Default)                                                                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GB1, GB2, │ Grid IDs of the grid points at the bottom of the bolt intersection. (Integer; no Default)        │
│ etc.      │                                                                                                  │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The MDBOLT entry must be defined in the main Bulk Data section only (Module 0).
2. See all remarks and figures under the BOLT entry description.   All remarks and figures under BOLT apply to MDBOLT.
