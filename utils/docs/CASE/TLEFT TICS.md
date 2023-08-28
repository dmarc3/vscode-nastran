## [TLEFT TICS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.TLEFT.TICS.xhtml) - Controls Drawing of Tic Marks on All Edges

Specifies how to draw tic marks on the left edge of the upper half of the frame.

#### Format:

```nastran
TLEFT TICS tic
```

#### Example:

```nastran
TLEFT -1
```

```text
┌────────────┬─────────────────────────────────────────────────────────┐
│ Describers │ Meaning                                                 │
├────────────┼─────────────────────────────────────────────────────────┤
│ tic        │ Specifies how to draw tic marks (Integer; Default = 1). │
├────────────┼─────────────────────────────────────────────────────────┤
│ -1         │ Draw tic marks only.                                    │
├────────────┼─────────────────────────────────────────────────────────┤
│ 0          │ Do not draw tic marks or associated values.             │
├────────────┼─────────────────────────────────────────────────────────┤
│ 1          │ Draw tic marks and associated values (Default).         │
└────────────┴─────────────────────────────────────────────────────────┘
```
#### Remarks:

1. TLEFT TICS applies to upper half frame curves only.

2. See Remark 2 under ALLEDGE TICS.

3. See related command TRIGHT TICS.
