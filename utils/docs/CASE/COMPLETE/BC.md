## [BC (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.BC.Case.xhtml) - Boundary Condition Identification

Identifies multiple boundary conditions for normal modes, buckling, and flutter analysis in SOLs 103, 105, 145, and 200.

#### Format:

```nastran
BC=n
```

#### Example:

```nastran
BC=23
```

```text
┌───────────┬──────────────────────────────────────┐
│ Describer │ Meaning                              │
├───────────┼──────────────────────────────────────┤
│ n         │ Identification number (Integer > 0). │
└───────────┴──────────────────────────────────────┘
```
#### Remarks:

1. In SOLs 103, 105, 145, and 200, BC is required in each subcase if multiple boundary conditions are specified for normal modes, buckling, or flutter analysis.
2. If only one boundary condition is specified, then BC does not have to be specified, and n defaults to zero.
