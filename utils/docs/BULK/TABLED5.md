## [TABLED5](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABLED5.xhtml) - Dynamic Load Tabular Function, Form 5

Defines a value as a function of two variables for use in generating frequency-dependent and time-dependent dynamic loads.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLED5 TID                                                             +       
+       X(1)    TID(1)  X(2)    TID(2)  X(3)    TID(3)  X(4)    TID(4)  +       
+       ...     ...     ENDT                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLED5 52                                                              +       
+       0.0     101     10.0    102     30.0    103     ENDT                    
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID       │ Table identification number.  (Integer > 0)                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X(i)      │ X value for the function specified by TID(i) (Real; no Default).                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID(i)    │ ID of a TABLED1, TABLED2, TABLED3 or TABLED4 defining the function Y for the given value of X. │
│           │ (Integer > 0; no Default).                                                                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```
