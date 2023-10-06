## [TEMP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TEMP.xhtml) - Grid Point Temperature Field

Defines temperature at grid points for determination of thermal loading, temperature-dependent material properties, or stress recovery.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMP    SID     G1      T1      G2      T2      G3      T3                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TEMP    3       94      316.2   49      219.8                                   
```

```text
┌───────────┬───────────────────────────────────────────────────────┐
│ Describer │ Meaning                                               │
├───────────┼───────────────────────────────────────────────────────┤
│ SID       │ Temperature set identification number.  (Integer > 0) │
├───────────┼───────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification number.  (Integer > 0)      │
├───────────┼───────────────────────────────────────────────────────┤
│ Ti        │ Temperature.  (Real)                                  │
└───────────┴───────────────────────────────────────────────────────┘
```
