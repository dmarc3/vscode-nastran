## [CAERO1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CAERO1.xhtml) - Aerodynamic Panel Element Connection

Defines an aerodynamic macro element (panel) in terms of two leading edge locations and side chords.  This is used for Doublet-Lattice theory for subsonic aerodynamics and the ZONA51 theory for supersonic aerodynamics.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAERO1  EID     PID     CP      NSPAN   NCHORD  LSPAN   LCHORD  IGID    +       
+       X1      Y1      Z1      X12     X4      Y4      Z4      X43             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAERO1  1000    1               3                       2       1       +       
+       0.0     0.0     0.0     1.0     0.2     1.0     0.0     0.8             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PAERO1 entry; used to specify associated bodies.  Required     │
│           │ even if there are no associated bodies.  (Integer > 0)                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CP        │ Coordinate system for locating points 1 and 4.  (Integer > 0; Default = 0)                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSPAN     │ Number of spanwise boxes; if a positive value is given NSPAN, equal divisions are assumed; if zero │
│           │ or blank, a list of division points is given at LSPAN, field 7.  (Integer > 0)                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NCHORD    │ Number of chordwise boxes; if a positive value is given NCHORD, equal divisions are assumed; if    │
│           │ zero or blank, a list of division points is given at LCHORD, field 8.  (Integer > 0)               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LSPAN     │ ID of an AEFACT entry containing a list of division points for spanwise boxes.  Used only if       │
│           │ NSPAN, field 5 is zero or blank.  (Integer > 0)                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LCHORD    │ ID of an AEFACT data entry containing a list of division points for chordwise boxes.  Used only if │
│           │ NCHORD, field 6 is zero or blank.  (Integer > 0)                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IGID      │ Interference group identification; aerodynamic elements with different IGIDs are uncoupled.        │
│           │  (Integer > 0)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Location of points 1 and 4, in coordinate system CP.  (Real)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X12, X43  │ Edge chord lengths in aerodynamic coordinate system.  (Real > 0.0, but not both zero.)             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The boxes and corner point nodes are numbered sequentially, beginning with EID.  The user should be careful to ensure that all box and corner point node numbers are unique. There can be overlapping IDs between the structural and aerodynamic model, but MSC Patran will not then be able to display any results. Also, non-unique corner IDs are allowed, but results cannot be visualized in MSC Patran.
2. The number of division points is one greater than the number of boxes.  Thus, if NSPAN=3, the division points are 0.0, 0.333, 0.667, 1.000.  If the user supplies division points, the first and last points need not be 0. and 1. (In which case the corners of the panel would not be at the reference points.)
3. A triangular element is formed if X12 or X43=0.0
4. The element coordinate system is right-handed as shown in  .
5. The continuation is required.
6. It is recommended that NCHORD or LCHORD be chosen so that the typical box chord length  ![bulkc102296.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102296.jpg?_LANG=enus)  satisfies the conditio  ![bulkc102298.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102298.jpg?_LANG=enus)   ![bulkc102300.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102300.jpg?_LANG=enus)  (recent studies indicate that .02  ![bulkc102302.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102302.jpg?_LANG=enus)  is needed to get converged stability derivatives) where  V  is the minimum velocity and  f , in hertz, is the maximum frequency to be analyzed (see the  MSC Nastran Aeroelastic Analysis User’s Guide ).

![bulkc102304.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102304.jpg?_LANG=enus)

Figure 9-5 Element Coordinate System for Aerodynamic Panel

7. This entry can be used for two different aerodynamic theories:  Doublet-Lattice for subsonic and ZONA51 for supersonic.  The proper theory is selected based on the specification of Mach number on the MKAEROi or TRIM entry.
