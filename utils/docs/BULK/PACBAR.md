## [PACBAR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PACBAR.xhtml) - Acoustic Barrier Property

Defines the properties of the acoustic barrier element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PACBAR  PID     MBACK   MSEPTM  FRESON  KRESON                                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PACBAR  12      1.0     0.01    400.0                                           
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                                   │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ MBACK     │ Mass per unit area of the backing material. (Real > 0.0)                        │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ MSEPTM    │ Mass per unit area of the septum material. (Real > 0.0)                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ FRESON    │ Resonant frequency of the sandwich construction in hertz. (Real > 0.0 or blank) │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ KRESON    │ Resonant stiffness of the sandwich construction. (Real > 0.0 or blank)          │
└───────────┴─────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. PACBAR is referenced by a CHACBR entry only.

2. Either FRESON or KRESON must be specified, but not both.

