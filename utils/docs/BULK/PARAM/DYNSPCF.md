## [DYNSPCF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.DYNSPCF.xhtml)

Default    = NEW

PARAM,DYNSPCF,NEW requests that mass and damping coupled to ground be included in the SPCForce calculations for the linear dynamic solutions:  SOLs 103, 107 through 112, 115, 118, 145, 146, and 200.  OLD neglects these effects and gives the same SPCForce results obtained in versions prior to Version 68.

```text
┌───────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ Some versions of Dytran have trouble with permanent constraints and issue a bogus error message in │
│       │ the d3hsp file. This is the case for MSC Nastran 2005 r2.                                          │
└───────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
