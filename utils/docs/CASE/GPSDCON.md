## [GPSDCON (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.GPSDCON.Case.xhtml) - Grid Point Stress Discontinuity Output Request

Requests mesh stress discontinuities based on grid point stresses.

#### Format:

![casecontrol4a01048.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01048.jpg?_LANG=enus)  

#### Examples:

```nastran
GPSDCON=ALL
GPSDCON=19
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
│ ALL          │ Stress discontinuity requests for all SURFACE and VOLUME commands defined in the OUTPUT(POST)   │
│              │ Section will be output.                                                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification number of a previously appearing SET command. Only surfaces and volumes with │
│              │ identification numbers that appear on this SET command will be included in the stress           │
│              │ discontinuity output request (Integer  >  0).                                                   │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ No grid point stress discontinuity output.                                                      │
└──────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This output is available in linear static analysis SOLs 101 and 144 only. Output   will be presented for each surface or volume as a tabular listing of stress discontinuities for each subcase.
2. Only elements used to define the surface or volume are output. See the description of the SURFACE or VOLUME commands.
3. Element stress output (STRESS) must be requested for elements referenced on SURFACE and VOLUME commands. Also, the GPSTRESS and STRFIELD commands must be present for printed output.
