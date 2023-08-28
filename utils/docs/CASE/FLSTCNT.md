## [FLSTCNT (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.FLSTCNT.Case.xhtml) - Miscellaneous Fluid-Structure Control Parameters

Control for fluid-structure symmetry and force requests.

#### Format:

![casecontrol4a01000.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01000.jpg?_LANG=enus)  

#### Example(s):

```nastran
FLSTCNT      ACSYM =  YES      ACOUT =  RMS
```

```text
┌─────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                         │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ACSYM       │ Requests symmetric or nonsymmetric solution for fluid-structure analysis.                       │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YES         │ Requests symmetrized coupled fluid-structure analysis.                                          │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NO          │ Requests no symmetric coupled fluid-structure analysis.                                         │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ACOUT       │ Requests peak or rms for output to be used with the FORCE request.                              │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PEAK,       │ Requests peak value output to be used with the FORCE request.                                   │
│ PEAKINT     │                                                                                                 │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RMS, RMSINT │ Requests rms value output to be used with the FORCE request.                                    │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PREFDB      │ Specifies the peak reference pressure.                                                          │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ prp         │ Value for the peak reference pressure.                                                          │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASCOUP      │ Request a coupled or noncoupled fluid-structure analysis.                                       │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YES         │ Request a coupled fluid-structure analysis.                                                     │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NO          │ Request a noncoupled fluid-structure analysis.                                                  │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SKINOUT     │ Request that sets of grid point and element lists be output for both the fluid and structure at │
│             │ the fluid-structure interface.                                                                  │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE        │ Requests no output of sets.                                                                     │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH       │ Requests set output to punch file (.pch) only.                                                  │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT       │ Requests set output to .f06 file only.                                                          │
├─────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL         │ Requests set output to both .pch and .f06 files.                                                │
└─────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry represents a collection of PARAM,name,value entries. See   for detailed descriptions of the parameters collected on this entry. The value of any of these parameters may be given as either the character value given in this description, or the numeric value given under the parameter description in this guide.
2. Options with suffix INT generates INTENSITY, instead of ACCLERATION. Unlike ACCELERATION which is complex, INTENSITY is a scalar quantity.
