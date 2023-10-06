## [AEROS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AEROS.xhtml) - Static Aeroelasticity Physical Data

Defines basic parameters for static aeroelasticity.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AEROS   ACSID   RCSID   REFC    REFB    REFS    SYMXZ   SYMXY                   
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AEROS   10      20      10.     100.    1000.   1                               
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ACSID     │ Aerodynamic coordinate system identification.  See Remark 2. (Integer > 0; Default is the basic  │
│           │ coordinate system)                                                                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RCSID     │ Reference coordinate system identification for rigid body motions.  (Integer > 0; Default is the │
│           │ basic coordinate system)                                                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REFC      │ Reference chord length.  (Real > 0.0)                                                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REFB      │ Reference span.  (Real > 0.0)                                                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REFS      │ Reference wing area.  (Real > 0.0)                                                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SYMXZ     │ Symmetry key for the aero coordinate x-z plane.  See Remark 6. (Integer = +1 for symmetry, 0 for │
│           │ no symmetry, and -1 for antisymmetry; Default = 0)                                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SYMXY     │ The symmetry key for the aero coordinate x-y plane can be used to simulate ground effects.       │
│           │  (Integer = +1 for antisymmetry, 0 for no symmetry, and -1 for symmetry; Default = 0)            │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry is required for static aeroelasticity problems.  Only one AEROS entry is allowed.
2. The ACSID must be a rectangular coordinate system.  Flow is in the positive x-direction (T1).
3. The RCSID must be a rectangular coordinate system.  All AESTAT degrees-of-freedom defining trim variables will be defined in this coordinate system.
4. REFB should be full span, even on half-span models.
5. REFS should be half area on half-span models.
6. The symmetry fields on this entry are only used if neither of the Case Control commands (AESYMXY, AESYMXZ) are supplied. If either Case Control command is supplied, even the defaults from Case will override these Bulk Data entries. The Case Control symmetry is the preferred means of declaring the flow and geometric symmetry for aeroelastic analysis.
