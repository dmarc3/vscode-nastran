## [CELAS1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CELAS1.xhtml) - Scalar Spring Connection

Defines a scalar spring element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CELAS1  EID     PID     G1      C1      G2      C2                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CELAS1  2       6                       8       1                               
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique element identification number. (0 < Integer < 100,000,000)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PELAS entry.  (Integer > 0; Default = EID) │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2    │ Geometric grid point identification number.  (Integer > 0)                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ C1, C2    │ Component number.  (0 < Integer < 6; blank or zero if scalar point.)           │
└───────────┴────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Scalar points may be used for G1 and/or G2, in which case the corresponding C1 and/or C2 must be zero or blank. Zero or blank may be used to indicate a grounded terminal G1 or G2 with a corresponding blank or zero C1 or C2. A grounded terminal is a point with a displacement that is constrained to zero. If only scalar points and/or ground are involved, it is more efficient to use the CELAS3 entry.
2. Element identification numbers should be unique with respect to all other element identification numbers.
3. The two connection points (G1, C1) and (G2, C2) must be distinct.
4. For a discussion of the scalar elements, see   in the  MSC Nastran Reference Guide .
5. A scalar point specified on this entry need not be defined on an SPOINT entry.
6. If Gi refers to a grid point then Ci refers to degrees-of-freedom(s) in the displacement coordinate system specified by CD on the GRID entry.
7. It is recommended that for most applications the grids connected by CELAS1 entries be coincident and the displacement coordinate systems of each grid be conguent. Connecting non-coincident grids and/or non-congruent coordinate systems can lead to models that do not pass strain energy checks (see the  Case Control command).
