## [GUST (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.GUST.Case.xhtml) - Aerodynamic Gust Load Requests

Selects the gust field in an aeroelastic response problem.

#### Format:

```nastran
GUST=n
```

#### Example:

```nastran
GUST=73
```

```text
┌───────────┬───────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                       │
├───────────┼───────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a GUST Bulk Data entry (Integer  >  0). │
└───────────┴───────────────────────────────────────────────────────────────┘
```

#### Remark:

1. The choice of transient or frequency response GUST depends upon the type of TLOAD or RLOAD referenced on the selected GUST entry.
