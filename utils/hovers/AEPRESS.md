__**[AEPRESS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AEPRESS.xhtml)**__   -   Parametric Pressure Loading for Aerodynamics

--------------------------------------------------------------------------------
Defines a vector of pressure/unit dynamic pressure associated with a particular control vector. From this pressure vector, a force vector on the aerodynamic grids will be defined for use in nonlinear static aeroelastic trim.  

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
AEPRESS MACH    SYMXZ   SYMXY   UXID    DMIJ    DMIJI   


```

--------------------------------------------------------------------------------
```text

Example:
AEPRESS 0.90    SYMM    ASYMM   101     ALP1    


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
MACH            The Mach number for this force, see Remark 2. (Real 0.0,
                1.0)
SYMXZ,SYMXY     The symmetry of this force vector. One of SYMM, ASYMM or ANTI.
                (Character)
UXID            The identification number of a UXVEC entry that defines the
                control parameter vector associated with this pressure vector.
DMIJ            The name of a DMI or DMIJ entry that defines the pressure per
                unit dynamic pressure.
DMIJI           The name of a DMIJI entry that defines the CAERO2 interference
                element “downwashes”.


```

--------------------------------------------------------------------------------
