## [SDISPLACEMENT (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SDISPLACEMENT.Case.xhtml) - Solution Set Displacement Output Request

Requests the form and type of solution set displacement output.

#### Format:

![casecontrol4a01296.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01296.jpg?_LANG=enus)  

#### Examples:

```nastran
SDISPLACEMENT=ALL
SDISPLACEMENT(SORT2,PUNCH,PHASE)=NONE
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as a tabular listing of grid points for each load, frequency, eigenvalue, │
│              │ or time, depending on the solution sequence.                                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output will be presented as a tabular listing of frequency or time for each grid point (or mode    │
│              │ number).                                                                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT        │ The printer will be the output medium.                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │ The punch file will be the output medium.                                                          │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REAL or IMAG │ Requests rectangular format (real and imaginary) of complex output. Use of either REAL or IMAG     │
│              │ yields the same output.                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output. Phase output is in degrees.         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Displacements for all solution set points (modes) will be output.                                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Displacements for no solution set points (modes) will be output.                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification number of a previously appearing SET command. Only displacements on points with │
│              │ identification numbers that appear on this SET command will be output (Integer  >  0).             │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The defaults for SORT1 and SORT2 depend on the type of analysis, and is discussed in Remark 1 under the   Case Control command. If SORT1 is selected for any of the commands SACC, SDIS, and SVEL then the remaining commands will also be SORT1.
2. SDISPLACEMENT=NONE allows an overall output request to be overridden.
3. The SDISPLACEMENT command is required to output normalized complex eigenvectors.
4. In modal frequency and transient analyses with both structural and fluid modes, the solution set output request results in separate outputs for structural and fluid modal solutions. The first set is for the structural modal solution and the second set is for the fluid.
