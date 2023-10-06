## [LINE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.LINE.Case.xhtml) - Maximum Lines Per Printed Page

Defines the maximum number of output lines per printed page.

#### Format:

```nastran
LINE=n
```

#### Example:

```nastran
LINE=35
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────┤
│ n         │ Maximum number of output lines per page (Integer  >  0; Default  =  50). │
└───────────┴──────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. For 11 inch paper, 50 lines per page is recommended; for 8-1/2 inch paper, 35 lines per page is recommended.
2. The NASTRAN statement keyword NLINES may also be used to set this value. See the   Nastran Statement.
