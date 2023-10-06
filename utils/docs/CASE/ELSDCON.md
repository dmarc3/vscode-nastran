## [ELSDCON (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ELSDCON.Case.xhtml) - Element Stress Discontinuity Output Request

Requests mesh stress discontinuities based on element stresses.

#### Format:

![casecontrol4a00904.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00904.jpg?_LANG=enus)  

#### Examples:

```nastran
ELSDCON=ALL
ELSDCON=19
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
│ ALL          │ Stress discontinuity requests for all SURFACE and VOLUME Case Control commands defined in the   │
│              │ OUTPUT(POST) Section will be output.                                                            │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification number of a previously appearing SET command. Only surfaces and volumes with │
│              │ identification numbers that appear on this SET command will be included in the stress           │
│              │ discontinuity output request (Integer  > 0).                                                    │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ No element stress discontinuity output.                                                         │
└──────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This output is available in linear static analysis SOLs 101 and 144 only. Output will be presented for each surface or volume as a tabular listing of stress discontinuities for each subcase.
2. Only elements used to define the surface or volume are output. See the description of the SURFACE or VOLUME Case Control commands.
3. Element stress output (STRESS) must be requested for elements referenced on SURFACE and VOLUME Case Control commands. Also, the GPSTRESS command must be present for printed output and the STRFIELD command for postprocessing output using the .xdb file (PARAM,POST,0) for the same surfaces and volumes.
