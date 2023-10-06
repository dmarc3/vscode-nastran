## [GMOVR3](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.GMOVR3.xhtml) - RBE3 SOL400 Rigid = Lagrange perturbation coincident grid override.

Allows override values to the MDLPRM, GMOVR3 entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GMOVR3  ELEM1   ΔX1     ΔY1     ΔZ1     Δ Γ Μ...                        +       
+       ELEM2   ΔX2     ΔY2     ΔZ2     ΔGMOV...                        +       
+       -etc.-  -etc.-  -etc.-  -etc.-  -etc.-                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GMOVR3  369550010.1                                                             
```

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ ELEMi       │ RBE3 element ID. (Integer>0)                                                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ ΔXi         │ Perturbation value of X coordinate (Real; default = 0.01)                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ ΔYi         │ Perturbation value of Y coordinate (Real; default = 0.01)                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ ΔZi         │ Perturbation value of Z coordinate (Real; default = 0.01)                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ Δ Γ Μ Ο ς Ρ │ Adjustment to MDLPRM, GMOVR3T value. Zero Tolerance = GMOVR3T + ΔGMOVR3T ≥ 0.0. (Real; │
│ 3 Τ ι       │ Default=0.0)                                                                           │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry is only active if MDLPRM,GMOVR3,3 or MDLPRM,GMOVR3,4 is present on the MDLPRM Bulk Data entry.
2. This entry only affects RBE3 elements meeting the following criterion:
    - Let x q , y q , z q  be the coordinates of the REFGRID and x k , y k , z k  the coordinates of one of the connected Gi,j nodes.
    - If |x k  - x q |, |y k  -y q |, and |z k  - z q | are all less than or equal to GMOVR3T +  Δ GMOVR3T) for ALL connected Gi,j nodes, the grids are considered coincident.

        Any entry not meeting the above requirements will be ignored.

