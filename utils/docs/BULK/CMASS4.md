## [CMASS4](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CMASS4.xhtml) - Scalar Mass Property and Connection to Scalar Points Only

Defines a scalar mass element that is connected only to scalar points, without reference to a property entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CMASS4  EID     M       S1      S2                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CMASS4  23      14.92           23                                              
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                           │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ EID       │ Unique element identification number. (0 < Integer < 100,000,000) │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ M         │ Scalar mass value.  (Real)                                        │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ S1, S2    │ Scalar point identification numbers.  (Integer > 0; )             │
└───────────┴───────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. S1 or S2 may be blank or zero, indicating a constrained coordinate.  This is the usual case.
2. Element identification numbers should be unique with respect to all other element identification numbers.
3. Only one scalar mass element may be defined on a single entry.
4. For a discussion of the scalar elements, see   in the  MSC Nastran Reference Guide .
5. A scalar point specified on this entry need not be defined on an SPOINT entry.
