## [PHBDY](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PHBDY.xhtml) - CHBDYP Geometric Element Definition

A property entry referenced by CHBDYP entries to give auxiliary geometric information for boundary condition surface elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PHBDY   PID     AF      D1      D2                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PHBDY   2       .02     1.0     1.0                                             
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Unique Integer among all PHBDY entries). (Integer > 0)         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AF        │ Area factor of the surface used only for CHBDYP element TYPE = “POINT”, TYPE = “LINE”,          │
│           │ TYPE = “TUBE”, or TYPE = “ELCYL”. For TYPE = “TUBE”, AF is the constant thickness of the hollow │
│           │ tube. (Real  >  0.0 or blank)                                                                   │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ D1, D2    │ Diameters associated with the surface. Used with CHBDYP element TYPE = “ELCYL”, “TUBE”, and     │
│           │ “FTUBE”. (Real > 0.0 or blank; Default for D2 = D1)                                             │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The PHBDY entry is used with CHBDYP entries.
2. AF
     - For TYPE = “POINT” surfaces, AF is the area.
     - For TYPE = “LINE” or TYPE = “ELCYL” surfaces, AF is the effective width: area =  ![bulkp07134.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07134.jpg?_LANG=enus) .
     - For TYPE = “FTUBE” and outer TYPE = “TUBE” surfaces

          area =  ![bulkp07136.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07136.jpg?_LANG=enus)

3. D1 and D2 are used only with TYPE = “ELCYL”, TYPE = “TUBE”, and TYPE = “FTUBE” surfaces.
     - For TYPE = “ELCYL” surfaces, D1 and D2 are the two diameters associated with the ellipse.
     - For TYPE = “FTUBE” and outer TYPE = “TUBE” surfaces, D1 and D2 are the diameters associated with the first and second grid points, respectively.
     - For inner TYPE = “TUBE” surfaces, the diameters are reduced by twice the thickness  ![bulkp07138.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07138.jpg?_LANG=enus) .

