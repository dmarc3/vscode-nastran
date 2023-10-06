## [AUXMODEL (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.AUXMODEL.Case.xhtml) - Auxiliary Model Identification Number

References an auxiliary model for generation of boundary shapes in shape optimization.

#### Format:
```nastran
AUXMODEL=n
```

#### Examples:
```nastran
AUXMODEL=4
AUXM=4
```

```text
┌───────────┬────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                │
├───────────┼────────────────────────────────────────────────────────┤
│ n         │ Auxiliary model identification number. (Integer  >  0) │
└───────────┴────────────────────────────────────────────────────────┘
```
#### Remarks:

1. AUXMODEL references a particular auxiliary model for analysis and may only be specified in the auxiliary model Case Control Section.
2. See the BEGIN BULK delimiter for the Bulk Data definition of an auxiliary model.
