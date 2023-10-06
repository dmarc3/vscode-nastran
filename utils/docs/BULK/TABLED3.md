## [TABLED3](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABLED3.xhtml) - Dynamic Load Tabular Function, Form 3

Defines a tabular function for use in generating frequency-dependent and time-dependent dynamic loads.  Also contains parametric data for use with the table.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLED3 TID     X1      X2                                              +       
+       x1      y1      x2      y2      x3      y3      -etc.-                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLED3 62      126.9   30.0                                            +       
+       2.9     2.9     3.6     4.7     5.2     5.7     ENDT                    
```

```text
┌───────────┬─────────────────────────────────────────────┐
│ Describer │ Meaning                                     │
├───────────┼─────────────────────────────────────────────┤
│ TID       │ Table identification number.  (Integer > 0) │
├───────────┼─────────────────────────────────────────────┤
│ X1, X2    │ Table parameters.  (Real; X2  0.0)          │
├───────────┼─────────────────────────────────────────────┤
│ xi, yi    │ Tabular values.  (Real)                     │
└───────────┴─────────────────────────────────────────────┘
```
