## [AXIF](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AXIF.xhtml) - Fluid Related Axisymmetric Parameters

Defines basic parameters and the existence of an axisymmetric fluid analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AXIF    CID     G       DRHO    DB      NOSYM   F                       +       
+       N1      N2      N3      N4      N5      -etc.-                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AXIF    2       32.2    0.12    2.4+5   YES                             +       
+       1       2       3               4               7       10              
```

#### Alternate Formats and Examples of Continuation Data:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AXIF    100     -386.0          0.0     NO                              +       
+       0       THRU    50      STEP    5                               +       
+       52                                                              +       
+       54      THRU    57                                              +       
+       61      THRU    65                                              +       
+       68              71              72      75                      +       
+       81      92                                                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Fluid coordinate system identification number.  (Integer > 0)                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G         │ Value of gravity for fluid elements in the axial direction.  (Real)                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DRHO      │ Default mass density for fluid elements.  (Real > 0.0 or blank)                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DB        │ Default bulk modulus for fluid elements.  (Real)                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOSYM     │ Request for nonsymmetric (sine) terms of series.  (Character:  “YES” or “NO”)                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F         │ Flag specifying harmonics.  (Blank if harmonic is specified, or Character:  “NONE”)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ni        │ Harmonic numbers for the solution, represented by an increasing sequence of integers.  On          │
│           │ continuation entries, without the “THRU” option, blank fields are ignored.  “THRU” implies all     │
│           │ numbers including upper and lower harmonics.  (0 < Integer < 100, or Character:  “THRU”, “STEP” or │
│           │ blank)                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NS        │ Every NSth step of the harmonic numbers specified in the “THRU” range is used for solution.  If    │
│           │ field 5 is “STEP”, Ni = i*NS+N1 where i is the number of harmonics.  (Integer)                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only one AXIF entry is allowed.
2. CID must reference a cylindrical or spherical coordinate system.
3. Positive gravity (+G) implies that the direction of free fall is in the -Z direction of the fluid coordinate system.
4. The DRHO value replaces blank values of RHO on the FSLIST, BDYLIST and CFLUIDi entries.
5. The DB value replaces blank values of B on the CFLUIDi entries.  If the CFLUIDi entry is blank and DB is zero or blank, the fluid is incompressible.
6. If NOSYM = “YES”, both sine and cosine terms are specified.  If NOSYM = “NO”, only cosine terms are specified.
7. If F = “NONE”, no harmonics are specified, no fluid elements are necessary, and no continuations may be present.  In this case, AXIS = “FLUID” should not be specified in the Case Control Section.
8. Superelements cannot be used.
