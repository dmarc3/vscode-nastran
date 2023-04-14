__**[BCGRID](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCGRID.xhtml)**__   -   Contact region by a list of grid points.

--------------------------------------------------------------------------------
Define a contact region by a grid point list, for SOLs 101, 103, 105, 107, 108,
109, 110, 111, 112, 200 and 400.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
BCGRID  BID     BPID    DIM     
GID1    GID2    GID3    “THRU”  GID4    “BY”    GID5    GID6    
GID7


```

--------------------------------------------------------------------------------
```text

Example:
BCGRID  2       3       3D      
12      21      THRU    101     3       6       


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
BID             Unique contact face identification number referenced by BCONECT
                (Integer > 0; Required). See remark 1.
BPID            Parameter identification number of a BCBDPRP entry. (Integer > 0
                or blank)
DIM             Dimension of the contact entry. (Character; Default= “3D”), “3D”
                or “2D”.
GIDi Grid point ids. (Integer > 0)


```

--------------------------------------------------------------------------------
