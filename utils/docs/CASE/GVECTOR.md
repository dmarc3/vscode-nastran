## [GVECTOR (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.GVECTOR.Case.xhtml) - Eigenvector Output Request in SOLs 200 and 400

Requests the form and type of eigenvector output in SOLs 200 and 400. For other solutions use  DISPLACEMENT   (Case)

#### Format:

![casecontrol4a01062.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01062.jpg?_LANG=enus)  

#### Examples:

```nastran
GVECTOR=ALL
GVECTOR(PUNCH)=NONE
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
│ ALL          │ Eigenvectors for all points will be output.                                                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Eigenvectors for no points will be output.                                                  │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only displacements of points with │
│              │ identification numbers that appear on this SET command will be output (Integer  >  0).      │
└──────────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. GVECTOR=NONE overrides an overall output request.
2. Output will be presented as a tabular listing of grid points for each eigenvector.
3. GVECTOR is intended to specified in subcases with ANALYSIS=MFREQ, MTRAN, MCEIG, FLUTTER, and SAERO.
