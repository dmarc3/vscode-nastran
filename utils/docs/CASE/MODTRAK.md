## [MODTRAK (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MODTRAK.Case.xhtml) - Mode Tracking Request

Selects mode tracking options in design optimization (SOL 200).

#### Format:

```nastran
MODTRAK = n
```

#### Example:

```nastran
MODTRAK=100
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                          │
├───────────┼──────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a MODTRAK Bulk Data entry (Integer  >  0). │
└───────────┴──────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. Selection of a MODTRAK Bulk Data entry with the MODTRAK Case Control command activates mode tracking for the current subcase. This request is limited to normal modes subcases (ANALYSIS   =   MODES) in design optimization (SOL 200).
