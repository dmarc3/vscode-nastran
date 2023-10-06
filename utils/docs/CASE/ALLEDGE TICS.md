## [ALLEDGE TICS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.ALLEDGE.TICS.xhtml) - Controls Drawing of Tic Marks on All Edges

Specifies how to draw tic marks on all edges of the frame.

#### Format:

```nastran
ALLEDGE TICS tic
```

#### Example:

```nastran
ALLEDGE -1
```

```text
┌───────────┬───────────────────────────────────────────┬────────────────────────────────────────────┐
│ Describer │ Meaning                                   │                                            │
├───────────┼───────────────────────────────────────────┼────────────────────────────────────────────┤
│ tic       │ Specifies how to draw tic marks (Integer, │                                            │
│           │ Default =  0).                            │                                            │
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

1. ALLEDGE TICS applies to whole frame curves only.

2. To determine if on any given edge (a) tic marks will be drawn without values, (b) no tic marks or values will be drawn, or (c) tic marks with values will be drawn, the following sum must be computed by the user. Add the tic values of the edge in question to its associated ALLEDGE TICS, TALL EDGE TICS, or BALL EDGE TICS tic values. If the resulting value is less than zero, tic marks will be drawn without values. If the resulting value is zero, no tic marks or values will be drawn. If the resulting value is greater than zero, tic marks with values will be drawn. The user should be careful in the use of the ALLEDGE TICS, TALL EDGE TICS, or BALL EDGE TICS commands. For example, the use of only the ALLEDGE TICS = -1 command will result in no tic marks or values being drawn, since the default values for individual edges is +1. Tic values input may only be -1, 0, or 1.

