## [SKINOUT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SKINOUT.xhtml)

Default = NONE

Request that sets of grid and element lists be output for both the fluid and structure at the fluid-structure interface.

```text
┌───────┬────────────────────────────────────────────┐
│ NONE  │ Requests no output of sets.                │
├───────┼────────────────────────────────────────────┤
│ PUNCH │ Requests set output to .pch only.          │
├───────┼────────────────────────────────────────────┤
│ PRINT │ Requests set output to .f06 only.          │
├───────┼────────────────────────────────────────────┤
│ ALL   │ Requests set output to both .pch and .f06. │
└───────┴────────────────────────────────────────────┘
```
See the Case Control command FLSPOUT as an alternative selection.

