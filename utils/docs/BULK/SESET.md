## [SESET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SESET.xhtml) - Superelement Interior Point Definition

Defines interior grid points for a superelement.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SESET   SEID    G1      G2      G3      G4      G5      G6      G7              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SESET   5       2       17      24      25      165                             
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SESET   SEID    G1      “THRU”  G2                                              
SESET   2       17      THRU    165                                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Superelement identification number.  Must be a primary superelement. (Integer > 0) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid or scalar point identification number.  (0 < Integer < 100000000; G1 < G2)    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────┘
```
