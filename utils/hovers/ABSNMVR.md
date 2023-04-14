__**[ABSNMVR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ABSNMVR.xhtml)**__   -   Meta data group Real Name/Value pairs

--------------------------------------------------------------------------------
Associate Real Name/Value pairs to meta data collectors (ABSTRCT).

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
ABSNMVR ABSTID          NAME1   VAL1    NAME2   VAL2    -etc.-  


```

--------------------------------------------------------------------------------
```text

Example:
1       2       3       4       5       6       7       8       9       10      
ABSNMVR         50              ANGLEA  15.0    ANGLEB  45.0    


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
ABSTID          Unique identification number for meta data group (ABSTRCT).
                (Integer>0)
NAMEi Up to eight characters defining the name of this Name/Value pair.
(Character)
VALi Value of this Name/Value pair (Real)


```

--------------------------------------------------------------------------------
