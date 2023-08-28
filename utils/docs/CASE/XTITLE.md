## [XTITLE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.XTITLE.xhtml) - X-Axis Title

Defines a character string that will appear along the x-axis.

#### Format:

```nastran
XTITLE   xtit
```

#### Example:

```nastran
XTIT   RIGHT WING CASE 3 - TIME
```

```text
┌───────────┬──────────────────────────────────────────────────────┐
│ Describer │ Meaning                                              │
├───────────┼──────────────────────────────────────────────────────┤
│ xtit      │ Any character string (Character; Default  =  Blank). │
└───────────┴──────────────────────────────────────────────────────┘
```
#### Remarks:

1. XTITLE may not be continued to the next command line.

2. XTITLE applies to all curves.

