__**[AECOMP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AECOMP.xhtml)**__   -   Component for an Integrated Load Monitor Point

--------------------------------------------------------------------------------
Defines a component for use in monitor point definition or external splines.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
AECOMP  NAME    LISTTYPELISTID1 LISTID2 LISTID3 LISTID4 LISTID5 LISTID6 
LISTID7 -etc.-


```

--------------------------------------------------------------------------------
```text

Example:
AECOMP  WING    AELIST  1001    1002    


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
NAME            A character string of up to eight characters identifying the
                component. (Character)
LISTTYPE        One of CAERO, AELIST or CMPID for aerodynamic components and
                SET1 for structural components. Aerodynamic components are
                defined on theaerodynamic ks-set mesh while the structural
                components aredefined on the g-setmesh. See Remarks 2. and 4.
LISTIDi The identification number of either SET1, AELIST or CAEROi entries that
define  the set of grid points that comprise the component. See Remarks  2.  and
4.


```

--------------------------------------------------------------------------------
