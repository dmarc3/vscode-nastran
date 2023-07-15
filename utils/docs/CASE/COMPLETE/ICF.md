## [ICF (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ICF.Case.xhtml) - Inter-Component Forces (ICF) Output Request

Requests the form and type of inter-component force (ICF) vector output from an FBA job.

#### Format:

![casecontrol4a01080.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01080.jpg?_LANG=enus)  

#### Examples:

```nastran
ICF = 5
ICF (SORT2, PRINT, PUNCH, IMAG) = ALL
ICF (SORT2) = 20
ICF = ALL
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as a tabular listing of grid points for each frequency. See Remarks       │
│              │ 1. through 4.                                                                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output will be presented as a tabular listing of frequency for each grid point. See Remarks 1.,    │
│              │ 3. and 5.                                                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                    │
│ (blank)      │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command), while  │
│ the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both .op2 and │
│ .h5 file can be created simultaneously. Note .xdb file is being deprecated.                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REAL or IMAG │ Requests rectangular format (real and imaginary) of complex output. Use of either REAL or IMAG     │
│              │ yields the same output.                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output. Phase output is in degrees.         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ ICFs for all points will be output. See Remarks 1. through 5.                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only ICFs for points with identification │
│              │ numbers that appear on this SET command will be output (Integer >  0). See Remarks 1. through 6.   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ ICFs for no points will be output.                                                                 │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. See Remark 1 under   for a discussion of SORT1 and SORT2. In the SORT1 format, only nonzero values will be output.
2. In SORT1 format, ICFs recovered at consecutively numbered scalar points are printed in groups of six (sextets) per line of output. However, if a scalar point is not consecutively numbered, it will begin a new sextet on a new line of output. If a sextet can be formed and all values are zero, then the line will not be printed. If a sextet cannot be formed, then zero values may be output.
3. ICFs are defined only for the connection points of FRF components in an FBA job and are regarded as null for non-connection points of FRF components. Therefore, ICF output is meaningful only for the connection points of FRF components in an FBA job.
4. In SORT1 format, ICF output is ignored for non-connection points and will be output for the requested connection points of FRF components only if their ICFs are non-null.
5. In SORT2 format, ICF output is honored for all requested connection and non-connection points of FRF components even if their ICFs are null.
6. ICF output request is ignored for undefined points.
