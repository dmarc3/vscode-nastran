## [CHBDYG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CHBDYG.xhtml) - Geometric Surface Element Definition (Grid Form)

Defines a boundary condition surface element without reference to a property entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CHBDYG  EID             TYPE    IVIEWF  IVIEWB  RADMIDF RADMIDB         +       
+       G1      G2      G3      G4      G5      G6      G7      G8              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CHBDYG  2               AREA4   3       3       2       2               +       
+       100     103     102     101                                             
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Surface element identification number.  (Unique (0 < Integer < 100,000,000) among all elemental │
│           │ entries)                                                                                        │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Surface type.  See Remark 3. (Character)                                                        │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IVIEWF    │ A VIEW entry identification number for the front face. See Remark 2. for default. (Integer > 0) │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IVIEWB    │ A VIEW entry identification number for the back face. See Remark 2. for default. (Integer > 0)  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RADMIDF   │ RADM identification number for front face of surface element. See Remark 2. for default.        │
│           │ (Integer > 0)                                                                                   │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RADMIDB   │ RADM identification number for back face of surface element. See Remark 2. for default.         │
│           │ (Integer > 0)                                                                                   │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point IDs of grids bounding the surface.  (Integer > 0)                                    │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. EID is a unique ID associated with a particular surface element as defined by the grid points.
2. The defaults for TYPE, IVIEWF, IVIEWB, RADMIDF, and RADMIDB may be specified on the BDYOR entry.  If a particular field is blank on both the CHBDYG entry and the BDYOR entry, then the default is zero.
3. TYPE specifies the kind of element surface; allowed types are:  REV, REV1, AREA3, AREA4, AREA6, and AREA8.  See  ,  , and  .

     - TYPE = REV

     The “REV” type has two primary grid points that must lie in the x-z plane of the basic coordinate system with x   >   0.  A midside grid point G3 is optional and supports convection or heat flux from the edge of the six-noded CTRIAX6 element.  The defined area is a conical section with z as the axis of symmetry.  A property entry is required for convection, radiation, or thermal vector flux.

![bulkc102566.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102566.jpg?_LANG=enus)

Figure 9-28  . Normal Vector for CHBDYG Element of Type “REV”

The unit normal lies in the x-z plane, and is given by

![bulkc102568.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102568.jpg?_LANG=enus) .    

![bulkc102570.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102570.jpg?_LANG=enus)  is the unit vector in the y direction.

  - TYPE = REV1. The “REV1” type has two primary grid points that must lie in the x-y plane of the basic coordinate system with x > 0. A midside grid point G3 is optional and supports convection or heat flux from the edge of the CQUADX (4 or 8 node) and CTRIAX (3 or 6 node) element. The defined are is a conical section with y as the axis of symmetry. A property entry is required for convection, radiation, or thermal vector flux.

  - TYPE = AREA3, AREA4, AREA6, or AREA8

     These types have three and four primary grid points, respectively, that define a triangular or quadrilateral surface and must be ordered to go around the boundary.  A property entry is required for convection, radiation, or thermal vector flux.

![bulkc102572.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102572.jpg?_LANG=enus)

Figure 9-29 TYPE Examples

![bulkc102574.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102574.jpg?_LANG=enus)

Figure 9-30 Normal Vector for CHBDYG Element of Types “AREAi”

The unit normal vector is given by

![bulkc102576.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102576.jpg?_LANG=enus)

(G3 is used for triangles, and G4 is used for quadrilaterals.)

4. For defining the front face, the right-hand rule is used on the sequence G1 to G2 to ... Gn of grid points.
5. If the surface element is to be used in the calculation of view factors, it must have an associated VIEW entry.
6. All conduction elements to which any boundary condition is to be applied must be individually identified with one of the surface element entries:  CHBDYE, CHBDYG, or CHBDYP.
7. See Remark   of CHBDYE for application of boundary conditions using CHBDYG entries and a discussion of front and back faces.
