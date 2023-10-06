## [SUPORT1 (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SUPORT1.Case.xhtml) - Fictitious Support Set Selection

Selects the fictitious support set (SUPORT1 only) to be applied to the model.

#### Format:

```nastran
SUPORT1=n
```

#### Examples:

```nastran
SUPORT1=15
SUPO=4
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of fictitious support set defined on the SUPORT1 Bulk Data entry. See Remark 1. │
│           │ (Integer  >  0).                                                                                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. SUPORT1 Bulk Data entry will not be used unless selected in the Case Control Section by the SUPORT1 command.
2. SUPORT entries will be applied in all subcases without using a Case Control Command to select them.
