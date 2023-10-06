## [YTMIN](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YTMIN.xhtml) - Minimum Y Axis Value

Specifies the minimum value on the y-axis for upper half frame curves only.

#### Format:

```nastran
YTMIN ymin
```

#### Example:

```nastran
YTMIN 100
```

```text
┌───────────┬─────────────────────────────────────┐
│ Describer │ Meaning                             │
├───────────┼─────────────────────────────────────┤
│ ymin      │ Minimum value on the y-axis (Real). │
└───────────┴─────────────────────────────────────┘
```
#### Remarks:

1. YTMIN applies to upper half frame curves only.

2. If YTMIN is not specified then the minimum value is set to the lowest value of y.

3. See related command XTMIN.

