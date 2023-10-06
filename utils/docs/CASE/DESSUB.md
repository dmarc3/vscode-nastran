## [DESSUB (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.DESSUB.Case.xhtml) - Design Constraints Request at the Subcase Level

Selects the design constraints to be used in a design optimization task for the current subcase.

#### Format:

```nastran
DESSUB=n
```

#### Examples:

```nastran
DESSUB=10
DESS=25
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a set of DCONSTR and/or a DCONADD Bulk Data entry identification number │
│           │ (Integer  >  0).                                                                              │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. A DESSUB Case Control command is required for every subcase for which constraints are to be applied. An exception to this is ‘global constraints’, which are selected by the DESGLB Case Control command.
2. All DCONSTR and DCONADD Bulk Data entries with the selected set ID will be used.
3. Constraints cannot be applied to the FRMASS, FATIGUE, or FRFTG response using the DESSSUB command. Use the DESGLB command instead.
