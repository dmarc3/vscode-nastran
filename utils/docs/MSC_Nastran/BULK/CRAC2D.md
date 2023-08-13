## [CRAC2D](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CRAC2D.xhtml) - Two-Dimensional Crack Tip Element

Defines a two-dimensional crack tip   element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CRAC2D  EID     PID     G1      G2      G3      G4      G5      G6      +       
+       G7      G8      G9      G10     G11     G12     G13     G14     +       
+       G15     G16     G17     G18                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CRAC2D  114     108     2       5       6       8       7       11      +       
+       12      14      16      17              20      22                      
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number.  (0 < Integer < 100,000,000)                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PRAC2D entry.  (Integer > 0)                              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification numbers of connection points.  (Integer > 0; G11 through G18 may be │
│           │ blank.)                                                                                       │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. CRAC2D is a dummy element and requires the presence of this Bulk Data entry:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ADUM8   18      0       5       0       CRAC2D                                  
```

2. The element should be planar.  Significant deviations will produce fatal errors.
3. Grid points G1 through G10 are required while grid points G11 through G18 are optional for the quadrilateral form of the element.
4. The stresses and stress intensity factors are calculated assuming that G2 and G10 are coincident.  Deviations from this will produce erroneous results.
5. For the symmetric half-crack option, grid points G1 through G7 are required while grid points G11 through G14 are optional.  Grid points G8 through G10 and G15 through G18 must not be present for this option.
6. The ordering conventions for the full-crack and half-crack options are shown in  .
7. The ratio of the element dimensions in the y to x axis shown for the element coordinate system in   should be in the range 2.0 to 0.5.
8. The stress output is interpreted as shown in  Crack Tip Elements (CRAC2D, CRAC3D)  in the  MSC Nastran Reference Guide .

![bulkc202844.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202844.jpg?_LANG=enus)

Figure 0-19 CRAC2D Element Connection for Full and Symmetric Options
