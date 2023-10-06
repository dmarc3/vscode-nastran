## [BCMOVE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.BCMOVE.Case.xhtml) - Contact Body Movement Selection

Selects movement of bodies in contact in SOL 400.

#### Format:

```nastran
BCMOVE=n
```

#### Example:

```nastran
BCMOVE=10
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                         │
├───────────┼─────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of the BCMOVE Bulk Data entry. (Integer > 0) │
└───────────┴─────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. This command is used only in SOL 400 for 3D Contact analysis.
2. The default SID of the BCMOVE Bulk Data entry is defined on the BCONTACT Case Control command if applicable; however, the SID on the BCHANGE Case Control command can overwrite it.
