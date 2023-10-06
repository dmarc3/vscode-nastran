## [CTETRA](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CTETRA.xhtml) - Four-Sided Solid Element Connection

Defines the connections of the four-sided solid element with four to ten grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CTETRA  EID     PID     G1      G2      G3      G4      G5      G6      +       
+       G7      G8      G9      G10                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CTETRA  112     2       3       15      14      4       103     115     +       
+       5       16      8       27                                              
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

![bulkc203030.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203030.jpg?_LANG=enus)

Figure 0-31   CTETRA Element Connection

#### Remarks:

1. Element ID numbers must be unique with respect to all other element ID numbers.
2. The topology of the diagram must be preserved, i.e., G1, G2, G3 define a triangular face; G1, G8, and G4 are on the same edge, etc.
3. The edge points, G5 to G10, are optional. For Nastran conventional elements, any or all of them may be deleted. If the ID of any edge connection point is left blank or set to zero, the equations of the element are adjusted to give correct results for the reduced number of connections. Corner grid points cannot be deleted. The element is an isoparametric element in all cases.
Note that for advanced nonlinear elements, partial specification of mid-points is not allowed. i.e. either none of the mid-points should be specified or all of the mid points should be specified.
4. Components of stress are output in the material coordinate system, except hyperelastic elements which outputs stress in the basic coordinate system.
5. For nonhyperelastic elements, the element coordinate system is derived from the three vectors R, S, and T, which join the midpoints of opposite edges.

     R vector joins midpoints of edges G1-G2 and G3-G4.

     S vector joins midpoints of edges G1-G3 and G2-G4.

     T vector joins midpoints of edges G1-G4 and G2-G3.

     The origin of the coordinate system is located at G1.  The element coordinate system is chosen as close as possible to the R, S, and T vectors and points in the same general direction.  (Mathematically speaking, the coordinate system is computed in such a way that, if the R,   S, and T vectors are described in the element coordinate system, a 3x3 positive definite symmetric matrix would be produced.)

     Solid elements have both a material and an element coordinate system. Both systems are defined for the initial geometry, and for geometric nonlinear analysis they will rotate with the element. The material coordinate system is used to input anisotropic material properties and for stress output. The material coordinate system is defined by the CORDM field of the PSOLID entry. The element coordinate system is used for element stiffness integration (reduced shear for example) and optionally to define the material coordinate system (only if PSOLID,CORDM=-1).

![bulkc203032.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203032.jpg?_LANG=enus)

Figure 0-32 CTETRA Element R, S, and T Vectors

6. It is recommended that the edge points be located within the middle third of the edge.
7. For hyperelastic elements, the plot codes are specified under the CTETRAFD element name in  Item Codes .
8. By default, all of the six edges of the element are considered straight unless, any of G5 through G10 are specified.
9. The internal coordinate system of the element is used internally and is based on eigenvalue techniques to insure non bias in the element formulation. For stress/strain output this internal coordinate system (CORDM=-1 on PSOLID entry) is hard to visualize. Thus a CORDM=-2 on the PSOLID is available as shown in  .

![psolid_on_CTETRA.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/psolid_on_CTETRA.png?_LANG=enus)

Figure 0-33   PSOLID on CTETRA

