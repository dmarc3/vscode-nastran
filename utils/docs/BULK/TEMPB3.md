## [TEMPB3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TEMPB3.xhtml) - CBEAM3 Element Temperature Field

Defines a temperature field for the three-node beam element (CBEAM3 entry).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPB3  SID     EID     T(A)    T(B)    T(C)    TPY(A)  TPZ(A)  TPY(B)  +       
+       TPZ(B)  TPY(C)  TPZ(C)  TC(A)   TD(A)   TE(A)   TF(A)   TC(B)   +       
+       TD(B)   TE(B)   TF(B)   TC(C)   TD(C)   TE(C)   TF(C)           +       
+               Element ID      List                                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPB3  101     23      45.9    10.0    0.0     1.3     23.9    3.8     +       
+               2.5     68.0    91.0    45.0            48.0    80.0    +       
+       20.0            33.9                    45.6                    +       
+       9       10      THRU    30      41      51      67      78      +       
+       THRU    110     BY      2                                               
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID        │ Temperature set identification number. (Integer > 0; Required)                                     │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID        │ Element identification number. (Integer > 0; Required)                                             │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(j)       │ Temperature at j (j=A,B,C) on the neutral axis. (Real; Default = 0.0)                              │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TPi(j)     │ Effective linear gradient in local direction i (i = y, z) at j (j = A, B, C).(Real; Default = 0.0) │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ti(j)      │ Temperature at stress recovery point i (i=C, D, E, F) defined in PBEAM3 at location j (j=A, B, C). │
│            │ (Real; Default = 0.0; see Remark 3.)                                                               │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Element ID │ List of CBEAM3 element identification numbers. Character strings “THRU” and “BY” may be used in    │
│ List       │ the list. (Integer > 0; “THRU” or “BY”. At least one element ID is required.)                      │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
