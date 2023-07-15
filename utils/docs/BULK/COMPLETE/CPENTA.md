## [CPENTA](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CPENTA.xhtml) - Five-Sided Solid Element Connection

Defines the connections of a five-sided solid element with six to fifteen grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CPENTA  EID     PID     G1      G2      G3      G4      G5      G6      +       
+       G7      G8      G9      G10     G11     G12     G13     G14     +       
+       G15                                                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CPENTA  112     2       3       15      14      4       103     115     +       
+       5       16      8                               120     125     +       
+       130                                                                     
```

```text
┌───────────┬────────────────────────────────┬───────────────────────────┬──────────┐
│ Describer │ Meaning                        │ Type                      │ Default  │
├───────────┼────────────────────────────────┼───────────────────────────┼──────────┤
│ EID       │ Element identification number. │ 0 < Integer < 100,000,000 │ Required │
├───────────┼────────────────────────────────┼───────────────────────────┼──────────┤
│ PID       │ Property identification number │ Integer > 0               │ Required │
│           │ of a PSOLID or PLSOLID entry.  │                           │          │
├───────────┼────────────────────────────────┼───────────────────────────┼──────────┤
│ Gi        │ Identification numbers of      │ Integer > 0 or blank      │ Required │
│           │ connected grid points.         │                           │          │
└───────────┴────────────────────────────────┴───────────────────────────┴──────────┘
```

![bulkc202786.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202786.jpg?_LANG=enus)

Figure 0-8   CPENTA Element Connection

#### Remarks:

1. Element ID numbers must be unique with respect to all other element ID numbers.
2. The topology of the diagram must be preserved; i.e., G1, G2, and G3 define a triangular face, G1, G10, and G4 are on the same edge, etc.
3. For Nastran conventional element, the edge grid points, G7 to G15, are optional. Any or all of them may be deleted. In the example shown, G10, G11, and G12 have been deleted. The continuations are not required if all edge grid points are deleted.
Note that for advanced nonlinear elements, partial specification of mid-points is not allowed. i.e. either none of the mid-points should be specified or all of the mid points should be specified.
4. Components of stress are output in the material coordinate system except for hyperelastic elements, which are output in the basic coordinate system.
5. For nonhyperelastic elements the element coordinate system for the CPENTA element is derived accordingly. The origin of the coordinate system is located at the midpoint of the straight line connecting the points G1 and G4.  The Z axis points toward the triangle G4-G5-G6 and is oriented somewhere between the line joining the centroids of the triangular faces and a line perpendicular to the midplane.  The midplane contains the midpoints of the straight lines between the triangular faces.  The X and Y axes are perpendicular to the Z axis and point in a direction toward, but not necessarily intersecting, the edges G2 through G5 and G3 through G6, respectively.

     Solid elements have both a material and an element coordinate system. Both systems are defined for the initial geometry, and for geometric nonlinear analysis they will rotate with the element. The material coordinate system is used to input anisotropic material properties and for stress output. The material coordinate system is defined by the CORDM field of the PSOLID entry. The element coordinate system is used for element stiffness integration (reduced shear for example) and optionally to define the material coordinate system (only if PSOLID,CORDM=-1).

![bulkc202788.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202788.jpg?_LANG=enus)

Figure 0-9 CPENTA Element Coordinate System

6. We recommend that the edge grid points be located within the middle third of the edge.
7. For hyperelastic elements, the plot codes are specified under the CPENTAFD element name in  Item Codes .
8. By default, all the nine edges of the element are considered straight unless, any of G7 through G15 are specified.
9. The internal coordinate system of the element is used internally and is based on eigenvalue techniques to insure non bias in the element formulation. For stress/strain output this internal coordinate system (CORDM=-1 on PSOLID entry) is hard to visualize. Thus a CORDM=-2 on the PSOLID is available as shown in  .

![psolid_for_CPENTA.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/psolid_for_CPENTA.png?_LANG=enus)

Figure 0-10   PSOLID for CPENTA
