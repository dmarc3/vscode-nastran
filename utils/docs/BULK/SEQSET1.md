## [SEQSET1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SEQSET1.xhtml) - Superelement Generalized Degree-of-Freedom, Alternate Form

Defines the generalized degrees-of-freedom of the superelement to be used in generalized dynamic reduction or component mode synthesis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEQSET1 SEID    C       G1      G2      G3      G4      GS      G6      +       
+       G7      G8      -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEQSET1 15      123456  1       7       9       22      105     6               
        52      53                                                              
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEQSET1 SEID    C       G1      “THRU”  G2                                      
SEQSET1 16      0       101     THRU    110                                     
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Superelement identification number.  Must be a primary superelement.  (Integer > 0)             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component numbers.  (Any unique combination of the Integers 1 through 6 with no embedded blanks │
│           │ for grid points; Integer 0 or blank for scalar points.)                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid or scalar point identification numbers.  Must be exterior points.  (Integer > 0 or “THRU”; │
│           │ for THRU option G1 < G2.)                                                                       │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
