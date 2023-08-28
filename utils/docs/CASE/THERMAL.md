## [THERMAL (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.THERMAL.Case.xhtml) - Temperature Output Request

Requests the form and type of temperature output.

#### Format:

![casecontrol4a01418.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01418.jpg?_LANG=enus)  

#### Examples:

```nastran
THERMAL=5
THER(PRINT,PUNCH)=ALL
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output is presented as a tabular listing of point temperatures for each load or time step. │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output is presented as a tabular listing of loads or time steps for each.                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                            │
│ (blank)      │                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command),│
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. │
│ Both .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Temperatures for all points will be output.                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Temperatures for no points will be output.                                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only temperatures of points with │
│              │ identification numbers that appear on this SET command will be output (Integer  >  0).     │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The THERMAL output request is designed for use with the heat transfer option. The printed output will have temperature headings. The PUNCH option produces TEMP Bulk Data entries, and the SID on the entries will be the subcase number (=1 if no SUBCASES are specified).
2. SORT1 is the default in steady state heat transfer analysis. SORT2 is the default in transient heat transfer analysis.
3. In a transient heat transfer analysis, the SID on the punched TEMP Bulk Data entries equal the time step number.
