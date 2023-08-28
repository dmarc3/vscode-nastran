## [GPFORCE (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.GPFORCE.Case.xhtml) - Grid Point Force Output Request

Requests grid point force balance at selected grid points.

#### Format:

![casecontrol4a01030.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01030.jpg?_LANG=enus)  

#### Examples:

```nastran
GPFORCE=ALL
GPFORCE=17
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                    │
│ (blank)      │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command), while  │
│ the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both .op2 and │
│ .h5 file can be created simultaneously. Note .xdb file is being deprecated.                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REAL or IMAG │ Requests rectangular format (real and imaginary) of complex output. Use of either REAL or IMAG     │
│              │ yields the same output. See Remark 14.                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output. Phase output is in degrees. See     │
│              │ Remarks 13. and 14.                                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GE           │ Element appropriate element structural GEi value contribution of force K4 × Uc output in addition  │
│              │ to the standard elastic force output.                                                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G            │ Element appropriate element structural global G value contribution of force K × Uc output in       │
│              │ addition to the standard elastic force output.                                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ B            │ Element appropriate element viscous damping contribution of force B × i × ω × Uc output in         │
│              │ addition to the standard elastic force output.                                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DAMP         │ Element appropriate GE, B, and G will be explicitly output in addition to explicit current elastic │
│              │ force output.                                                                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ M            │ Element appropriate element mass contribution of force M × ω2× Uc output in addition to the        │
│              │ standard elastic force output.                                                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALLDLDS      │ Element appropriate GE, B, G, and M will be output in addition to the standard elastic force       │
│              │ output.                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Grid point force balance for all grid points will be output.                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification number of a previously appearing SET command. Only grid points with             │
│              │ identification numbers that appear on this SET command will be included in the grid point force    │
│              │ balance output (Integer  > 0).                                                                     │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
