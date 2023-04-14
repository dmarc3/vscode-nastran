__**[AELIST](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AELIST.xhtml)**__   -   Aerodynamic List

--------------------------------------------------------------------------------
Defines a list of aerodynamic elements or grid ID’s.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
AELIST  SID      E1     E2      E3      E4      E5      E6      E7      
E8 -etc.-


```

--------------------------------------------------------------------------------
```text

Example:
AELIST  75      1001    THRU    1075    1101    THRU    1109    1201    
1202


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
SID             Set identification number.  (Integer > 0)
Ei List of aerodynamic box ID's or aerodynamic grid ID's (Integer>0 or "THRU")


```

--------------------------------------------------------------------------------
