__**[BCHANGE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCHANGE.xhtml)**__   -   Changes Definitions of Contact Bodies

--------------------------------------------------------------------------------
Changes definitions of contact bodies used in SOL 101 and SOL 400.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
BCHANGE         ID      TYPE            IDBOD1  N1      N2      INC     
IDBOD2  N1      N2      INC     IDBOD3  etc.    


```

--------------------------------------------------------------------------------
```text

Example:
BCHANGE         201     NODE                            1       1001    1010    1       
2       2001    2021    2       


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
ID              Identification number referenced by a BCONTACT or BCHANGE Case
                Control command within a SUBCASE or STEP. See Remark 1. (Integer
                > 0; Required)
Type Type of modification (Character; Required)
NODE            Defines nodes of a contact body which may come into contact.
EXCLUDE         Excludes 2 node segments in 2D or 4 node patches in 3D.
IDBODi Identification number of a contact body, BCBODY or BCBODY1 entry.
(Integer > 0)
N1              Starting grid ID. More than one N1-N2-INC range may be entered
                for each body, see Remark 7. (Integer > 0; Default = 1)
N2              Ending grid ID. 
INC             Grid ID increment.
*


```

--------------------------------------------------------------------------------
