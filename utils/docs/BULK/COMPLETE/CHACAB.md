## [CHACAB](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CHACAB.xhtml) - Acoustic Absorber Element Connection

Defines the acoustic absorber element in coupled fluid-structural analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CHACAB  EID     PID     G1      G2      G3      G4      G5      G6      +       
+       G7      G8      G9      G10     G11     G12                     +       
+                       G17     G18     G19     G20                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CHACAB  95      12      1       2       5       7       8       9       +       
+       24      23                                                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PACABS entry. (Integer > 0)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification numbers of connection points. (Integer > 0 or blank) │
└───────────┴────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all   other element identification numbers.
2. Grid points G1 through G4 must be given in consecutive order about one quadrilateral face. G5 through G8 must be on the opposite face with G5 opposite G1, G6 opposite G2, etc.
3. The edge points, G9 to G20, are optional. Any or all of them may be deleted. If the ID of any edge connection point is left blank or set to zero (as for G9 and G10 in the example), the equations of the element are adjusted to give correct results for the reduced number of connections. Corner grid points cannot be deleted.
4. It is recommended that the edge points be located within the middle third of the edge.
5. The face consisting of grid points G1 through G4 and G9 through G12 is assumed to be in contact with the structure.

![bulkc102562.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102562.jpg?_LANG=enus)

Figure 9-26 CHACAB Element Connection

6. The mass is lumped to the face formed by grid points G5 through G8 and G17 through G20 and defined to be in contact with the fluid.  The opposite face has no mass contribution due to the absorber element.  Also, the face in contact with the fluid has only translational stiffness in the direction normal to the face.
