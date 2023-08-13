## [TABLEHT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABLEHT.xhtml) - Heat Transfer Coefficient Table or Nusselt Number Table with Two Variables

Specifies a function of two variables for convection heat transfer coefficient or Nusselt number.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLEHT TID                                                             +       
+       x1      TID1    x2      TID2    x3      -etc.                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLEHT 85                                                              +       
+       10.0    101     25.0    102     40.0    110     ENDT                    
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                         │
├───────────┼─────────────────────────────────────────────────────────────────┤
│ TID       │ Table identification number.  (Integer > 0)                     │
├───────────┼─────────────────────────────────────────────────────────────────┤
│ xi        │ Independent variables.  (Real)                                  │
├───────────┼─────────────────────────────────────────────────────────────────┤
│ TIDi      │ Table identification numbers of TABLEH1 entries.  (Integer > 0) │
└───────────┴─────────────────────────────────────────────────────────────────┘
```
