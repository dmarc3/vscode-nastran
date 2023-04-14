__**[AEROS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AEROS.xhtml)**__   -   Static Aeroelasticity Physical Data

--------------------------------------------------------------------------------
Defines basic parameters for static aeroelasticity.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
AEROS   ACSID   RCSID   REFC    REFB    REFS    SYMXZ   SYMXY   


```

--------------------------------------------------------------------------------
```text

Example:
AEROS   10      20      10.     100.    1000.   1       


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
ACSID           Aerodynamic coordinate system identification.  See Remark 2.
                (Integer > 0; Default is the basic coordinate system)
RCSID           Reference coordinate system identification for rigid body
                motions.  (Integer > 0; Default is the basic coordinate system)
REFC            Reference chord length.  (Real > 0.0)
REFB            Reference span.  (Real > 0.0)
REFS            Reference wing area.  (Real > 0.0)
SYMXZ           Symmetry key for the aero coordinate x-z plane.  See Remark 6.
                (Integer = +1 for symmetry, 0 for no symmetry, and -1 for
                antisymmetry; Default= 0)
SYMXY           The symmetry key for the aero coordinate x-y plane can be used
                to simulate ground effects.  (Integer = +1 for antisymmetry, 0
                for no symmetry,and -1 for symmetry; Default = 0)


```

--------------------------------------------------------------------------------
