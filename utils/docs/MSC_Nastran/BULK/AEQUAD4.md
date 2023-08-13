## [AEQUAD4](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AEQUAD4.xhtml) - Quadrilateral Aerodynamic Element Connection

Defines the connectivity of a quadrilateral aerodynamic element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AEQUAD4 EID     CMPID   G1      G2      G3      G4                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AEQUAD4 100     2       12      32      41      50                              
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

1. The geometry of a quadrilateral aerodynamic element may collapse to a triangle, i.e., two connection points may have the same geometric location. However, all four grid point identification numbers must be different.
2. The AEGRID, AETRIA3, AEQUAD4, and AESCALE entries provide an aerodynamic mesh in a readable, portable format. There are no internal aerodynamics created on this mesh.
