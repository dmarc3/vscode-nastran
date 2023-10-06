## [CORD2S](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CORD2S.xhtml) - Spherical Coordinate System Definition, Form 2

Defines a spherical coordinate system using the coordinates of three points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CORD2S  CID     RID     A1      A2      A3      B1      B2      B3      +       
+       C1      C2      C3                                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CORD2S  3       17      -2.9    1.0     0.0     3.6     0.0     1.0     +      
+       5.2     1.0     -2.9                                                    
```

```text
┌────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                         │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID        │ Coordinate system identification number.  (Integer > 0)                                         │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RID        │ Identification number of a coordinate system that is defined independently from this coordinate │
│            │ system.  (Integer > 0; Default = 0 is the basic coordinate system.)                             │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ai, Bi, Ci │ Coordinates of three points given with respect to the coordinate system defined by RID. (Real)  │
└────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Coordinate system identification numbers on all CORD1R, CORD1C, CORD1S, CORD2R, CORD2C, CORD2S, and CORD3G entries must all   be unique.
2. The three points [(A1, A2, A3), (B1, B2, B3), (C1, C2, C3)] must be unique and noncolinear.  Noncolinearity is checked by the geometry processor.  The first point defines the origin.  The second point defines the direction of the z-axis.  The third lies in the plane of the azimuthal origin.  The reference coordinate system must be independently defined.
3. The continuation entry is required.
4. If RID is zero or blank, the basic coordinate system is used.
5. An example of defining a coordinate system with respect to another coordinate system (RID) may be found in the Linear Static Analysis manual  Example .
6. The location of a grid point (P in  ) in this coordinate system is given by (R,  θ ,   φ ), where  θ  and  φ  are measured in degrees.

![bulkc202724.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202724.jpg?_LANG=enus)

Figure 0-7 CORD2S Definition

7. The displacement coordinate directions at P are shown above by  ![bulkc202726.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202726.jpg?_LANG=enus) .
8. It is recommended that points on the z-axis not have their displacement directions defined in this coordinate system.  See the discussion of spherical coordinate systems in  Grid Point and Coordinate System Definition  in the  MSC Nastran Reference Guide .

     If SPHERICAL and R = 0.0 (point at origin) then R,  ![bulkc202728.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202728.jpg?_LANG=enus) ,  ![bulkc202730.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202730.jpg?_LANG=enus)  triad coordinates are exactly aligned with the local defining system triad. User caution: if  ![bulkc202732.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202732.jpg?_LANG=enus)  but not exactly 0.0 should be avoided as unexpected direction cosine matrix may result.

     If SPHERICAL and r in azimuth plane is r = 0.0 and  ![bulkc202734.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202734.jpg?_LANG=enus)  then the coordinate system is defined as R global along  ![bulkc202736.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202736.jpg?_LANG=enus) local defining system triad according if z > 0. or z < 0.,  ![bulkc202738.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202738.jpg?_LANG=enus) -global along X-local defining system triad and  ![bulkc202740.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202740.jpg?_LANG=enus) -global along Y-local defining system triad. User caution: if  ![bulkc202742.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202742.jpg?_LANG=enus)  but not exactly 0.0 should be avoided as unexpected direction cosine matrix may result.

9. If any CORD2C, CORD2R, or CORD2S entry is changed or added on restart, then a complete re-analysis is performed. Therefore, CORD2C, CORD2R, or CORD2S changes or additions are not recommended on restart.
