## [TALL EDGE TICS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.TALL.EDGE.TICS.xhtml) - Controls Drawing of Tic Marks on All Edges

Specifies how to draw tic marks on all edges of the upper half of the frame.

#### Format:

```nastran
TALL EDGE TICS tic
```

#### Example:

```nastran
TALL -1
```

```text
┌────────────┬───────────────────────────────────────────────────────────┐
│ Describers │ Meaning                                                   │
├────────────┼───────────────────────────────────────────────────────────┤
│ tic        │ Specifies how to draw tic marks (Integer; Default  =  0). │
├────────────┼───────────────────────────────────────────────────────────┤
│ -1         │ Draw tic marks only.                                      │
├────────────┼───────────────────────────────────────────────────────────┤
│ 0          │ Do not draw tic marks or associated values (Default).     │
├────────────┼───────────────────────────────────────────────────────────┤
│ 1          │ Draw tic marks and associated values.                     │
└────────────┴───────────────────────────────────────────────────────────┘
```

#### Remarks:

1. TALL EDGE TICS applies to upper half frame curves only.

2. See Remark 2 under ALLEDGE TICS.
