## [CONM2](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CONM2.xhtml) - Concentrated Mass Element Connection, Rigid Body Form

Defines a concentrated mass at a grid point.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CONM2   EID     G       CID     M       X1      X2      X3              +       
+       I11     I21     I22     I31     I32     I33                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CONM2   2       15      6       49.7                                    +       
+       16.2            16.2                    7.8                             
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID        │ Element identification number.  (0 < Integer < 100,000,000). See Remark 1.                         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G          │ Grid point identification number. (Integer > 0). See Remark 7.                                     │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID        │ Coordinate system identification number. For CID of -1; see X1, X2, X3 below.  (Integer > -1;      │
│            │ Default = 0). See Remarks 4., 6. and 7.                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ M          │ Mass value. (Real). See Remarks 5. and 7.                                                          │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, X2, X3 │ Offset distances from the grid point to the center of gravity of the mass in the coordinate system │
│            │ defined in field 4, unless CID = -1, in which case X1, X2, X3 are the coordinates, not offsets, of │
│            │ the center of gravity of the mass in the basic coordinate system. (Real). See Remarks 4., 5.,      │
│            │ 6. and 7.                                                                                          │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Iij        │ Mass moments of inertia measured at the mass center of gravity in the coordinate system defined by │
│            │ field 4.  If CID = -1, the basic coordinate system is implied. (Real). See Remarks 4., 5. and 7.   │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all   other element identification numbers.
2. For a more general means of defining concentrated mass at grid points, see the CONM1 entry description.
3. The continuation is optional.
4. If CID = -1, offsets are internally computed as the difference between the grid point location and X1, X2, X3. The grid point locations may be defined in a nonbasic coordinate system.  In this case, the values of Iij   must be in a coordinate system that parallels the basic coordinate system.
5. The form of the inertia matrix about its center of gravity is taken as:

![bulkc202630.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202630.jpg?_LANG=enus)  

     See link for definitions.

6. If CID  >  0, then X1, X2, and X3 are defined by a local Cartesian system, even if CID references a spherical or cylindrical coordinate system. This is similar to the manner in which displacement coordinate systems are defined.
7. MSC Nastran contains two kinds of structural grid points, namely, non-harmonic structural grid points and harmonic structural grid points. The former have the standard three translational and three rotational degrees of freedom while the latter have three symmetric components and three anti-symmetric components dependent on the harmonic value.

     Harmonic grid points are identified automatically as the grid points listed on CQUADX and CTRIAX element entries that are associated with PAXSYMH entries.

     For a harmonic grid point, the mass value M is the total mass. This value is not to be multiplied by 2 p . The mass matrix computed for harmonic grids is dependent on the harmonic value associated with the PAXSYMH entry and will be automatically determined by the code. Only harmonic values of 0 and 1 have contributions to grid point weight generator type calculations.

     Any values specified in the CID, X1, X2, X3, I11, I21, I22, I31, I32, or I33 fields are ignored for a harmonic grid.

