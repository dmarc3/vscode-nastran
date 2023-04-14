__**[ASET1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ASET1.xhtml)**__   -   Degrees-of-Freedom For the a-set, Alternate Form of ASET Entry

--------------------------------------------------------------------------------
Defines degrees-of-freedom in the analysis set (a-set).

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
ASET1   C       ID1     ID2     ID3     ID4     ID5     ID6     ID7     
ID8     ID9     ID10    -etc.-  


```

--------------------------------------------------------------------------------
```text

Example:
ASET1   345     2       1       3       10      9       6       5       
7 8
Alternate Format and Example:
ASET1   C       ID1     “THRU”  ID2     
ASET1   123456  7       THRU    109     


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
C               Component number. (Integer zero or blank for scalar points, or
                any unique combinations of the Integers 1 through 6 for grid
                points with noembedded blanks.)
IDi Grid or scalar point identification numbers. (Integer > 0; for THRU option,
ID1 < ID2)


```

--------------------------------------------------------------------------------
