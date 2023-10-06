## [ISTRESS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.ISTRESS.xhtml) - Initial Stress Values in SOL 400

Defines initial stress values. This is used in SOL 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ISTRESS EID1    EID2    INT1    INTN    LAY1    LAYN    STRESS1 STRESS2 +       
+       STRESS3 STRESS4 STRESS5 STRESS6 STRESS7                         +       
+       “COORD” CID                                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ISTRESS 2001    2020    1       4       1       5       45000.  -2000.          
        0.0     4500.   0.0     2350.                                           
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID1      │ First Element ID to which these stresses apply. (Integer > 0)                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID2      │ Last Element ID to which these stresses apply. (Integer; Default = EID1)                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INT1      │ First Integration point for which the stress applies. (Integer > 0; Default = 1)                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTN      │ Last Integration point for which the stress applies. (Integer > 0; Default = 4)                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LAY1      │ First element layer for which the stress applies. (Integer > 0; no Default. Enter zero or leave   │
│           │ blank if the model does not contain beams or shells.)                                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LAYN      │ Last element layer for which the stress applies. (Integer > 0; no Default. Enter zero or leave    │
│           │ blank if the model does not contain beams or shells.)                                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STRESS(i) │ Up to 7 stress components may be entered. (Real; Default = 0.0)                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ "COORD"   │ Indicate that this line defines coordinate system in which STRESS(i) are evaluated                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ = -1: element coordinate; = 0: basic coordinate (Integer≥ -1 ≤ 0; default=-1 for CQUAD4 and TRIA3 │
│           │ only)                                                                                             │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry only applies when using SOL 400 and is ignored for other solutions.
2. Initial stresses must be self-equilibrating and may not produce material nonlinearity.
3. Stress components are as follows:

     Definitions:

     ```text
     s - normal type stress
     t - shear type stress
     x,y,z in basic coordinate system
     1,2,3 in element local system
     ```

     3D solid elements (for example type 7) 
 
     ```text
     1 - sxx 
     2 - syy 
     3 - szz 
     4 - txy 
     5 - tyz 
     6 - tzx 
     7 - hydrostatic pressure (Herrmann elements only, otherwise 7 should be blank)
     ```

     Thick shells (for example type 75) 

     ```text
     1 - s11 
     2 - s22 
     3 - t12 
     4 - t23 
     5 - t31
     ```

     Thin shells (for example type 72) 
 
     ```text
     1 - s11 
     2 - s22 
     3 - t12
     ```

     Beams (for example type 14 or 98) 
 
     ```text
     1 - s - axial 
     2 - t - twist
     ```

4. STRESS(i) by default are in element coordinate (CID=-1); if CID=0, STRESS(i) will be transformed from basic to element coordinate, for CQUAD4 and CTRIA3 only.
