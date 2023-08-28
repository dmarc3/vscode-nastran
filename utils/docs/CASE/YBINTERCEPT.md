## [YBINTERCEPT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YBINTERCEPT.xhtml) - Location of Y Axis on X Axis

Specifies the location of the y-axis on the x-axis for lower half frame curves only.

#### Format:

```nastran
YBINTERCEPT  ybi
```

#### Example:

```nastran
YBINT 50
```

```text
┌───────────┬───────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                   │
├───────────┼───────────────────────────────────────────────────────────┤
│ ybi       │ Location of y-axis on the x-axis (Real; Default  =  0.0). │
└───────────┴───────────────────────────────────────────────────────────┘
```
#### Remark:

1. YBINTERCEPT applies to lower half frame curves only.

