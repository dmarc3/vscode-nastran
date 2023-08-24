## [B2GG (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.B2GG.Case.xhtml) - Direct Input Damping Matrix Selection

Selects direct input damping matrix or matrices.

#### Format:

```nastran
B2GG=name
```

#### Examples:

```nastran
B2GG = BDMIG
B2GG = BDMIG1, BDMIG2, BDMIG3
B2GG = 1.25*BDMIG1, 1.0*BDMIG2, 0.82*BDMIG3
SET 100 = B1, B2
B2GG = 100
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ name      │ Name of  matrix that is input on the DMIG Bulk Data entry, or name list, with or without factors │
│           │ (see Remark 5.).                                                                                 │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. DMIG matrices will not be used unless selected.
2. Terms are added to the damping matrix before any constraints are applied.
3. The matrix must be symmetric, and field 4 on the DMIG,name Bulk Data entry must contain the integer 6.
4. A scale factor may be applied to this input via the PARAM, CB2 entry. See  .
5. The formats of the name list:

    a. Names without factor.
    
    Names separated by comma or blank.

    b. Names with factors.

    Each entry in the list consists of a factor, followed by a star, followed by a name. The entries are separated by commas or blanks. The factors are real numbers. Each name must be with a factor including 1.0.
