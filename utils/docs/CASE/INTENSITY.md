## [INTENSITY (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.INTENSITY.Case.xhtml) - Acoustic Intensity Output Request

Requests output of acoustic intensity on wetted surface. SOLs 108 and 111 only.

#### Format:

![casecontrol4a01084.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01084.jpg?_LANG=enus)  

```text
┌──────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as tabular listing of grid points for each excitation frequency        │
│              │ (Default).                                                                                      │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output will be presented as tabular listing of excitation frequencies for each grid point.      │
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
│ ALL          │ Intensities will be computed for all grid points of the wetted surface.                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously defined set of grid points. Intensities will be computed for │
│              │ the grid points in this set only.                                                               │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Acoustic intensities will not be processed.                                                     │
└──────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. INTENSITY = NONE overrides an overall request.
2. This Case Control command can be used in SOL 108 and SOL 111 only.
