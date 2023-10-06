## [BCNURBS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCNURBS.xhtml) - Defines a Rigid Contact Body Made up of NURBS in SOLs 101 and 400

Defines a rigid contact body made up of NURBS used in SOLs 101 and 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCNURBS RBID    NPTU    NPTV    NORU    NORV    NSUBU   NSUBV           +        
+       “GRID”  G1      G2      G3      G4      G5      G6      -etc.-  +        
+       or      or      or      or      or      or      or              +        
+       “COORD” X1      Y1      Z1      X2      Y2      Z2              +        
+       “HOMO”  Homo1   Homo2   Homo3   Homo4   Homo5   Homo6   Homo7   +        
+               Homo8   Homo9   -etc.-                                  +        
+       “KNOT”  Knot1   Knot2   Knot3   Knot4   Knot5   Knot6   Knot7   +        
+               Knot8   Knot9   -etc.-                                  +        
+       “TRIM”  IDtrim1 IDtrim2 IDtrim3 -etc.-                                  
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCNURBS 48      2       1       2       1       50      50              +       
+       GRID    3005    102                                             +       
+       HOMO    1.      .3333                                           +       
+       KNOT    0.0     0.0     0.5     0.5     1.      1.                      
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCNURBS 63      -2      2       2       2       50      50              +       
+       COORD   .3      -.6     0.      .3      -.1     0.              +       
+       HOMO    1.      1.      1.      1.                              +       
+       KNOT    0.0     0.0     1.      1.      0.      0.              +       
+               1.      1.                                              +       
+       TRIM    511     2002    87      704                                     
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RBID         │ Unique identification number referenced by a BCRGSRF or BCBODY1 entry. (Integer > 0) See Remark 1. │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NPTU         │ Number of control points in U direction. If the control points are entered as coordinates rather   │
│              │ than grid IDs, NPTU must be set to a negative value whose absolute value is the number of xyz      │
│              │ coordinates. See Remark 2. (Integer > 0; Required)                                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NPTV         │ Number of control points in V directions. (Integer > 0; Required)                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORU         │ Order along U direction. (Integer > 0; Required)                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORV         │ Order along V direction. (Integer > 0; Required)                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSUBU        │ Number of subdivisions in U direction. (Integer > 0; Required)                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSUBV        │ Number of subdivisions in V direction. (Integer > 0; Required)                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “GRID”       │ Indicate the start of the list of grid numbers. See  Remark 3.                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2, G3,  │ Grid point IDs defining control points. (Integer > 0) There must be NPTU*NPTV entries.             │
│ etc.         │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “COORD”      │ Indicate the start of the list of xyz coordinates. See Remark 3.                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, Y1, Z1,  │ Alternate method to define control points without using GRID points. There must be abs(NPTU)*NPTV  │
│ X2, Y2, Z2,  │ sets of (x,y,z) entries.                                                                           │
│  etc.        │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “HOMO”       │ Indicate the start of the list of homogeneous coordinates.                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Homo1,       │ Homogeneous coordinates (0.0 to 1.0). There must be abs(NPTU)*NPTV entries. (Real)                 │
│ Homo2,       │                                                                                                    │
│ Homo3, etc.  │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “KNOT”       │ Indicate the start of the list of knot vectors.                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Knot1,       │ Knot vectors (0.0 to 1.0). There must be (abs(NPTU)+NORU)+(NPTV+NORV) entries. (Real)              │
│ Knot2,       │                                                                                                    │
│ Knot3, etc.  │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “TRIM”       │ Indicate the start of the list of trimming vector IDs.                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDtrimi      │ Trimming vector identification number of a BCTRIM entry. (Integer > 0)                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Homot1,      │ Homogeneous coordinates (0.0 to 1.0) of this trimming vector. There must be NPTUtrim entries.      │
│ Homot2,      │ (Real)                                                                                             │
│ Homot3, etc. │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Knott1,      │ Knot vectors (0.0 to 1.0) of this trimming vector. There must be NPTUtrim+NORUtrim entries. (Real) │
│ Knott2,      │                                                                                                    │
│ Knott3, etc. │                                                                                                    │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If BCRGSRF entry does not exist, BCNURBS entry will be referenced by the BCBODY1 entry directly.
2. Enter NPTU grid points G1, G2, G3, etc. (set NPTU to a positive value equal to the number of grid points) or enter X1, Y1, Z1, X2, Y2, Z2, etc. coordinates for abs(NPTU) points and set NPTU to a negative value.
3. The list of grid IDs (“GRID”) and the list of xyz coordinates (“COORD”) cannot coexist.
