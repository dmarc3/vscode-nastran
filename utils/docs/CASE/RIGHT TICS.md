## [RIGHT TICS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.RIGHT.TICS.xhtml) - Controls Drawing of Tic Marks on Right Edge

Specifies how to draw tic marks on right edge of the frame.

#### Format:

```nastran
RIGHT TICS tic
```

#### Example:

```nastran
RIGHT -1
```

```text
┌────────────┬───────────────────────────────────────────────────────────┐
│ Describers │ Meaning                                                   │
├────────────┼───────────────────────────────────────────────────────────┤
│ tic        │ Specifies how to draw tic marks (Integer; Default  =  1). │
├────────────┼───────────────────────────────────────────────────────────┤
│ -1         │ Draw tic marks only.                                      │
├────────────┼───────────────────────────────────────────────────────────┤
│ 0          │ Do not draw tic marks or associated values.               │
├────────────┼───────────────────────────────────────────────────────────┤
│ 1          │ Draw tic marks and associated values (Default).           │
└────────────┴───────────────────────────────────────────────────────────┘
```

#### Remarks:

1. RIGHT TICS applies to whole frame curves only.

2. See Remark 2 under ALLEDGE TICS.

3. See related command LEFT TICS.
