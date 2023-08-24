## [TRIMF (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.TRIMF.Case.xhtml) - Trim Load Output Specification

Specifies options for the output of trim loads from a static aeroelastic analysis as FORCE/MOMENT Bulk Data entries.

#### Format:

![casecontrol4a01422.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01422.jpg?_LANG=enus)

#### Example:

```nastran
TRIMF(LOADSET=10001,LARGE)=ALL
TRIMF(UNIT=59,INERTIA,NOSUM)=1
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UNIT      │ Fortran unit to which data are written. (Optional; Default = 7) (punch file).                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOADSET   │ Load set id for output bulk data entries. If the TRIMF specification results in multiple load      │
│           │ sets, then the defined ID will be used for the first and each subsequent load set has an ID        │
│           │ incremented by 1. (Optional; Default = 1)                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LARGE     │ Write the output data in large field format (16 characters per field). The default is 8 characters │
│           │ per field.                                                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INERTIA   │ Write out inertial loads as a separate load set. By default, the separate load set will not be     │
│           │ written.                                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ APPLIED   │ Write out applied loads as a separate load set. By default, the separate load set will not be      │
│           │ written.                                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AIR       │ Write out aerodynamic loads as a separate load set. By default, the separate load set will not be  │
│           │ written.                                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOSUM     │ By default, the sum of the inertial, applied, and aerodynamic loads will be written as a separate  │
│           │ load set. This option suppresses the writing of that set of loads.                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RIGID     │ Write out rigid instances of the selected loads (Inertial, Applied, Air and/or Sum) as separate    │
│           │ load sets. By default, the separate load set will not be written.                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOELASTIC │ By default, the sum of the rigid and elastic increment loads will be written as a separate load    │
│           │ set. This option suppresses the writing of that set of loads.                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ QNORM     │ Normalize the load by the dynamic pressure used in the trim analysis. By default, the loads are    │
│           │ not normalized.                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Loads for all points will be output                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a previously appearing SET command.  Only loads on points with               │
│           │ identification numbers that appear on this SET command will be output (Integer > 0)                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
