## [CMETHOD (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.CMETHOD.Case.xhtml) - Complex Eigenvalue Extraction Method Selection

Selects complex eigenvalue extraction parameters.

#### Format:

```nastran
CMETHOD=n
```

#### Example:

```nastran
CMETHOD=77
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of EIGC (and EIGP) Bulk Data entry (Integer  >  0). │
└───────────┴────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The CMETHOD command must be specified in order to compute complex eigenvalues.
2. See description of the parameter,  , to perform complex eigenvalue analysis in SOL 106.
