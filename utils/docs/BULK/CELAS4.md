## [CELAS4](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CELAS4.xhtml) - Scalar Spring Property and Connection to Scalar Points Only

Defines a scalar spring element that is connected only to scalar points, without reference to a property entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CELAS4  EID     K       S1      S2                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CELAS4  42      6.2-3   2                                                       
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                           │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ EID       │ Unique element identification number. (0 < Integer < 100,000,000) │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ K         │ Stiffness of the scalar spring.  (Real)                           │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ S1, S2    │ Scalar point identification numbers.  (Integer > 0; )             │
└───────────┴───────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. S1 or S2, but not both, may be blank or zero indicating a constrained coordinate.
2. Element identification numbers should be unique with respect to all other element identification numbers.
3. A structural damping coefficient is not available with CELAS4.  The value of g is assumed to be 0.0.
4. No stress coefficient is available with CELAS4.
5. Only one scalar spring element may be defined on a single entry.
6. For a discussion of the scalar elements, see   in the  MSC Nastran Reference Guide .
7. A scalar point specified on this entry need not be defined on an SPOINT entry.
