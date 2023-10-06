## [BALL EDGE TICS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.BALL.EDGE.TICS.xhtml) - Controls Drawing of Tic Marks on Lower Half

Specifies how to draw tic marks on lower half of frame.

#### Format:

```nastran
BALL EDGE TICS tic
```

#### Example:

```nastran
BALL EDGE TICS -1
```

```text
┌───────────┬───────────────────────────────────────────┬────────────────────────────────────────────┐
│ Describer │ Meaning                                   │                                            │
├───────────┼───────────────────────────────────────────┼────────────────────────────────────────────┤
│ tic       │ Specifies how to draw tic marks (Integer, │                                            │
│           │ Default  =  0).                           │                                            │
├───────────┼───────────────────────────────────────────┼────────────────────────────────────────────┤
│           │ -1                                        │ Draw tic marks only.                       │
├───────────┼───────────────────────────────────────────┼────────────────────────────────────────────┤
│           │ 0                                         │ Do not draw tic marks or associated values │
│           │                                           │ (Default).                                 │
├───────────┼───────────────────────────────────────────┼────────────────────────────────────────────┤
│           │ 1                                         │ Draw tic marks and associated values.      │
└───────────┴───────────────────────────────────────────┴────────────────────────────────────────────┘
```

#### Remarks:

1. BALL EDGE TICS applies to lower frame curves only.

2. See Remark 2 under ALLEDGE TICS.

