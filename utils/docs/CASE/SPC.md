## [SPC (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SPC.Case.xhtml) - Single Point Constraint Set Selection

Selects a single point constraint set to be applied.

#### Format:

```nastran
SPC = n
```

#### Example:

```nastran
SPC=10
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a single-point constraint that appears on an SPC, SPC1, SPC2 (SOL  │
│           │ 700), FRFSPC1 (in FRF Based Assembly or FBA process) or SPCADD Bulk Data entry (Integer  >  0). │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. In cyclic symmetry analysis, this command must appear above the first SUBCASE command.
2. Multiple boundary conditions are only supported in SOLs 101, 103, 105, 145, and 200. Multiple boundary conditions are not allowed for upstream superelements. The BC command must be specified to define multiple boundary conditions for the residual structure in SOLs 103, 105, 145, and 200.
