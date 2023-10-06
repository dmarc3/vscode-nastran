## [CTRIAX](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CTRIAX.xhtml) - Axisymmetric Triangular Element (Fully Nonlinear or Linear Harmonic)

Defines an axisymmetric triangular element with up to six grid points for use in fully nonlinear (i.e., large strain and large rotations) hyperelastic analysis or a linear harmonic or rotordynamic analysis. The element has between three and six grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CTRIAX  EID     PID     G1      G2      G3      G4      G5      G6      +       
+       THETA...                                                                
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CTRIAX  111     203     31      74      75                                      
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID        │ Element identification number. (0 < Integer < 100,000,000) See Remark 1.                           │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID        │ Property identification number of a PLPLANE or PAXSYMH entry. (Integer > 0). See Remark 2.         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2, G3 │ Identification numbers of connected corner grid points. Required data for all three grid points.   │
│            │ (Unique Integers > 0). See Remark 3., 6., 7.                                                       │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G4, G5, G6 │ Identification numbers of connected edge grid points. Optional data for any or all four grid       │
│            │ points for Nastran conventional element only. (Integer > 0 or blank). See Remark 3., 4., 6., 7.    │
│            │ Note that for advanced nonlinear elements, partial specification of mid-points is not allowed.     │
│            │ i.e. either none of the mid-points should be specified or all of the mid points should be          │
│            │ specified                                                                                          │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THETA      │ Material property orientation angle in degrees. THETA is only applicable if the PLPLANE entry has  │
│            │ an associated PSHLN2 entry which is honored only in SOL 400. For PSHLN2 BEHi=AXSOLID code, THETA   │
│            │ is measured relative to the R axis of the element. (Real; Default = 0.0)                           │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MCID       │ Material coordinate system identification number, MCID is only applicable if the PLPLANE entry has │
│            │ an associated PSHLN2 entry which is honored only in SOL 400. The x-axis of the material coordinate │
│            │ system is determined by projecting the x-axis of the MCID coordinate system onto the surface of    │
│            │ the element. The resulting angle is measured relative to the R axis of the element. For PSHLN2     │
│            │ BEHi=AXSOLID code, THETA is measured relative to the R axis of the element. (Integer > 0; if       │
│            │ blank, then THETA = 0.0 is assumed.) THETA is ignored if PID refers to a PAXSYMH entry.            │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers must be unique with respect to all other element IDs of any kind.
2. If PID refers to a PLPLANE entry, CTRIAX defines an element for use in fully nonlinear analysis.  If PID refers to a PAXSYMH entry, CTRIAX defines a linear harmonic element for use in rotordynamic or harmonic analysis.
3. Gi must be numbered as shown in  .
4. It is recommended that the edge points be located within the middle third of the edge.
5. The plot codes are specified under the CTRIAXFD element name in  Item Codes .
6. The grid points of the axisymmetric element must lie on the x-y plane of the basic coordinate system.  Stress and strain are output in the basic coordinate system.
7. A concentrated load (e.g., FORCE entry) at Gi is divided by the radius to Gi and then applied as a force per unit circumferential length.  For example, in order to apply a load of 100 N/m on the circumference at G1, which is located at a radius of 0.5 m, then the magnitude specified on the static load entry must result in:

![bulkc203050.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203050.jpg?_LANG=enus)  

![bulkc203052.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203052.jpg?_LANG=enus)

Figure 0-40 CTRIAX Element Coordinate System

