## [TCURVE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4c/TOC.TCURVE.xhtml) - Curve Title

Defines a character string that will appear at the top of the plot frame.

#### Format:

```nastran
TCURVE   ctitle
```

#### Example:

```nastran
TCUR  RIGHT WING -- LOAD CASE 3
```

```text
┌───────────┬──────────────────────────────────────────────────────┐
│ Describer │ Meaning                                              │
├───────────┼──────────────────────────────────────────────────────┤
│ ctitle    │ Any character string (Character; Default  =  blank). │
└───────────┴──────────────────────────────────────────────────────┘
```
#### Remark:

1. TCURVE may not be continued to the next command line.

