## [AERO](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AERO.xhtml) - Aerodynamic Physical Data

Gives basic aerodynamic parameters for unsteady aerodynamics.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AERO    ACSID   VELOCITYREFC    RHOREF  SYMXZ   SYMXY                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AERO    3       1.3+4   100.    1.-5    1       -1                              
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ACSID     │ Aerodynamic coordinate system identification.  See Remark 2. (Integer > 0; Default is the basic  │
│           │ coordinate system)                                                                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VELOCITY  │ Velocity for aerodynamic force data recovery and to calculate the BOV parameter.  See Remark 5.  │
│           │ (Real>0.0 or blank)                                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REFC      │ Reference length for reduced frequency. (Real > 0.0)                                             │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHOREF    │ Reference density. (Real > 0.0)                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SYMXZ     │ Symmetry key for the aero coordinate x-z plane.  See Remark 6. (Integer = +1 for symmetry, 0 for │
│           │ no symmetry, and -1 for antisymmetry; Default = 0)                                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SYMXY     │ The symmetry key for the aero coordinate x-y plane can be used to simulate ground effect.        │
│           │  (Integer = -1 for symmetry, 0 for no symmetry, and +1 for antisymmetry; Default = 0)            │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry is required for aerodynamic problems.  Only one AERO entry is allowed.
2. The ACSID must be a rectangular coordinate system.  Flow is in the positive x-direction.
3. Set SYMXY = -1 to simulate ground effect.
4. PARAM,WTMASS does not affect aerodynamic matrices.  RHOREF must be input in mass units.
5. VELOCITY is used only in aeroelastic response analysis, and it must be equal to V on the GUST Bulk Data entry.
6. The symmetry fields on this entry are only used if neither of the Case Control commands (AESYMXY, AESYMXZ) are supplied. If either Case Control command is supplied, even the defaults from Case will override these Bulk Data entries. The Case Control symmetry is the preferred means of declaring the flow and geometric symmetry for aeroelastic analysis.
