## [OIMPERFECT (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.OIMPERFECT.Case.xhtml) - Request Output of Imperfection

Request output imperfection vectors in SOL 400. Imperfection vectors are coordinate variations applied on grid points to express geometric imperfection.

#### Format:

![casecontrol4a01226.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01226.jpg?_LANG=enus)

#### Examples:

```nastran
OIMPERFECT(GEOM) = 5
OIMPERFECT(PLOT)=ALL
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
│ GEOM         │ To output grid points with updated coordinates in punch file.                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Imperfection vectors for all points will be output.                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only imperfection vectors of points with │
│              │ identification numbers that appear on this SET command will be output.                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Imperfection vectors for no points will be output.                                                 │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command must be above all subcases.
