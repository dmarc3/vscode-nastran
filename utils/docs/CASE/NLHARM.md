## [NLHARM (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.NLHARM.Case.xhtml) - Nonlinear Harmonic Analysis Parameter Selection

Selects the parameters used for nonlinear harmonic response analysis.

#### Format:

```nastran
NLHARM = n
```

#### Example:

```nastran
NLHARM = 79
```

```text
┌───────────┬─────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                     │
├───────────┼─────────────────────────────────────────────────────────────┤
│ n         │ Set identification of NLHARM Bulk Data entry. (Integer > 0) │
└───────────┴─────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry references the NLHARM Bulk Data entry which defines the number of subharmonics and harmonics to be used in the analysis as well as referencing the excitation frequency specification.
2. Gyroscopic terms are included if the RGYRO Case Control command and Bulk Data entry are specified. If gyroscopic terms are desired, the user must specify the constant rooter speed (ASYNC option) for the reference rotor.
