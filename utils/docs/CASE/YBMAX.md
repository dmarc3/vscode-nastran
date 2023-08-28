## [YBMAX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YBMAX.xhtml) - Maximum Y Axis Value

Specifies the maximum value on the y-axis for lower half frame curves only.

#### Format:

```nastran
YBMAX ymax
```

#### Example:

```nastran
YBMAX 100
```

```text
┌───────────┬─────────────────────────────────────┐
│ Describer │ Meaning                             │
├───────────┼─────────────────────────────────────┤
│ ymax      │ Maximum value on the y-axis (Real). │
└───────────┴─────────────────────────────────────┘
```
#### Remarks:

1. YBMAX applies to lower half frame curves only.

2. If YBMAX is not specified, then the maximum value is set to the highest value of y.

3. See related command XBMAX.

