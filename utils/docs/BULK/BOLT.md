## [BOLT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BOLT.xhtml) - Defines the Multi-Point Constraints for a Bolt

Defines a rigid bolt by a set of MPC constraints.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BOLT    ID      GRIDC                                                   +       
+       TOP     GT1     GT2     GT3     GT4     GT5     GT6     GT7     +       
+               GT8     GT9     etc.                                    +       
+       BOTTOM  GB1     GB2     GB3     GB4     GB5     GB6     GB7     +       
+               GB8     GB9     etc.                                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BOLT    100     1025                                                    +       
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

1. The GRIDS entries of the TOP and BOTTOM keywords are open-ended.
2. GRIDC is the control grid point and usually not connected to any element.
3. (GTi, GBi) are pairs of grid on top and bottom.
4. To each pair of (GTi, GBi) and GRIDC, MPCs are created internally to all 6 DOFs. Since the GBs always belong to dependent-DOFs, they cannot be applied to any SPC, SPC1, SPCD and SPCR.
5. Same number of grid points in TOP and BOTTOM. They should be coincident but it is not required. Users who do otherwise do so at their own risk since the current design does not consider the initial offset between them.
6. Bolt loads, including enforced motion, are usually prescribed on GRIDC to represent the pre-tension, overlap or loading of the bolt. BOLT relative displacements are given in the global coordinate system of the control node.
7. Global Coordinate System may have to be defined at the Control Node if the bolt direction is not a Basic Coordinate direction and the user wants to apply the loads along the shaft of the bolt.
8. Loads in directions other than the shaft of the bolt direction are possible.
9. The internally written MPC relationship is of the form:

![bulkab02288.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02288.jpg?_LANG=enus)  

10. In 3D Contact analysis, it replaces GBi (Bottom bolt segment) by GTi (Top bolt segment) on the internally generated contact surface, which makes contact surface continuous across the mesh split between them.
11. Force output is obtained through Case Control MPCFORCE.
12. The internal MPCs generated by the BOLT entry are valid for small rotations only.
13. The BOLT entry must be defined in the residual structure only.
14. Sufficient boundary conditions must be placed on the BOLT to prevent mechanisms.
15. In contact analysis, care should be taken that the preload displacement does not exceed the local element width.
16. Pretension of a BOLT is a three step process in SOL 400:

#### SUBCASE 1

```text
┌────────┬─────────┬───────────────────────────────────────────────────┐
│ STEP 1 │         │                                                   │
├────────┼─────────┼───────────────────────────────────────────────────┤
│        │ LOAD=n  │ Applies a pretension load to the bolt on the      │
│        │         │ control grid.                                     │
├────────┼─────────┼───────────────────────────────────────────────────┤
│        │ SPC=m   │ If any required to prevent motion of structure do │
│        │         │ not include the control grid.                     │
├────────┼─────────┼───────────────────────────────────────────────────┤
│ STEP 2 │         │                                                   │
├────────┼─────────┼───────────────────────────────────────────────────┤
│        │ LOAD=p1 │ Load entry pointing to a SPCR (relative value of  │
│        │         │ 0.0) and any other desired type of loading.       │
├────────┼─────────┼───────────────────────────────────────────────────┤
│        │ SPC=q1  │ SPC1 includes control grid and any other desired  │
│        │         │ SPC requirements.                                 │
├────────┼─────────┼───────────────────────────────────────────────────┤
│ STEP 3 │         │                                                   │
├────────┼─────────┼───────────────────────────────────────────────────┤
│        │ LOAD=p2 │ Load entry pointing to a SPCR and any other       │
│        │         │ additional desired type of loading.               │
├────────┼─────────┼───────────────────────────────────────────────────┤
│        │ SPC=q2  │ SPC1 includes control grid and any other          │
│        │         │ additional desired SPC requirements.              │
└────────┴─────────┴───────────────────────────────────────────────────┘
```

17. The BOLT may also be used in SOL101 and SOL103. In this case PARAM, AUTOMSET, YES is recommended.

