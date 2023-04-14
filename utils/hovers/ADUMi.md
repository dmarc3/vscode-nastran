__**[ADUMi](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ADUMi.xhtml)**__   -   Dummy Element Attributes

--------------------------------------------------------------------------------
Defines attributes of the dummy elements (3 < i < 9).

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
ADUMi   NG      NC      NP      ND      ELNM    


```

--------------------------------------------------------------------------------
```text

Example:
ADUM8   18      0       5       0       CRAC2D  


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
NG              Maximum number of grid points that may be connected by DUMi
                dummy element (Integer>0.)
NC              Number of additional fields (Ai) on the CDUMi connection entry.
                (Integer > 0)
NP              Number of additional fields (Ai) on the PDUMi property entry.
                (24 > Integer > 0)
ND              Number of displacement components at each grid point used in
                generation of the differential stiffness matrix. Zero implies no
                differentialstiffness. (Integer 3 or 6)
ELNM            The name of the element connection and property entry. In the
                example above, the connection entry is named “CRAC2D” and the
                property entry isnamed “PRAC2D”.


```

--------------------------------------------------------------------------------
