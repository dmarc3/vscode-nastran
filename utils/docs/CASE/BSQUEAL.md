## [BSQUEAL (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.BSQUEAL.Case.xhtml) - Brake Squeal Analysis Data Selection

Selects data for brake squeal analysis in SOL 400.

#### Format:

```nastran
BSQUEAL= n
```

#### Example:

```nastran
BSQUEAL=10
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a BSQUEAL Bulk Data entry (Integer  >  0). │
└───────────┴─────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. This command is used only in SOL 400 for brake squeal analysis with 3D Contact.
2. This command is not available with segment-to-segment contact.
