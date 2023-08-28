## [BRIGHT TICS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.BRIGHT.TICS.xhtml) - Controls Drawing of Tic Marks on Right Edge

Specifies how to draw tic marks on right edge of lower half of frame.

#### Format:

```nastran
BRIGHT TICS tic
```

#### Example:

```nastran
BRIGHT TICS -1
```

```text
┌───────────┬───────────────────────────────────────────┬─────────────────────────────────────────────────┐
│ Describer │ Meaning                                   │                                                 │
├───────────┼───────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ tic       │ Specifies how to draw tic marks (Integer; │                                                 │
│           │ Default  =  1).                           │                                                 │
├───────────┼───────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ -1                                        │ Draw tic marks only.                            │
├───────────┼───────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ 0                                         │ Do not draw tic marks or associated values.     │
├───────────┼───────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ 1                                         │ Draw tic marks and associated values (Default). │
└───────────┴───────────────────────────────────────────┴─────────────────────────────────────────────────┘
```

#### Remarks:

1. BRIGHT TICS applies to lower frame curves only.

2. See Remark 2 under ALLEDGE TICS.
