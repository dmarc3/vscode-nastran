## [GRIDS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.GRIDS.xhtml) - Slot Surface Point

Defines a scalar degree-of-freedom with a two-dimensional location.  Used in defining pressure in slotted acoustic cavities.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GRIDS   ID      R       Z       W       IDF                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GRIDS   25      2.5     -7.3    0.5                                             
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification number of the slot point. (Integer > 0)                │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ R         │ Radial location of point in basic coordinate system. (Real0.0)        │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ Z         │ Axial location of point in basic coordinate system. (Real)            │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ W         │ Slot width or thickness at the GRIDS point. (Real > 0.0 or blank)     │
├───────────┼───────────────────────────────────────────────────────────────────────┤
│ IDF       │ Identification number to define a GRIDF point. (Integer > 0 or blank) │
└───────────┴───────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry is allowed only if an AXSLOT entry is also present.
2. ID (and IDF if present) must be unique with respect to all other scalar, structural, fluid and extra (EPOINT) points.
3. If W is blank, the default value on the AXSLOT entry will be used.
4. The IDF number is referenced on the CAXIFi entry for central cavity fluid elements next to the interface. The IDF number is entered only if the grid point is on an interface. In this case, the IDF should also be defined on a GRIDF entry.
5. If IDF is nonzero, then R must be greater than zero.
6. For plotting purposes, the R location corresponds to the basic X coordinate. The Z location corresponds to the basic Y coordinate. The slot width, W, corresponds to the basic Z coordinate. The pressure will be plotted in the basic Z direction.
7. Load and constraint conditions are applied as if the GRIDS is a scalar point.  Positive loads correspond to inward flow. A single-point constraint causes zero pressure at the point.
