## [NSM (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.NSM.Case.xhtml) - Selects Nonstructural Mass Set Entries

Selects nonstructural mass (NSM) set for mass generation.

#### Format:

```nastran
NSM = n
```

#### Example:

```nastran
NSM = 5
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a nonstructural mass that appears on a NSM, NSML, NSM1, NSML1, or │
│           │ NSMADD Bulk Data entry (Integer > 0).                                                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. Different NSM sets may be selected for superelements and residuals but within a superelement or residual it may not change within the subcase structure.
