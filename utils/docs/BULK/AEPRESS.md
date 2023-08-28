## [AEPRESS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AEPRESS.xhtml) - Parametric Pressure Loading for Aerodynamics

Defines a vector of pressure/unit dynamic pressure associated with a particular control vector. From this pressure vector, a force vector on the aerodynamic grids will be defined for use in nonlinear static aeroelastic trim.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AEPRESS MACH    SYMXZ   SYMXY   UXID    DMIJ    DMIJI                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AEPRESS 0.90    SYMM    ASYMM   101     ALP1                                    
```

```text
┌─────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                         │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MACH        │ The Mach number for this force, see Remark 2. (Real ≥ 0.0,  ≠ 1.0)                              │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SYMXZ,SYMXY │ The symmetry of this force vector. One of SYMM, ASYMM or ANTI. (Character)                      │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UXID        │ The identification number of a UXVEC entry that defines the control parameter vector associated │
│             │ with this pressure vector.                                                                      │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIJ        │ The name of a DMI or DMIJ entry that defines the pressure per unit dynamic pressure.            │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DMIJI       │ The name of a DMIJI entry that defines the CAERO2 interference element “downwashes”.            │
└─────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The AEDW, AEFORCE, and AEPRESS are associated with the current AECONFIG using Case Control.
2. Mach numbers > 1.0 require that the supersonic aerodynamic option be available.
3. The DMIJ field refers to either a DMI or a DMIJ entry. The DMIJI is only applicable to CAERO2 and is only required if nonzero “downwash” (j-set) input is needed on the interference body elements.
