## [SNORMPRT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SNORMPRT.xhtml)

Default    = -1

PARAM,SNORMPRT,>0 writes the grid point normals of the model in the basic coordinate system to the .f06 and/or .pch files.

```text
┌───────────┬──────────────────────────────────────────────────┐
│ SNORMPRT  │ Switch to Print Out Normals                      │
├───────────┼──────────────────────────────────────────────────┤
│ <= 0      │ No output                                        │
├───────────┼──────────────────────────────────────────────────┤
│ 1         │ Print out to the punch file (.pch)               │
├───────────┼──────────────────────────────────────────────────┤
│ 2         │ Print out to the print file (.f06)               │
├───────────┼──────────────────────────────────────────────────┤
│ 3         │ Print out to the punch (.pch) and print file     │
│           │ (.f06)                                           │
└───────────┴──────────────────────────────────────────────────┘
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
< 0     No ou...
2       Print...
3       Print...
```
