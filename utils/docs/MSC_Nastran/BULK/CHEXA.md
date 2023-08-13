## [CHEXA](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CHEXA.xhtml) - Six-Sided Solid Element Connection

Defines the connections of the six-sided solid element with eight to twenty grid points or the six-sided solid shell element with eight grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CHEXA   EID     PID     G1      G2      G3      G4      G5      G6      +       
+       G7      G8      G9      G10     G11     G12     G13     G14     +       
+       G15     G16     G17     G18     G19     G20                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CHEXA   71      4       3       4       5       6       7       8       +       
+       9       10      0       0       30      31      53      54      +       
+       55      56      57      58      59      60                              
```

```text
┌───────────┬─────────────────────────────────┬─────────────────────────────┬──────────┐
│ Describer │ Meaning                         │ Type                        │ Default  │
├───────────┼─────────────────────────────────┼─────────────────────────────┼──────────┤
│ EID       │ Element identification number.  │ (0 < Integer < 100,000,000) │ Required │
├───────────┼─────────────────────────────────┼─────────────────────────────┼──────────┤
│ PID       │ Property identification number  │ Integer > 0                 │ Required │
│           │ of a PSOLID, PLSOLID or PCOMPLS │                             │          │
│           │ entry.                          │                             │          │
├───────────┼─────────────────────────────────┼─────────────────────────────┼──────────┤
│ Gi        │ Grid point identification       │ Integer > 0 or blank        │ Required │
│           │ numbers of connection points.   │                             │          │
└───────────┴─────────────────────────────────┴─────────────────────────────┴──────────┘
```

![bulkc102606.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102606.jpg?_LANG=enus)

Figure 9-34   CHEXA Element Connection

#### Remarks:

1. Element identification numbers should be unique with respect to all other element identification numbers.
2. Grid points G1 through G4 must be given in consecutive order about one quadrilateral face. G5 through G8 must be on the opposite face with G5 opposite G1, G6 opposite G2, etc.
3. For Nastran conventional element, the edge points, G9 to G20, are optional. Any or all of them may be deleted. If the ID of any edge connection point is left blank or set to zero (as for G9 and G10 in the input example), the equations of the element are adjusted to give correct results for the reduced number of connections. Corner grid points cannot be deleted. The element is an isoparametric element (with shear correction) in all cases.
Note that for advanced nonlinear elements, partial specification of mid-points is not allowed. i.e. Either none of the mid-points should be specified or all of the mid points should be specified.
4. Components of stress are output in the material coordinate system except for hyperelastic elements, which are output in the basic coordinate system. The material coordinate system is defined on the PSOLID entry.
5. The second continuation is optional.
6. For nonhyperelastic and non-composite elements, the element coordinate system for the CHEXA element is defined in terms of the three vectors R, S, and T, which join the centroids of opposite faces.

     R vector joins the centroids of faces G4-G1-G5-G8 and G3-G2-G6-G7.

     S vector joins the centroids of faces G1-G2-G6-G5 and G4-G3-G7-G8.

     T vector joins the centroids of faces G1-G2-G3-G4 and G5-G6-G7-G8.

     The origin of the coordinate system is located at the intersection of these vectors.  The X, Y, and Z axes of the element coordinate system are chosen as close as possible to the R, S, and T   vectors and point in the same general direction.  (Mathematically speaking, the coordinate system is computed in such a way that if the R, S, and T vectors are described in the element coordinate system a 3 x 3 positive-definite symmetric matrix would be produced.)

     Solid elements have both a material and an element coordinate system. Both systems are defined for the initial geometry, and for geometric nonlinear analysis they will rotate with the element. The material coordinate system is used to input anisotropic material properties and for stress output. The material coordinate system is defined by the CORDM field of the PSOLID entry. The element coordinate system is used for element stiffness integration (reduced shear for example) and optionally to define the material coordinate system (only if PSOLID,CORDM=-1).

     ![bulkc102608.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102608.jpg?_LANG=enus)

     Figure 9-35 CHEXA Element R, S, and T Vectors

7. It is recommended that the edge points be located within the middle third of the edge.
8. For hyperelastic elements, the plot codes are specified under the CHEXAFD element name in  .
9. By default, all the twelve edges of the element are considered straight unless, any of G9 through G20 are specified.
10. This element may be used:

        See link for table.

11. When this element is used as a three-dimensional eight-node solid shell element or three-dimensional eight-node composite solid shell element, the user should keep in mind that the layer orientation is required to be in the element T-direction, when specifying grid order.
12. The internal coordinate system of the element is used internally and is based on eigenvalue techniques to insure non bias in the element formulation. For stress/strain output this internal coordinate system (CORDM=-1 on PSOLID entry) is hard to visualize. Thus a CORDM=-2 on the PSOLID is available as shown in  .

![psolid_for_CHEXA.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/psolid_for_CHEXA.png?_LANG=enus)

Figure 9-36   PSOLID for CHEXA

