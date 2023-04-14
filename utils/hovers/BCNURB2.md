__**[BCNURB2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCNURB2.xhtml)**__   -   Defines a 2D Rigid Contact Body Made up of NURBS in SOLs 101 and 400

--------------------------------------------------------------------------------
Defines a 2D rigid contact body made up of NURBS used in SOLs 101 and 400 only.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
BCNURB2         RBID    NPTU    NORU    NSUB    
“GRID”  or      “COORD” 
G1      or      X1      
G2      or      Y1      
G3      or      X2      
G4      or      Y2      
-etc.-
“HOMO”  Homo1   Homo2   Homo3   Homo4   -etc.-  
“KNOT”  Knot1   Knot2   Knot3   Knot4   Knot5   -etc.-  


```

--------------------------------------------------------------------------------
```text

Examples:
BCNURB2         102     4       1       1       
GRID    237     101     104     235     
HOMO            0.0     0.5     0.5     1.0     
KNOT    0.0     0.2     0.4     0.8     1.0     
BCNURB2         3001    -5      3       50      
COORD   -.1     .14     -.1     .04     -1.4-16 .04     
        .1      .04     .1      .14     
HOMO    1.      .707107 1.      .707107 1.      
KNOT    0.0     0.0     0.0     0.5     0.5     1.0     1.0     
1.0


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
RBID            UniqueidentificationnumberreferencedbyaBCRGSRForBCBODY1entry.
                (Integer>0)SeeRemark1.
NPTU            Number of control points. If the control points are entered as
                coordinates rather than grid IDs NPTU must be set to a negative
                value whoseabsolute value is the number of xy coordinates.
                (Integer; no Default)
NORU            Order along U direction. (Integer > 0)
NSUB            Number of subdivisions. (Integer > 0)
“GRID”          Indicate the start of the list of grid numbers. See Remark 2 .
G1,             G2, G3, G4, etc.
Grid numbers for each of the NPTU control points. (Integer > 0)
X1,             Y1, X2, Y2, etc.
Alternate method to define control points without using GRID points. There must
be abs(NPTU) set of (x,y) entries. (Real)
“HOMO”          Indicate the start of the list of homogeneous coordinates.
Homo1, Homo2, Homo3, etc.
Homogeneous coordinates. (Real; 0.0 to 1.0) There must be NPTU entries.
“KNOT”          Indicate the start of the list of knot vectors.
Knot1, Knot2, Knot3, etc.
Knot vectors. (Real; 0.0 to 1.0) There must be (NPTU+NORU) entries.


```

--------------------------------------------------------------------------------
