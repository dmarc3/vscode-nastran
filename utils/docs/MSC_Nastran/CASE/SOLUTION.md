## [SOLUTION (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SOLUTION.Case.xhtml) - Solution ID Selection

Selects the solution ID for a 3 rd  step external superelement data recovery restart in SOL 400.

#### Format:

```nastran
SOLUTION = n
```

#### Example:

```nastran
SOLUTION=10
```

```text
┌───────────┬─────────────────────────────────┐
│ Describer │ Meaning                         │
├───────────┼─────────────────────────────────┤
│ n         │ Solution identification number. │
└───────────┴─────────────────────────────────┘
```

#### Remarks:

1. SOLUTION command is used only in SOL 400 for 3 rd  step external superelement data recovery restart.
2. See Remark   under EXTDRIN Case Control command’s description for a further explanation and example.
