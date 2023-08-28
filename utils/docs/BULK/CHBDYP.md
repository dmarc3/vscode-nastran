## [CHBDYP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CHBDYP.xhtml) - Geometric Surface Element Definition (Property Form)

Defines a boundary condition surface element with reference to a PHBDY entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CHBDYP  EID     PID     TYPE    IVIEWF  IVIEWB  G1      G2      G0      +       
+       RADMIDF RADMIDB GMID    CE      E1      E2      E3                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CHBDYP  2       5       POINT   2       2       101             500     +       
+       3       3                       0.0     0.0     1.0                     
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Surface element identification number.  (Unique (0 < Integer < 100,000,000) among all element │
│           │ identification numbers.)                                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ PHBDY property entry identification numbers.  (Integer > 0)                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Surface type.  See Remark 3. (Character)                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ IVIEWF    │ VIEW entry identification number for the front face.  (Integer > 0 or blank)                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ IVIEWB    │ VIEW entry identification number for the back face.  (Integer > 0 or blank)                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2    │ Grid point identification numbers of grids bounding the surface.  (Integer > 0)               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ GO        │ Orientation grid point.  (Integer > 0; Default = 0)                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ RADMIDF   │ RADM entry identification number for front face.  (Integer > 0 or blank)                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ RADMIDB   │ RADM entry identification number for back face.  (Integer > 0 or blank)                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ GMID      │ Grid point identification number of a midside node if it is used with the line type surface   │
│           │ element.                                                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ CE        │ Coordinate system for defining orientation vector.  (Integer > 0; Default = 0)                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ei        │ Components of the orientation vector in coordinate system CE.  The origin of the orientation  │
│           │ vector is grid point G1.  (Real or blank)                                                     │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. EID is a unique ID associated with a particular surface element as defined by the grid point(s).
2. The defaults for PID, TYPE, IVIEWF, IVIEWB, GO, RADMIDF, RADMIDB, CE, and Ei may be specified on the BDYOR entry.  If a particular field is blank on both the CHBDYP entry and the BDYOR entry, then the default is zero.
3. TYPE specifies the kind of element surface;  the allowed types are:  “POINT,” “LINE,” “ELCYL,” “FTUBE,” and “TUBE.”  For TYPE = “FTUBE” and TYPE = “TUBE,” the geometric orientation is completely determined by G1 and G2; the GO, CE, E1, E2, and E3 fields are ignored.

     - TYPE = “POINT”

     TYPE = “POINT” has one primary grid point, requires a property entry, and the normal vector Vi must be specified if thermal flux is to be used.

     ![bulkc102578.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102578.jpg?_LANG=enus)

     Figure 9-31 Normal Vector for CHBDYP Element of Type “POINT” 
     
     (See Remarks  4.  and  5. )

     The unit normal vector is given by  ![bulkc102580.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102580.jpg?_LANG=enus)  where  ![bulkc102582.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102582.jpg?_LANG=enus)  is specified in the Ei field and given in the basic system at the referenced grid point.  See Remarks  4.  and  5.  for the determination of  ![bulkc102584.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102584.jpg?_LANG=enus) .

     - TYPE = “LINE,” “FTUBE,” or “TUBE”

     The TYPE = “LINE” type has two primary grid points, requires a property entry, and the vector is required.  TYPE = “FTUBE” and TYPE = “TUBE” are similar to TYPE = “LINE” except they can have linear taper with no automatic view factor calculations.  GMID is an option for the TYPE = “LINE” surface element only and is ignored for TYPE = “FTUBE” and “TUBE”.

     ![bulkc102586.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102586.jpg?_LANG=enus)

     Figure 9-32 Normal Vector for CHBDYP Element with TYPE = ”LINE”, 
     
     TYPE = “FTUBE”, or TYPE = “TUBE”  (See Remarks  4.  and  5. )

     The unit normal lies in the plane  ![bulkc102588.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102588.jpg?_LANG=enus)  and  ![bulkc102590.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102590.jpg?_LANG=enus) , is perpendicular to  ![bulkc102592.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102592.jpg?_LANG=enus) , and is given by:

     ![bulkc102594.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102594.jpg?_LANG=enus)  

     - TYPE = “ELCYL”

     TYPE = “ELCYL” (elliptic cylinder) has two connected primary grid points and requires a property entry.  The vector must be nonzero.

     ![bulkc102596.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102596.jpg?_LANG=enus)

     Figure 9-33 Normal Vector for CHBDYP Element of TYPE = “ELCYL” 
 
     (See Remarks  4.  and  5. )

     The same logic is used to determine  ![bulkc102598.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102598.jpg?_LANG=enus)  as for TYPE = LINE.  The “radius” R 1  is in the  ![bulkc102600.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102600.jpg?_LANG=enus)   direction, and R2 is the perpendicular to  ![bulkc102602.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102602.jpg?_LANG=enus)  and  ![bulkc102604.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102604.jpg?_LANG=enus)  (see fields 7 and 8 of PHBDY entry).

4. For TYPE = “POINT,” TYPE = “LINE,” and TYPE = “ELCYL,” geometric orientation is required.  The required information is sought in the following order:
     - If GO > 0 is found on the CHBDYP entry, it is used.
     - Otherwise, if a nonblank CE is found on the CHBDYP continuation entry, this CE and the corresponding vectors E1, E2, and E3 are used.
     - If neither of the above, the same information is sought in the same way from the BDYOR entry.
     - If none of the above apply, a warning message is issued.
5. The geometric orientation can be defined by either GO or the vector E1, E2, E3.

     - If GO > zero:

     For a TYPE = “POINT” surface, the normal to the front face is the vector from G1 to GO.  For the TYPE = “LINE” surface, the plane passes through G1, G2, GO and the right-hand rule is used on this sequence to get the normal to the front face.  For TYPE = “ELCYL” surface the first axis of the ellipse lies on the G1, G2, GO plane, and the second axis is normal to this plane.  For TYPE = “FTUBE” or “TUBE” surface, no orientation is required, and GO is superfluous.

     - If GO is zero:

     For a TYPE = “POINT” surface, the normal to the front face is the orientation vector.  For the TYPE = “LINE” surface, the plane passes through G1, G2, and the orientation vector; the front face is based on the right-hand rule for the vectors G2-G1 and the orientation vector.  For TYPE = “ELCYL” surface, the first axis of the ellipse lies on the G1, G2, orientation vector plane, and the second axis is normal to this plane.

6. The continuation entry is optional.
7. If the surface element is to be used in the calculation of view factors, it must have an associated VIEW entry.
8. All conduction elements to which any boundary condition is to be applied must be individually identified with the application of one of the surface element entries: CHBDYE, CHBDYG, or CHBDYP entries.
