## [TABLED2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABLED2.xhtml) - Dynamic Load Tabular Function, Form 2

Defines a tabular function for use in generating frequency-dependent and time-dependent dynamic loads.  Also contains parametric data for use with the table.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLED2 TID     X1                                                      +       
+       x1      y1      x2      y2      x3      y3      -etc.-                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLED2 15      -10.5                                                   +       
+       1.0     -4.5    2.0     -4.2    2.0     2.8     7.0     6.5     +       
+       SKIP    SKIP    9.0     6.5     ENDT                                    
```

```text
┌───────────┬─────────────────────────────────────────────┐
│ Describer │ Meaning                                     │
├───────────┼─────────────────────────────────────────────┤
│ TID       │ Table identification number.  (Integer > 0) │
├───────────┼─────────────────────────────────────────────┤
│ X1        │ Table parameter.  See Remark 6. (Real)      │
├───────────┼─────────────────────────────────────────────┤
│ xi, yi    │ Tabular values.  (Real)                     │
└───────────┴─────────────────────────────────────────────┘
```
