## [YDIVISIONS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YDIVISIONS.xhtml) - Tic Spacing on Y Axis

Specifies spacing of tic marks on the y-axis for whole frame curves only.

#### Format:

```nastran
YDIVISIONS  yd
```

#### Example:

```nastran
YDIV 10
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ yd        │ Number of spaces between tic marks on y-axis (Integer >  0; Default = 5). │
└───────────┴───────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. YDIVISIONS applies to whole frame curves only and to the commands: LEFT TICS, RIGHT TICS, and XINTERCEPT.

2. YDIVISIONS is ignored for a logarithmic y-axis.

