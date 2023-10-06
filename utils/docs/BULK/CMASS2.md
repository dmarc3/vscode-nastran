## [CMASS2](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CMASS2.xhtml) - Scalar Mass Property and Connection

Defines a scalar mass element without reference to a property entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CMASS2  EID     M       G1      C1      G2      C2                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CMASS2  32      9.25    6       1                                               
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique element identification number. (0 < Integer < 100,000,000)    │
├───────────┼──────────────────────────────────────────────────────────────────────┤
│ M         │ Value of the scalar mass.  (Real)                                    │
├───────────┼──────────────────────────────────────────────────────────────────────┤
│ G1, G2    │ Geometric grid or scalar point identification number.  (Integer > 0) │
├───────────┼──────────────────────────────────────────────────────────────────────┤
│ C1, C2    │ Component number.  (0 < Integer < 6; blank or zero if scalar point)  │
└───────────┴──────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Scalar points may be used for G1 and/or G2, in which case the corresponding C1 and/or C2 must be zero or blank.  Zero or blank may be used to indicate a grounded terminal G1 or G2 with a corresponding blank or zero C1 or C2.  A grounded terminal is a point with a displacement that is constrained to zero.  If only scalar points and/or ground are involved, it is more efficient to use the CMASS4 entry.
2. Element identification numbers should be unique with respect to all   other element identification numbers.
3. The two connection points (G1, C1) and (G2, C2) must be distinct.  Except in unusual circumstances, one of them will be a grounded terminal with blank entries for Gi and Ci.
4. For a discussion of the scalar elements, see   in the  MSC Nastran Reference Guide.
5. A scalar point specified on this entry need not be defined on an SPOINT entry.
6. If Gi refers to a grid point then Ci refers to degrees-of-freedom(s) in the displacement coordinate system specified by CD on the GRID entry.
7. See Remark 7 for  .
