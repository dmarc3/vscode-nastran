## [YMAX](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YMAX.xhtml) - Maximum Y Axis Value

Specifies the maximum value on the y-axis.

#### Format:

```nastran
YMAX ymax
```

#### Example:

```nastran
YMAX 100
```

```text
┌───────────┬─────────────────────────────────────┐
│ Describer │ Meaning                             │
├───────────┼─────────────────────────────────────┤
│ ymax      │ Maximum value on the y-axis (Real). │
└───────────┴─────────────────────────────────────┘
```
#### Remarks:

1. If YMAX is not specified, then the maximum value is set to the highest value of y.

2. See related command XMAX.

