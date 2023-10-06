## [SPCFORCES (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SPCFORCES.Case.xhtml) - Single Point Forces of Constraint Output Request

Requests the form and type of single point force of constraint vector output.

#### Format:

![casecontrol4a01356.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01356.jpg?_LANG=enus)  

#### Examples:

```nastran
SPCFORCES = 5
SPCFORCES(SORT2, PUNCH, PRINT, IMAG) = ALL
SPCFORCES(PHASE) = NONE
SPCFORCES(SORT2, PRINT, PSDF, CRMS, RPUNCH)=20
SPCFORCES(PRINT, RALL, NORPRINT)=ALL
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
│ REAL or IMAG │ Requests rectangular format (real and imaginary) of complex output. Use of either REAL or IMAG     │
│              │ yields the same output.                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output. Phase output is in degrees.         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOZPRINT     │ Print only nonzero SPC forces appearing in SORT2 output. This keyword does not affect SORT1        │
│              │ output.                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PSDF         │ Requests the power spectral density function be calculated and stored in the database for random   │
│              │ analysis postprocessing. The request must be made above the subcase level, and RANDOM must be      │
│              │ selected in Case Control. See Remark 9.                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ATOC         │ Requests the autocorrelation function be calculated and stored in the database for random analysis │
│              │ postprocessing. Request must be made above the subcase level, and RANDOM must be selected in Case  │
│              │ Control. See Remark 9.                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CRMS         │ Requests the cumulative root mean square function be calculated for random analysis                │
│              │ postprocessing. Request must be made above the subcase level, and RANDOM must be selected in Case  │
│              │ Control. See Remark 9.                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RALL         │ Requests all of PSDF, ATOC, and CRMS be calculated for random analysis postprocessing. Request     │
│              │ must be made above the subcase level, and RANDOM must be selected in Case Control. See Remark 9.   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPRINT       │ Writes random analysis results in the print file (Default).                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORPRINT     │ Disables the writing of random analysis results in the print file.                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRUNCH       │ Writes random analysis results in the punch file.                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID          │ Request to print output coordinate system ID in printed output file (.f06).                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Single point forces of constraint for all points will be output. See Remarks 1. and 4.             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Single point forces of constraint for no points will be output.                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only single point constraint forces for  │
│              │ points with identification numbers that appear on this SET command will be output (Integer >  0).  │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. See Remark 1 under    for a discussion of SORT1 and SORT2. In the SORT1 format, only nonzero values will be output.
2. In a statics problem, a request for SORT2 causes loads at all points (zero and nonzero) to be output.
3. SPCFORCES=NONE overrides an overall output request.
4. In SORT1 format, SPCFORCES recovered at consecutively numbered scalar points are printed in groups of six (sextets) per line of output. However, if a scalar point is not consecutively numbered, it will begin a new sextet on a new line of output. If a sextet can be formed and all values are zero, then the line will not be printed. If a sextet cannot be formed, then zero values may be output.
5. SPCFORCES results are output in the global coordinate system (see field CD on the GRID Bulk Data entry).
6. In SOLs 129 and 159, SPCFORCES results do not include the effects of mass and damping elements.
7. In all solution sequences except SOLs 129 and 159, SPCFORCES results do include the effects of mass and damping, except damping selected by the SDAMPING Case Control command. PARAM,DYNSPCF,OLD may be specified to obtain SPCFORCES results, which do not include mass and damping effects.
8. In inertia relief analysis in SOLs 101 and 200, the SPCFORCE output includes both the effects due to inertial loads and applied loads.
9. The option of PSDF, ATOC, CRMS, and RALL, or any combination of them, can be selected for random analysis. Here PSDF, ATOC and CRMS output is always in SORT2 format.
10. Note that the CID keyword affects only grid point related output such as DISP, VELO, ACCE, OLOAD, SPCF and MPCF. In addition, the CID keyword needs to appear only once in a grid-related output command, anywhere in the Case Control Section, to turn on the printing algorithm.
11. For axisymmetric elements, SPCFORCES results are obtained by integrating over 1 radian of the circumference. Before 2012 release, it is total reaction over the whole circumference.
