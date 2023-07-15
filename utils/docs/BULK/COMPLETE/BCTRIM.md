## [BCTRIM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCTRIM.xhtml) - Defines the Geometry of a Trimming Curve

Defines the geometry of a trimming curve used to specify a NURBS for a rigid contact body.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCTRIM  IDtrim  NPTUtrimNORUtrimNSUBtrim                                +        
+       “COORD” Xisop...Yisop...Xisop...Yisop...-etc.-                  +        
+       “HOMO”  Homot1  Homot2  Homot3  -etc.-                          +        
+       “KNOT”  Knott1  Knott2  Knott3  -etc.-                                  
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCTRIM  202     2       2       50                                      +       
+       COORD   0.0     0.0     1.0     0.0                             +       
+       HOMO    1.      1.                                              +       
+       KNOT    0.0     0.0     1.      1.                                      
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDtrim       │ Unique trimming vector identification number referenced by a BCNURBS entry. (Integer > 0)         │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NPTUtrim     │ Number of control points for this trimming vector. (Integer > 0)                                  │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NORUtrim     │ Order for this trimming vector. (Integer > 0)                                                     │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSUBtrim     │ Number of subdivisions for this trimming vector. (Integer > 0)                                    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “COORD”      │ Indicate the start of the list of isoparametric coordinates of points.                            │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Xisoparam1,  │ First and second coordinates of point in isoparametric space. There must be NPTUtrim set of       │
│ Yisoparam1,  │ (Xisoparam, Yisoparam) entries. (Real)                                                            │
│ Xisoparam2,  │                                                                                                   │
│ Yisoparam2,  │                                                                                                   │
│ etc.         │                                                                                                   │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “HOMO”       │ Indicate the start of the list of homogeneous coordinates of this trimming vector.                │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Homot1,      │ Homogeneous coordinatesof this trimming vector. There must be NPTUtrim entrie. (Real; 0.0 to 1.0) │
│ Homot2,      │                                                                                                   │
│ Homot3, etc. │                                                                                                   │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “KNOT”       │ Indicate the start of the list of knot vectors of this trimming vector.                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Knot1,       │ Knot vectors of this trimming vector. There must be (NPTUtrim+NORUtrim) entries. (Real; 0.0 to    │
│ Knot2,       │ 1.0)                                                                                              │
│ Knot3, etc.  │                                                                                                   │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. BCTRIM is referenced by a BCNURBS entry to define the trimming curve of a NURBS for a rigid contact body.
