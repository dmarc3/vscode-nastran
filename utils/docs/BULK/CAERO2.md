## [CAERO2](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CAERO2.xhtml) - Aerodynamic Body Connection

Defines aerodynamic slender body and interference elements for Doublet-Lattice aerodynamics.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAERO2  EID     PID     CP      NSB     NINT    LSB     LINT    IGID    +       
+       X1      Y1      Z1      X12                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CAERO2  1500    2       100             4       99              1       +       
+       -1.0    100.    -30.    175.                                            
```

```text
┌────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                          │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID        │ Element identification number. (0 < Integer < 100,000,000)                                       │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID        │ Property identification number of a PAERO2 entry.  (Integer > 0)                                 │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CP         │ Coordinate system for locating point 1.  (Integer > 0; Default = 0)                              │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSB        │ Number of slender body elements.  If NSB > 0, then NSB equal divisions are assumed; if zero or   │
│            │ blank, specify a list of divisions in LSB.  (Integer > 0)                                        │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NINT       │ Number of interference elements.  If NINT > 0, then NINT equal divisions are assumed; if zero or │
│            │ blank, specify a list of divisions in LINT.  (Integer > 0)                                       │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LSB        │ ID of an AEFACT Bulk Data entry for slender body division points; used only if NSB is zero or    │
│            │ blank.  (Integer > 0)                                                                            │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LINT       │ ID of an AEFACT data entry containing a list of division points for interference elements; used  │
│            │ only if NINT is zero or blank.  (Integer > 0)                                                    │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IGID       │ Interference group identification.  Aerodynamic elements with different IGIDs are uncoupled.     │
│            │  (Integer > 0)                                                                                   │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, Y1, Z1 │ Location of point 1 in coordinate system CP.  (Real)                                             │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X12        │ Length of body in the x-direction of the aerodynamic coordinate system.  (Real > 0.0)            │
└────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Point 1 is the leading point of the body.
2. All   CAERO1 (panels) and CAERO2 (bodies) in the same group (IGID) will   have aerodynamic interaction.
3. At least one interference element is required for the aerodynamic body specified by this entry.
4. The beams and connection points are numbered sequentially beginning with EID. The user should be careful to ensure that all aero elements and connection point IDs are unique. Overlapping IDs between structure and aerodynamic models are allowed, but will prevent results visualization in Patran.

Old rules regarding numbering among Z, ZY, Y bodies and CAERO1 no longer apply: arbitrary ordering is allowed.

5. At least two slender body elements are required for each aerodynamic body.
6. Interference elements are only intended for use with panels.
7. Determining the size of the j-set (i.e., the number of aerodynamic elements) is essential to input D1JE and D2JE matrices.  Use the following expressions for locating the proper row in the two matrices:
