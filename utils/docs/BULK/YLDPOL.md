## [YLDPOL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.YLDPOL.xhtml) - Polynomial Yield Model

Defines a polynomial yield model where the yield stress is a function of effective plastic strain. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDPOL  YID     A       B       C       D       E       F       SMAX            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDPOL  7       180.E6                                                          
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ YID       │ Unique yield model number referenced from MATDEUL. (Integer > 0; Required) │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ A         │ Initial yield parameters. (Real > 0; Required)                             │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ B         │ Coefficient B. (Real; Default = 0.0)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ C         │ Coefficient C. (Real; Default = 0.0)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ D         │ Coefficient D. (Real; Default = 0.0)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ E         │ Coefficient E. (Real; Default = 0.0)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ F         │ Coefficient F. (Real; Default = 0.0)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────┤
│ SMAX      │ Maximum yield stress. (Real; Default = 1.E20)                              │
└───────────┴────────────────────────────────────────────────────────────────────────────┘
```
