__**[BCNURBS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCNURBS.xhtml)**__   -   Defines a Rigid Contact Body Made up of NURBS in SOLs 101 and 400

--------------------------------------------------------------------------------
Defines a rigid contact body made up of NURBS used in SOLs 101 and 400 only.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
BCNURBS         RBID    NPTU    NPTV    NORU    NORV    NSUBU   NSUBV   
“GRID”
G1
G2
G3
G4
G5
G6
or
or
or
or
or
or
or
-etc.-
“COORD”
X1
Y1
Z1
X2
Y2
Z2
“HOMO”  Homo1   Homo2   Homo3   Homo4   Homo5   Homo6   Homo7   
Homo8   Homo9   -etc.-  
“KNOT”  Knot1   Knot2   Knot3   Knot4   Knot5   Knot6   Knot7   
Knot8   Knot9   -etc.-  
“TRIM”  IDtrim1 IDtrim2 IDtrim3 -etc.-  


```

--------------------------------------------------------------------------------
```text

Examples:
BCNURBS         48      2       1       2       1       50      50      
GRID    3005    102     
HOMO    1.      .3333   
KNOT    0.0     0.0     0.5     0.5     1.      1.      
BCNURBS         63      -2      2       2       2       50      50      
COORD   .3      -.6     0.      .3      -.1     0.      
HOMO    1.      1.      1.      1.      
KNOT    0.0     0.0     1.      1.      0.      0.      
1. 1.
TRIM    511     2002    87      704     


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
RBID            UniqueidentificationnumberreferencedbyaBCRGSRForBCBODY1entry.
                (Integer>0)SeeRemark1.
NPTU            Number of control points in U direction. If the control points
                are entered as coordinates rather than grid IDs, NPTU must be
                set to a negativevalue whose absolute value is the number of xyz
                coordinates.See Remark 2 .(Integer > 0; Required)
NPTV            Number of control points in V directions. (Integer > 0;
                Required)
NORV            Order along V direction. (Integer > 0; Required)
NSUBU           Number of subdivisions in U direction. (Integer > 0; Required)
NSUBV           Number of subdivisions in V direction. (Integer > 0; Required)
“GRID”          Indicate the start of the list of grid numbers. See Remark 3 .
G1,             G2, G3, etc. Grid point IDs defining control points. (Integer >
                0) There must be NPTU*NPTV entries.
“COORD”         Indicate the start of the list of xyz coordinates. See Remark 3
                .
X1,             Y1, Z1, X2, Y2, Z2, etc.
Alternate method to define control points without using GRID points. There must
be abs(NPTU)*NPTV sets of (x,y,z) entries.
“HOMO”          Indicate the start of the list of homogeneous coordinates.
Homo1, Homo2, Homo3, etc.
Homogeneous coordinates (0.0 to 1.0). There must be abs(NPTU)*NPTV entries.
(Real)
“KNOT”          Indicate the start of the list of knot vectors.
Knot1, Knot2, Knot3, etc.
Knot vectors (0.0 to 1.0). There must be (abs(NPTU)+NORU)+(NPTV+NORV) entries.
(Real)
“TRIM”          Indicate the start of the list of trimming vector IDs.
IDtrimi Trimming vector identification number of a BCTRIM entry. (Integer > 0)
Homot1,  Homot2,  Homot3, etc.
Homogeneous coordinates (0.0 to 1.0) of this trimming vector. There must be
NPTUtrim entries. (Real)
Knott1, Knott2, Knott3, etc.
Knot vectors (0.0 to 1.0) of this trimming vector. There must be
NPTUtrim+NORUtrim entries. (Real)


```

--------------------------------------------------------------------------------
