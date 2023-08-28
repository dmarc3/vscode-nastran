## [OLOAD (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.OLOAD.Case.xhtml) - Applied Load Output Request

Requests the form and type of applied load vector output.

#### Format:

![casecontrol4a01230.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01230.jpg?_LANG=enus)  

#### Examples:

```nastran
OLOAD=ALL
OLOAD(SORT1, PHASE)=5
OLOAD(SORT2, PRINT, PSDF, CRMS, RPUNCH=20
OLOAD(PRINT, RALL, NORPRINT)=ALL
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
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command),        │
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both    │
│ .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REAL or IMAG │ Requests rectangular format (real and imaginary) of complex output. Use of either REAL or IMAG     │
│              │ yields the same output.                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output. Phase output is in degrees.         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PSDF         │ Requests the power spectral density function be calculated and stored in the database for random   │
│              │ analysis postprocessing. Request must be made above the subcase level, and RANDOM must be selected │
│              │ in Case Control. See Remark 10.                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ATOC         │ Requests the autocorrelation function be calculated and stored in the database for random analysis │
│              │ postprocessing. Request must be made above the subcase level, and RANDOM must be selected in Case  │
│              │ Control. See Remark 10.                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CRMS         │ Requests the cumulative root mean square function be calculated for random analysis                │
│              │ postprocessing. Request must be made above the subcase level and RANDOM must be selected in the    │
│              │ Case Control Section. See Remark 10.                                                               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RALL         │ Requests all of PSDF, ATOC, and CRMS be calculated for random analysis postprocessing. Request     │
│              │ must be made above the subcase level, and RANDOM must be selected in the Case Control. See Remark  │
│              │ 10.                                                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPRINT       │ Writes random analysis results to the print file (Default).                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORPRINT     │ Disables the writing of random analysis results to the print file.                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPUNCH       │ Writes random analysis results to the punch file.                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID          │ Requests printing of output coordinate system ID to printed output file (.f06).                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Applied loads for all points will be output. See Remarks 1. and 7.                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Applied load for no points will be output.                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only loads on points with identification │
│              │ numbers that appear on this SET command will be output (Integer  >  0).                            │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. See Remark 1 under   for a discussion of SORT1 and SORT2. In the SORT1 format, only nonzero values will be output.
2. In a statics problem, a request for SORT2 causes loads at all requested points (zero and nonzero) to be output.
3. OLOAD=NONE overrides an overall output request.
4. In the statics superelement solution sequences, and in the dynamics solution sequences (SOLs 107 through 112, 118, 145, 146, and 200). OLOADs are available for superelements and the residual structure. Only externally applied loads are printed. Loads transmitted from upstream superelements are not printed. Transmitted loads can be obtained with GPFORCE requests.
     In the nonlinear transient analysis solution sequences (SOLs 129 and 159), OLOADs are available only for residual structure points and include loads transmitted by upstream superelements.
5. In nonlinear analyses SOL 106 and 129, OLOAD output will not reflect changes due to follower forces. But SOL 400 OLOAD output reflects the follower force change correctly. Notes, in SOL 400, the first OLOAD output before starting nonlinear iteration process, only reflects total non-follower force without thermal load and follower force.
6. Loads generated by the SPCD Bulk Data entry do not appear in OLOAD output.
7. In SORT1 format, OLOADs recovered at consecutively numbered scalar points are printed in groups of six (sextets) per line of output. However, if a scalar point is not consecutively numbered, it will begin a new sextet on a new line of output. If a sextet can be formed and it is zero, then the line will not be printed. If a sextet cannot be formed, then zero values may be output.
8. OLOAD results are output in the global coordinate system (see field CD on the GRID Bulk Data entry).
9. In static inertia relief analysis, the OLOAD output includes both the inertia loads and applied loads.
10. The option of PSDF, ATOC, CRMS, and RALL, or any combination of them, can be selected for random analysis. Here PSDF, ATOC and CRMS output is always in SORT2 format.
11. Note that the CID keyword affects only grid point related output, such as DISP, VELO, ACCE, OLOAD, SPCF and MPCF. In addition, CID the keyword needs to appear only once in a grid point related output request anywhere in the Case Control Section to turn on the printing algorithm.
