## [RINGFL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RINGFL.xhtml) - Axisymmetric Fluid Point

Defines a circle (fluid point) in an axisymmetric fluid model.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RINGFL  IDFA    XA1     XA2     XA3     IDFB    XB1     XB2     XB3             
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RINGFL  3       1.0             30.0                                            
```
```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDFA, IDFB │ Unique identification number of the fluid points.  (0 < Integer < 500000)                          │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XAi, XBi   │ Coordinates of the point defined in the coordinate system specified on the AXIF entry.  (Real; XA1 │
│            │ and XB1 > 0.0)                                                                                     │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. RINGFL is allowed only if an AXIF entry is also present.

2. All fluid point identification numbers must be unique with respect to other scalar, structural, and fluid points.

3. X1, X2, X3 are (r,  φ , z) for a cylindrical coordinate system and ( ρ ,  θ ,  φ ) for a spherical coordinate system.   θ  is in degrees.  The value of  φ  must be blank or zero.

4. One or two fluid points may be defined per entry.

