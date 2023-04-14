__**[AERO](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AERO.xhtml)**__   -   Aerodynamic Physical Data

--------------------------------------------------------------------------------
Gives basic aerodynamic parameters for unsteady aerodynamics.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
AERO    ACSID   VELOCITYREFC    RHOREF  SYMXZ   SYMXY   


```

--------------------------------------------------------------------------------
```text

Example:
AERO    3       1.3+4   100.    1.-5    1       -1      


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
ACSID           Aerodynamic coordinate system identification.  See Remark 2.
                (Integer > 0; Default is the basic coordinate system)
VELOCITY        Velocity for aerodynamic force data recovery and to calculate
                the BOV parameter.  See Remark 5. (Real>0.0 or blank)
REFC            Reference length for reduced frequency. (Real > 0.0)
RHOREF          Reference density. (Real > 0.0)
SYMXZ           Symmetry key for the aero coordinate x-z plane.  See Remark 6.
                (Integer = +1 for symmetry, 0 for no symmetry, and -1 for
                antisymmetry; Default= 0)
SYMXY           The symmetry key for the aero coordinate x-y plane can be used
                to simulate ground effect.  (Integer = -1 for symmetry, 0 for no
                symmetry, and+1 for antisymmetry; Default = 0)


```

--------------------------------------------------------------------------------
