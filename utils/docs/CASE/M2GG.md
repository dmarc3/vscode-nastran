## [M2GG (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.M2GG.Case.xhtml) - Direct Input Mass Matrix Selection

Selects direct input mass matrix or matrices.

#### Format:

```nastran
M2GG=name
```

#### Example:

```nastran
M2GG = MDMIG
M2GG = MDMIG1, MDMIG2, MDMIG3
M2GG = 1.25*MDMIG1, 1.0*MDMIG2, 0.82*MDMIG3
SET 200 = M1, M2 
M2GG = 200
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ name      │ Name of a M2GG matrix that is input on the DMIG Bulk Data entry, or name list with or without factors │
│           │ see Remark 6. (Character).                                                                            │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. DMIG matrices will not be used unless selected.
2. Terms are added to the mass matrix before any constraints are applied.
3. The matrix must be symmetric, and field 4 on the DMIG, name entry must contain a 6.
4. M2GG input is not affected by PARAM,WTMASS. M2GG input must either be in consistent mass units or PARAM,CM2 may be used.
5. The matrices are additive if multiple matrices are referenced on the M2GG command.
6. The formats of the name list:
    - Names without factor.
    Names separated by comma or blank.
    - Names with factors.
    Each entry in the list consists of a factor, followed by a star, followed by a name. The entries are separated by commas or blanks. The factors are real numbers. Each name must be paired with a factor including 1.0.
7. If there are multiple subcases in the analysis. the M2GG command must appear above the first subcase or in the first subcase. M2GG requests in the second and subsequent subcases will be ignored. For superelements. it should occur in the first subcase for the appropriate superelement.
