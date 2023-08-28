## [TRIM2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TRIM2.xhtml) - Trim Variable Definition

Defines the state of the aerodynamic extra points for a trim analysis. All undefined extra points will be set to zero.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TRIM2   SID     MACH    Q                                       AEQR    +       
+       LABEL1  VALUE1  LABEL2  VALUE2  -etc.-                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TRIM2   1       0.9     100.                                            +       
+       URDD3   1.0     ANGLEA  FREE    ELEV    0.2                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Trim set identification number.  (Integer > 0). See remarks 1 and 2.                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MACH      │ Mach number. (Real > 0.0 and 1.0) See Remark 5.                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Q         │ Dynamic pressure. (Real > 0.0)                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AEQR      │ Flag to request a rigid trim analysis (Real > 0.0 and < 1.0; Default =1.0).  A value of 0.0        │
│           │ provides a rigid trim analysis, see Remark 6.                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABELi    │ The label identifying aerodynamic trim variables defined on an AESTAT, AESURF or AEPARM entry.     │
│           │ (Character)                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VALUEi    │ The value assigned to LABELi. Either a real number that indicates the variable's fixed value, or   │
│           │ one of the following words: FREE, LINKED, or SCHED. See Remarks 3. and 4.                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
