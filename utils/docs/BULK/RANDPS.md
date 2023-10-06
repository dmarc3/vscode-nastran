## [RANDPS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RANDPS.xhtml) - Power Spectral Density Specification

Defines load set power spectral density factors for use in random analysis having the frequency dependent form

![bulkqrs07396.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/../../../assets/bulkqrs07396.jpg?_LANG=enus)  

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RANDPS  SID     J       K       X       Y       TID                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RANDPS  5       3       7       2.0     2.5     4                               
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Random analysis set identification number. See Remarks 1.and 9. (Integer > 0)                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ J         │ Subcase identification number of the excited load set. See Remarks 6. through 9. (Integer > 0)    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ K         │ Subcase identification number of the applied load set. See Remarks 6. through 9. (Integer > 0;    │
│           │ K > J)                                                                                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X, Y      │ Components of the complex number. See Remarks 2. and 7. (Real)                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID       │ Identification number of a TABRNDi entry that defines G(F). See Remarks 3. and 7. (Integer > 0 or │
│           │ Blank)                                                                                            │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Set identification numbers must be selected with the Case Control command (RANDOM = SID) or through use of FTGLOAD when doing random vibration fatigue analysis.
2. For auto spectral density, J = K, X must be greater than zero and Y must be equal to zero.
3. For TID = Blank,  G ( F ) = 1.0.
4. RANDPS may only reference subcases included within a single loop (a change in direct matrix input is not allowed).
5. See the   MSC Nastran Dynamic Analysis User’s Guide  for a discussion of random analysis.
6. In the case of cyclic symmetry Solution Sequence 118, J and K must refer to the coded subcase IDs.
7. In superelement analysis, J and K must refer to the superelement subcases. For example, if superelement 10 has SUBCASEs 1 and 2 and superelement 20 has SUBCASEs 3 and 4, then a separate RANDPS entry is required for each superelement, even though X, Y, and TID may be identical.
8. For uncoupled PSDF (no J < K entries) only one J = K entry is allowed for unique value of J. For coupled PSDF (some J < K entries) any number of entries are allowed.
9. J and K must reference valid subcase IDs. In superelement analysis, J and K must reference valid subcase IDs that pertain to the applicable superelement. If this requirement is not met, the program issues an appropriate user warning message and ignores the associated RANDOM=SID command.
10. If Modules are present then this entry may only be specified in the main Bulk Data section.
