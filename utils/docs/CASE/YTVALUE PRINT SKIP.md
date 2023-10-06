## [YTVALUE PRINT SKIP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YTVALUE.PRINT.SKIP.xhtml) - Print Values on Y Axis Tic Marks

Specifies how often to print the y-values alongside the y-axis tic marks applies on upper half frame curves only.

#### Format:

```nastran
YTVALUE PRINT SKIP  yvps
```

#### Example:

```nastran
YTVAL 5
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ yvps      │ Number of tic marks to be skipped between labeled tic marks with their corresponding values │
│           │ (Integer  >  0).                                                                            │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remark:

1. YTVALUE applies to upper half frame curves only.

