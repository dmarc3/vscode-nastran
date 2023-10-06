## [MAXLINES (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MAXLINES.Case.xhtml) - Maximum Number of Output Lines

Sets the maximum number of output lines.

#### Format:

```nastran
MAXLINES=n
```

#### Example:

```nastran
MAXLINES=150000
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Maximum number of output lines allowed (Integer  >  0; Default  =  999999999). │
└───────────┴────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If MAXLINES is exceeded, the program will terminate.
2. MAXLINES may also be specified on the NASTRAN statement with SYSTEM(14). See the  .
3. The code counts the number of pages and assumes that the number of lines output is the number of lines allowed per page, specified by the “LINES” command, times the number of pages.
