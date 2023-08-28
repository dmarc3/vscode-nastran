## [XDIVISIONS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.XDIVISIONS.xhtml) - Tic Spacing on Y-Axis

Specifies spacing of tic marks on the x-axis for all curves.

#### Format:

```nastran
XDIVISIONS  xd
```

#### Example:

```nastran
XDIV 10
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────┤
│ xd        │ Number of spaces between tic marks on x-axis (Integer >  0; Default  =  5). │
└───────────┴─────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. XDIVISIONS applies to all curves and to the commands: UPPER TICS, LOWER TICS, and YINTERCEPT.

2. XDIVISIONS is ignored for a logarithmic x-axes.

