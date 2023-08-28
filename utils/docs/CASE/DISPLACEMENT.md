## [DISPLACEMENT (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.DISPLACEMENT.Case.xhtml) - Displacement Output Request

Requests the form and type of displacement or pressure vector output. Note: PRESSURE and VECTOR are equivalent commands.

#### Format:

![casecontrol4a00848.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00848.jpg?_LANG=enus)  

#### Examples:

```nastran
DISPLACEMENT=5
DISPLACEMENTS(REAL)=ALL
DISPLACEMENT(SORT2, PUNCH, REAL)=ALL
DISPLACEMENT(SORT2, PRINT, PSDF, CRMS, RPUNCH)=20
DISPLACEMENT(PRINT, RALL, NORPRINT)=ALL
DISP (T1=1.-3, T3=1.-2) = ALL
DISP (TM=1.-3, PRINT,PLOT) = ALL
DISP (TM=1.-3,PRINT,PLOT,SORT2) = 20
DISP (CONN=23)=54
DISPLACEMENT(PLOT,PRINT,BOTH) = ALL
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as a tabular listing of grid points for each load, frequency, eigenvalue, │
│              │ or time, depending on the solution sequence.                                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output will be presented as a tabular listing of load, frequency, or time for each grid point.     │
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
│ PSDF         │ Requests that the power spectral density function be calculated for random analysis                │
│              │ postprocessing. Request must be made above the subcase level, and RANDOM must be selected in the   │
│              │ Case Control Section. See Remark 6.                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ATOC         │ Requests that the autocorrelation function be calculated for random analysis postprocessing.       │
│              │ Request must be made above the subcase level, and RANDOM must be selected in the Case Control      │
│              │ Section. See Remark 6.                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CRMS         │ Requests that the cumulative root mean square function be calculated for random analysis           │
│              │ postprocessing. Request must be made above the subcase level, and RANDOM must be selected in the   │
│              │ Case Control Section. See Remark 6.                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RALL         │ Request that all of PSDF, ATOC, and CRMS be calculated for random analysis postprocessing. Request │
│              │ must be made above the subcase level, and RANDOM must be selected in the Case Control Section. See │
│              │ Remark 6.                                                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPRINT       │ Writes random analysis results in the print file (Default).                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORPRINT     │ Disables the writing of random analysis results in the print file.                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPUNCH       │ Writes random analysis results in the punch file.                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID          │ Requests printing of output coordinate system ID in printed output file, (.f06).                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TM           │ Translational magnitude filter. See Remark 8.                                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T1, T2, T3   │ Translational component filters. See Remark 8.                                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RM           │ Rotational magnitude filters. See Remark 8.                                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ R1, R2, R3   │ Rotational component filters. See Remark 8.                                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ F            │ Filter value (Real > 0.0). See Remark 8.                                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CONNECTOR    │ A set of CWELD or CFAST, elements are defined from which auxiliary grids will be determined for    │
│              │ output post-processing for displacement display in the basic system. This command produces the     │
│              │ following actions: The auxiliary point “grids” determined by the set m of connector elements       │
│              │ specified on this entry will be appended to the set n defined on the right side of the DISP        │
│              │ command. m is the identification of a connector element set defined by a previously appearing SET  │
│              │ command. If DISP(...)=NONE, then no points will be output even if the user has defined the keyword │
│              │ CONN=ALL or CONN=m.                                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│              │ If DISP(...)=ALL, then auxiliary point “grids” for all connectors will be generated regardless if  │
│              │ CONN= is specified. If the user wishes to produce displacements for all the connector elements and │
│              │ have them appended to the set n defined on the right side of the DISP command.                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Displacements for all points will be output.                                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only displacements of points with        │
│              │ identification numbers that appear on this SET command will be output (Integer  >  0).             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Displacement for no points will be output.                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STRUCTURE,   │ Request eigenvector output data type for normal mode computation (SOL 103) with METHOD(COUPLED)    │
│ FLUID, BOTH  │ case control. Structure displacement only, Fluid pressure only or both Structure displacement and  │
│              │ Fluid pressure output separately. Default is NONE for both structure displacement and fluid        │
│              │ pressure together. See Remark 10.                                                                  │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The defaults for SORT1 and SORT2 depend on the type of analysis:
     - SORT1 is the default in static analysis, frequency response, steady state heat transfer analysis, real and complex eigenvalue analysis, flutter analysis, and buckling analysis.
     - SORT2 is the default in transient response analysis (structural and heat transfer). SORT2 is not available for real eigenvalue (including buckling), complex eigenvalue, or flutter analysis. If SORT1 is selected in a transient solution for one or more of the commands ACCE, DISP, ENTH, FORC, HDOT, MPCF, OLOA, SPCF, STRA, STRE, and VELO, then the remaining commands will also be output in SORT1 format. If SORT2 is selected in a static or frequency response solution for one or more of the commands ACCE, DISP, FORC, MPCF, OLOA, SPCF, STRA, STRE, and VELO, then the remaining commands will also be output in SORT2 format.
     - XY plot requests forces SORT2 and overrides SORT1 requests!
     - If a RANDOM request occurs the output will be in SORT2 format, even if SORT1 is requested.
2. VECTOR and PRESSURE are alternate forms and are equivalent to DISPLACEMENT. In complex analysis, the pressure is ALWAYS magnitude-phase.
3. DISPLACEMENT   =   NONE overrides an overall output request.
4. The units of translation are the same as the units of length of the model. Rotations are in units of radians.
5. Displacement results are output in the global coordinate system (see field CD on the GRID Bulk Data entry).
6. The option of PSDF, ATOC, CRMS, and RALL, or any combination of them, can be selected for random analysis. Here PSDF, ATOC and CRMS output is always in SORT2 format.
7. Note that the CID keyword affects only grid point related output, such as DISPlacement, VELOcity, ACCEleration, OLOAD, SPCForce and MPCForce. In addition, CID keyword needs to appear only once in a grid-related output request anywhere in the Case Control Section to turn on the printing algorithm.
8. Displacement components may be selected to control filtering to reduce the amount of output produced. When magnitudes are selected, the component values are ignored. Only a single positive value for f can be supplied, and comparisons are performed in the global reference frame. Comparisons are performed after the SET intersection is performed against the domain. Selection of this option does not effect the MAXMIN(GRID) operations. Scalar comparisons are performed using the minimum of all supplied values for the filters.
     For complex vectors encountered in frequency response analysis, the magnitudes TM and RM follow a derivation using a deterministic interpretation and are calculated as follows:
     - For Grid Points
     ```text
     TM
     Define
          C1 = T1real**2 + T2real**2 + T3real**2
          C2 = T1imag**2 + T2imag**2 + T3imag**2
          C3 = T1real*T1imag + T2real*T2imag + T3real*T3imag
          C4 = (C1 + C2)/2
          C5 = (C1 - C2)/2
     Then,
          TM = C4 + SQRT (C5**2 + C3**2)
     RM
     ```
     The calculations are similar to the above, except that R1, R2 and R3 are used in place of T1, T2 and T3, respectively.
     - For Scalar Points
     In this case, TM and RM have the same meaning.
     ```text
     Define
          C1 = T1real**2
          C2 = T1imag**2
          C3 = T1real*T1imag
          C4 = (C1 + C2)/2
          C5 = (C1 - C2)/2
     Then,
          TM (or RM) = C4 + SQRT (C5**2 + C3**2)
     ```
9. When using filters, the compound usage of the verbs PRINT, PLOT is allowed. The entries in the printed output are the entries that exceed any threshold, while the remaining entries within the SET are marked as plot to allow for postprocessing operations. When SORT2 is selected, then PRINT, PLOT must be used to allow for table transpose operations to occur. When any entry in the SORT2 format is above the threshold, all values for time or frequency will be printed for the grid point.
10. Default eigenvector output format of coupled mode computation (SOL 103) is structure displacement and fluid pressure combined in one datablock per same modes DISP(PRINT) = ALL.
     The eigenvector table has normal title in f06 file.
```text
REAL   EIGENVECTOR NO. 1
     To get structure displacement and fluid pressure separately from coupled mode computation (with METHOD(coupled) in SOL 103), DISP(PRINT,STRUCTURE) = ALL is used for STRUCTURAL displacement only. The eigenvector table has title (STRUCTURE) in f06 file.
REAL   EIGENVECTOR(STRUCTURE) NO. 1
     DISP(PRINT,FLUID) = ALL is used for FLUID pressure only. The eigenvector table has the title (FLUID)in f06 file.
REAL EIGENVECTOR(FLUID) NO. 1
     DISP(PRINT,BOTH) = ALL is used for both STRUCTURAL displacement and FLUID pressure but separately. Each eigenvector table includes its own title (STRUCTURE) or (FLUID) in f06 file.
REAL   EIGENVECTOR(STRUCTURE) NO. 1
……… 
 
 
REAL   EIGENVECTOR(FLUID) NO. 1
………
```
11. When DISPLACEMENT is requested at a fluid grid, the output is the fluid pressure. When VELOCITY and ACCELERATION are also requested at the same fluid grid, the outputs represent the first and second derivatives of the fluid pressure, respectively. If these pressure derivatives are not interested in, both VELOCITY and ACCELERATION should be requested only at the structural grids.
