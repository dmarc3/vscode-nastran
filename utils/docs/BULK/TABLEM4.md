## [TABLEM4](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABLEM4.xhtml) - Material Property Table, Form 4

Defines coefficients of a power series for use in generating temperature-dependent material properties.  Also contains parametric data for use with the table.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLEM4 TID     X1      X2      X3      X4                              +       
+       A0      A1      A2      A3      A4      A5      -etc.-                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLEM4 28      0.0     1.0     0.0     100.                            +       
+       2.91    -0.0329 6.51-5  0.0     -3.4-7  ENDT                            
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ TID       │ Table identification number. See Remark 4. (Integer > 0 or Integer < 0) │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ Xi        │ Table parameters.  (Real; X20.0; X3 < X4)                               │
├───────────┼─────────────────────────────────────────────────────────────────────────┤
│ Ai        │ Coefficients.  (Real)                                                   │
└───────────┴─────────────────────────────────────────────────────────────────────────┘
```
