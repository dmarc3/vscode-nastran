__**[AESURF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AESURF.xhtml)**__   -   Aerodynamic Control Surface

--------------------------------------------------------------------------------
Specifies an aerodynamic control surface as a member of the set of aerodynamic extra points. The forces associated with this controller will be derived from rigid rotation of the aerodynamic model about the hinge line(s) and from AEDW, AEFORCE and AEPRESS input data. The mass properties of the control surface can be specified using an AESURFS entry.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
AESURF  ID      LABEL   CID1    ALID1   CID2    ALID2   EFF     LDW     
CREFC   CREFS   PLLIM   PULIM   HMLLIM  HMULIM  TQLLIM  TQULIM  


```

--------------------------------------------------------------------------------
```text

Example:
AESURF  6001    ELEV    100     100     200     200     
10.0    180.0                           -1.4E4  1.2E4   20      30      


```

--------------------------------------------------------------------------------
