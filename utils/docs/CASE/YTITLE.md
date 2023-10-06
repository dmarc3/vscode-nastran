## [YTITLE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YTITLE.xhtml) - Y Axis Title

Defines a character string that will appear along the y-axis for whole frame curves only.

#### Format:

```nastran
YTITLE   ytit
```

#### Example:

```nastran
YTIT   RIGHT WING LOADS - CASE 3
```

```text
┌───────────┬─────────────────────────────────────────────────────┐
│ Describer │ Meaning                                             │
├───────────┼─────────────────────────────────────────────────────┤
│ ytit      │ Any character string (Character; Default  = Blank). │
└───────────┴─────────────────────────────────────────────────────┘
```
#### Remarks:

1. YTITLE may not be continued to the next command line.

2. YTITLE applies to whole frame curves only.

