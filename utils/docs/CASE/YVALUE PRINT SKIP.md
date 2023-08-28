## [YVALUE PRINT SKIP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YVALUE.PRINT.SKIP.xhtml) - Print Values on Y Axis Tic Marks

Specifies how often to print the y-values alongside the y-axis tic marks applies on whole frame curves only.

#### Format:

```nastran
YVALUE PRINT SKIP  yvps
```

#### Example:

```nastran
YVAL 5
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

1. YVALUE applies to whole frame curves only.

