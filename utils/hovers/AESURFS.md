__**[AESURFS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AESURFS.xhtml)**__   -   Structural Grids on an Aerodynamic Control Surface

--------------------------------------------------------------------------------
Optional specification of the structural nodes associated with an aerodynamic control surface that has been defined on an AESURF entry. The mass associated with these structural nodes define the control surface moment(s) of inertia about the hinge line(s).

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
AESURFS ID      LABEL           LIST1           LIST2   


```

--------------------------------------------------------------------------------
```text

Example:
AESURFS 6001    ELEV            6002            6003    


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
ID              Controller identification number, see Remark 1. (Integer > 0)
LABEL           Controller name, see Remark 1. (Character)
LISTi Identification number of a SET1 entry that lists the structural grid
points that are  associated with this component of this control surface.
(Integer > 0)


```

--------------------------------------------------------------------------------
