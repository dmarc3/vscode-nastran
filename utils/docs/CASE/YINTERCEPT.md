## [YINTERCEPT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YINTERCEPT.xhtml) - Location of Y Axis on X Axis

Specifies the location of the y-axis on the x-axis for whole frame curves only.

#### Format:

```nastran
YINTERCEPT  yi
```

#### Example:

```nastran
YINT  50
```

```text
┌───────────┬─────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                 │
├───────────┼─────────────────────────────────────────────────────────┤
│ yi        │ Location of y-axis on the x-axis. (Real; Default = 0.0) │
└───────────┴─────────────────────────────────────────────────────────┘
```
#### Remark:

1. YINTERCEPT applies to lower half frame curves only.

