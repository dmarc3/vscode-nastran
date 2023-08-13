## [FMETHOD (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.FMETHOD.Case.xhtml) - Flutter Analysis Method Parameter Selection

Selects the parameters to be used by the aerodynamic flutter analysis.

#### Format:

```nastran
FMETHOD=n
```

#### Example:

```nastran
FMETHOD=72
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a FLUTTER Bulk Data entry (Integer  >  0). │
└───────────┴─────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. An FMETHOD command is required for flutter analysis.
2. A CMETHOD command is also required for the K-method of flutter analysis.
3. If this entry is being used in SOL 200 in conjunction with flutter design conditions, the METHOD selected on the FLUTTER Bulk Data entry must be “PK” or “PKNL”.
