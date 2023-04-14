__**[ASET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ASET.xhtml)**__   -   Degrees-of-Freedom for the a-set

--------------------------------------------------------------------------------
Defines degrees-of-freedom in the analysis set (a-set).

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
ASET    ID1     C1      ID2     C2      ID3     C3      ID4     C4      


```

--------------------------------------------------------------------------------
```text

Example:
ASET    16      2       23      3516    1       4       


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
IDi Grid or scalar point identification number.  (Integer > 0)
Ci Component numbers.  (Integer zero or blank for scalar points, or any unique
combinations of the Integers 1 through 6 for grid points with no embedded
blanks.)


```

--------------------------------------------------------------------------------
