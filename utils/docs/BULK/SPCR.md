## [SPCR](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPCR.xhtml) - Enforced Relative Motion Value

Defines an enforced relative displacement value for a load step in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPCR    SID     G1      C1      D1      G2      C2      D2                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPCR    100     32      436     -2.6    5               2.9                     
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number of the SPCR entry.  (Integer > 0)                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid or scalar point identification number.  (Integer > 0)                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component number.  (0 < Integer < 6; up to six unique Integers may be placed in the field with no │
│           │ embedded blanks, a blank or 0 is treated the same as 1.)                                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Di        │ Value of enforced motion for Gi and Ci.  (Real)                                                   │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
