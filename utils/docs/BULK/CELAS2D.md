## [CELAS2D](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CELAS2D.xhtml) - Scalar Spring Connection for SOL 700 Only

Defines a scalar spring connection for use in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CELAS2D EID     K       G1      C1      G2      C2                      +       
+       CORD    FOLLOW                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CELASD2 1001    101     55      1       8       1
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique element identification number. (0 < Integer < 100,000,000)                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ K         │ Stiffness of the scalar spring. (Real)                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2    │ Geometric grid point identification number.  (Integer > 0)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C1, C2    │ Component number.  (0 < Integer < 6; 0 or up to six unique, 1 through 6 may be specified in the    │
│           │ field with no embedded blanks. 0 applies to scalar points and 1 through 6 applies to grid points.) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CORD      │ Number of a coordinate system in which the degree-of-freedom (C1,C2) is defined. (Integer > 0)     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FOLLOW    │ Method to update the direction vector in which the spring acts: FOLLOW=CORD: Direction vector      │
│           │ follows the motion of the coordinate system as specified under CORD.                               │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Scalar points may be used for G1 and/or G2, in which case the corresponding C1 and/or C2 must be zero or blank.  Zero or blank may be used to indicate a grounded terminal G1 or G2 with a corresponding blank or zero C1 or C2.  A grounded terminal is a point with a displacement that is constrained to zero.  If only scalar points and/or ground are involved, it is more efficient to use the CELAS4 entry.
2. Element identification numbers should be unique with respect to all other element identification numbers.
3. The two connection points (G1, C1) and (G2, C2) must be distinct.
4. For a discussion of the scalar elements, see   in the  MSC Nastran Reference Guide.
5. A scalar point specified on this entry need not be defined on an SPOINT entry.
6. If Gi refers to a grid point then Ci refers to degrees-of-freedom in the displacement coordinate system specified by CD on the GRID entry.
7. It is recommended that for most applications the grids connected by CELAS2D entries be coincident and the displacement coordinate systems of each grid be congruent. Connecting non-coincident grids and/or non-congruent coordinate systems can lead to models that do not pass strain energy checks (see the   Case Control command).
