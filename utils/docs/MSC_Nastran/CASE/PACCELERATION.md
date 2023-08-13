## [PACCELERATION (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.PACCELERATION.Case.xhtml) - Particle Acceleration Output Request for SOL 108/111

Request the form and frequency steps of particle acceleration output.

#### Format:

![casecontrol4a01242.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01242.jpg?_LANG=enus)  

#### Example:

```nastran
PACCELERATION = ALL
SET 20 = 104 THRU 204, 1005 THRU 1901
SET 50 = 105.0, 250.0, 310.0
PACCE (PUNCH, SOLUTION=50) = 20
```

```text
┌──────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                 │
│ (blank)      │                                                                                                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command),     │
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both │
│ .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                           │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REAL or IMAG │ Requests rectangular format (real and imaginary). Use of either REAL or IMAG yields the same    │
│              │ output.                                                                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase). Phase output is in degrees.                        │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SOLUTION     │ Selects a set of excitation frequencies for which the particle accelerations will be processed. │
│              │ The default is all excitation frequencies. See Remark 3.                                        │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ setf         │ Set identification of excitation frequencies.                                                   │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ setg         │ Set identification of grid points on wetted surface. See Remark 2.                              │
└──────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry will be available only for fluid-structure coupling problem. The particle acceleration is input force vector to each domain via wetted surface in frequency response analysis.
2. Both fluid and structure grid points can be selected. The particle accelerations of the grid points not on wetted surface will be zero.
3. The selected frequency must be part of the excitation frequencies. If not, the nearest excitation frequency will be selected.
4. Only SORT1 form is supported.
