## [ROTBENT (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ROTBENT.Case.xhtml) - Specifying rotor initial deformation and requesting outputs of initial deformation

Specifies rotor the initial deformation (kink and offset) parameters.

Requests bent rotor initial deformation and added constraints, such as SPOINTs, MPCs, SPCs and SPCDs due to ROTBENT data bulk entry.

#### Format:

![casecontrol4a01282.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01282.jpg?_LANG=enus)  

#### Example:

```nastran
ROTBENT = 10
ROTBENT (PRINT)= 10
ROTBENT (PUNCH) = 10
ROTBENT (PRINT, PLOT, PUNCH) = 10
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                        │
├──────────────┼────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                │
│ (blank)      │                                                                │
├──────────────┼────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                │
├──────────────┼────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                │
├──────────────┼────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or    │
│ the POST Case Control command), while the .h5 binary database file will be    │
│ generated with “HDF5OUT” entry specified in Bulk Data Section. Both .op2 and  │
│ .h5 file can be created simultaneously. Note .xdb file is being deprecated.   │
├──────────────┼────────────────────────────────────────────────────────────────┤
│ n            │ Identification number in Bulk Data ROTBENT Entry (Integer >0). │
└──────────────┴────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. ROTBENT option is only supported for SOL400 analysis. ROTBENT analysis will require 2 step analysis, with step 1 being NLSTATIC and step 2 being rotordynamics analysis.
