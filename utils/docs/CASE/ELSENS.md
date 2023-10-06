## [ELSENS (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ELSENS.Case.xhtml) - Element Sensitivity Output for SOL 108/111

Select SOLUTION frequencies and RESPONSE DOFs for the generation element sensitivity.

#### Format:

![casecontrol4a00908.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00908.jpg?_LANG=enus)  

#### Example

```nastran
SET 81 = 100.0, 120.0
SET 91 = 11240/T3, 4001/T1
SET 96 = 15920   THRU 15950
$
ELSENS(RESPONSE=91, SOLUTION=81,MASS,STIFF,DYNAMIC) = 96
```

```text
┌──────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                 │
│ (blank)      │                                                                                                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command),     │
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both │
│ .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                           │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THRESH       │ The magnitude of element sensitivity less than p will be suppressed in all output files: print, │
│              │ punch, plot, .op2, and .xdb. (Default = 0.0).                                                   │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RESPONSE     │ Adjoint load response will be computed for unit load applied at grid point components in SET r. │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SOLUTION     │ Frequency responses at these forcing frequencies, defined in setf, will be used for element     │
│              │ sensitivity computation. (Default=all forcing frequencies)                                      │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MASS         │ Sensitivity with element mass matrices will be computed and output.                             │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STIFF        │ Sensitivity with element stiffness matrices will be computed and output.                        │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DYNAMIC      │ Sensitivity with element stiffness and mass matrices will be computed and output.               │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SQMASS       │ Squared sensitivity with element mass matrices will be computed and output.                     │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SQSTIF       │ Squared sensitivity with element stiffness matrices will be computed and output.                │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SQDYNA       │ Squared sensitivity with element stiffness and mass matrices will be computed and output.       │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Sensitivities for all elements will be calculated.                                              │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification number. Sensitivity for all elements specified on the SET n command will be  │
│              │ calculated. The SET n command must be specified in the same subcase as the ELSSENS command, or  │
│              │ above all subcases ( Integer > 0 ). The IDs in set n must be EID (element ID).                  │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Elemental sensitivity will not be output.                                                       │
└──────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Set r for RESPONSE has no default.
2. The equations various options of ELSENS

```text
ELSENS(MASS) = [A ] t [M ][A ]  
ELSENS(STIFF) = [U ] t [K ][U ]  
ELSENS(DYNAMIC) = [A ] t [M ][A ]  + [U ] t [K ][U ]  
ELSENS(SQMASS) = [A ] t [M ][A ]  + [A ]* t [M ] *  [A ] *   
ELSENS(SQSTIF) = [U ] t [K ][U ]  + [U ]* t [K ] *  [U ] *   
ELSENS(SQDYNA) = [A ] t [M ][A ]  + [U ] t [K ][U ] + [A ]* t [M ] *  [A ] *   + [U ]* t [K ] *  [U ] *   
where [U ]  is the displacement of SOLUTION
      [A ]  is the acceleration of SOLUTION
      [U ]  is the displacement of RESPONSE
      [A ]  is the acceleration of RESPONSE
      [K ] is element stiffness matrix
      [M ] is element mass matrix
      superscript * means complex conjugate of the term.
```
