## [CELAS2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CELAS2.xhtml) - Scalar Spring Property and Connection

Defines a scalar spring element without reference to a property entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CELAS2  EID     K       G1      C1      G2      C2      GE      S               
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CELAS2  28      6.2+3   32              19      4                               
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique element identification number. (0 < Integer < 100,000,000)      │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ K         │ Stiffness of the scalar spring.  (Real)                                │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ G1, G2    │ Geometric grid point or scalar identification number.  (Integer > 0)   │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ C1, C2    │ Component number.  (0 < Integer < 6; 0 blank or zero if scalar point.) │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ GE        │ Damping coefficient.  See Remarks 6. and 8. (Real)                     │
├───────────┼────────────────────────────────────────────────────────────────────────┤
│ S         │ Stress coefficient.  (Real)                                            │
└───────────┴────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Scalar points may be used for G1 and/or G2, in which case the corresponding C1 and/or C2 must be zero or blank.  Zero or blank may be used to indicate a grounded terminal G1 or G2 with a corresponding blank or zero C1 or C2.  A grounded terminal is a point with a displacement that is constrained to zero.  If only scalar points and/or ground are involved, it is more efficient to use the CELAS4 entry.
2. Element identification numbers should be unique with respect to all other element identification numbers.
3. The two connection points (G1, C1) and (G2, C2) must be distinct.
4. For a discussion of the scalar elements, see   in the  MSC Nastran Reference Guide.
5. A scalar point specified on this entry need not be defined on an SPOINT entry.
6. If PARAM,W4 is not specified, GE is ignored in transient analysis.  See  .
7. If Gi refers to a grid point then Ci refers to degrees-of-freedom in the displacement coordinate system specified by CD on the GRID entry.
8. To obtain the damping coefficient GE, multiply the critical damping ratio  ![bulkc102528.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102528.jpg?_LANG=enus)  by 2.0.
