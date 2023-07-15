## [NVELOCITY (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.NVELOCITY.Case.xhtml) - Velocity Normal Output Request

Request output of velocity normal for structural grids in SOLs 108 and 111 only.

#### Format:

![casecontrol4a01220.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01220.jpg?_LANG=enus)  

#### Example:

```nastran
NVELOCITY(PLOT,ERP) = ALL
```

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
│ REAL or IMAG │ Requests rectangular format (real and imaginary) of complex output. Use of either REAL or IMAGE │
│              │ yields the same output.                                                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output. Phase output is In degrees.      │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ERP          │ Flag to accept ERP set convention.                                                              │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Velocity normal will be computed for all surface structural grid points.                        │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously defined set of grid points. Velocity Normal will be computed │
│              │ for the grid points in this set only.                                                           │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Velocity normal will not be processed.                                                          │
└──────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. NVELOCITY = NONE overrides an overall request.
2. The PLOT option is used if results are requested for post-processing but no printed or punched output is desired.
3. Even with NVELOCITY=all, Velocity Normal will be computed only for structural grids at the surface of the model. Fluid grids, if exist, are not included in NVELOCITY output.
4. With ERP flag in NVELOCITY command, structural grids of all ERPPNL will be considered as candidates for NVELOCITY output and subjected to further screening of NVELOCITY set.
5. For 3D model, ERPPNL points to SET3 with all PSOLID IDs in the model is the easiest way to compute NVELOCITY of structural surface GRIDs.
6. This Case Control command can be used in SOL 108 and SOL 111 only
