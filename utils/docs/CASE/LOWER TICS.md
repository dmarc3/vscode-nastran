## [LOWER TICS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.LOWER.TICS.xhtml) - Controls Drawing of Tic Marks on Lower Edge

Specifies how to draw tic marks on lower edge.

#### Format:

```nastran
LOWER TICS tic
```

#### Example:

```nastran
LOWER -1
```

```text
┌────────────┬──────────────────────────────────────────────────────────┐
│ Describers │ Meaning                                                  │
├────────────┼──────────────────────────────────────────────────────────┤
│ tic        │ Specifies how to draw tic marks (Integer; Default =  1). │
├────────────┼──────────────────────────────────────────────────────────┤
│ -1         │ Draw tic marks only.                                     │
├────────────┼──────────────────────────────────────────────────────────┤
│ 0          │ Do not draw tic marks or associated values.              │
├────────────┼──────────────────────────────────────────────────────────┤
│ 1          │ Draw tic marks and associated values (Default).          │
└────────────┴──────────────────────────────────────────────────────────┘
```

#### Remarks:

1. LOWER TICS applies to all curves.

2. See Remark 2 under ALLEDGE TICS.
