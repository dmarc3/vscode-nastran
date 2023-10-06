## [M2PP (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.M2PP.Case.xhtml) - Direct Input Mass Matrix Selection

Selects direct input mass matrix or matrices, which are not included in normal modes.

#### Format:

```nastran
M2PP=name
```

#### Example:

```nastran
M2PP = MDMIG
M2PP = MDMIG1, MDMIG2, MDMIG3
M2PP = 5.06*MDMIG1, 1.0*MDMIG2, 0.85*MDMIG3
M2PP = (1.25, 0.5) *MDMIG1, (1.0, 0.0) *MDMIG2, (0.82, -2.2) *MDMIG3
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ name      │ Name of a M2PP matrix that is input on the DMIG or DMIAX Bulk Data entry, or name list with or without │
│           │ factors, see Remark 7. (Character).                                                                    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. DMIG and DMIAX entries will not be used unless selected by the M2PP input.
2. M2PP input is not affected by PARAM,WTMASS. M2PP input must be in consistent mass units.
3. The matrix must be square or symmetric, and field 4 on the DMIG, name entry must contain a 1 or 6.
4. It is recommended that PARAM,AUTOSPC,NO be specified. See    in the  MSC Nastran Reference Guide .
5. M2PP matrices are used only in dynamic response problems. They are not used in normal modes problems.
6. The matrices are additive if multiple matrices are referenced on the M2PP command.
7. The formats of the name list:
    - Names without factor
    Names separated by comma or blank.
    - Names with factors.
    Each entry in the list consists of a factors followed by a star, followed by a name. The entries are separated by commas or blanks. The factors are either all real numbers, or all complex numbers in the form of two real numbers, separated by a comma, within parenthesis as shown in the preceding example.  The first real number of the pair is the real part, and the second is the imaginary part. Either part may be zero or blank, but not both. Mixed real  numbers and complex numbers are not allowed. Each name must be with  a factor including 1.0 for real and (1.0, 0.0) for complex.
