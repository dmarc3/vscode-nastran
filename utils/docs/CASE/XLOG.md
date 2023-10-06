## [XLOG](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.XLOG.xhtml) - Logarithmic or Linear X-Axis

Selects logarithmic or linear x-axis.

#### Format:

![casecontrol4c01483.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/../../../assets/casecontrol4c01483.jpg?_LANG=enus)

```text
┌────────────┬─────────────────────────────────┐
│ Describers │ Meaning                         │
├────────────┼─────────────────────────────────┤
│ YES        │ Plot a logarithmic x-axis.      │
├────────────┼─────────────────────────────────┤
│ NO         │ Plot a linear x-axis (Default). │
└────────────┴─────────────────────────────────┘
```

#### Remarks:

1. XLOG applies to all curves.

2. The default value for tic division interval depends on the number of log cycles. The default values for tic divisions are given as follows but will range over whole cycles:

```text
┌───────────┬────────────────────────────────┐
│ Number of │ Intermediate Values            │
│ Cycles    │                                │
├───────────┼────────────────────────────────┤
│ 1, 2      │ 2., 3., 4., 5., 6., 7., 8., 9. │
├───────────┼────────────────────────────────┤
│ 3         │ 2., 3., 5., 7., 9.,            │
├───────────┼────────────────────────────────┤
│ 4         │ 2., 4., 6., 8.,                │
├───────────┼────────────────────────────────┤
│ 5         │ 2., 5., 8.                     │
├───────────┼────────────────────────────────┤
│ 6, 7      │ 3., 6.                         │
├───────────┼────────────────────────────────┤
│ 8, 9, 10  │ 3.                             │
└───────────┴────────────────────────────────┘
```
