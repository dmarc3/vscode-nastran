## [RCROSS (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.RCROSS.Case.xhtml) - Cross-Power Spectral Density and Cross-Correlation Function Output Request

Requests computation and output of cross-power spectral density and cross-correlation functions in random analysis.

#### Format:

![casecontrol4a01270.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01270.jpg?_LANG=enus)  

#### Example:

```nastran
RCROSS(PHASE, PSDF, CORF) = 10
RCROSS(RALL, NOPRINT, PUNCH) = 20
RCROSS = 30
```

```text
┌──────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                          │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REAL or IMAG │ Requests rectangular format (real and imaginary) of complex output for cross-power spectral      │
│              │ density function. Use of either REAL or IMAG yields the same output (Default).                   │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output for cross-power spectral density   │
│              │ function. Phase output is in degrees.                                                            │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT        │ Write output to print file (Default).                                                            │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPRINT      │ Do not write output to print file.                                                               │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │ Write output to punch file.                                                                      │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PSDF         │ Requests the cross-power spectral density function be calculated and output for random analysis  │
│              │ postprocessing (Default).                                                                        │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CORF         │ Requests the cross-correlation function be calculated and output for random analysis             │
│              │ postprocessing.                                                                                  │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RALL         │ Requests both the cross-power spectral density function and cross-correlation function be        │
│              │ calculated and output for random analysis postprocessing.                                        │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Identification number of the RCROSS Bulk Data entry to be used in random analysis (Integer > 0). │
└──────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Case Control command RCROSS must be used along with Case Control command RANDOM. See Remarks under the   Case Control command description.
2. Response quantities such as DISPLACEMENT, STRESS, and FORCE must be requested by corresponding Case Control commands in order to compute cross-power spectral density and cross-correlation functions between the two response quantities specified by the RCROSS Bulk Data entry. It is recommended that those requests be put above the subcase level to avoid the situation that some response quantities are missing when it comes to the random analysis postprocessing.
3. The response quantities must belong to the same superelement. The cross-power spectral density and cross-correlation functions between the two responses, which belong to the different superelements, are not supported.
