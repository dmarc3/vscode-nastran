## [BFRlC](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BFRlC.xhtml) - Contact Friction

Defines frictional properties between two bodies in contact using the slideline contact in SOL 106 and SOL 129. SOL 400 is the recommended approach for contact analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BFRIC   FID             FSTIF   MU1
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BFRIC   33      0.3
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ FID       │ Friction identification number.  See Remark 1. (Integer > 0)                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ FSTlF     │ Frictional stiffness in stick.  See Remarks 2. and 3. (Real > 0.0; Default = automatically │
│           │ selected by the program)                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ MU1       │ Coefficient of static friction.  (Real > 0.0)                                              │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This identification number must be unique with respect to all other friction identification numbers.  This is used in the FRICID field of BCONP Bulk Data entry.

2. The value of frictional stiffness requires care.  A method of choosing its value is to divide the expected frictional strength (MU1   *   expected normal force) by a reasonable value of the relative displacement that may be allowed before slip occurs.  The relative value of displacement before slip occurs must be small compared to expected relative displacements during slip.  A large stiffness value may cause poor convergence, while too small a value may cause poor accuracy.

     Frictional stiffness specified by the user is selected as the initial value.  If convergence difficulties are encountered during the analysis, the frictional stiffness may be reduced automatically to improve convergence.

3. The stiffness matrix for frictional slip is unsymmetric.  However, the program does not use the true unsymmetric matrix.  Instead the program uses only the symmetric terms.  This is to avoid using the unsymmetric solver to reduce CPU time.

