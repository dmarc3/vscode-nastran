## [WEIGHTCHECK (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.WEIGHTCHECK.Case.xhtml) - Rigid Body Mass Reduction Check

At each stage of the mass matrix reduction, compute rigid body mass and compare with the rigid body mass in the g-set.

#### Format:

![casecontrol4a01465.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01465.jpg?_LANG=enus)  

#### Examples:

```nastran
WEIGHTCHECK=YES
WEIGHTCHECK(GRID=12,SET=(G,N,A),MASS)=YES
```

```text
┌─────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                         │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT       │ Write output to the print file (Default).                                                       │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPRINT     │ Do not write output to the print file.                                                          │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH       │ Write output to the punch file.                                                                 │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SET         │ Selects degree of freedom set(s) (Default SET=G).                                               │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ gid         │ Reference grid point for the calculation of rigid body motion. The default is the origin of the │
│             │ basic coordinate system.                                                                        │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CGI         │ For , CGI = YES requests output of center of gravity and mass moments of inertia (Default:      │
│             │ CGI = NO).                                                                                      │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WEIGHT/MASS │ Selects output in units of weight or mass (Default = WEIGHT).                                   │
└─────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. WEIGHTCHECK must be specified above the subcase level.
2. For SET=N, N+AUTOSPC, F, or A, the WEIGHTCHECK command also outputs a percentage loss or gain in the reduced rigid body mass matrix (e.g., MAA) as compared to the g-set rigid body mass matrix (e.g., MGG). G must also be requested to obtain this comparison; e.g., WEIGHTCHECK(SET=(G,A))=YES.
3. SET=N+AUTOSPC uses the mass matrix for the n-set with the rows corresponding to degrees of freedom constrained by the PARAM, AUTOSPC operation zeroed out. If AUTOSPC was not performed, then this check is redundant with respect to SET=N.
4. WEIGHTCHECK is available in all SOLs.  However for the residual structure in SOLs 101, 105, 114, and 116, because no mass reduction is performed, only WEIGHTCHECK(SET=J) is available. The 'J' set does not include upstream superelements.
5. If Lagrange multipliers are present via RIGID=LAGRAN or LGELIM then for degree-of-freedom sets N, N+AUTOSPC, F, and A the check will be performed on degree-of-freedom sets NL, NL+AUTOSPC, FL, and AL. The output will also be labeled accordingly.
