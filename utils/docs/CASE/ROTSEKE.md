## [ROTSEKE (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ROTSEKE.Case.xhtml) - Rotor Modal Strain and Kinetic Energies Output Request

Requests rotor modal strain and kinetic energies at selected rotors and sort method.

#### Format:

![casecontrol4a01286.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01286.jpg?_LANG=enus)  

#### Examples:

```nastran
SET 50 = 10, 20, 25 — Rotor ID set
ROTSEKE = 50
ROTSEKE (PLOT, MODE) = 50
ROTSEKE (PUNCH, MODE) = ALL
ROTSEKE (PRINT, PUNCH, ROTOR] = 50
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                │
│ (blank)      │                                                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command),    │
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both│
│ .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ** Rotor kinetic and strain energies .f06 in the output file will NOT be generated with PARAM,R OTSEKE, X     │
│ specified in Bulk Data Section, and an UFM will be printed. PARAM,ROTSEK E has been removed from MSC NASTRAN  │
│ release 2021.3                                                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODE or      │ Output will be presented as a tabular listing by mode number.                                  │
│ (blank)      │                                                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ROTOR        │ Output will be presented as a tabular listing by rotor ID according to SET n.                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ All          │ Rotor energies for all rotors will be output.                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification number of a previously appearing SET command. Only rotor IDs that appear on │
│              │ this SET command will be included in the rotor energies output (Integer >0).                   │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. ROTSEKE is only available for direct or modal complex eigenvalue analysis in
SOLs 107/110/200/400.
2. For a model with one rotor only, the strain and kinetic energy percentages will always be 100%.
3. Mode type identification is only for line rotor (ROTORG), and the meaning of two-character mode types are:

```text
┌──────┬──────────────────────────────────────┐
│ FW - │ Forward Whirl                        │
├──────┼──────────────────────────────────────┤
│ FP - │ Partial Forward Whirl                │
├──────┼──────────────────────────────────────┤
│ BW - │ Backward Whirl                       │
├──────┼──────────────────────────────────────┤
│ BP - │ Partial Backward Whirl               │
├──────┼──────────────────────────────────────┤
│ AX - │ Axial Mode                           │
├──────┼──────────────────────────────────────┤
│ TR - │ Torsion Mode                         │
├──────┼──────────────────────────────────────┤
│ BE - │ Pure Bending Mode                    │
├──────┼──────────────────────────────────────┤
│ MX - │ Mixed Whirl Mode                     │
├──────┼──────────────────────────────────────┤
│ NA - │ Unidentified                         │
├──────┼──────────────────────────────────────┤
│ XX - │ Other (static rotor, or 2D/3D rotor) │
└──────┴──────────────────────────────────────┘
```
