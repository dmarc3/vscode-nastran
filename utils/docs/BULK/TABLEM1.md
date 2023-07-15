## [TABLEM1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABLEM1.xhtml) - Material Property Table, Form 1

Defines a tabular function for use in generating temperature-dependent material or fatigue related properties.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLEM1 TID     XAXIS   YAXIS                                                   
        x1      y1      x2      y2      x3      y3      -etc.-  “ENDT”          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLEM1 32                                                                      
        -3.0    6.9     2.0     5.6     3.0     5.6     ENDT                    
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID       │ Table identification number. See Remark 8. (Integer > 0 or Integer < 0)                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XAXIS     │ Specifies a linear or logarithmic interpolation for the x-axis.  (Character:  “LINEAR” or “LOG”; │
│           │ Default = “LINEAR”) See Remark 9.                                                                │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ YAXIS     │ Specifies a linear or logarithmic interpolation for the y-axis.  (Character:  “LINEAR” or “LOG”; │
│           │ Default = “LINEAR”) See Remark 9.                                                                │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ xi, yi    │ Tabular values.  (Real)                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “ENDT”    │ Flag indicating the end of the table.                                                            │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
