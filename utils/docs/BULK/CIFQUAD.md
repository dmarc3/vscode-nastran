## [CIFQUAD](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CIFQUAD.xhtml) - Planar InterFace Cohesive Zone Modeling Element

Linear/Quadratic, eight-noded planar interface element used to simulate the onset and progress of delamination in SOL 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CIFQUAD EID     PID     G1      G2      G3      G4      G5      G6      +       
+       G7      G8                                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CIFQUAD 700     701     456     357     882     889     443     447     +       
+       1612    911                                                             
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property number of a PCOHE entry. (Integer > 0)                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1-G4     │ Identification number of connected corner grid points. Required data for all four corner grid     │
│           │ points. (Unique Integer > 0)                                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G5, G7    │ Identification number of connected edge grid points. Optional data for bottom and top edge grid   │
│           │ points. (Unique Integer > 0)                                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G6, G8    │ Identification number of connected edge grid points. Optional data for side grid points used only │
│           │ to make the element compatible with eight-noded quadrilateral elements. (Unique Integer > 0)      │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all other element ID’s of any kind.
2. Grid points Gi must be numbered as shown in the following figure.
3. The element is typically used to model the interface between different materials, where G1, G5, and G2 correspond to one side (called the bottom) and G3, G7, and G4 correspond to the other side (called the top). The stress components are one normal and one shear traction. Then only G1-G4 are specified, the element is linear. When in addition to G1-G4, G5 and G7 are specified, the element is quadratic.
4. The corresponding deformation are relative displacements between the top and bottom edge of the element.
5. The element is allowed to be infinitesimally thin; in which case edges G1-G5-G2 and G3-G7-G4 may coincide.
6. The element must lie in the x-y plane of the basic system.

![cifqdx02614.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/cifqdx02614.jpg?_LANG=enus)

7. This element does not support thermal load. No thermal strain will be generated.
