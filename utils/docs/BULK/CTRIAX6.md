## [CTRIAX6](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CTRIAX6.xhtml) - Axisymmetric Triangular Element Connection

Defines an isoparametric and axisymmetric triangular cross section ring element with midside grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CTRIAX6 EID     MID     G1      G2      G3      G4      G5      G6      +       
+       TH                                                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CTRIAX6 22      999     10      11      12      21      22      32      +       
+       9.0                                                                     
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number. (Integer > 0)                                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification numbers of connected points (unique Integers > 0, or blank for deleted │
│           │ nodes.)                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TH        │ Material property orientation angle in degrees. (Real; Default = 0.0)                            │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The grid points must lie in the x-z plane of the basic coordinate system, with  ![bulkc203054.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203054.jpg?_LANG=enus) .  The grid points must be listed consecutively beginning at a vertex and proceeding around the perimeter in either direction. Corner grid points G1, G3, and G5 must be present. Any or all edge grid points G2, G4, or G6 may be deleted for Nastran conventional element. Note that the alternate corner-edge grid point pattern is different from the convention used on the CTRIA6 element.
Note that for advanced nonlinear elements, partial specification of mid-points is not allowed. i.e. either none of the mid-points should be specified or all of the mid points should be specified.
2. For structural problems, the MID may refer to a MAT1 or MAT3 entry.
3. The continuation is optional.
4. Material properties (if defined on a MAT3 entry) and stresses are given in the  ![bulkc203056.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203056.jpg?_LANG=enus)  coordinate system shown in  .
5. A concentrated load (e.g., FORCE entry) at Gi is multiplied by 2 p  times the radius to Gi and then applied as a force per unit circumferential length. (which is located at a radius of 0.5 m), the magnitude of the load specified on the static load entry must result in:

![bulkc203058.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203058.jpg?_LANG=enus)  

![bulkc203060.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203060.jpg?_LANG=enus)

Figure 0-41 CTRIAX6 Element Idealization

![bulkc203062.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203062.jpg?_LANG=enus)

Figure 0-42 CTRIAX6 Element Geometry and Coordinate Systems

6. For thermal problems, the MID may refer to a MAT4 or MAT5 entry. In order to model the convection or radiation along the edges the CHBDYG with TYPE=REV must be used.
7. To model axi-symmetric view factor computations using the CTRIAX6 elements, the normal direction for the CTRIAX6 element must point in the negative Y direction. The reason for this is to set up PATRAN for the correct nodal specification on the CHBDYG with REV option

![bulkc203064.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc203064.jpg?_LANG=enus)

Figure 0-43   Normal Vectors That Point in a Negative Y Direction.

Figure 0-44   View Factor Boundary Conditions.

```nastran
$ CHBDYG Surface Elements
CHBDYG   100001          REV     1               1
        7       9       8
CHBDYG   100002          REV     2               2
        12      10      11
```

Please note that on the CHBDYG, REV option, the nodal connectivity specification is in the clockwise fashion. In this case the CHBDYG with element ID of 100001 is defined by grids 7,9,8 which means the normal vector of the edge is pointing towards right. On the other hand the edges define by grid 12,10,11 means the normal vector of the edge is pointing towards left. If you have not reverse the element direction to a negative Y direction on the CTRIAX6 element, the view factor computation will result a net view factor of zero.
