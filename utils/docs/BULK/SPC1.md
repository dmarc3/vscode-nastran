## [SPC1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPC1.xhtml) - Single-Point Constraint, Alternate Form

Defines a set of single-point constraints.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPC1    SID     C       G1      G2      G3      G4      G5      G6      +       
+       G7      G8      G9      -etc.-                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPC1    3       2       1       3       10      9       6       5               
        2       8                                                               
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPC1    SID     C       G1      “THRU”  G2                                      
SPC1    313     12456   6       THRU    32                                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Identification number of single-point constraint set.  (Integer > 0)                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component numbers.  See Remark 7. (Any unique combination of the Integers 1 through 6 with no      │
│           │ embedded blanks for grid points. This number must be Integer 0, 1 or blank for scalar points.)     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid or scalar point identification numbers.  (Integer > 0 or “THRU”; For “THRU” option, G1 < G2.) │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
