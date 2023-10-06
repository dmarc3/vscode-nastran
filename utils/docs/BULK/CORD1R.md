## [CORD1R](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CORD1R.xhtml) - Rectangular Coordinate System Definition, Form 1

Defines a rectangular coordinate system using three grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CORD1R  CIDA    G1A     G2A     G3A     CIDB    G1B     G2B     G3B             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CORD1R  3       16      32      19                                              
```

```text
┌────────────┬──────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                  │
├────────────┼──────────────────────────────────────────────────────────┤
│ CIDA, CIDB │ Coordinate system identification number.  (Integer > 0)  │
├────────────┼──────────────────────────────────────────────────────────┤
│ GiA, GiB   │ Grid point identification numbers.  (Integer > 0;  and ) │
└────────────┴──────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Coordinate system identification numbers on all CORD1R, CORD1C, CORD1S, CORD2R, CORD2C, CORD2S and CORD3G entries must be unique.
2. One or two coordinate systems may be defined on a single entry.
3. GiA and GiB must be defined in coordinate systems with definitions that do not involve the coordinate system being defined. The first point is the origin, the second lies on the z-axis, and the third lies in the x-z plane. The three grid points GiA (or GiB) must be noncolinear and not coincident.
4. The location of a grid point (P in  ) in this coordinate system is given by (X, Y, Z).

![bulkc202684.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202684.jpg?_LANG=enus)

Figure 0-3 CORD1R Definition

5. The displacement coordinate directions at P are shown above by  ![bulkc202686.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202686.jpg?_LANG=enus) .
