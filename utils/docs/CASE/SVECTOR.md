## [SVECTOR (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SVECTOR.Case.xhtml) - Solution Set Eigenvector Output Request

Requests the form and type of solution set eigenvector output.

#### Format:

![casecontrol4a01386.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01386.jpg?_LANG=enus)  

#### Examples:

```nastran
SVECTOR=ALL
SVECTOR(PUNCH)=NONE
```

```text
┌──────────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                     │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                             │
│ (blank)      │                                                                                             │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                             │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                             │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command), │
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section.  │
│ Both .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                  │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Displacements for all points (modes) will be output.                                        │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Displacements for no points (modes) will be output.                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only displacements of points with │
│              │ identification numbers that appear on this SET command will be output (Integer  >  0).      │
└──────────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. SVECTOR=NONE overrides an overall output request.
2. Output will be presented as a tabular listing of grid points for each eigenvector.
