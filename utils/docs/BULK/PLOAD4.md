## [PLOAD4](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PLOAD4.xhtml) - Pressure Load on Surface and Faces of Solid Elements

Defines a pressure load on a face of a CHEXA, CPENTA, CPYRAM, CTETRA, CTRIA3, CTRIA6, CTRIAR, CQUAD4, CQUAD8, or CQUADR element. See Remark  15.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOAD4  SID     EID     P1      P2      P3      P4      G1      G3 or G4+       
+       CID     N1      N2      N3      SORL    LDIR                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOAD4  2       1106    10.0    8.0     5.0             48                      
        6       0.0     1.0     0.0                                             
```

#### Alternate Format and Example (See Remark 8.):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOAD4  SID     EID1    P1      P2      P3      P4      “THRU”  EID2    +       
+       CID     N1      N2      N3      SORL    LDIR                            
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PLOAD4  2       1106    10.0    8.0     5.0             THRU    1143            
        6       0.0     1.0     0.0                                             
```

```text
┌─────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                           │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID         │ Load set identification number. (Integer > 0)                                                     │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID EID1    │ Element identification number. (Integer > 0; for the “THRU” option, EID1 < EID2)                  │
│ EID2        │                                                                                                   │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ P1, P2, P3, │ Load per unit surface area (pressure) at the corners of the face of the element. (Real or blank;  │
│ P4          │ Default for P2, P3, and P4 is P1.)                                                                │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1          │ Identification number of a grid point connected to a corner of the face. Required data for solid  │
│             │ elements only. (Integer > 0 or blank)                                                             │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G3          │ Identification number of a grid point either a.connected to a corner diagonally opposite to G1 on │
│             │ the same rectangular face of a CHEXA, CPENTA or CPYRAM, on which load is applied, or b.connected  │
│             │ to a corner adjacent to G1 on the same rectangular face of a CPYRAM while the load is applied on  │
│             │ the triangular face which includes those grids. G3 must be omitted for a triangular surface on a  │
│             │ CPENTA element                                                                                    │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G4          │ Identification number of the CTETRA grid point located at the corner; this grid point may not     │
│             │ reside on the face being loaded. This is required data and is used for CTETRA elements only.      │
│             │ (Integer > 0)                                                                                     │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID         │ Coordinate system identification number. See Remark 2. (Integer > 0; Default = 0)                 │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ N1, N2, N3  │ Components of vector measured in coordinate system defined by CID. Used to define the direction   │
│             │ (but not the magnitude) of the load intensity. See Remark 2. (Real)                               │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORL        │ The character string SURF or LINE. SURF means the surface load acting on the surface of the       │
│             │ element and LINE means the consistent edge loads acting on the edges of the element. The default  │
│             │ is SURF. See Remark 13.                                                                           │
├─────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LDIR        │ Denote the direction of the line load (SORL=LINE), character string X, Y, Z, TANG, or NORM. The   │
│             │ default is NORM. See Remark 14.                                                                   │
└─────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. In the static solution sequences, SID must be selected by the LOAD Case Control command.

     In the dynamic solution sequences, if there is a LOADSET Case Control command, then SID must be referenced in the LID field of a selected LSEQ entry.  If there is no LOADSET Case Control command, then SID must be referenced in the EXCITEID field of an RLOADi or TLOADi entry.

2. The continuation entry is optional. If fields 2, 3, 4, and 5 of the continuation entry are blank, the load is assumed to be a pressure acting normal to the face. If these fields are not blank, the load acts in the direction defined in these fields. Note that if CID is a curvilinear coordinate system, the direction of loading may vary over the surface of the element. The load intensity is the load per   unit of surface area, not the load per unit of area normal to the direction of loading.
3. For the faces of solid elements, the direction of positive pressure (defaulted continuation) is inward. For triangular and quadrilateral faces, the load intensity P1 acts at grid point G1 and load intensities P2, P3, (and P4) act at the other corners in a sequence determined by applying the right-hand rule to the outward normal.
4. For plate   elements, the direction of positive pressure (defaulted continuation) is in the direction of positive normal, determined by applying the right-hand rule to the sequence of connected grid points. The load intensities P1, P2, P3, (and P4) act respectively at corner points G1, G2, G3, (and G4) for triangular and quadrilateral elements. (See plate connection entries.)
5. If P2, P3, and P4 are blank fields, the load intensity is uniform and equal to P1. P4 has no meaning for a triangular face and may be left blank in this case.
6. Equivalent grid point loads are computed by linear or bilinear interpolation of load intensity followed by numerical integration using isoparametric shape functions. Note that a uniform load intensity will not necessarily result in equal equivalent grid point loads.
7. G1 and G3 are ignored for CTRIA3, CTRIA6, CTRIAR, CQUAD4, CQUAD8, and CQUADR elements.
8. The alternate format is available only for CTRIA3, CTRIA6, CTRIAR, CQUAD4, CQUAD8, and CQUADR elements. The continuation entry may be used in the alternate format.
9. For triangular faces of CPENTA elements, G1 is an identification number of a corner grid point that is on the face being loaded and the G3 or G4 field is left blank. For faces of CTETRA elements, G1 is an identification number of a corner grid point that is on the face being loaded and G4 is an identification number of the corner grid point that is not on the face being loaded. Since a CTETRA   has only four corner points, this point G4 will be unique and different for each of the four faces of a CTETRA   element.
10. For the CQUADR and CTRIAR element, only pressure that acts normal to the element is   computed properly. Surface tractions are not resolved into moments normal to the element.
11. All referenced elements must exist (closed list) for residual only runs and are not required to exist (open list) for superelement runs; and they cannot be hyperelastic for either.
12. If fields 3 through 5 of the continuation entry are not blank, the load is assumed to have a fixed direction. If fields 2 through 5 of the continuation entry are left blank, the load is assumed to be a pressure load. In this case, follower force effects are included in the stiffness in all linear solution sequences that calculate a differential stiffness. The solution sequences are SOLs 103, 105, 107 to 112, 115 and 116 (see also the parameter  ). In addition, follower force effects are included in the force balance in the nonlinear static and nonlinear transient dynamic solution sequences, SOLs 106, 129, 153, 159 and 400, if geometric nonlinear effects are turned on with PARAM,LGDISP,1. The follower force stiffness is included in the nonlinear static solution sequences (SOLs 106, 153 and 400) but not in the nonlinear transient dynamic solution sequences (SOLs 129 and 159).
13. The SORL field is ignored by all elements except QUADR and TRIAR. For QUADR or TRIAR only, if SORL=LINE, the consistent edge loads are defined by the PLOAD4 entry. P1, P2, P3 and P4 are load per unit length at the corner of the element. If all four Ps are given, then the line loads along all four edges of the element are defined. If any P is blank, then the line loads for only two edges are defined. For example, if P1 is blank, the line loads of the two edges connecting to G1 are zero. If two Ps are given, then the line load of the edge connecting to the two grid points is defined. If only one P is given, the second P value default to the first P value. For example, P1 denotes that the line load along edge G1 and G2 has the constant value of P1.
14. The direction of the line load (SORL=LINE) is defined by either (CID, N1, N2, N3) or LDIR. Fatal error will be issued if both methods are given. TANG denotes that the line load is in tangential direction of the edge, pointing from G1 to G2 if the edge is connecting G1 and G2. NORM denotes that the line load is in the mean plan, normal to the edge, and pointing outward from the element. X, Y, or Z denotes the line load is in the X, Y, or Z direction of the element coordinate system. If both (CID, N1, n2, N3) and LDIR are blank, then the default is LDIR=NORM.
15. For SOL 400, with large displacement (PARAM,LGDISP), higher-order 6-node triangles (CTRIA6), 8-node quadrilateral (CQUAD8), 20-node hexagonal (CHEXA), or 15-node pentahedral (CPENTA), the load is not calculated correctly. Use lower-order elements if distributed loads are required in a large displacement analysis.
