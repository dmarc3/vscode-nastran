## [CHBDYE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CHBDYE.xhtml) - Geometric Surface Element Definition (Element Form)

Defines a boundary condition surface element with reference to a heat conduction element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CHBDYE  EID     EID2    SIDE    IVIEWF  IVIEWB  RADMIDF RADMIDB                 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CHBDYE  2       10      1       3       3       2       2                       
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Surface element identification number for a specific side of a particular element.  See Remarks │
│           │ 1. and 9. (Unique (0 < Integer < 100,000,000) among all elements.)                              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID2      │ A heat conduction element identification number.  (Integer > 0)                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SIDE      │ A consistent element side identification number.  See Remark 6. (1 < Integer < 6)               │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IVIEWF    │ A VIEW entry identification number for the front face of surface element. See Remark 2. for     │
│           │ default. (Integer > 0)                                                                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IVIEWB    │ A VIEW entry identification number for the back face of surface element. See Remark 2. for      │
│           │ default. (Integer > 0)                                                                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RADMIDF   │ RADM identification number for front face of surface element. See Remark 2. for default.        │
│           │ (Integer > 0)                                                                                   │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RADMIDB   │ RADM identification number for back face of surface element. See Remark 2. for default.         │
│           │ (Integer > 0)                                                                                   │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. EID is a unique elemental ID associated with a particular surface element.  EID2 identifies the general heat conduction element being considered for this surface element.
2. The defaults for IVIEWF, IVIEWB, RADMIDF, and RADMIDB may be specified on the BDYOR entry.  If a particular field is blank both on the CHBDYE entry and the BDYOR entry, then the default is zero.
3. For the front face of shell elements, the right-hand rule is used as one progresses around the element surface from G1 to G2 to ... Gn.  For the edges of shell elements or the ends of line elements, an outward normal is used to define the front surface.
4. If the surface element is to be used in the calculation of view factors, it must have an associated VIEW entry.
5. All conduction elements to which any boundary condition is to be applied must be individually identified with the application of one of the surface element entries:  CHBDYE, CHBDYG, or CHBDYP.
6. Side conventions for solid elements.

     The sides of the solid elements are numbered consecutively according to the order of the grid point numbers on the solid element entry.  The sides of solid elements are either quadrilaterals or triangles.  For each element type, tabulate the grid points (gp) at the corners of each side.

          See link for tables.

7. Side conventions for shell elements.

     Side 1 of shell elements (top) are of an AREA type, and additional sides (2 through a maximum of 5 for a QUAD) are of LINE type.  (See  CHBDYG  for surface type definition.)

     Area Type Sides -- The first side is that given by the right-hand rule on the shell elements grid points.

     Line Type Sides -- The second side (first line) proceeds from grid point 1 to grid point 2 of the shell element, and the remaining lines are numbered consecutively.  The thickness of the line is that of the shell element, and the normal to the line is outward from the shell element in the plane of the shell.  Note that any midside nodes are ignored in this specification.

     For 3-D heat shell elements when used in combination with linear or quadratic nodal temperature (see option TEMPP of the NLMOPTS entry), SIDE=6 refers to BOT surface. SIDE=1 refers to TOP surface. The IVIEW and RADM should be filled in consistently in relation with the SIDE entry. E.g., when SIDE=1 or 6 then only IVIEWF makes sense.

8. Side conventions for line elements.

     LINE elements have one linear side (side 1) with geometry that is the same as that of the element and two POINT-type sides corresponding to the two points bounding the linear element (first grid point-side 2; second grid point-side 3).

     The TUBE-type element has two linear sides of type TUBE.  The first side represents the outside with diameters equal to that of the outside of the tube.  The second side represents the inside with diameters equal to that of the inside of the tube.

     Point Sides -- Point sides may be used with any linear element.  The direction of the outward normals of these points is in line with the element axis, but pointing away from the element.  The area assigned to these POINT-type sides is consistent with the element geometry.

     Rev Sides -- The CTRIAX6 element has associated with it three REV sides.  The first side is associated with Grid Points G1, G2, and G3.  The positive face identification normals point away from the element.

9. Application of boundary conditions to CHBDYE is referenced through the EID.  Boundary conditions can reference either the front or back face of the CHBDYE by specifying +EID or -EID respectively.  Correspondingly, the back face is minus the normal vector of the front face.  Similarly, IVIEWF and RADMIDF are associated with +EID and IVIEWB and RADMIDB with -EID.  For radiation problems, if the RADMIDF or RADMIDB is zero, default radiant properties assume perfect black body behavior.
10. Starting with MSC Nastran 2004, axisymmetric view factors are supported CHBDYG of TYPE=REV, but not supported CHBDYE. If CHBDYE is used for this, axisymmetric view factors are not calculated.
