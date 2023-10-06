## [CDAMP4](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CDAMP4.xhtml) - Scalar Damper Property and Connection to Scalar Points Only

Defines a scalar damper element that connected only to scalar points and without reference to a material or property entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CDAMP4  EID     B       S1      S2                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CDAMP4  16      -2.6    4       9                                               
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                           │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ EID       │ Unique element identification number. (0 < Integer < 100,000,000) │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ B         │ Scalar damper value. (Real)                                       │
├───────────┼───────────────────────────────────────────────────────────────────┤
│ S1, S2    │ Scalar point identification numbers. (Integer > 0; )              │
└───────────┴───────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. S1 or S2 may be blank or zero, indicating a constrained coordinate.
2. Element identification numbers should be unique with respect to all other element identification numbers.
3. Only one scalar damper element may be defined on a single entry.
4. For a discussion of the scalar elements, see   in the  MSC Nastran Reference Guide .
5. If this entry is used in heat transfer analysis, it generates a lumped heat capacity.
6. A scalar point specified on this entry need not be defined on an SPOINT entry.
