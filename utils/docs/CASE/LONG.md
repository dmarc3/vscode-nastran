## [LONG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.LONG.xhtml) - Summary Print Control

Controls amount of curve’s summary printout.

#### Format:

![casecontrol4c01473.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/../../../assets/casecontrol4c01473.jpg?_LANG=enus)  

```text
┌────────────┬──────────────────────────────────────────────┐
│ Describers │ Meaning                                      │
├────────────┼──────────────────────────────────────────────┤
│ YES        │ One page for each curve’s summary (Default). │
├────────────┼──────────────────────────────────────────────┤
│ NO         │ Condensed curve summary.                     │
└────────────┴──────────────────────────────────────────────┘
```

#### Remark:

1. If LONG is not specified, then LONG=NO is assumed.
