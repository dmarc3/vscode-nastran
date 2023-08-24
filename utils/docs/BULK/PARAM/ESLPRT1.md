## [ESLPRT1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.ESLPRT1.xhtml)

Default = 7

ESLPRT1 specifies what type of results to be written to the .f06 and to .xdb (or .op2). It may take any of the following base values or a combination of these base values:

```text
┌───┬───────────────────────────────────────────────────────────────────────────┐
│ 0 │ write no data                                                             │
├───┼───────────────────────────────────────────────────────────────────────────┤
│ 1 │ write the nonlinear analysis results to the .f06 file.                    │
├───┼───────────────────────────────────────────────────────────────────────────┤
│ 2 │ write the optimization data controlled by P1 and P2 to the .f06 file.     │
├───┼───────────────────────────────────────────────────────────────────────────┤
│ 4 │ save the nonlinear analysis results to the .xdb (or .op2) file.           │
├───┼───────────────────────────────────────────────────────────────────────────┤
│ 8 │ save the linear response optimization results to the .xdb (or .op2) file. │
└───┴───────────────────────────────────────────────────────────────────────────┘
```
For example, by default, results from the nonlinear analysis, the optimization data will be written to the .f06 file and result data will be written to .xdb or .op2.

