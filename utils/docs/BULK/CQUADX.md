## [CQUADX](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CQUADX.xhtml) - Axisymmetric Quadrilateral Element (Fully Nonlinear or Linear Harmonic)

Defines an axisymmetric quadrilateral element with up to nine grid points for use in fully nonlinear (i.e., large strain and large rotations) analysis or a linear harmonic or rotordynamic analysis. The element has between four and nine grid points

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CQUADX  EID     PID     G1      G2      G3      G4      G5      G6      +       
+       G7      G8      G9      THETA...                                        
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CQUADX  111     203     31      74      75      32                              
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID        │ Element identification number. (0 < Integer < 100,000,000). See Remark 1.                          │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID        │ Property identification number of a PLPLANE or PAXSYMH or PLCOMP entry. (Integer > 0). See Remark  │
│            │ 2.                                                                                                 │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2 G3, │ Identification numbers of connected corner grid points. Required data for all four grid points.    │
│ G4         │ (Unique Integers > 0). See Remark 3., 6., 7.                                                       │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G5, G6 G7, │ Identification numbers of connected edge grid points. Optional data for any or all four grid       │
│ G8         │ points.  (Integer > 0 or blank). See Remark 3., 4., 6., 7.                                         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G9         │ Identification number of center grid point. Optional. (Integer > 0 or blank). Not used for linear  │
│            │ harmonic elements. See Remark 3., 6., 7.                                                           │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THETA      │ Material property orientation angle in degrees. THETA is only applicable if PLCOMP referenced, or  │
│            │ the PLPLANE entry has an associated PSHLN2 entry which is honored only in SOL 400. For PSHLN2      │
│            │ BEHi=AXSOLID code, THETA is measured relative to the R axis of the element. For PSHLN2 or PLCOMP   │
│            │ BEHi=AXCOMP code the THETA value on the element connection entry will be ignored. (Real; Default = │
│            │ 0.0). THETA is ignored if PID refers to a PAXSYMH entry.                                           │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MCID       │ Material coordinate system identification number, MCID is only applicable if PLCOMP referenced, or │
│            │ the PLPLANE entry has an associated PSHLN2 entry which is honored only in SOL 400. The x-axis of   │
│            │ the material coordinate system is determined by projecting the x-axis of the MCID coordinate       │
│            │ system onto the surface of the element. For PSHLN2 BEHi=AXSOLID the resulting angle is measured    │
│            │ relative to the R axis of the element. For PSHLN2 (or PLCOMP) BEHi=AXCOMP code the MCID value on   │
│            │ the element connection entry will be ignored. (Integer > 0; If blank, then THETA = 0.0 is          │
│            │ assumed.)                                                                                          │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all other element IDs of any kind.
2. If PID refers to a PLPLANE or PLCOMP entry, CQUADX defines an element for use in fully nonlinear analysis. If PID refers to a PAXSYMH entry, CQUADX defines a linear harmonic element for use in rotordynamic or harmonic analysis.
3. Gi must be numbered as shown in  .
4. It is recommended that the edge points be located within the middle third of the edge.
5. The plot codes are specified under the CQUADXFD element name in  Item Codes .
6. All Gi must lie on the x-y plane of the basic coordinate system.  Stress and strain are output in the basic coordinate system.
7. A concentrated load (e.g., FORCE entry) at Gi is multiplied by the radius to Gi and then applied as a force per unit circumferential length.  For example, in order to apply a load of 100 N/m on the circumference at G1, which is located at a radius of 0.5 m, then the magnitude specified on the static load entry must result in:

![bulkc202840.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202840.jpg?_LANG=enus)  

![bulkc202842.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202842.jpg?_LANG=enus)

Figure 0-18 CQUADX Element Coordinate System
