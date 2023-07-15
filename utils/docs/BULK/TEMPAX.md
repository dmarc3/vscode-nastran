## [TEMPAX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TEMPAX.xhtml) - Conical Shell Temperature

Defines temperature sets for conical shell problems.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPAX  SID1    RID1    PHI1    T1      SID2    RID2    PHI2    T2              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPAX  4       7       30.0    105.3                                           
```
```text
┌───────────┬───────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                       │
├───────────┼───────────────────────────────────────────────────────────────┤
│ SIDi      │ Temperature set identification number.  (Integer > 0)         │
├───────────┼───────────────────────────────────────────────────────────────┤
│ RIDi      │ Ring identification number (see RINGAX entry).  (Integer > 0) │
├───────────┼───────────────────────────────────────────────────────────────┤
│ PHIi      │ Azimuthal angle in degrees.  (Real)                           │
├───────────┼───────────────────────────────────────────────────────────────┤
│ Ti        │ Temperature.  (Real)                                          │
└───────────┴───────────────────────────────────────────────────────────────┘
```
