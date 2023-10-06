## [NONLINEAR (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.NONLINEAR.Case.xhtml) - Nonlinear Dynamic Load Set Selection

Selects nonlinear dynamic load set for transient response or nonlinear harmonic response problems.

#### Format:

```nastran
NONLINEAR = n
```

#### Example:

```nastran
NONLINEAR=75
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of NOLINi, NLRGAPor NLRSFD Bulk Data entry (Integer  >  0). │
└───────────┴────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. Nonlinear force Bulk Data entries (NOLINi, NLRGAP or NLRSFD) will be ignored unless selected in the Case Control Section.
2. At least one degree of freedom must be defined on a nonlinear force entry and called up by the NONLINEAR Case Control command in nonlinear harmonic response.
