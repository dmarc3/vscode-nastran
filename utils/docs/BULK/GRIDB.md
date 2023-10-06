## [GRIDB](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.GRIDB.xhtml) - Axisymmetric Grid Point

Defines the location of a geometric grid point on a fluid point (RINGFL entry) for an axisymmetric fluid model and/or axisymmetric structure.  Also defines the boundary of the fluid.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GRIDB   ID                      PHI             CD      PS      IDF             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
GRIDB   30                      30.0            3       345     20              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Grid point identification number.  (0 < Integer < 1000000)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHI       │ Azimuthal position of the fluid in degrees.  (Real)                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CD        │ Identification number of the coordinate system in which the displacements are defined at the grid  │
│           │ point.  (Integer > 0 or blank)                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PS        │ Permanent single-point constraints associated with grid point.  (Any combination of the Integers 1 │
│           │ through 6 with no embedded blanks, or blank.)                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDF       │ Identification number of a RINGFL entry.  (Integer > 0)                                            │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. GRIDB is allowed only if an AXIF entry is also present.  The AXIF entry must define a fluid coordinate system.
2. All   GRIDB identification numbers must be unique with respect to other scalar, structural, fluid and extra (EPOINT) points.
3. The referenced RINGFL entry must be present and be included in a boundary list (BDYLIST entry).
4. If no harmonic numbers on the AXIF entry are specified, no fluid elements are necessary.
5. The collection of all CD coordinate systems defined on all GRID and GRIDB entries is called the global coordinate system.
6. Fields 3, 4, and 6 are ignored, which facilitates the conversion of GRID entries to GRIDB entries.  Note that the fields are the same except for fields 1 and 9 when a cylindrical coordinate system is used.
