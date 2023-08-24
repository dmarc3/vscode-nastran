## [AETRIA3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AETRIA3.xhtml) - Triangular Aerodynamic Element Connection

Defines the connectivity of a triangular aerodynamic element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AETRIA3 EID     CMPID   G1      G2      G3                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AETRIA3 3768    8       368     872     999                                     
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ EID       │ Element Identification Number. (0 < Integer < 100,000,000)            │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ CMPID     │ Aerodynamic Component Identification Number. (Integer > 0)            │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid Point Identification Numbers of Connection Points. (Integer > 0) │
└───────────┴───────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The AEGRID, AETRIA3, AEQUAD4, and AESCALE entries provide an aerodynamic mesh in a readable, portable format. There are no internal aerodynamics created on this mesh.
