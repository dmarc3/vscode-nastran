## [K2GG (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.K2GG.Case.xhtml) - Direct Input Stiffness Matrix Selection

Selects direct input stiffness matrix or matrices.

#### Format:

```nastran
K2GG=name
```

#### Example:

```nastran
K2GG = KDMIG
K2GG = KDMIG1, KDMIG2, KDMIG3
K2GG = 1.25*KDMIG1, 1.0*KDMIG2, 0.82*KDMIG3
SET 100 = K2, K3, K4 
K2GG = 100
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ name      │ Name of a K2GG matrix that is input on the DMIG Bulk Data entry, or name list with or without factors. │
│           │ See Remark 6. (Character).                                                                             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. DMIG matrices will not be used unless selected.
2. Terms are added to the stiffness matrix before any constraints are applied.
3. The matrix must be symmetric and field 4 on the DMIG,name Bulk Data entry must contain the integer 6.
4. A scale factor may be applied to this input using the PARAM, CK2 entry. See  .
5. The matrices are additive if multiple matrices are referenced on the K2GG command.
6. The formats of the name list:
    - Names without factor.
    Names separated by comma or blank.
    - Names with factors.
    Each entry in the list consists of a factor, followed by a star, followed by a name. The entries are separated by commas or blanks. The factors are real numbers. Each name must be paired with a factor including 1.0.
7. If there are multiple subcases in the analysis. the K2GG command must appear above the first subcase or in the first subcase. K2GG requests in the second and subsequent subcases will be ignored. For superelements. it should occur in the first subcase for the appropriate superelement.
