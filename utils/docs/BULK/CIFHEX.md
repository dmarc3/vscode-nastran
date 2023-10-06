## [CIFHEX](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CIFHEX.xhtml) - Solid InterFace Cohesive Zone Modeling Element

Linear/Quadratic, twenty-node, three-dimensional interface element used to simulate the onset and progress of delamination in SOL 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CIFHEX  EID     PID     G1      G2      G3      G4      G5      G6      +       
+       G7      G8      G9      G10     G11     G12     G13     G14     +       
+       G15     G16     G17     G18     G19     G20                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CIFHEX  700     701     456     357     882     889     443     447     +       
+       162     911                                                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property number of a PCOHE entry. (Integer > 0)                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1-G8     │ Identification number of connected corner grid points. Required data for all eight corner grid     │
│           │ points. (Unique Integer > 0)                                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G9-G12    │ Identification number of connected edge grid points. Optional data for bottom and top edge grid    │
│ G17-G20   │ points. (Unique Integer > 0)                                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G13-G16   │ Identification number of connected midside grid points. Optional data for midside grid points used │
│           │ only to make the element compatible with twenty-noded hexahedral elements. (Unique Integer > 0)    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all other element ID’s of any kind.
2. Grid points Gi must be numbered as shown in the following figure. Specify either G1-G8, or all G1-G20.
3. The element is typically used to model the interface between different materials, where G1, G9, G2, G10, G3, G11, G4 and G12 correspond to one side (called the bottom) and G5, G17, G6, G18, G7, G19, and G20 correspond to the other side (called the top). The stress components are one normal and two shear tractions. When only G1-G8 are specified, the element is linear. When in addition to G1-G8, G9-G12, G17-G20 are specified, the element is quadratic.
4. The corresponding deformations are relative displacements between the top and bottom edge of the element.
5. The element is allowed to be infinitesimally thin; in which case edges defined by grids G1-G4 and G5-G8 may coincide.

![bulkc102610.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102610.jpg?_LANG=enus)

6. This element does not support thermal load. No thermal strain will be generated.
