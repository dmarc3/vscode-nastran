## [NLPARM (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.NLPARM.Case.xhtml) - Nonlinear Static Analysis Parameter Selection

Selects the parameters used for nonlinear static analysis.

#### Format:

```nastran
NLPARM = n
```

#### Example:

```nastran
NLPARM=10
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of NLPARM and NLPCI Bulk Data entries (Integer  >  0). │
└───────────┴───────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. NLPARM and NLPCI Bulk Data entries will not be used unless selected.
2. NLPARM may appear above or within a subcase.
3. If NLSTEP specified, NLPARM command will be ignored.
