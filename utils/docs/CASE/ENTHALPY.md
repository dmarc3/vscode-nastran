## [ENTHALPY (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ENTHALPY.Case.xhtml) - Heat Transfer Enthalpy Output Request

Requests form of enthalpy vector output in transient heat transfer analysis (SOL 159).

#### Format:

![casecontrol4a00914.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00914.jpg?_LANG=enus)  ```

#### Example:

```nastran
ENTHALPY=5
```

```text
┌──────────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                     │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as a tabular listing of grid points for each time.                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output will be presented as a tabular listing of time for each grid point.                  │
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
│ ALL          │ Enthalpy for all grid points will be output.                                                │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of previously appearing SET command. Only enthalpies of grid points with │
│              │ identification numbers that appear on this SET command will be output (Integer  >  0).      │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Enthalpy for no grid points will be output.                                                 │
└──────────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. ENTHALPY=NONE is used to override a previous ENTHALPY = n or ENTHALPY = ALL command.
