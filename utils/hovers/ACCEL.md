__**[ACCEL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ACCEL.xhtml)**__   -   Acceleration Load

--------------------------------------------------------------------------------
Defines static acceleration loads, which may vary over a region of the
structural model. The load variation is based upon the tabular input defined on
this Bulk Data entry.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
ACCEL   SID     CID     N1      N2      N3      DIR     
LOC1    VAL1    LOC2    VAL2            Continuesin      Groups  of      2       


```

--------------------------------------------------------------------------------
```text

Example(s):
ACCEL   100     2       0.0     1.0     2.0     X       
0.0     1.0     1000.0  3.0     


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
SID             Load set identification number (Integer > 0)
CID             Coordinate system identification number. (Integer  0; Default =
                0)
Ni Components of the acceleration vector measured in coordinate system CID.
(Real; at least  one  )
Ni 0.0 
DIR             Component direction of acceleration variation. (Character; one
                of X, Y, and Z)
LOCi Location along direction DIR in coordinate system CID for specification of
a load scale  factor. (Real)
VALi The load scale factor associated with location LOCi. (Real)


```

--------------------------------------------------------------------------------
