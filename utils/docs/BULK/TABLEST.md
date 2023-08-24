## [TABLEST](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABLEST.xhtml) - Material Property Temperature-Dependence Table

Specifies the material property tables for nonlinear elastic temperature-dependent materials.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLEST TID                                                             +       
+       T1      TID1    T2      TID2    T3      -etc.-                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABLEST 101                                                             +       
+       150.0   10      175.0   20      ENDT                                    
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                         │
├───────────┼─────────────────────────────────────────────────────────────────┤
│ TID       │ Table identification number.  (Integer > 0)                     │
├───────────┼─────────────────────────────────────────────────────────────────┤
│ Ti        │ Temperature values.  (Real)                                     │
├───────────┼─────────────────────────────────────────────────────────────────┤
│ TIDi      │ Table identification numbers of TABLES1 entries.  (Integer > 0) │
└───────────┴─────────────────────────────────────────────────────────────────┘
```
