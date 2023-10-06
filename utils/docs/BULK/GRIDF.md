## [GRIDF](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.GRIDF.xhtml) - Fluid Point

Defines a scalar degree-of-freedom for harmonic analysis of a fluid.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GRIDF   ID      R       Z                                                       
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GRIDF   23      2.5     -7.3                                                    
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification number of axisymmetric fluid point.  (0 < Integer < 1000000) │
├───────────┼─────────────────────────────────────────────────────────────────────────────┤
│ R         │ Radial location of point in basic coordinate system.  (Real > 0.0)          │
├───────────┼─────────────────────────────────────────────────────────────────────────────┤
│ Z         │ Axial location of point in basic coordinate system.  (Real)                 │
└───────────┴─────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry is allowed only if an AXSLOT entry is also present.
2. ID must be unique with respect to all other scalar, structural, fluid and extra (EPOINT) points.
3. Grid points on slot boundaries are defined on GRIDS entries.  Do not also define them on GRIDF entries.
4. For plotting purposes, the R location corresponds to the basic X coordinate.  The Z location   corresponds to the basic Y coordinate.  Pressures will be plotted as displacements in the basic Z direction.
5. Load and constraint conditions are applied as if GRIDF were a scalar point.  Positive loads correspond to inward flow.  A single-point constraint causes zero pressure at the point.
