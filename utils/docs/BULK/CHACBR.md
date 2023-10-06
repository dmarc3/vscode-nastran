## [CHACBR](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CHACBR.xhtml) - Acoustic Barrier Element Connection

Defines the acoustic barrier element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CHACBR  EID     PID     G1      G2      G3      G4      G5      G6      +       
+       G7      G8      G9      G10     G11     G12                     +       
+                       G17     G18     G19     G20                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CHACBR  95      12      1       2       5       7       8       9       +       
+       24      23                                                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)             │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PACBAR entry.  (Integer > 0)       │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification numbers of connection points.  (Integer > 0) │
└───────────┴────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all other element identification numbers.
2. Grid points G1 through G4 must be given in consecutive order about one quadrilateral face. G5 through G8 must be on the opposite face with G5 opposite G1, G6 opposite G2, etc.
3. The edge points, G9 to G20, are optional. Any or all of them may be deleted. If the ID of any edge connection point is left blank or set to zero (as for G9 and G10 in the example), the equations of the element are adjusted to give correct results for the reduced number of connections. Corner grid points cannot be deleted.
4. It is recommended that the edge points be located within the middle third of the edge.
5. The face consisting of grids G1 through G4 and G9 through G12 is assumed to be the backing that corresponds to MBACK on the PACBAR entry.
6. The face consisting of grid points G5 through G8 and G17 through G20 is assumed to be the septum that corresponds to MSEPTM on the PACBAR entry.

![bulkc102564.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102564.jpg?_LANG=enus)

Figure 9-27 CHACBR Element Connection

7. The face in contact with the fluid is defined to be the face formed by grid points G5 through G8 and G17 through G20 and has only translational stiffness in the direction normal to the face.
