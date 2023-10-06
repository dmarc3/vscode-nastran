## [UNGLUE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.UNGLUE.Case.xhtml) - Contact Body Unglue Selection

Selects the grids should use standard contact instead of glued contact in glued bodies in SOL 400.

#### Format:

```nastran
UNGLUE=n
```

#### Example:

```nastran
UNGLUE=10
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of the UNGLUE Bulk Data entry (Integer > 0). │
└───────────┴────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command is used only in SOL 400 for 3D Contact analysis.
2. The default SID of UNGLUE Bulk Data entry is defined on BCONTACT Case Control command if applicable; however, the SID on UNGLUE Case Control command can overwrite it.
