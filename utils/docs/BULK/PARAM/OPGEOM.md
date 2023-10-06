## [OPGEOM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.OPGEOM.xhtml)

Default    = -1

OPGEOM > -1 prints the aerodynamic set definitions for all degrees-of-freedom. To print structural degree-of-freedom sets, please see   USETPRT  . 

```text
┌──────────┬─────────────────────┬─────────┐
│ Sequence │ Print               │ USETPRT │
├──────────┼─────────────────────┼─────────┤
│ None     │ None (Default)      │ -1      │
├──────────┼─────────────────────┼─────────┤
│          │ Row sort only       │ 0       │
├──────────┼─────────────────────┼─────────┤
│ Internal │ Column sort only    │ 1       │
├──────────┼─────────────────────┼─────────┤
│          │ Row and Column sort │ 2       │
├──────────┼─────────────────────┼─────────┤
│          │ Row sort only       │ 10      │
├──────────┼─────────────────────┼─────────┤
│ External │ Column sort only    │ 11      │
├──────────┼─────────────────────┼─────────┤
│          │ Row and Column sort │ 12      │
└──────────┴─────────────────────┴─────────┘
```
The  USETPRT  parameter description contains further explanation that is relevant to OPGEOM as well.

