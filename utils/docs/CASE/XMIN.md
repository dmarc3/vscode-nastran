## [XMIN](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.XMIN.xhtml) - Minimum X-Axis Value

Specifies the minimum value on the x-axis.

#### Format:

```nastran
XMIN xmin
```

#### Example:

```nastran
XMIN 100.
```

```text
┌───────────┬─────────────────────────────────────┐
│ Describer │ Meaning                             │
├───────────┼─────────────────────────────────────┤
│ xmin      │ Minimum value on the x-axis (Real). │
└───────────┴─────────────────────────────────────┘
```
#### Remarks:

1. XMIN applies to all curves.

2. If XMIN is not specified, then the minimum value is set to the lowest value of x.

3. See related commands XMAX, YMIN, and YMAX.
