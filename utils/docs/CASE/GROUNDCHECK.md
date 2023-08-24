## [GROUNDCHECK (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.GROUNDCHECK.Case.xhtml) - Rigid Body Motion Grounding Check

Perform grounding check analysis on the stiffness matrix to expose unintentional constraints by moving the model rigidly.

#### Format:

![casecontrol4a01060.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01060.jpg?_LANG=enus)  

#### Examples:

```nastran
GROUNDCHECK=YES
GROUNDCHECK(GRID=12,SET=(G,N,A),THRESH=1.E-5,DATAREC=YES)=YES
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT     │ Write output to the print file. (Default)                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPRINT   │ Do not write output to the print file.                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH     │ Write output to the punch file.                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SET       │ Selects degree-of-freedom set(s) (Default: SET=G).                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ gid       │ Reference grid point for the calculation of the rigid body motion.                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ e         │ Maximum strain energy which passes the check. The default value is computed by dividing the        │
│           │ largest term in the stiffness matrix by 1.E10.                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DATAREC   │ Requests data recovery of grounding forces (Default: DATAREC=NO).                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ r         │ Grounding forces which are larger than r percent of the largest grounding force will be printed if │
│           │ DATAREC=YES (Default = .10; 0. < r < 1.0).                                                         │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. GROUNDCHECK must be specified above the subcase level.
2. SET=N+AUTOSPC (check the N-set stiffness, including the effect of PARAM,AUTOSPC) uses the stiffness matrix for the n-set, with the rows corresponding to degrees-of-freedom constrained by the PARAM,AUTOSPC operation zeroed out. If AUTOSPC was not performed, then this check is redundant with respect to SET=N.
3. If DATAREC=YES, GROUNDCHECK FORCES will be printed in the displacement coordinate system of the associated GRID points.
4. For CBEAM/CBEAM3, it is recommended to use SPOINT ID for warping DOFs. Use of GRID ID for warping DOFs may cause one or more directions to fail the rigid body check.
5. If Lagrange multipliers are present via RIGID=LAGRAN or LGELIM then for degree-of-freedom sets N, N+AUTOSPC, F, and A the check will be performed on degree-of-freedom sets NL, NL+AUTOSPC, FL, and AL. The output will also be labeled accordingly.
