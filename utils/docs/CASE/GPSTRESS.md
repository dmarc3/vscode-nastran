## [GPSTRESS (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.GPSTRESS.Case.xhtml) - Grid Point Stress Output Request

Requests grid point stresses.

#### Format:

![casecontrol4a01056.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01056.jpg?_LANG=enus)  

#### Examples:

```nastran
GPSTRESS=ALL
GPSTRESS=19
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
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command),        │
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both    │
│ .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Grid point stress requests for all SURFACE and VOLUME commands defined in the OUTPUT(POST) Section │
│              │ will be output.                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification number of a previously appearing SET command. Only surfaces and volumes with    │
│              │ identification numbers that appear on this SET command will be included in the grid point stress   │
│              │ output request (Integer  >  0).                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ No grid point stress output.                                                                       │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. For statics, normal modes, and transient analysis, output will be presented for each surface or volume as a tabular listing of grid point stresses for each load, eigenvalue, and timestep. (See Remark 1 under   for a discussion of SORT1 and SORT2.)
2. Only grid points connected to elements used to define the surface or volume are output. See the description of the SURFACE or VOLUME commands.
3. Element stress output (STRESS) must be requested for elements referenced on SURFACE and VOLUME commands.
4. For the postprocessing of grid point stresses using the .xdb file or the computation of mesh stress discontinuities, the STRFIELD command must also be specified.
5. Grid point stress is not output for midside nodes.
