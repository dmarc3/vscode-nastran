## [XVALUE PRINT SKIP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.XVALUE.PRINT.SKIP.xhtml) - Print Values on X-Axis Tic Marks

Specifies how often to print the x-values alongside the x-axis tic marks.

#### Format:

```nastran
XVALUE PRINT SKIP  xvps
```

#### Example:

```nastran
XVAL 5
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ xvps      │ Number of tic marks to be skipped between labeled tic marks with their corresponding values │
│           │ (Integer  >  0).                                                                            │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remark:

1. XVALUE applies to all curves.
