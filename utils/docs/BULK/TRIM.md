## [TRIM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TRIM.xhtml) - Trim Variable Constraint

Specifies constraints for aeroelastic trim variables.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TRIM    SID     MACH    Q       LABEL1  UX1     LABEL2  UX2     AEQR    +       
+       LABEL3  UX3     -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TRIM    1       0.9     100.    URDD3   1.0     ANGLEA  7.0     0.0     +       
+       ELEV    0.2                                                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Trim set identification number.  (Integer > 0). See remarks 1 and 2.                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MACH      │ Mach number. (Real > 0.0 and 1.0)                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Q         │ Dynamic pressure. (Real > 0.0)                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LABELi    │ The label identifying aerodynamic trim variables defined on an AESTAT, AESURF or AEPARM entry.     │
│           │ (Character)                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UXi       │ The magnitude of the aerodynamic extra point degree-of-freedom.  (Real)                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AEQR      │ Flag to request a rigid trim analysis (Real > 0.0 and < 1.0; Default =1.0).  A value of 0.0        │
│           │ provides a rigid trim analysis, see Remark 5.                                                      │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
