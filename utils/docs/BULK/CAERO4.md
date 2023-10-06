## [CAERO4](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CAERO4.xhtml) - Aerodynamic Macro-Strip Element Connection

Defines an aerodynamic macro element for Strip theory.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAERO4  EID     PID     CP      NSPAN   LSPAN                           +       
+       X1      Y1      Z1      X12     X4      Y4      Z4      X43             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAERO4  6000    6001    100             315                             +       
+       0.0     0.0     0.0     1.0     0.2     1.0     0.0     0.8             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PAERO4 entry.  (Integer > 0)                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CP        │ Coordinate system for locating points 1 and 4.  (Integer > 0; Default = 0)                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSPAN     │ Number of strips; if a positive value is given, NSPAN equal strips are assumed.  If zero or blank, │
│           │ LSPAN must be specified.  (Integer > 0)                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LSPAN     │ ID of an AEFACT entry containing a list of division points for strips.  Used only if NSPAN is zero │
│           │ or blank.  (Integer > 0)                                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│           │ Location of points 1 and 4 in coordinate system CP. (Real)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X12, X43  │ Edge chord lengths in aerodynamic coordinate system.  (Real > 0.0, and not both zero.)             │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The strips are numbered sequentially, beginning with EID.  The user must ensure that all strip numbers are unique and greater than structural grid, scalar, and extra point IDs.
2. The number of division points is one greater than the number of boxes.  Thus, if NSPAN = 3, the division points are 0.0, 0.333, 0.667, and 1.000.  If the user supplies division points, the first and last points need not be 0.0 and 1.0 (in which case the corners of the panel would not be at the reference points).
3. A triangular element is formed if X12 or X43 = 0.

![bulkc102316.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102316.jpg?_LANG=enus)

Figure 9-7 CAERO4 Element Connection

4. The CAERO4 entry is only supported in SOL 145, SOL 200 with ANALYSIS=FLUT and in SOL 146 with mechanical loads. Gust response in SOL 146 is not supported for the CAERO4.
