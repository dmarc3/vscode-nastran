## [SUPORT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SUPORT.xhtml) - Fictitious Support

Defines determinate reaction degrees-of-freedom in a free body.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SUPORT  ID1     C1      ID2     C2      ID3     C3      ID4     C4              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SUPORT  16      215                                                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification number.  (Integer > 0)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers.  (Integer 0 or blank for scalar points.  Any unique combination of the Integers │
│           │ 1 through 6 for grid points with no embedded blanks.)                                              │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
