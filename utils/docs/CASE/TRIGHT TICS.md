## [TRIGHT TICS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.TRIGHT.TICS.xhtml) - Controls Drawing of Tic Marks on the Right Edge

Specifies how to draw tic marks on all edges of the upper half of the frame.

#### Format:

```nastran
TRIGHT TICS tic
```

#### Example:

```nastran
TRIGHT -1
```

```text
┌────────────┬───────────────────────────────────────────────────────────┐
│ Describers │ Meaning                                                   │
├────────────┼───────────────────────────────────────────────────────────┤
│ tic        │ Specifies how to draw tic marks (Integer; Default  =  1). │
├────────────┼───────────────────────────────────────────────────────────┤
│ -1         │ Draw tic marks only.                                      │
├────────────┼───────────────────────────────────────────────────────────┤
│ 0          │ Do not draw tic marks or associated values.               │
├────────────┼───────────────────────────────────────────────────────────┤
│ 1          │ Draw tic marks and associated values (Default).           │
└────────────┴───────────────────────────────────────────────────────────┘
```

#### Remarks:

1. TRIGHT TICS applies to upper half frame curves only.

2. See Remark 2 under ALLEDGE TICS.

3. See related command TLEFT TICS.
