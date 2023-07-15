## [TABLES1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABLES1.xhtml) - Material Property Table, Form 1

Defines a tabular function for stress-dependent material properties such as the stress-strain curve (MATS1 entry), creep parameters (CREEP entry) and hyperelastic material parameters (MATHP entry).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLES1 TID     TYPE                                                            
        x1      y1      x2      y2      x3      y3      -etc.-  “ENDT”          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLES1 32                                                                      
        0.0     0.0     .01     10000.  .02     15000.  ENDT                    
```
TID

Table identification number.  (Integer > 0)

TYPE

Flag to define type of the stress-strain curve. See Remark 8. (Integer = 1 or 2; Default = 1)

xi, yi

Tabular values.  (Real)

“ENDT”

Flag indicating the end of the table.

--------------------

