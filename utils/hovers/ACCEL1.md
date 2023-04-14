__**[ACCEL1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ACCEL1.xhtml)**__   -   Acceleration Load

--------------------------------------------------------------------------------
Defines static acceleration loads at individual GRID points.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
ACCEL1  SID     CID     A       N1      N2      N3      
GRIDID1 GRIDID2 -etc.-  


```

--------------------------------------------------------------------------------
```text

Example(s):
ACCEL1  100     2       10.0    1.0     2.0     0.0     
1       2       3       4       THRU    10      BY      2       
20      21      THRU    30      40      52      69      70      
82      90      100     


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
SID             Load set identification number (Integer > 0)
CID             Coordinate system identification number. (Integer  0; Default =
                0)
A               Acceleration vector scale factor. (Real)
Ni Components of the acceleration vector measured in coordinate system CID.
(Real; at  least one  )
Ni 0.0 
GRIDIDi  List of one or more GRID point identification numbers. Key words “THRU”
and  “BY” can be used to assist the listing. (Integer > 0)


```

--------------------------------------------------------------------------------
