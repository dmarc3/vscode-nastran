## [DESVAR (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.DESVAR.Case.xhtml) - Design Variable Selection

Selects a set of DESVAR entries for the design set to be used.

#### Format:

![casecontrol4a00846.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00846.jpg?_LANG=enus)  

#### Example:

```nastran
DESVAR=10
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a previously appearing SET command (Integer  >  0). Only DESVAR Case Control │
│           │ commands with IDs that appear on this SET command will be used in the SOL 200 design task.         │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only one DESVAR Case Control command may appear in the Case Control Section and should appear above all subcase commands.
2. The DESVAR Case Control command is optional. If it is absent, all DESVAR Bulk Data entries will be used.
