## [TABDMP1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TABDMP1.xhtml) - Modal Damping Table

Defines modal damping as a tabular function of natural frequency.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABDMP1 TID     TYPE                                                            
        f1      g1      f2      g2      f3      g3      -etc.-                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TABDMP1 2                                                                       
        2.5     .01057  2.6     .01362  ENDT                                    
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ TID       │ Table identification number.  (Integer > 0)                               │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Type of damping units.  (Character:  “G”, “CRIT”, or “Q”; Default is “G”) │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ fi        │ Natural frequency value in cycles per unit time.  (Real > 0.0)            │
├───────────┼───────────────────────────────────────────────────────────────────────────┤
│ gi        │ Damping value.  (Real)                                                    │
└───────────┴───────────────────────────────────────────────────────────────────────────┘
```
