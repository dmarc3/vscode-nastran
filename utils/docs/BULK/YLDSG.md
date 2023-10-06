## [YLDSG](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.YLDSG.xhtml) - Steinberg-Guinan Yield Model

Defines the Steinberg-Guinan yield model where the yield stress is a function of effective plastic strain, pressure and temperature. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDSG   YID     A1      A2      A3      A4      H       B       CP      +        
+       TMELT   TROOM                                                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDSG   7       8E+6    100E+6  110     0.5                                     
        1500    273                                                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ YID       │ Unique yield model number referenced from a MATDEUL entry. (Integer > 0; Required) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ A1-A4     │ Yield parameters. (Real > 0; Required)                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ H, B      │ Yield parameters. See Remark 4. (Real; Default = 0.0)                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ CP        │ Specific heat. (Real > 0; Default = 1.E20)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ TMELT     │ Melt temperature. (Real; Default = 1.E20)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ TROOM     │ Room temperature. (Real; Default = 293.0)                                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────┘
```
