## [YMIN](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YMIN.xhtml) - Minimum Y Axis Value

Specifies the minimum value on the y-axis.

#### Format:

```nastran
YMIN ymin
```

#### Example:

```nastran
YMIN 100
```

```text
┌───────────┬─────────────────────────────────────┐
│ Describer │ Meaning                             │
├───────────┼─────────────────────────────────────┤
│ ymin      │ Minimum value on the y-axis (Real). │
└───────────┴─────────────────────────────────────┘
```
#### Remarks:

1. YMIN applies to all curves.

2. If YMIN is not specified, then the minimum value is set to the lowest value of y.

3. See related command XMIN.

