## [K42GG (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.K42GG.Case.xhtml) - Direct Input Stiffness Element Damping Selection

Selects direct input structural element damping matrix or matrices.

#### Format:

```nastran
K42GG=name
```

#### Example:

```nastran
K42GG = KDMIG
K42GG = KDMIG1, KDMIG2, KDMIG3
K42GG = 2.03*KDMIG1, 0.84*KDMIG2
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ name      │ Name of a K42GG matrix that is input on the DMIG Bulk Data entry, or name list with or without factors. │
│           │ See Remark 4.                                                                                           │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. DMIG matrices will not be used unless selected.
2. Terms are added to the structural element damping matrix before any constraints are applied.
3. The matrix must be symmetric, and field 4 on the DMIG,name Bulk Data entry must contain the integer 6.
4. The formats of the name list:
    - Names without factor.
    Names separated by comma or blank.
    - Names with factors.
    Each entry in the list consists of a factor, followed by a star, followed by a name. The entries are separated by commas or blanks. The factors are real numbers. Each name must be paired with a factor including 1.0.
5. If there are multiple subcases in the analysis. the K42GG command must appear above the first subcase or in the first subcase. K42GG requests in the second and subsequent subcases will be ignored. For superelements. it should occur in the first subcase for the appropriate superelement.
