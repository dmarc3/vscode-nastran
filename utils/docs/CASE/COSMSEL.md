## [COSMSEL (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.COSMSEL.Case.xhtml) - Select CoSIM Service

Activates Co-Simulation service and select the definition of co-simulation.

#### Format:

```nastran
COSMSEL = n
```

#### Example:

```nastran
COSMSEL = 21
```

```text
┌───────────┬─────────────────────────────────────────────────────┐
│ Describer │ Meaning                                             │
├───────────┼─────────────────────────────────────────────────────┤
│ n         │ Identification number of a COSMSEL Bulk Data entry. │
└───────────┴─────────────────────────────────────────────────────┘
```

#### Remark:

1. COSMSEL is recognized in SOL 400 only.
