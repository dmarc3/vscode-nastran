__**[BCBMRAD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCBMRAD.xhtml)**__   -   Modify Equivalent Radius for Beam-to-Beam Contact

--------------------------------------------------------------------------------
Allows the equivalent radius in beam-to-beam contact to be different for each beam cross section in SOL 101, SOL 400. The BCBMRAD entry is only used for node-to-segment beam-to-beam contact. For segment-to-segment beam contact, the beam cross section geometry is defined via PBARL or PBEAML

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
BCBMRAD RADIUS  TYPE    ID1     ID2     THRU    ID3     BY      N       
ID4     THRU    ID5     ID6     ID7     ID8     ID9     


```

--------------------------------------------------------------------------------
```text

Example 1:
BCBMRAD 2.5     EID     100     20      THRU    300     BY      2       
200     3457    8456    4712    1000    THRU    2000    
3.0             4112    THRU    4700    
2.8     BODY    502     517     3459    


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
RADIUS          Equivalent radius to be used for beam-beam contact problems. See
                Remark 6. (Real; no Default)
TYPE            The attribute of all following ID’s. (Character; Default =
                “EID”)
EID             Defines all the following entries are the IDs of beam-type
                elements.
BODY            Defines all the following entries are the IDs of BCBODYs.
ALL             Defines the default RADIUS for all beam-type elements.
IDi ID of a beam-type element, CROD, CBAR, CBEAM and CBEAM3, or a BCBODY with
the specified radius. (Integer; no Default)


```

--------------------------------------------------------------------------------
