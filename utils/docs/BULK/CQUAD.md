## [CQUAD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CQUAD.xhtml) - Fully Nonlinear Plane Strain Element

Defines a plane strain quadrilateral element with up to nine grid points for use in fully nonlinear (i.e., large strain and large rotation) hyperelastic analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CQUAD   EID     PID     G1      G2      G3      G4      G5      G6      +       
+       G7      G8      G9      THETA...                                        
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CQUAD   111     203     31      74      75      32                              
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ EID       │ Element identification number.  (0 <              │                                                   │
│           │ Integer < 100,000,000)                            │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PLPLANE or    │                                                   │
│           │ PLCOMP entry.  (Integer > 0)                      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Identification numbers of connected corner grid   │                                                   │
│           │ points. Required data for all four grid points.   │                                                   │
│           │ (Unique Integers > 0)                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Identification numbers of connected edge grid     │                                                   │
│           │ points. Optional data for any or all four grid    │                                                   │
│           │ points. (Integer > 0 or blank)                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ G9        │ Identification number of center grid point.       │                                                   │
│           │ Optional. (Integer > 0 or blank)                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ THETA     │ Material property orientation angle in degrees.   │                                                   │
│           │ THETA is only applicable if PLCOMP referenced, or │                                                   │
│           │ the PLPLANE entry has an associated PSHLN2 entry  │                                                   │
│           │ which is honored only in SOL 400. For PSHLN2      │                                                   │
│           │ BEHi=PSTRS or PLSTRN codes, THETA is measured     │                                                   │
│           │ relative to the line defined from G1-G2. For      │                                                   │
│           │ PSHLN2 or PLCOMP BEHi=COMPS code the THETA value  │                                                   │
│           │ on the element connection entry will be ignored.  │                                                   │
│           │ (Real; Default = 0.0)                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MCID      │ Material coordinate system identification number  │                                                   │
│           │ MCID is only applicable if the PLPLANE entry has  │                                                   │
│           │ an associated PSHLN2 entry which is honored only  │                                                   │
│           │ in SOL 400. The x-axis of the material coordinate │                                                   │
│           │ system is determined by projecting the T1-axis of │                                                   │
│           │ the MCID coordinate system onto the surface of    │                                                   │
│           │ the shell element as follows:                     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CORD1R, CORD2R                                    │ x -axis of MCID the coordinate is projected onto  │
│           │                                                   │ shell surface and the material angle is measured  │
│           │                                                   │ from the G1-G2 line to the to the projected       │
│           │                                                   │ x-axis                                            │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ CORD1C, CORD2C CORD1S, CORD2S                     │ r-axis of MCID the coordinate is projected onto   │
│           │                                                   │ shell surface through the element center and the  │
│           │                                                   │ material angle is measured from the G1-G2 line to │
│           │                                                   │ the to the projected r-axis                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ For PSHLN2 (or PLCOMP) BEHi=COMPS code the MCID   │                                                   │
│           │ value on the element connection entry will be     │                                                   │
│           │ ignored. (Integer > 0; if blank, then THETA = 0.0 │                                                   │
│           │ is assumed.)                                      │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all other element IDs of any kind.
2. Grid points G1 to G9 must be numbered as shown and must lie on a plane. G5 - G9 are Optional data for any or all four grid points for Nastran conventional element only.
Note that for advanced nonlinear elements, partial specification of mid-points is not allowed. i.e. either none of the mid-points should be specified or all of the mid points should be specified.
3. It is recommended that the edge points be located within the middle third of the edge.
4. The plot codes are specified under the CQUADFD element name in  Item Codes .
5. Stresses and strains are output in the coordinate system identified by the CID field of the PLPLANE entry.

![bulkc202794.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/../../../assets/bulkc202794.jpg?_LANG=enus)

Figure 0-12 CQUAD Element Coordinate System

