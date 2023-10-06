## [CAABSF](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CAABSF.xhtml) - Frequency-Dependent Acoustic Absorber Element

Defines a frequency-dependent acoustic absorber element in coupled fluid-structural analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAABSF  EID     PID     G1      G2      G3      G4                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAABSF  44      38      1       10      20                                      
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number that matches a PAABSF entry.  (Integer > 0; Default = EID) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification number of fluid connection points.  (Integer > 0 or blank)      │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all other element identification numbers.
2. If only G1 is specified then a point impedance is assumed. If G1 and G2 are specified then a line impedance is assumed. If G1, G2, and G3 are specified, then an impedance is associated with the area of the triangular face. If G1 through G4 are specified, then an impedance is associated with the quadrilateral face. See  .
3. The CAABSF element must connect entirely to fluid points on the fluid-structure boundary.
4. This element is used only in frequency response and is ignored in all other solutions.

![bulkc102292.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102292.jpg?_LANG=enus)

Figure 9-4  Four Types of CAABSF Elements
