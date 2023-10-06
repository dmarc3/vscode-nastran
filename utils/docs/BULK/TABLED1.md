## [TABLED1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABLED1.xhtml) - Dynamic Load Tabular Function, Form 1

Defines a tabular function for use in generating frequency-dependent and time-dependent dynamic loads.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLED1 TID     XAXIS   YAXIS                                           +       
+       x1      y1      x2      y2      x3      y3      -etc.-  “ENDT”          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLED1 32                                                              +       
+       -3.0    6.9     2.0     5.6     3.0     5.6     ENDT                    
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ TID       │ Table identification number.  (Integer > 0)                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ XAXIS     │ Specifies a linear or logarithmic interpolation for the x-axis.  See Remarks 6. and │
│           │ 10. (Character:  “LINEAR” or “LOG”; Default = “LINEAR”)                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ YAXIS     │ Specifies a linear or logarithmic interpolation for the y-axis.  See Remarks 6. and │
│           │ 10. (Character:  “LINEAR” or “LOG”; Default = “LINEAR”)                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ xi, yi    │ Tabular values.  (Real)                                                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────┤
│ “ENDT”    │ Flag indicating the end of the table.                                               │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────┘
```
