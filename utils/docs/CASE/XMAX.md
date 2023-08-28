## [XMAX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.XMAX.xhtml) - Maximum X-Axis Value

Specifies the maximum value on the x-axis.

#### Format:

```nastran
XMAX xmax
```

#### Example:

```nastran
XMAX 100.
```

```text
┌───────────┬─────────────────────────────────────┐
│ Describer │ Meaning                             │
├───────────┼─────────────────────────────────────┤
│ xmax      │ Maximum value on the x-axis. (Real) │
└───────────┴─────────────────────────────────────┘
```
#### Remarks:

1. If XMAX is not specified, then the maximum value is set to the highest value of x.

2. See related commands XMIN, YMIN, and YMAX.
