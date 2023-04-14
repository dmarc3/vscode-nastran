__**[ACCSSPT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ACCSSPT.xhtml)**__   -   Access Point Definition

--------------------------------------------------------------------------------
Defines a grid interior to an external superelement whose motion will be retained in the residual structure of the assembled superelement model. This entry is used during the external superelement creation run and is valid only in external superelements.TR   

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
ACCSSPT GID1    GID2    GIDi    etc     


```

--------------------------------------------------------------------------------
```text

Example:
ACCSSPT 117     119     


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
GIDi Identification number of a grid point designated as an access point
(Integer>0)


```

--------------------------------------------------------------------------------
