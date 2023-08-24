## [PFASTT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PFASTT.xhtml) - Frequency Dependent and material nonlinear CFAST Property

Defines the frequency dependent and material nonlinear properties for a PFAST Bulk Data entry.

##### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PFASTT  PID     “K”     TKID1   TKID2   TKID3   TKID4   TKID5   TKID6   +       
+               “GE”    TGEID                                           +       
+               “KN”    TKNID1  TKNID2  TKNID3  TKNID4  TKNID5  TKNID6  +       
+                       FDC     FUSE    DIR     OPTION  LOWER   UPPER   +       
+                       FSR     LRGR                                            
```

##### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PFASTT  33      “GE”    158                                                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number that matches the identification number on PFAST entry. (Integer > 0)│
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “K”       │ Flag indicating that the next 1 to 6 fields are stiffness frequency table identification numbers.  │
│           │ (Character)                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TKIDi     │ Identification number of a TABLEDi entry that defines the stiffness vs. frequency relationship in  │
│           │ directions 1 through 6. (Integer ≥ 0; Default = 0)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “GE”      │ Flag indicating that the next field is a structural damping frequency table identification number. │
│           │ (Character)                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TGEID     │ Identification number of a TABLEDi entry that defines the nondimensional structural damping        │
│           │ coefficient vs. frequency relationship. (Integer ≥ 0; Default = 0)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “KN”      │ Flag indicating that the next 1 to 6 fields are nonlinear force-deflection table identification    │
│           │ numbers. (Character)                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TKINDi    │ Identification number of a TABLEDi entry that defines the force vs. deflection relationship in     │
│           │ directions 1 through 6. (Integer ≥ 0; Default = 0)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FDC       │ Force deflection curve rule. Specifies dependence between displacement components. See PBUSHT FDC  │
│           │ entry of detail of rules.                                                                          │
├───────────┼─────────────┬──────────────────────────────────────────────────────────────────────────────────────┤
│ FUSE      │ 0           │ The element remains active irrespective of failure level. (Integer 0, 1, or 2,       │
│           │             │ Default = 0)                                                                         │
├───────────┼─────────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│           │ 1           │ The element is deactivated if maximum failure as specified in OPTION is reached.     │
│           │             │ Elements remains for post processing.                                                │
├───────────┼─────────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│           │ 2           │ The element is deactivated if maximum failure as specified in                        │
│           │             │ OPTION is reached. Element is removed from post processing.                          │
├───────────┼─────────────┴──────────────────────────────────────────────────────────────────────────────────────┤
│ DIR       │ The fuse direction. (0 < Integer < 6; Default = 0). 0 or 123456 imply any direction may fuse.      │
│           │ Values of 1 through 6 may be placed in the field with no embedded blanks. See Remark 13. of PBUSHT.│
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OPTION    │ Specifies a failure mode. (Character - Default="RELDIS")                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “ULTLD”   │ The specified failure load in compression or tension will be used to define failure using load     │
│           │ computed from the appropriate radial dependence of displacement relationship.                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “RELDIS”  │ The specified max relative + displacement will be used to define failure.                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “RULTLD”  │ The specified failure load in compression or tension will be used to define failure using the      │
│           │ actual current physical load in each spring.                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOWER     │ Lower failure bound. (Real; Default=0.0)                                                           │
│           │ If OPTION = “ULTLD” then LOWER specifies a lower failure load                                      │
│           │ If OPTION = “RELDIS” then LOWER specifies a minimum relative displacement before failure.          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UPPER     │ Upper failure bound. (Real; Default=0.0)                                                           │
│           │ If OPTION = “ULTLD” then UPPER specifies an upper failure load.                                    │
│           │ If OPTION = “RELDIS” then UPPER specifies a maximum relative displacement before failure.          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FSR       │ Fuse Stiffness Retention Factor is a factor which scales the stiffness so that the stiffness does  │
│           │ not instantly drop to a zero value. (Real > 0.0; Default = 1.-5)                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LRGR      │ Specifies if large rotation is to occur at end A. (Integer > 0; Default = 0). Remark 14. of the    │
│           │ PBUSHT.                                                                                            │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. For frequency dependent modal frequency response the modes are computed using the nominal Ki values as specified on the PFAST entry.
2. The nominal values are used for all analysis types except frequency response. For frequency dependent modal frequency response the system modes are computed using the nominal Ki values. The frequency-dependent values are used at every excitation frequency.
3. The PFASTT entry may only be referenced by CFAST elements in the residual structure of SOL400 which do not attach to any omitted degrees-of-freedom.
4. For nonlinear analysis the nominal values for Ki on the PFAST should agree with the initial slope of the nonlinear force-displacement relationship defined by the PFASTT, or the results will be unpredictable.
