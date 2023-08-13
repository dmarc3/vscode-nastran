## [CAMPBLL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CAMPBLL.xhtml) - Campbell Diagram Parameters

Specifies the parameters for Campbell Diagram generation and mode tracking analysis.

#### Formats:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAMPBLL CID     VPARM   DDVALID TYPE                                    +       
+       MODTRK  CORU    SWITR   NUMMOD  PRTCOR                                  
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAMPBLL 15      SPEED   22      RPM                                     +       
+       1       0.75    1               1                                       
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Identification number of entry (Integer > 0; Required).                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VPARM     │ Variable parameter, allowable entry is: ‘SPEED’.                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ ‘SPEED’, reference rotor speed will be varied (rotordynamic option only).                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DDVALID   │ Identification number of DDVAL entry that specifies the values for the variable parameter (Integer │
│           │ > 0; Required).                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Allowable entries are: ‘FREQ’ and ‘RPM’.                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODTRK    │ Perform mode tracking using either numerical approach (default) or eigenvector based approach or   │
│           │ both.    (Default = 0). See remark 4.                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CORU      │ Threshold for mode correlation.                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SWITR     │ Option to use updated mode for mode tracking in case of failure. See remark 7.                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NUMMODE   │ Number of modes to track (Should be less than 0.5*Neig, where Neig is the number of eigenvalues    │
│           │ extracted in EIGC). See remark 4.                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRTCOR    │ Option to print correlation matrix at each rotor speed (Default = 0). See remark 9.                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1.     CAMPBLL option is supported for SOL 107, SOL110, SOL200 and SOL400 analysis.
2. CAMPBLL option is supported in SOL 200 and SOL 400 for ANALYSIS = DCEIG/MCEIG.
3. Only the modes with positive imaginary part are used for mode tracking (to avoid repeated eigenvalues.)
4. Following methods are available in MSC Nastran for mode tracking:
  - Numerical Mode tracking based on second derivative.
  Obtain second derivative for the variation of eigenvalue with rotor speed and determine the eigenfrequency with minimum slope.
  - Mode tracking based on orthogonality of left and right eigenvectors.

This feature is available for analysis in fixed reference frame only.

     MODTRK = 0:      Perform numerical mode tracking only. (Default)
     MODTRK = 1:      Perform BOTH numerical and eigenvector based mode tracking.
     MODTRK = 2:      Perform eigenvector based mode tracking only.

5. The variables specified in the second row are relevant for eigenvector-based mode tracking only.
6. Ideally, for tracked pair of modes, the value of Normalized Cross Complex Orthogonality (NC2O) parameter is very close to 1. However, for complex models involving large stator component and dynamic reduction, this value can be significantly lower. Thus, the default value for CORU is set to 0.7. Based on the model complexity and NC2O matrix obtained for two rotor speeds, user may change this value.
7. In case of mode tracking failure at a particular rotor speed, user has the option to continue mode tracking for rest of the rotors speed by:

```text
SWITR = 1: Updating modes corresponding to rotor speed with failed mode tracking, or
SWITR = 0: Using the modes from last rotor speed with successful mode tracking. (Default)
In case the Campbell diagram includes multiple mode switching and there are new modes entering the analysis, use of SWITR=1 is recommended.
```

8. Only the complex eigenvalues with positive imaginary part are considered for mode tracking analysis. As a result, the number of eigenvalues available for mode tracking may not be same at all the rotor speeds considered in the analysis. This may lead to mode tracking failure. One way to avoid this issue is to pick NUMMODE to be less than half of the number of complex eigenvalues extracted using EIGC bulk data entry. Thus, the analysis uses only the first NUMMODE frequencies with positive imaginary part for mode tracking at each rotor speed.
9. When PRTCOR parameter is turned to 1, the code prints NC2O matrix corresponding to each rotor speed in the F06 file. This information can be very useful in identifying reasons for mode tracking failure.
10. For both approaches, damping ratio is also tracked while tracking eigenfrequencies. The results produced from mode tracking can be extracted in OP4 using following assign statements:

```nastran
$ Extract results for numerical mode tracking
ASSIGN  OUTPUT4='freq_nmt.op4',UNIT=71,FORM=FORMATTED,DELETE $ MODE FREQS
ASSIGN  OUTPUT4='rot_nmt.op4',UNIT=72,FORM=FORMATTED,DELETE $ ROTOR SPEED
ASSIGN  OUTPUT4='dmp_nmt.op4',UNIT=73,FORM=FORMATTED,DELETE $ DAMPING RATIO
$ Extract results for eigenvector based mode tracking
ASSIGN  OUTPUT4='freq_evmt.op4',UNIT=81,FORM=FORMATTED,DELETE $ MODE FREQS
ASSIGN  OUTPUT4='rot_evmt.op4',UNIT=82,FORM=FORMATTED,DELETE $ ROTOR SPEED
ASSIGN  OUTPUT4='dmp_evmt.op4',UNIT=83,FORM=FORMATTED,DELETE $ DAMPING RATIO
```

These OP4 files can be imported in MSC PATRAN to produce Campbell Diagram.

11. DMP>1 is not supported for SOL 110 for generating Campbell diagram when ACMS option is not used.
12. For Campbell diagram, the selected RGYRO Bulk Data entry must have the ASYNC option specified in its SYNCFLG field. Otherwise, the program terminates the execution with an appropriate fatal message.
