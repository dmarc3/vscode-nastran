## [SDCSV](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SDCSV.xhtml)

Default    = 0

Dictates what stability derivative information is to be stored on a CSV (comma separated values) file in a SOL 144 (static aeroelasticity) task. The unit the CSV file is stored to is specified by PARAM, SDUNIT, n. SDCSV has the following options which can be summed to select multiple options: 

```text
┌────┬───────────────────────┐
│  0 │ No output             │
├────┼───────────────────────┤
│  1 │ Rigid aero            │
├────┼───────────────────────┤
│  2 │ Rigid Splined         │
├────┼───────────────────────┤
│  4 │ Elastic restrained    │
├────┼───────────────────────┤
│  8 │ Elastic unrestrained  │
├────┼───────────────────────┤
│ 16 │ Intertial restrained  │
├────┼───────────────────────┤
│ 32 │ Inertial unrestrained │
└────┴───────────────────────┘
```
