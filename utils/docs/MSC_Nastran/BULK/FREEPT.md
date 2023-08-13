## [FREEPT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FREEPT.xhtml) - Fluid Free Surface Point

Defines the location of points on the surface of a fluid for recovery of surface displacements in a gravity field.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FREEPT  IDF     IDP1    PHI1    IDP2    PHI2    IDP3    PHI3                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FREEPT  3       301     22.5    302     90.0    303     370.0                   
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ IDF       │ RINGFL entry identification number.  (Integer > 0)                                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ IDPi      │ Free surface point identification number.  (Integer > 0)                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ PHIi      │ Azimuthal position on fluid point (RINGFL entry) in the fluid coordinate system.  (Real) │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. FREEPT is allowed only if an AXIF entry is also present.
2. All free surface point identification numbers must be unique with respect to other scalar, structural, and fluid points.
3. The free surface points are used for the identification of output data only.
4. Three points may be defined on a single entry.
5. The referenced fluid point (IDF) must   be included in a free surface list (FSLIST entry).
6. Output requests for velocity and acceleration can be made at these points.
