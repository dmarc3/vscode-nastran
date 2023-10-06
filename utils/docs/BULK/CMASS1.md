## [CMASS1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CMASS1.xhtml) - Scalar Mass Connection

Defines a scalar mass element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CMASS1  EID     PID     G1      C1      G2      C2                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CMASS1  32      6       2       1                                               
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique element identification number. (0 < Integer < 100,000,000)              │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PMASS entry.  (Integer > 0; Default = EID) │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2    │ Geometric grid or scalar point identification number.  (Integer > 0)           │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ C1, C2    │ Component number.  (0 < Integer < 6; blank or zero if scalar point)            │
└───────────┴────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Scalar points may be used for G1 and/or G2, in which case the corresponding C1 and/or C2 must be zero or blank.  Zero or blank may be used to indicate a grounded terminal G1 or G2 with a corresponding blank or zero C1 or C2.  A grounded terminal is a point with a displacement that is constrained to zero.  If only scalar points and/or ground are involved, it is more efficient to use the CMASS3 entry.
2. Element identification numbers should be unique with respect to all other element identification numbers.
3. The two connection points (G1, C1) and (G2, C2) must not be coincident.
4. For a discussion of the scalar elements, see the  MSC Nastran Reference Guide , Section 5.6.
5. A scalar point specified on this entry need not be defined on an SPOINT entry.
6. If Gi refers to a grid point then Ci refers to degrees-of-freedom(s) in the displacement coordinate system specified by CD on the GRID entry.
7. Scalar elements input coupled mass matrices when the second pair of fields is entered. When uncoupled point masses are desired input only the first pair of fields. When a coupled mass matrix is requested the submatrix added has M on the diagonal, and -M on the off-diagonal. The element is not checked for internal constraints, which is the user’s responsibility if desired. There are instances where elements with internal constraints are desired, although not frequently. To identify the presence of internal constraints caused by coupled mass, inspect GPWG output, OLOAD output due to GRAV loads, and rigid body modes of free structures. Some forms of coupled mass will cause coupling of rigid body translational mass terms in GPWG output, and poor rigid body modes in modal analysis.
