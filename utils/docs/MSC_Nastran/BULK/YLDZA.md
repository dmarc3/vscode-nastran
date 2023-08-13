## [YLDZA](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.YLDZA.xhtml) - Zerilli-Armstrong Yield Model

Defines the Zerilli-Armstrong yield model where the yield stress is a function of effective plastic strain, strain rate and temperature. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDZA   YID     A       B       n       C       m       EPS0            +       
+       D                                                                       
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDZA   7       200.E6  50.E6   0.1                                             
        0.0                                                                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ YID       │ Unique yield model number referenced from a MATDEUL entry. (Integer > 0; Required) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ A         │ Static yield parameters. (Real > 0; Required)                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ B         │ Hardening parameters. (Real > 0; Default = 0.0)                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Hardening exponent. (Real; Default = 0.0)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Strain rate parameter. (Real; Default = 1.0)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ m         │ Temperature exponent. (Real; Default = 1.0)                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ EPS0      │ Reference strain rate. (Real > 0; Default = 1.0)                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ CP        │ Specific heat. (Real > 0; Default = 1.E20)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ D         │ Bcc parameter. See Remark 4. (Real; Default = blank)                               │
└───────────┴────────────────────────────────────────────────────────────────────────────────────┘
```
