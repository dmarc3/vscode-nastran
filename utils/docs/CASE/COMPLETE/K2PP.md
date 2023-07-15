## [K2PP (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.K2PP.Case.xhtml) - Direct Input Stiffness Matrix Selection

Selects direct input stiffness matrix or matrices, which are not included in normal modes.

#### Format:

```nastran
K2PP=name
```

#### Example:

```nastran
K2PP = KDMIG
K2PP = KDMIG1, KDMIG2, KDMIG3
K2PP = 5.06*KDMIG1, 1.0*KDMIG2, 0.85*KDMIG3
K2PP = (1.25, 0.5) *KDMIG1, (1.0,0.0) *KDMIG2, (0.82, -2.2) *KDMIG3
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ name      │ Name of a KSPP matrix that is input on the DMIG or DMlAX Bulk Data entry, or name list with or without │
│           │ factors. See Remark 6.                                                                                 │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. DMIG and DMIAX entries will not be used unless selected by the K2PP command.
2. The matrix must be square or symmetric, and field 4 on the DMIG,name Bulk Data entry must contain a 1 or 6.
3. It is recommended that PARAM,AUTOSPC,NO be specified. See the    in the  MSC Nastran Reference Guide.
4. K2PP matrices are used only in dynamic response problems. They are not used in normal modes.
5. The matrices are additive if multiple matrices are referenced on the K2PP Case Control command.
6. The formats of the name list:
    - Names without factor
    Names separated by comma or blank.
    - Names with factors.
    Each entry in the list consists of a factor, followed by a star, followed by a name. The entries are separated by commas or blanks. The factors are either all real numbers, or all complex numbers in the form of two real numbers separated by a comma, within parentheses, as shown in the preceding example. The first real number of the pair is the real part, and the second is the imaginary part. Either part may be zero or blank, but not both. Mixed real  numbers and complex numbers are not allowed. Each name must be paired with a factor including 1.0 for real and (1.0, 0.0) for complex.
