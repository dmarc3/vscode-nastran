__**[AEFORCE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AEFORCE.xhtml)**__   -   Parametric Force for Aerodynamics

--------------------------------------------------------------------------------
Defines a vector of absolute or “per unit dynamic pressure” forces associated with a particular control vector. This force vector may be defined on either the aerodynamic mesh (ks-set) or the structural mesh (g-set). The force vector will be used in static aeroelastic trim.

--------------------------------------------------------------------------------
```text

Format:
1       2       3       4       5       6       7       8       9       10      
AEFORCE MACH    SYMXZ   SYMXY   UXID    MESH    LSET    DMIK    PERQ    


```

--------------------------------------------------------------------------------
```text

Example:
AEFORCE 0.90    SYMM    ASYMM   101     AERO            BETA    


```

--------------------------------------------------------------------------------
```text

Describer       Meaning         
--------------------------------------------------------------------------------
MACH            The Mach number for this force. (Real 0.0,  1.0)
SYMXZ,SYMXY     The symmetry conditions for this force vector. One of SYMM,
                ASYMM or ANTI. (Character)
UXID            The identification number of a UXVEC entry that defines the
                control parameter vector associated with this force vector.
MESH            One of AERO or STRUCT that declares whether the force vector is
                defined on the aerodynamic ks-set mesh or the structural g-set
                mesh.
LSET            SID of a load set that defines the vector. See Remark 2.
                (Integer > 0 if MESH=STRUCT)
DMIK            The name of a DMIK entry that defines the aerodynamic force
                vector. See Remark 3. (Character; Required if MESH=AERO)
PERQ            The string PERQ or blank. If PERQ and MESH=STRUCT, the input
                FORCE set is multiplied by the dynamic pressure. (Default =
                blank; see Remark4.)


```

--------------------------------------------------------------------------------
