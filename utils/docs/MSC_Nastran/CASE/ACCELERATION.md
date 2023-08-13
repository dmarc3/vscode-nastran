## [ACCELERATION (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ACCELERATION.Case.xhtml) - Acceleration Output Request

Requests form and type of acceleration vector output.

#### Format:

![casecontrol4a00718.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00718.jpg?_LANG=enus)  

#### Examples:

```nastran
ACCELERATION=5
ACCELERTION(SORT2, PHASE)=ALL
ACCELERTION(SORT1, PRINT, PUNCH, PHASE)=17
ACCELERATION(SORT2, PRINT, PSDF, CRMS, RPUNCH)=20
ACCELERATION(PRINT, RALL, NORPRINT)=ALL
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
│ PSDF         │ Requests the power spectral density function be calculated for random analysis postprocessing.     │
│              │ Request must be made above the subcase level and RANDOM must be selected in the Case Control       │
│              │ Section. See Remark 5.                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ATOC         │ Requests the autocorrelation function be calculated for random analysis postprocessing. Request    │
│              │ must be made above the subcase level and RANDOM must be selected in the Case Control Section. See  │
│              │ Remark 5.                                                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CRMS         │ Requests the cumulative root mean square function be calculated for random analysis                │
│              │ postprocessing. Request must be made above the subcase level and RANDOM must be selected in the    │
│              │ Case Control Section. See Remark 5.                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RALL         │ Requests all of PSDF, ATOC and CRMS be calculated for random analysis postprocessing. Request must │
│              │ be made above the subcase level and RANDOM must be selected in the Case Control Section. See       │
│              │ Remark 5.                                                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPRINT       │ Writes random analysis results in the print file (Default).                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORPRINT     │ Disables the writing of random analysis results in the print file.                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPUNCH       │ Writes random analysis results in the punch file.                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID          │ Requests printing of output coordinate system ID in printed output file (.f06).                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Accelerations at all points will be output.                                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only accelerations of points with        │
│              │ identification numbers that appear on this SET command will be output (Integer  >  0).             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ No results will be output (Default).                                                               │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Acceleration output is only available for transient and frequency response problems. Acceleration is only available for transient and frequency response problems and when response spectra is requested in eigenvalue analysis.
2. See Remark 1 under   for a discussion of SORT1 and SORT2.
3. ACCELERATION   =   NONE allows overriding an overall output request.
4. Acceleration results are output in the global coordinate system (see field CD on the GRID Bulk Data entry).
5. The option of PSDF, ATOC, CRMS, and RALL, or any combination of them, can be selected for random analysis. Here PSDF, ATOC and CRMS output is always in SORT2 format.
6. Note that the CID keyword affects only grid point related output, such as displacement (DISP), velocity (VELO), acceleration (ACCEL), OLOAD, SPCforce (SPCF), and MPCforce (MPCF). In addition, the CID keyword needs to appear only once in a grid-related output request anywhere in the Case Control Section to turn on the printing algorithm.
