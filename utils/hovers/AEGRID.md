__**[AEGRID](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AEGRID.xhtml)**__   -   Aerodynamic Grid Point

--------------------------------------------------------------------------------
Defines the location of an aerodynamic grid point.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
AEGRID  GID     CP      X1      X2      X3      CD      ASID    


```

--------------------------------------------------------------------------------
```text

Example:
AEGRID  1       1       2.1     3.2     2.0     3       4       


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
GID             Grid Point Identification Number (0 < Integer < 100,000,000)
CP              Identification number of a coordinate system in which the
                location of the grid point is defined. (Integer > 0 or blank)
X1, X2, X3      Location of the grid point in the coordinate system CP.
CD              Identification number of coordinate system in which the degrees-
                of-freedom of the grid point are defined. (Integer > 0 or blank)
ASID            Identification number of an AESCALE Bulk Data entry. (Integer >
                0 or blank)


```

--------------------------------------------------------------------------------
