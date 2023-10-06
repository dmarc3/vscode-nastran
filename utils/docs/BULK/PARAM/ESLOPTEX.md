## [ESLOPTEX](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ESLOPTEX.xhtml)

Default = 0

This parameter allows the user to perform an ESLNRO job at a targeted exit point. The allowable values of ESLOPTX are listed below with their description.

```text
┌───┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ 0 │ Do not exit. Proceed with ESLNRO nonlinear response optimization.                               │
├───┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1 │ Exit after the initialization of the analysis and design model but before nonlinear FE analysis │
│   │ begins.                                                                                         │
├───┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2 │ Exit after nonlinear FE analysis ends.                                                          │
├───┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 3 │ Exit after design constraint evaluation and screening.                                          │
└───┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
