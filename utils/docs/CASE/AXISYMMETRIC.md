## [AXISYMMETRIC (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.AXISYMMETRIC.Case.xhtml) - Conical Shell Boundary Conditions

Selects boundary conditions for an axisymmetric shell problem or specifies the existence of fluid harmonics for hydroelastic problems.

#### Format:

![casecontrol4a00818.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00818.jpg?_LANG=enus)  

#### Example:
```nastran
AXISYMMETRIC=COSINE
```

```text
┌───────────┬──────────────────────────────────────────┐
│ Describer │ Meaning                                  │
├───────────┼──────────────────────────────────────────┤
│ SINE      │ Sine boundary conditions will be used.   │
├───────────┼──────────────────────────────────────────┤
│ COSINE    │ Cosine boundary conditions will be used. │
├───────────┼──────────────────────────────────────────┤
│ FLUID     │ Existence of fluid harmonics.            │
└───────────┴──────────────────────────────────────────┘
```
#### Remarks:

1. This command is required for conical shell problems.
2. If this command is used for hydroelastic problems, at least one harmonic must be specified on the AXIF command.
3. See the   in the  MSC Nastran Reference Guide  for a discussion of the conical shell problem.
4. The sine boundary condition will constrain components 1, 3, and 5 at every ring for the zero harmonic.
5. The cosine boundary condition will   constrain components 2, 4, and 6 at every ring for the zero harmonic.
6. SPC and MPC Case Control commands may also be used to specify additional constraints. See  .
