## [LEFT TICS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.LEFT.TICS.xhtml) - Controls Drawing of Tic Marks on Left Edge

Specifies how to draw tic marks on left edge of whole frame curves.

#### Format:

```nastran
LEFT TICS tic
```

#### Example:

```nastran
LEFT -1
```

```text
┌───────────┬───────────────────────────────────────────────────┬─────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│ tic       │ Specifies how to draw tic marks (Integer; Default │                                                 │
│           │  =  1).                                           │                                                 │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ -1                                                │ Draw tic marks only.                            │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ 0                                                 │ Do not draw tic marks or associated values.     │
├───────────┼───────────────────────────────────────────────────┼─────────────────────────────────────────────────┤
│           │ 1                                                 │ Draw tic marks and associated values (Default). │
└───────────┴───────────────────────────────────────────────────┴─────────────────────────────────────────────────┘
```

#### Remarks:

1. LEFT TICS applies to whole frame curves only.

2. See Remark 2 under ALLEDGE TICS.

3. See related command RIGHT TICS.
