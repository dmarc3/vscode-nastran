## [CAXISYM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CAXISYM.xhtml) - Axisymmetric Line Elements Connection - SOL 400

Defines two or three node axisymmetric thick shell elements.

#### Formats:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAXISYM EID     PID     G1      G2      G3      NOFF                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAXISYM 22      98      8       16                                              
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of PAXISYM entry.  (Integers > 0)                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2    │ Identification numbers at the two end grid points. Required data.   (Unique; Integers > 0)       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G3        │ Identification number of the one grid in between G1 and G2. See Remark 2. (Unique Integer > 0 or │
│           │ blank). If G3=0; this is a straight two node element.                                            │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOFF      │ Offset from the surface of the grid points to the element reference plane. (Real)                │
└─────
──────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Element identification numbers should be unique with respect to all other identification numbers.
2. It is recommended that G3 be located within the middle third of the element.
3. The element must lie in the x-y plane of the basic system and is oriented as shown below.

![bulkc102376.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102376.jpg?_LANG=enus)
