## [FBODYSB](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FBODYSB.xhtml) - Equilibrated Free-Body Subsystems Definition

Defines an equilibrated free-body subsystem.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FBODYSB NAMES   GRIDSET ELEMSET XFLAG                                   +       
+       LABEL           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FBODYSB WING    1       1       ADM                                     +       
+       RIGHT WI        
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NAMES     │ User defined name identifying the submodel. (Character; Required)                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRIDSET   │ Identification number of a SET1 entry that has a list of Grid Point Force grids to include in      │
│           │ defining the subsystem. (Integer > 0)                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ELEMSET   │ Identification number of a SET1 entry that has a list of elements to include in the system         │
│           │ (Integer > 0 or blank)                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XFLAG     │ Exclusion flag. Exclude the indicated Grid Point Force types.                                      │
├───────────┼────────────┬───────────────────────────────────────────────────────────────────────────────────────┤
│           │ Default    │ Blank (no type excluded)                                                              │
├───────────┼────────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│           │ S          │ SPC forces                                                                            │
├───────────┼────────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│           │ M          │ MPC forces                                                                            │
├───────────┼────────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│           │ A, L, or P │ Applied loads                                                                         │
├───────────┼────────────┼───────────────────────────────────────────────────────────────────────────────────────┤
│           │ D          │ DMIG’s (and any other type not described above)                                       │
├───────────┼────────────┴───────────────────────────────────────────────────────────────────────────────────────┤
│ Label     │ An optional string of up to 64 characters (fields 2 through 9) that identifies the subsystem.      │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only those Grid Point Forces which have both an included grid point and element (or Grid Point Force type) will be taken into account.
2. If ELEMSET is blank, no contributions are made from the set of elements attached to the grid.
3. Fictitious grids or elements do not produce error or warning messages.
4. The XFLAG data can be any combination of the letters S,M,A,L,P and D (e.g., MAD).
5. The continuation is optional.
