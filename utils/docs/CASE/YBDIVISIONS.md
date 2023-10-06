## [YBDIVISIONS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YBDIVISIONS.xhtml) - Tic Spacing on Y-Axis

Specifies spacing of tic marks on the y-axis for lower half frame curves only.

#### Format:

```nastran
YBDIVISIONS  ybd
```

#### Example:

```nastran
YBDI 10
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────┤
│ ybd       │ Number of spaces between tic marks on y-axis (Integer  >  0; Default  =  5). │
└───────────┴──────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. YBDIVISIONS applies to lower half frame curves only.

2. YBDIVISIONS is ignored for a logarithmic y-axis.

