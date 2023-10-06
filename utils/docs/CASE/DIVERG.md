## [DIVERG (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.DIVERG.Case.xhtml) - Static Aeroelastic Divergence Request
Selects the divergence parameters in a static aeroelastic divergence problem.
#### Format:

```nastran
DIVERG=n
```

#### Example:

```nastran
DIVERG=70
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                         │
├───────────┼─────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a DIVERG Bulk Data entry (Integer  >  0). │
└───────────┴─────────────────────────────────────────────────────────────────┘
```
#### Remark:

1. Static aeroelastic divergence analysis can be performed only in SOLs 144, 200 and 400.
