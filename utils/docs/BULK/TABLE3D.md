## [TABLE3D](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABLE3D.xhtml) - Tabular Function with Three Variables

Specify a function of three variables for the CORD3G entry only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLE3D TID     X0      Y0      Z0      F0                              +       
+       X1      Y1      Z1      F1      X2      Y2      Z2      F2      +       
+       X3      Y3      Z3      F3      X4      Y4      Z4      F4      +       
+       -etc.-  ENDT                                                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLE3D 128     0.      0.      1.                                      +       
+       7.      8.      9.      100.    12.     14.     11.     200.    +       
+       17.     18.     19.     1100.   112.    114.    111.    1200.   +       
+       ENDT                                                                    
```

```text
┌───────────┬──────────────────────────────┬─────────────┬──────────┐
│ Describer │ Meaning                      │ Type        │ Default  │
├───────────┼──────────────────────────────┼─────────────┼──────────┤
│ TID       │ Table identification number. │ Integer > 0 │ Required │
├───────────┼──────────────────────────────┼─────────────┼──────────┤
│ X0,Y0,Z0  │ Offset of the independent    │ Real        │ 0.0      │
│           │ variables.                   │             │          │
├───────────┼──────────────────────────────┼─────────────┼──────────┤
│ F0        │ Offset of the dependent      │ Real        │ 0.0      │
│           │ variables.                   │             │          │
├───────────┼──────────────────────────────┼─────────────┼──────────┤
│ Xi,Yi,Zi  │ Independent variables.       │ Real        │ 0.0      │
├───────────┼──────────────────────────────┼─────────────┼──────────┤
│ Fi        │ Dependent variable.          │ Real        │ 0.0      │
└───────────┴──────────────────────────────┴─────────────┴──────────┘
```
