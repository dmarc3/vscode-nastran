## [BLSEG](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BLSEG.xhtml) - Boundary Line Segments

Defines a curve that consists of a number of line segments via grid numbers that may come in contact with another body.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BLSEG   ID      G1      G2      G3      G4      G5      G6      G7              
```

#### Alternate Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BLSEG   ID      G1      “THRU”  G2      “BY”    INC                             
```

The Continuation Entry formats may be used more than once and in any order.  They may also be used with either format above.

#### Continuation Entry Format 1:

```text
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
G8      G9      G10     G11     -etc.-
```

#### Continuation Entry Format 2:

```text
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
G8      “THRU”  G9      “BY”    INC
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BLSEG   15      5       THRU    21      BY      4                       +       
+       27      30      32      33                                      +       
+       35      THRU    44                                              +       
+       67      68      72      75      84      93                              
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Line segments identification number.  See Remark 2. (Integer > 0)                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification numbers on a curve in a continuous topological order so that the normal │
│           │ to the segment points toward the other curve.  See Remark 3. (Integer > 0)                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INC       │ Grid point identification number increment.  See Remark 3. (Integer or blank)                     │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. A line segment is defined between every two consecutive grid points.  Thus, the number of line segments defined is equal to the number of grid points specified minus 1.  A corresponding BWlDTH Bulk Data entry may be required to define the width/thickness of each line segment.  If the corresponding BWlDTH is not present, the width/thickness for each line segment is assumed to be unity.
2. ID must be unique with respect to all other BLSEG entries.  Each line segment has a width in 3-D sideline and a thickness in a 2-D slideline contact to calculate contact stresses.  The width/thickness of each line segment is defined via BWIDTH Bulk Data entry.  The ID in BLSEG must be same as the ID specified in the BWlDTH.  That is, there must be a one to one correspondence between BLSEG and BWlDTH.  BWlDTH Bulk Data entry may be omitted only if the width/thickness of each segment is unity.
3. For automatic generation of grid numbers, the default increment value is 1 if grid numbers are increasing or -1 if grid numbers are decreasing (i.e., the user need not specify BY and the increment value).
4. The normal to the segment is determined by the cross product of the slideline plane vector (i.e., the Z direction of the coordinate system defined in the ‘ClD’ field of BCONP Bulk Data entry) and the tangential direction of the segment.  The tangential direction is the direction from node 1 to node 2 of the line segment.
5. A curve may be closed or open.  A closed curve is specified by having the last grid point identification number the same as the first grid number.
6. See BCBODY for use of BLSEG in 3D contact.
