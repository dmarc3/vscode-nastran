## [CDAMP3](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CDAMP3.xhtml) - Scalar Damper Connection to Scalar Points Only

Defines a scalar damper element that is connected only to scalar points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CDAMP3  EID     PID     S1      S2                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CDAMP3  16      978     24      36                                              
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique element identification number. (0 < Integer < 100,000,000)             │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PDAMP entry. (Integer > 0; Default = EID) │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ S1, S2    │ Scalar point identification numbers. (Integer > 0; )                          │
└───────────┴───────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. S1 or S2 may be blank or zero, indicating a constrained coordinate.
2. Element identification numbers should be unique with respect to all other element identification numbers.
3. Only one scalar damper element may be defined on a single entry.
4. For a discussion of the scalar elements, see   in the  MSC Nastran Reference Guide .
5. When CDAMP3 is used in heat transfer analysis, it generates a lumped heat capacity.
6. A scalar point specified on this entry need not be defined on an SPOINT entry.
