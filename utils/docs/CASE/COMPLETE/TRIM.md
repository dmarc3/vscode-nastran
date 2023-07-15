## [TRIM (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.TRIM.Case.xhtml) - Aerodynamic Trim Variable Constraint Selection

Selects trim variable constraints in static aeroelastic response.

#### Format:

```nastran
TRIM = n
```

#### Example:

```nastran
TRIM=1
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a TRIM Bulk Data entry (Integer  >  0). │
└───────────┴──────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. Aerodynamic extra points (trim variables) not constrained by a TRIM Bulk Data entry will be free during the static aeroelastic response solution.
