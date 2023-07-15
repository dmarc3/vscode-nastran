## [TABLEH1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABLEH1.xhtml) - Heat Transfer Coefficient Table or Nusselt Number Table, Form 1

Defines a tabular function referenced by TABLEHT for convection heat transfer coefficient or Nusselt number.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLEH1 TID                                                                     
        y1      f1      y2      f2      y3      -etc.-                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLEH1 123                                                                     
        50.0    5.23    75.0    3.76    110.0   0.97    ENDT                    
```
```text
┌───────────┬─────────────────────────────────────────────┐
│ Describer │ Meaning                                     │
├───────────┼─────────────────────────────────────────────┤
│ TID       │ Table identification number.  (Integer > 0) │
├───────────┼─────────────────────────────────────────────┤
│ yi        │ Independent variables.  (Real)              │
├───────────┼─────────────────────────────────────────────┤
│ fi        │ Dependent variable.  (Real)                 │
└───────────┴─────────────────────────────────────────────┘
```
