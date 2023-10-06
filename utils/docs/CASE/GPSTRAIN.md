## [GPSTRAIN (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.GPSTRAIN.Case.xhtml) - Grid Point Strain Output Request

Requests grid point strains.

#### Format:

![casecontrol4a01052.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01052.jpg?_LANG=enus)  

#### Examples:

```nastran
GPSTRAIN=ALL
GPSTRAIN=19
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
│ ALL          │ Grid point strain requests for all SURFACE and VOLUME commands defined in the OUTPUT(POST) Section │
│              │ will be output.                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification number of a previously appearing SET command. Only surfaces and volumes with    │
│              │ identification numbers that appear on this SET command will be included in the grid point strain   │
│              │ output request (Integer  >  0).                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ No grid point strain output.                                                                       │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. For statics, normal modes, and transient analysis, output will be presented for each surface or volume as a tabular listing of grid point strains for each load, eigenvalue, and time step. (See Remark 1 under   for a discussion of SORT1 and SORT2.)
2. Only grid points connected to elements used to define the surface or volume are output. See the description of the SURFACE or VOLUME commands.
3. Element strain output (STRAIN) must be requested for elements referenced on SURFACE and VOLUME commands.
4. In nonlinear transient analysis, grid point strains are computed only if parameter LGDISP is -1,   which is the default, and only for elements with linear material properties.
5. For the postprocessing of grid point strains using the  .xdb  file or the computation of mesh strain discontinuities, the STRFIELD command must also be specified.
