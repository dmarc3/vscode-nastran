## [B2PP (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.B2PP.Case.xhtml) - Direct Input Damping Matrix Selection

Selects direct input damping matrix or matrices.

#### Format:

```nastran
B2PP=name
```

#### Example:

```nastran
B2PP = BDMIG
B2PP = BDMIG1, BDMIG2, BDMIG3
B2PP = 5.06*BDMIG1, 1.0*BDMIG2, 0.85*BDMIG3
B2PP = (1.25, 0.5) *BDMIG1, (1.0, 0.0) *BDMIG2, (0.82,-2.2) *BDMIG3
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ name      │ Name of  matrix that is input on the DMIG or DMIAX Bulk Data entry, or name list, with or without │
│           │ factors. See Remark 7. (Character).                                                               │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. DMIG entries will not be used unless selected.
2. B2PP is used only in dynamics problems.
3. DMIAX entries will   not be used unless selected by the B2PP command.
4. The matrix must be square or symmetric, and field 4 on the DMIG,name Bulk Data entry must contain a 1 or 6.
5. It is recommended that PARAM,AUTOSPC,NO be specified. See the   in the  MSC Nastran Reference Guide .
6. The matrices are additive if multiple matrices are referenced on the B2PP command.
7. The formats of the name list:

    a. Names without factor

    Names separated by comma or blank.

    b. Names with factors.

    Each entry in the list consists of a factor, followed by a star, followed by a name. The entries are separated by commas or blanks. The factors are either all real numbers, or all complex numbers in the form of two real numbers, separated by a comma, within parentheses as shown in the preceding example. The first real number of the pair is the real part, and the second is the imaginary part. Either part may be zero or blank, but not both. Mixed real numbers and complex numbers are not allowed. Each name must be with a factor including 1.0 for real and (1.0, 0.0) for complex.

