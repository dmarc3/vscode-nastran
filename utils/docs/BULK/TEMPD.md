## [TEMPD](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TEMPD.xhtml) - Grid Point Temperature Field Default

Defines a temperature value for all grid points of the structural model that have not been given a temperature on a TEMP or TEMPN1 (for heat transfer analysis) entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPD   SID1    T1      SID2    T2      SID3    T3      SID4    T4              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMPD   1       216.3                                                           
```

```text
┌───────────┬───────────────────────────────────────────────────────┐
│ Describer │ Meaning                                               │
├───────────┼───────────────────────────────────────────────────────┤
│ SIDi      │ Temperature set identification number.  (Integer > 0) │
├───────────┼───────────────────────────────────────────────────────┤
│ Ti        │ Default temperature value.  (Real)                    │
└───────────┴───────────────────────────────────────────────────────┘
```
