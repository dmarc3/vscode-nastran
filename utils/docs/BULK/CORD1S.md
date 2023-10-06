## [CORD1S](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CORD1S.xhtml) - Spherical Coordinate System Definition, Form 1

Defines a spherical coordinate system by reference to three grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CORD1S  CIDA    G1A     G2A     G3A     CIDB    G1B     G2B     G3B             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CORD1S  3       16      32      19                                              
```

```text
┌────────────┬──────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                  │
├────────────┼──────────────────────────────────────────────────────────┤
│ CIDA, CIDB │ Coordinate system identification numbers.  (Integer > 0) │
├────────────┼──────────────────────────────────────────────────────────┤
│ GiA, GiB   │ Grid point identification numbers.  (Integer > 0;  and ) │
└────────────┴──────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Coordinate system identification numbers on all CORD1R,   CORD1C, CORD1S, CORD2R, CORD2C, CORD2S and CORD3G entries must be unique.
2. One or two coordinate systems may be defined on a single entry.
3. GiA and GiB must be defined in coordinate systems with a definition that does not involve the coordinate system being defined.  The first point is the origin, the second lies on the z-axis, and the third lies in the plane of the azimuthal origin. The three grid points GiA (or GiB) must be noncolinear and not coincident.
4. The location of a grid point (P in  ) in this coordinate system is given by (R,  θ ,  φ ) where  θ  and  φ  are measured in degrees.

![bulkc202692.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202692.jpg?_LANG=enus)

Figure 0-4 CORD1S Definition

5. The displacement coordinate directions at P are dependent on the location of P as shown above by  ![bulkc202694.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202694.jpg?_LANG=enus) .
6. It is   recommended that points on the z-axis not have their displacement directions defined in this coordinate system.  See the discussion of spherical coordinate systems in  Grid Point and Coordinate System Definition  in the  MSC Nastran Reference Guide .

     If SPHERICAL and R = 0.0 (point at origin) then R,  ![bulkc202696.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202696.jpg?_LANG=enus) ,  ![bulkc202698.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202698.jpg?_LANG=enus)  triad coordinates are exactly aligned with the local defining system triad. User caution: if  ![bulkc202700.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202700.jpg?_LANG=enus)  but not exactly 0.0 should be avoided as unexpected direction cosine matrix may result.

     If SPHERICAL and r in azimuth plane is r = 0.0 and  ![bulkc202702.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202702.jpg?_LANG=enus)  then the coordinate system is defined as R global along  ![bulkc202704.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202704.jpg?_LANG=enus) local defining system triad according if z > 0. or z < 0.,  ![bulkc202706.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202706.jpg?_LANG=enus) -global along X-local defining system triad and  ![bulkc202708.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202708.jpg?_LANG=enus) -global along Y-local defining system triad. User caution: if  ![bulkc202710.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202710.jpg?_LANG=enus)  but not exactly 0.0 should be avoided as unexpected direction cosine matrix may result.

