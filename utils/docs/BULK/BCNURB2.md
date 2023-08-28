## [BCNURB2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCNURB2.xhtml) - Defines a 2D Rigid Contact Body Made up of NURBS in SOLs 101 and 400

Defines a 2D rigid contact body made up of NURBS used in SOLs 101 and 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCNURB2 RBID    NPTU    NORU    NSUB                                    +        
+       “GRID”  G1      G2      G3      G4      -etc.-                  +        
+       or      or      or      or      or                              +        
+       “COORD” X1      Y1      X2      Y2                              +        
+       “HOMO”  Homo1   Homo2   Homo3   Homo4   -etc.-                  +        
+       “KNOT”  Knot1   Knot2   Knot3   Knot4   Knot5   -etc.-                  
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCNURB2 102     4       1       1                                       +       
+       GRID    237     101     104     235                             +       
+       HOMO    0.0     0.5     0.5     1.0                             +       
+       KNOT    0.0     0.2     0.4     0.8     1.0                             
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCNURB2 3001    -5      3       50                                      +       
+       COORD   -.1     .14     -.1     .04     -1.4-16 .04             +       
+               .1      .04     .1      .14                             +       
+       HOMO    1.      .707107 1.      .707107 1.                      +       
+       KNOT    0.0     0.0     0.0     0.5     0.5     1.0     1.0     +       
+               1.0                                                             
```

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RBID        │ Unique identification number referenced by a BCRGSRF or BCBODY1 entry. (Integer > 0) See Remark 1. │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NPTU        │ Number of control points. If the control points are entered as coordinates rather than grid IDs    │
│             │ NPTU must be set to a negative value whose absolute value is the number of xy coordinates.         │
│             │ (Integer; no Default)                                                                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORU        │ Order along U direction. (Integer > 0)                                                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSUB        │ Number of subdivisions. (Integer > 0)                                                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “GRID”      │ Indicate the start of the list of grid numbers. See  Remark 2.                                     │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2, G3, │ Grid numbers for each of the NPTU control points. (Integer > 0)                                    │
│ G4, etc.    │                                                                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “COORD”     │ Indicate the start of the list of xy coordinates. See Remark 2.                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, Y1, X2, │ Alternate method to define control points without using GRID points. There must be abs(NPTU) set   │
│ Y2, etc.    │ of  (x,y) entries. (Real)                                                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “HOMO”      │ Indicate the start of the list of homogeneous coordinates.                                         │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Homo1,      │ Homogeneous coordinates. (Real; 0.0 to 1.0) There must be NPTU entries.                            │
│ Homo2,      │                                                                                                    │
│ Homo3, etc. │                                                                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “KNOT”      │ Indicate the start of the list of knot vectors.                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Knot1,      │ Knot vectors. (Real; 0.0 to 1.0) There must be (NPTU+NORU) entries.                                │
│ Knot2,      │                                                                                                    │
│ Knot3, etc. │                                                                                                    │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If BCRGSRF entry does not exist, BCNURB2 entry will be referenced by the  BCBODY1  entry directly.
2. The list of grid IDs (“GRID”) and the list of xy coordinates (“COORD”) cannot coexist.
