## [FORCE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.FORCE.Case.xhtml) - Element Force Output or Particle Velocity Request

Requests the form and type of element force output, or particle velocity output, in coupled fluid-structural analysis. Note:  ELFORCE is an equivalent command.

#### Format:

![casecontrol4a01006.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01006.jpg?_LANG=enus)  

#### Examples:

```nastran
FORCE=ALL
FORCE(REAL, PUNCH, PRINT)=17
FORCE=25
FORCE(SORT2, PRINT, PSDF, CRMS, RPUNCH)=20
FORCE(PRINT, RALL, NORPRINT)=ALL
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as a tabular listing of elements for each load, frequency, eigenvalue, or │
│              │ time, depending on the solution sequence.                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output will be presented as a tabular listing of frequency or time for each element type.          │
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
│ PSDF         │ Requests the power spectral density function be calculated and stored in the database for random   │
│              │ analysis postprocessing. Request must be made above the subcase level, and RANDOM must be selected │
│              │ in the Case Control Section. See Remark 8.                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ATOC         │ Requests the autocorrelation function be calculated and stored in the database for random analysis │
│              │ postprocessing. Request must be made above the subcase level, and RANDOM must be selected in the   │
│              │ Case Control Section. See Remark 8.                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CRMS         │ Requests the cumulative root mean square function be calculated for random analysis                │
│              │ postprocessing. Request must be made above the subcase level, and RANDOM must be selected in the   │
│              │ Case Control Section. See Remark 8.                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RALL         │ Requests all of PSDF, ATOC, and CRMS be calculated for random analysis postprocessing. Request     │
│              │ must be made above the subcase level, and RANDOM must be selected in the Case Control Section. See │
│              │ Remark 8.                                                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CENTER       │ Output CQUAD4, CQUADR, and CTRIAR element forces at the center only. The default for CQUAD4 is     │
│              │ CENTER. The default for CQUADR and CTRIAR is CORNER.                                               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CORNER or    │ Output CQUAD4, QUADR, and CTRIAR element forces at the center and at the grid points using strain  │
│ BILIN        │ gage approach with bilinear extrapolation.                                                         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SGAGE        │ Output CQUAD4 element forces at the center and at the grid points using strain gage approach.      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CUBIC        │ Output CQUAD4 element forces at the center and at the grid points using cubic bending correction.  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPRINT       │ Writes random analysis results in the print file (Default).                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORPRINT     │ Disables the writing of random analysis results in the print file.                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPUNCH       │ Writes random analysis results in the punch file.                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Forces for all elements will be output.                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only forces of elements with             │
│              │ identification numbers that appear on this SET command will be output (Integer  >  0).             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Forces for no elements will be output.                                                             │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. ALL should not be used in a transient problem.
2. See Remark 1 under   for a discussion of SORT1 and SORT2.
3. ELFORCE is an alternate form and is entirely equivalent to FORCE.
4. FORCE=NONE overrides an overall request.
5. If PARAM,SPARSEDR,NO is specified, then to request force output on damping elements in modal frequency response analysis (e.g., SOL 111), the mode displacement method (PARAM,DDRMM,-1) must be selected.
     Force output on damping elements is not available in transient response analysis.
6. In nonlinear transient analysis, the FORCE request is ignored for nonlinear elements in SOL129. In SOL400 with "ANALYSIS=NLTRAN" Element FORCE output for the CWELD/CFAST elements is available. All other elements capable of force output such as the CBEAM, CQUAD4, etc., will not produce nonlinear transient force output.
     If "PARAM, OLDWELD, YES" is specified, then the CWELD/CFAST elements will not produce with "ANALYSIS=NLTRAN" Element FORCE output.
7. The options CENTER, CORNER, CUBIC, SGAGE, and BILIN are recognized only in the first subcase, and determine the option to be used in all subsequent subcases with the STRESS, STRAIN, and FORCE Case Control commands. Consequently, options specified in subcases other than the first subcase will be ignored. The BILIN or CORNER option is not available for advanced nonlinear elements and nonlinear material or composite elements. The default option will be applied to those elements.
a. If the STRESS command is specified in the first subcase, then the option on the STRESS command is used in all subcases with STRESS, STRAIN, and FORCE commands.
b. If the STRAIN command and no STRESS command is specified in the first subcase, then the option on the STRAIN command is used in all subcases containing STRESS, STRAIN, and FORCE commands.
c. If the FORCE command and no STRESS or STRAIN commands is specified in the first subcase, then the option on the FORCE command is used in all subcases containing STRESS, STRAIN, and FORCE commands.
d. If STRESS, STRAIN, and FORCE commands are not specified in the first subcase, then the CENTER option is used in all subcases containing STRESS, STRAIN, and FORCE commands.
8. The option of PSDF, ATOC, CRMS, and RALL, or any combination of them, can be selected for random analysis. Here PSDF, ATOC and CRMS output is always in SORT2 format.
9. In general, for nonlinear elements, force output is not available. For CGAP, CELASi, or CBUSH elements in nonlinear analysis, use the STRESS in NLSTRESS command to obtain force output.
10. Forces and moment output for line elements are total forces and for shell elements they are forces per unit length.
11. The FORCE request is ignored for solid elements in all solution sequences as it has no meaning for solids.
12. Random response for element type CBEAM3 is not supported.
