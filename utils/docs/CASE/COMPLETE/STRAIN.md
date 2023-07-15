## [STRAIN (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.STRAIN.Case.xhtml) - Element Strain Output Request

Requests the form and type of strain output.

#### Format:

![casecontrol4a01366.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01366.jpg?_LANG=enus)  

![casecontrol4a01368.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01368.jpg?_LANG=enus)

#### Examples:

```nastran
STRAIN=5
STRAIN(CORNER)=ALL
STRAIN(PRINT,PHASE)=15
STRAIN(PLOT)=ALL
STRAIN(PRINT, PSDF, CRMS, RPUNCH)=20
STRAIN(PRINT, RALL,NORPRINT)=ALL
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as a tabular listing of elements for each load, frequency, eigenvalue, or │
│              │ time, depending on the solution sequence.                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output will be presented as a tabular listing of frequency or time for each element.               │
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
│              │ analysis postprocessing. The request must be made above the subcase level, and RANDOM must be      │
│              │ selected in Case Control. See Remark 9.                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ATOC         │ Requests the autocorrelation function be calculated and stored in the database for random analysis │
│              │ postprocessing. The request must be made above the subcase level, and RANDOM must be selected in   │
│              │ Case Control. See Remark 9.                                                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CRMS         │ Requests the cumulative root mean square function to be calculated for random analysis             │
│              │ postprocessing. Request must be made above the subcase level, and RANDOM must be selected in Case  │
│              │ Control. See Remark 9.                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RALL         │ Requests all of PSDF, ATOC, and CRMS be calculated for random analysis postprocessing. Request     │
│              │ must be made above the subcase level, and RANDOM must be selected in Case Control. See Remark 9.   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VONMISES     │ von Mises strains are output.                                                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXS or      │ Maximum shear strains are output.                                                                  │
│ SHEAR        │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STRCUR       │ Strain at the reference plane and curvatures are output for plate elements.                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FIBER        │ Strain at locations Z1, Z2 are computed for plate elements.                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CENTER       │ Output CQUAD4 element strains at the center only.                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CORNER or    │ Output CQUAD4 element strains at the center and grid points. Using strain gage approach with       │
│ BILIN        │ bilinear extrapolation.                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SGAGE        │ Output CQUAD4 element strains at center and grid points using strain gage approach.                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CUBIC        │ Output CQUAD4 element strains at center and grid points using cubic bending correction.            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPRINT       │ Writes random analysis results in the print file (Default).                                        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORPRINT     │ Disables the writing of random analysis results in the print file.                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RPUNCH       │ Writes random analysis results in the punch file.                                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Strain for all elements will be output.                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only strain for elements with            │
│              │ identification numbers that appear on this SET command will be output (Integer  >  0).             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ No element strain will be output.                                                                  │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Fully accurate nonlinear strains for nonlinear elements are requested by the STRESS command and appear in the nonlinear stress output. In SOLs 106 and 129, if LGDISP > 0 the center, and if requested for CQUAD4 the corner, strains are computed from the displacements alone and are only approximate. If LGDISP = -1 and material nonlinear then no STRAIN output will be created. In SOL 400, if enhanced material options are used, the computed strains are accurate and in this case a CQUAD4 corner request is ignored.
2. In SOLs 106 and 129, the STRAIN request pertains only to linear elements and only if the parameter LGDISP is -1, which is the default. Nonlinear strains for nonlinear elements are requested by the STRESS command and appear in the nonlinear stress output.
3. STRAIN=NONE overrides an overall output request.
4. Definitions of stress, strain, curvature, and output locations are given in the    in the  MSC Nastran Reference Guide .
5. If the STRCUR option is selected, the values of Z1 will be set to 0.0. and Z2 will be set to -1.0 on the output.
6. The VONMISES, MAXS, and SHEAR options are ignored in the complex eigenvalue and frequency response solution sequences.
7. The options CENTER, CORNER, CUBIC, SGAGE, and BILIN are recognized only in the first subcase, and determine the option to be used in all subsequent subcases with the STRESS, STRAIN, and FORCE commands. (In superelement analysis, the first subcase refers to the first subcase of each superelement. Therefore, it is recommended that these options be specified above all subcases.) Consequently, options specified in subcases other than the first subcase will be ignored. See also Remark 8 under the   Case Control command for further discussion.
The above options apply only to the CQUAD4 element. Other elements such as the CTRIA3 are at center only while CQUAD8 is at center plus corner. Solid elements put strain results out at the center plus corners. User should refer to the  MSC Nastran Linear Static Analysis User’s Guide .
8. See Remark 1 under the   Case Control command for a discussion of SORT1 and SORT2.
9. The option of PSDF, ATOC, CRMS, and RALL, or any combination of them, can be selected for random analysis. Here PSDF, ATOC and CRMS output is always in SORT2 format.
10. Random response for complex strain in composites plates or shells, and layered solid composites and layered solid shell composites will be available for each ply.
11. Element type CBEAM3 is not supported for random response.
