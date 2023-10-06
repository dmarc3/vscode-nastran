## [CORD3R](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CORD3R.xhtml) - Moving Rectangular Coordinate System

Defines a moving rectangular coordinate system using three points in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CORD3R  CID     N1      N2      N3      CID     N1      N2      N3              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CORD3R  1001    1       144     300                                             
```

```text
┌────────────┬────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                            │
├────────────┼────────────────────────────────────────────────────┤
│ CID        │ Unique coordinate system number. (Integer > 0)     │
├────────────┼────────────────────────────────────────────────────┤
│ N1, N2, N3 │ Grid point numbers (must be unique). (Integer > 0) │
└────────────┴────────────────────────────────────────────────────┘
```

#### Remarks:

1. Available in SOL 700 only.
2. Two different coordinate systems may be defined on one entry.
3. The grid points must be defined in an independent coordinate system.
4. The first grid point is the origin, the second lies on the z-axis and the third lies in the x-z plane.
5. The position and orientation of the coordinate system is updated as the grid points move.
6. The three grid points must not be colinear.
