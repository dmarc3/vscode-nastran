## [BCHANGE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.BCHANGE.Case.xhtml) - Contact Bodies Definition Change Selection

Selects the changes of the definition of contact bodies in SOL 400.

#### Format:

```nastran
BCHANGE=n
```

#### Example:

```nastran
BCHANGE=10
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of the BCHANGE Bulk Data entry, see Remark 2. (Integer > 0) │
└───────────┴────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. This command is used only in SOL 400 for 3D Contact analysis.
2. The default SID of the BCHANGE Bulk Data entry is defined on the BCONTACT Case Control command if applicable; however, the SID on the BCHANGE Case Control command can overwrite it.
