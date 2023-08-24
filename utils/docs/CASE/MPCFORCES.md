## [MPCFORCES (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MPCFORCES.Case.xhtml) - Multipoint Forces of Constraint Output Request

Requests the form and type of multipoint force of constraint vector output.

#### Format:

![casecontrol4a01176.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01176.jpg?_LANG=enus)  

#### Examples:

```nastran
MPCFORCES=5
MPCFORCES(SORT2, PUNCH, PRINT, IMAG)=ALL
MPCFORCES(PHASE)=NONE
MPCFORCES(SORT2, PRINT,PSDF, CRMS, RPUNCH)=20
MPCFORCES(PRINT, RALL, NORPRINT)=ALL
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as a tabular listing of grid points for each load, frequency, eigenvalue, │
│              │ or time, depending on the solution sequence.                                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output will be presented as a tabular listing of frequency or time for each grid point.            │
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
│ REAL or      │ Requests rectangular format (real and imaginary) of complex output. Use of either REAL or IMAG     │
│ IMAGE        │ yields the same output.                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output. Phase output is in degrees.         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PSDF         │ Requests that the power spectral density function be calculated and stored in the database for     │
│              │ random analysis postprocessing. Request must be made above the subcase level, and RANDOM must be   │
│              │ selected in the Case Control Section. See Remark 8.                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ATOC         │ Requests the autocorrelation function be calculated and stored in the database for random analysis │
│              │ postprocessing. Request must be made above the subcase level, and RANDOM must be selected in the   │
│              │ Case Control Section. See Remark 8.                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CRMS         │ Requests the cumulative root mean square function be calculated for random analysis                │
│              │ postprocessing. Request must be made above the subcase level, and RANDOM must be selected in the   │
│              │ Case Control Section. See Remark 8.                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RALL         │ Requests all of PSDF, ATOC, and CRMS be calculated for random analysis post-processing. Request    │
│              │ must be made above the subcase level, and RANDOM must be selected in the Case Control Section. See │
│              │ Remark 8.                                                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPRINT       │ Writes random analysis results in the print file (Default).                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORPRINT     │ Disables the writing of random analysis results in the print file.                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPUNCH       │ Writes random analysis results in the punch file.                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID          │ Request the printing of output coordinate system ID in printed output file (.f06) file.            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Multipoint forces of constraint for all points will be output. See Remarks 2. and 5.               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Multipoint forces of constraint for no points will be output.                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only multipoint constraint forces for    │
│              │ points with identification numbers that appear on this SET command will be output (Integer  >  0). │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. See Remark 1 under   for a discussion of SORT1 and SORT2. In the SORT1 format, only nonzero values will be output.
2. In a statics problem, a request for SORT2 causes loads at all points (zero and nonzero) to be output.
3. MPCFORCES=NONE overrides an overall output request.
4. In SORT1 format, MPCFORCEs recovered at consecutively numbered scalar points are printed in groups of six (sextets) per line of output. However, if a scalar point is not consecutively numbered, then it will begin a new sextet on a new line of output. If a sextet can be formed and all values are zero, the line will not be printed. If a sextet cannot be formed, then zero values may be output.
5. MPCFORCE results are output in the global coordinate system (see field CD on the GRID Bulk Data entry).
6. MPCFORCE results due to linear elements only are available in SOL 129 with MDLPRM, MPCF129, 1.
7. In inertia relief analysis, the MPCFORCE output includes both the effects of applied and inertial loads.
8. The option of PSDF, ATOC, CRMS, and RALL, or any combination of them, can be selected for random analysis. Here PSDF, ATOC and CRMS output is always in SORT2 format.
9. Note that the CID keyword affects only grid point related output, such as DISPlacement, VELO, ACCE, OLOAD, SPCForce and MPCF. In addition, the CID keyword needs to appear only once in a grid related output request anywhere in the Case Control Section to turn on the printing algorithm.
