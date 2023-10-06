## [VELOCITY (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.VELOCITY.Case.xhtml) - Velocity Output Request

Requests the form and type of velocity vector output.

#### Format:

![casecontrol4a01430.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01430.jpg?_LANG=enus)  

#### Examples:

```nastran
VELOCITY=5
VELOCITY(SORT2,PHASE,PUNCH)=ALL
VELOCITY(SORT2, PRINT, PSDF, CRMS, RPUNCH)=20
VELOCITY(PRINT, RALL, NORPRINT)=ALL
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
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section.         │
│ Both .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REAL or IMAG │ Requests rectangular format (real and imaginary) of complex output. Use of either REAL or IMAG     │
│              │ yields the same output.                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output. Phase output is in degrees.         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PSDF         │ Requests the power spectral density function be calculated and stored in the database for random   │
│              │ analysis postprocessing. Request must be made above the subcase level, and RANDOM must be selected │
│              │ in Case Control. See Remark 5.                                                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ATOC         │ Requests the autocorrelation function be calculated and stored in the database for random analysis │
│              │ postprocessing. Request must be made above the subcase level, and RANDOM must be selected in Case  │
│              │ Control. See Remark 5.                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CRMS         │ Requests the cumulative root mean square function be calculated for random analysis                │
│              │ postprocessing. Request must be made above the subcase level, and RANDOM must be selected in Case  │
│              │ Control. See Remark 5.                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RALL         │ Requests all of PSDF, ATOC, and CRMS be calculated for random analysis postprocessing. Request     │
│              │ must be made above the subcase level, and RANDOM must be selected in Case Control. See Remark 5.   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPRINT       │ Writes random analysis results in the print file (Default).                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORPRINT     │ Disables the writing of random analysis results in the print file.                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPUNCH       │ Writes random analysis results in the punch file.                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID          │ Request to print output coordinate system ID in printed output (.f06) file.                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Velocity for all solution points will be output.                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Velocity for no solution points will be output.                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only velocities of points with           │
│              │ identification numbers that appear on this SET command will be output (Integer  >  0).             │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Velocity output is only available for transient and frequency response problems.
2. See Remark 1 under   for a discussion of SORT1 and SORT2.
3. VELOCITY=NONE overrides an overall output request.
4. Velocity results are output in the global coordinate system (see field CD on the GRID Bulk Data entry).
5. The option of PSDF, ATOC, CRMS, and RALL, or any combination of them, can be selected for random analysis. Here PSDF, ATOC and CRMS output is always in SORT2 format.
6. Note that the CID keyword affects only grid point related output, such as DISP, VELO, ACCEL, OLOAD, SPCF and MPCF. In addition, the CID keyword needs to appear only once in a grid point-related output request anywhere in the Case Control Section to turn on the printing algorithm.
