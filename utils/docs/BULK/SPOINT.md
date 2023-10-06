## [SPOINT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPOINT.xhtml) - Scalar Point Definition

Defines scalar points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPOINT  ID1     ID2     ID3     ID4     ID5     ID6     ID7     ID8             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPOINT  3       18      1       4       16      2                               
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPOINT  ID1     “THRU”  ID2                                                     
SPOINT  5       THRU    649                                                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Scalar point identification number.  (0 < Integer < 100,000,000; For “THRU” option, ID1 < ID2) │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```
