## [YBVALUE PRINT SKIP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.YBVALUE.PRINT.SKIP.xhtml) - Print Values on Y Axis Tic Marks

Specifies how often to print the y-values alongside the y-axis tic marks applies on lower half frame curves only.

#### Format:

```nastran
YBVALUE PRINT SKIP  yvps
```

#### Example:

```nastran
YBVAL 5
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

1. YBVALUE applies to lower half frame curves only.

