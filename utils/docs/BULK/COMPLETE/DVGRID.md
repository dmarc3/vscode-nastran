## [DVGRID](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.DVGRID.xhtml) - Design Variable to Grid Point Relation

Defines the relationship between design variables and grid point locations.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVGRID  DVID    GID     CID     COEFF   N1      N2      N3                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
DVGRID  3       108     5       0.2     0.5     0.3     1.0                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DVID      │ DESVAR entry identification number. (Integer > 0)                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GID       │ Grid point (GRID) or geometric point (POINT) identification number. (Integer > 0)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID       │ Coordinate system identification number. (Integer > 0; Default = 0)                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COEFF     │ Multiplier of the vector defined by Ni. (Real; Default = 0.0)                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ni        │ Components of the vector measured in the coordinate system defined by CID. (Real; at least one │
│           │ Ni0.0)                                                                                         │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. A CID of zero or blank (the default) references the basic coordinate system.
2. Multiple references to the same grid ID and design variable result in vectorial addition of the participation vectors defined by CID,   COEFF, and Ni.  There is no restriction on the number of DVGRID entries that may reference a given grid (GID) or design variable (DVID).
3. The coordinate update equation is given as

 ![bulkde03346.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03346.jpg?_LANG=enus)

 where  ![bulkde03348.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03348.jpg?_LANG=enus)  is the location of the  i-th  grid,  ![bulkde03350.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03350.jpg?_LANG=enus) .

 The vector  ![bulkde03352.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03352.jpg?_LANG=enus)  is determined from CID and Ni.  Note that it is a change in a design variable from its initial value  ![bulkde03354.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03354.jpg?_LANG=enus) , and not the absolute value of the design variable itself, that represents a change in a grid point location,  ![bulkde03356.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03356.jpg?_LANG=enus) .

4. The DVGRID entry defines the participation coefficients (basis vectors) of each design variable for each of the coordinates affected by the design process in the relationship

 ![bulkde03358.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/../../../assets/bulkde03358.jpg?_LANG=enus)

5. DVGRID entries that reference grid points on MPCs or RSSCON entries produce incorrect sensitivities.  Often the sensitivities are 0.0 which may result in a warning message indicating zero gradients which may be followed by UFM 6499.  Other rigid elements produce correct results.
