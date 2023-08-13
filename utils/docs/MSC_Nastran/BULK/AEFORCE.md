## [AEFORCE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AEFORCE.xhtml) - Parametric Force for Aerodynamics

Defines a vector of absolute or “per unit dynamic pressure” forces associated with a particular control vector. This force vector may be defined on either the aerodynamic mesh (ks-set) or the structural mesh (g-set). The force vector will be used in static aeroelastic trim.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AEFORCE MACH    SYMXZ   SYMXY   UXID    MESH    LSET    DMIK    PERQ            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AEFORCE 0.90    SYMM    ASYMM   101     AERO            BETA                    
```

```text
┌─────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                           │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MACH        │ The Mach number for this force. (Real ≥ 0.0,  ≠ 1.0)                                              │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SYMXZ,SYMXY │ The symmetry conditions for this force vector. One of SYMM, ASYMM or ANTI. (Character)            │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UXID        │ The identification number of a UXVEC entry that defines the control parameter vector associated   │
│             │ with this force vector.                                                                           │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MESH        │ One of AERO or STRUCT that declares whether the force vector is defined on the aerodynamic ks-set │
│             │ mesh or the structural g-set mesh.                                                                │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LSET        │ SID of a load set that defines the vector. See Remark 2. (Integer > 0 if MESH=STRUCT)             │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIK        │ The name of a DMIK entry that defines the aerodynamic force vector. See Remark 3. (Character;     │
│             │ Required if MESH=AERO)                                                                            │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PERQ        │ The string PERQ or blank. If PERQ and MESH=STRUCT, the input FORCE set is multiplied by the       │
│             │ dynamic pressure. (Default = blank; see Remark 4.)                                                │
└─────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The AEFORCE is associated with the current AECONFIG and must be entered for the appropriate Mach numbers and aerodynamic symmetries.
2. For the STRUCT mesh option, the LSET can refer to any existing load type (e.g., FORCE1, PLOAD4 or LOAD) that is available to define static loads.
3. For the AERO mesh option, the DMIK Bulk Data are used. Any forces associated with the aerodynamic model’s permanently SPC’d degrees-of-freedom (which are dependent on the type of aerodynamic model being used) will be ignored.
4. For the AERO mesh option, the PERQ field is not used. The FORCE data input on the DMIK entry is always multiplied by dynamic pressure.
5. When STRUCT mesh option is used the integrated loads output for aerodynamic monitor points are not meaningful.
