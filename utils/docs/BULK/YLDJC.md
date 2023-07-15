## [YLDJC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.YLDJC.xhtml) - Johnson-Cook Yield Model

Defines a Johnson-Cook yield model where the yield stress is a function of effective plastic strain, strain rate, and temperature. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDJC   YID     A       B       n       C       m       EPS0    CP              
        100     200E6   50.E6   0.1     .15     .95     1.      285.            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDJC   TMELT   TROOM                                                           
        1500.   273.                                                            
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ YID       │ Unique yield-model number referenced from a MATDEUL entry. (Integer > 0; Required) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ A         │ Static yield stress. (Real > 0.0; Required)                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ B         │ Hardening parameter. (Real; Default = 0.0)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Hardening exponent. (Real; Default = 1.0)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Strain-rate parameter. (Real; Default = 0.0)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ m         │ Temperature exponent. (Real; Default = 1.0)                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ EPS0      │ Reference strain rate. (Real > 0.0; Default = 1.0)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ CP        │ Specific heat. (Real > 0.0; Default = 1.E20)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ TMELT     │ Melt temperature. (Real; Default = 1.E20)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ TROOM     │ Room temperature. (Real; Default = 293.0)                                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remark:

1. The yield stress is computed from

     ![bulktuv08187.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/../../../assets/bulktuv08187.jpg?_LANG=enus)  

     where

```text
┌───┬───┬──────────────────────────┐
│   │ = │ effective plastic strain │
├───┼───┼──────────────────────────┤
│   │ = │                          │
├───┼───┼──────────────────────────┤
│   │ = │ effective strain rate    │
├───┼───┼──────────────────────────┤
│   │ = │ referenced strain rate   │
├───┼───┼──────────────────────────┤
│ T │ = │ temperature              │
├───┼───┼──────────────────────────┤
│   │ = │ room temperature         │
├───┼───┼──────────────────────────┤
│   │ = │ melt temperature         │
└───┴───┴──────────────────────────┘
```
     and  A, B, n, C , and  m  are constants.

2. The reference strain rate is per unit time.

3. YID must unique among all YLDxx entries in one model.

