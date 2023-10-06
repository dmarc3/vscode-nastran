## [CORD1C](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CORD1C.xhtml) - Cylindrical Coordinate System Definition, Form 1

Defines a cylindrical coordinate system using three grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CORD1C  CIDA    G1A     G2A     G3A     CIDB    G1B     G2B     G3B             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CORD1C  3       16      32      19                                              
```

```text
┌────────────┬────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                │
├────────────┼────────────────────────────────────────────────────────┤
│ CIDA, CIDB │ Coordinate system identification number. (Integer > 0) │
├────────────┼────────────────────────────────────────────────────────┤
│ GiA, GiB   │ Grid point identification numbers. (Integer > 0; ; )   │
└────────────┴────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Coordinate system identification numbers on all CORD1R, CORD1C, CORD1S, CORD2R, CORD2C, CORD2S and CORD3G entries must be unique.
2. One or two coordinate systems may be defined on a single entry.
3. GiA and GiB must be defined in coordinate systems with definitions that do not involve the coordinate system being defined. The first point is the origin, the second lies on the z-axis, and the third lies in the plane of the azimuthal origin. The three grid points GiA (or GiB) must be noncolinear and not coincident.
4. The location of a grid point (P in  ) in this coordinate system is given by (R,  θ , Z) where  θ  is measured in degrees.

![bulkc202672.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202672.jpg?_LANG=enus)

Figure 0-2 CORD1C Definition

5. The displacement coordinate directions at P are dependent on the location of P as shown above by  ![bulkc202674.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202674.jpg?_LANG=enus) .
6. It is recommended that points on the z-axis not have their displacement directions defined in this coordinate system.  See the discussion of cylindrical coordinate systems in  Grid Point and Coordinate System Definition   in the  MSC Nastran Reference Guide .

     If CYLINDRICAL and point exactly on z-axis (r = 0.0 exactly) then R,  ![bulkc202676.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202676.jpg?_LANG=enus) , Z triad coordinates are exactly aligned with the local defining system triad. User caution: if  ![bulkc202678.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202678.jpg?_LANG=enus)  but not exactly 0.0 should be avoided as unexpected direction cosine matrix may result.

