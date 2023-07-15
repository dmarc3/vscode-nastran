## [MDRJNT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDRJNT.xhtml) - Rigid Joint Between Two Modules

Defines a rigid joint element connecting two coinciding grid points in two different Modules.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDRJNT  EID     MODA    GA      MODB    GB      CB                              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDRJNT  5       11      1       21      2       12345           1               
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (Integer > 0)                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODA,MODB │ Module IDs that contain the GRID entries for GA and GB in Modules MODA and MODB, respectively.    │
│           │ (Integer ≥ 0).                                                                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA, GB    │ Grid point identification numbers. (Integer > 0)                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CB        │ Component numbers in the global coordinate system at GB. These degrees-of-freedom are constrained │
│           │ to move with the same degrees-of-freedom at GA. See Remarks 4. and 5. under RJOINT. (Integers 1   │
│           │ through 6 with no embedded or blank.)                                                             │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The MDRJNT entry must be defined in the main Bulk Data section only (Module 0).

2. See all remarks and figures under the RJOINT entry description. All remarks and figures under RJOINT apply to MDRJNT.

