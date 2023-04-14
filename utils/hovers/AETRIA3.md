__**[AETRIA3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AETRIA3.xhtml)**__   -   Triangular Aerodynamic Element Connection

--------------------------------------------------------------------------------
Defines the connectivity of a triangular aerodynamic element.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
AETRIA3 EID     CMPID   G1      G2      G3      


```

--------------------------------------------------------------------------------
```text

Example:
AETRIA3 3768    8       368     872     999     


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
EID             Element Identification Number. (0 < Integer < 100,000,000)
CMPID           Aerodynamic Component Identification Number. (Integer > 0)
Gi Grid Point Identification Numbers of Connection Points. (Integer > 0)


```

--------------------------------------------------------------------------------
