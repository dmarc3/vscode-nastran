## [CORD2C](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CORD2C.xhtml) - Cylindrical Coordinate System Definition, Form 2

Defines a cylindrical coordinate system using the coordinates of three points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CORD2C  CID     RID     A1      A2      A3      B1      B2      B3      +       
+       C1      C2      C3                                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CORD2C  3       17      -2.9    1.0     0.0     3.6     0.0     1.0     +       
+       5.2     1.0     -2.9                                                    
```

```text
┌────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                         │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID        │ Coordinate system identification number. (Integer > 0)                                          │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RID        │ Identification number of a coordinate system that is defined independently from this coordinate │
│            │ system. (Integer > 0; Default = 0 is the basic coordinate system.)                              │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ai, Bi, Ci │ Coordinates of three points given with respect to the coordinate system defined by RID. (Real)  │
└────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Coordinate system identification numbers on all CORD1R, CORD1C, CORD1S, CORD2R, CORD2C, CORD2S and CORD3G entries must be unique.
2. The three points [(A1, A2, A3), (B1, B2, B3), (C1, C2, C3)] must be unique and noncolinear.  Noncolinearity is checked by the geometry processor.  The first point defines the origin.  The second point defines the direction of the z-axis.  The third lies in the plane of the azimuthal origin.  The reference coordinate system must be independently defined.
3. The continuation entry is required.
4. If RID is zero or blank, the basic coordinate system is used.
5. The location of a grid point (P in  ) in this coordinate system is given by (R,  θ ,   Z), where  θ  is measured in degrees.

![bulkc202712.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202712.jpg?_LANG=enus)

Figure 0-5 CORD2C Definition

6. The displacement coordinate directions at P are dependent on the location of P as shown above by  ![bulkc202714.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202714.jpg?_LANG=enus) .
7. It is recommended that points on the z-axis not have their displacement directions defined in this coordinate system.  See the discussion of cylindrical coordinate systems in  Grid Point and Coordinate System Definition  in the  MSC Nastran Reference Guide . If CYLINDRICAL and point exactly on z-axis (r = 0.0 exactly) then R,  ![bulkc202716.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202716.jpg?_LANG=enus) , Z triad coordinates are exactly aligned with the local defining system triad. User caution: if  ![bulkc202718.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202718.jpg?_LANG=enus)  but not exactly 0.0 should be avoided as unexpected direction cosine matrix may result.
8. If any CORD2C, CORD2R, or CORD2S entry is changed or added on restart, then a complete re-analysis is performed.  Therefore, CORD2C, CORD2R, or CORD2S changes or additions are not recommended on restart.
9. An example of defining a coordinate system with respect to another coordinate system (RID) may be found in the Linear Static Analysis manual  Example .

