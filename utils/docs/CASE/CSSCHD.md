## [CSSCHD (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.CSSCHD.Case.xhtml) - Aerodynamic Control Surface Schedule

Selects control system schedule information.

#### Format:

```nastran
CSSCHD = n
```

#### Example:

```nastran
CSSCHD=10
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a control system schedule that appears on a CSSCHD Bulk Data entry. │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. One or more CSSCHD Bulk Data entries can be invoked by this Case Control command.
