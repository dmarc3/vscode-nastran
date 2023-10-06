## [POINT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.POINT.xhtml) - Geometric Point Entry

Define edge point for SELOC entries or profile PBMSECT entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
POINT   ID      CP      X1      X2      X3                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
POINT   12      1       1.      2.      5.                                      
```

```text
┌────────────┬────────────────────────────────┬─────────────┬──────────┐
│ Describer  │ Meaning                        │ Type        │ Default  │
├────────────┼────────────────────────────────┼─────────────┼──────────┤
│ ID         │ Point identification number.   │ Integer > 0 │ Required │
├────────────┼────────────────────────────────┼─────────────┼──────────┤
│ CP         │ Identification number of       │ Integer > 0 │ 0        │
│            │ coordinate system in which the │             │          │
│            │ location of point is defined.  │             │          │
├────────────┼────────────────────────────────┼─────────────┼──────────┤
│ X1, X2, X3 │ Location of the point in       │ Real        │ 0.0      │
│            │ coordinate system CP.          │             │          │
└────────────┴────────────────────────────────┴─────────────┴──────────┘
```

#### Remarks:

1. SELOC entries can refer to POINT entries in the residual or part superelements.
2. ID of POINTs must be unique with respect to ID of GRID entries.
3. POINT entries can be referenced on SET1/SET3 for defining arbitrary beam cross section, ABCS, via PBRSECT/PBMSECT. Note that CP and X3 must be left blank for POINT entries used for ABCS.
