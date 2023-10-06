## [CBEND](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CBEND.xhtml) - Curved Beam or Pipe Element Connection

Defines a curved beam, curved pipe, or elbow element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBEND   EID     PID     GA      GB      X1      X2      X3      GEOM            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBEND   32      39      17      19      6.2     5.1     -1.2    3               
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBEND   EID     PID     GA      GB      G0                      GEOM            
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CBEND   32      39      17      19      106                     3               
```

```text
┌────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                           │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID        │ Unique element identification number. (0 < Integer < 100,000,000)                                 │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID        │ Property identification number of a PBEND entry.  (Integer > 0; Default = EID)                    │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GA, GB     │ Grid point identification numbers of connection points.  (Integer > 0; )                          │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, X2, X3 │ Components of orientation vector , from GA, in the displacement coordinate system at GA.  (Real)  │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G0         │ Alternate method to supply the orientation vector  using grid point G0.  Direction of  is from GA │
│            │ to G0.   is then translated to End A.  (Integer > 0;  or GB)                                      │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GEOM       │ Flag to select specification of the bend element.  See Remark 3. (1   £   Integer  £   4; No      │
│            │ Default)                                                                                          │
└────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers must be unique with respect to all other element identification numbers.
2. For an additional explanation of the CBEND element, see the PBEND entry description.    and   define the element coordinate system and internal forces and moments.

![bulkc102454.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102454.jpg?_LANG=enus)

Figure 9-18 CBEND Element Coordinate System

![bulkc102456.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/../../../assets/bulkc102456.jpg?_LANG=enus)

Figure 9-19 CBEND Element Internal Forces and Moments

3. The options for element connection to GA, GB using GEOM are the following.

```text
┌──────────────┬──────┬──────────────────────────────────────────────────┐
│ Configuratio │ GEOM │ Description                                      │
│ n            │      │                                                  │
├──────────────┼──────┼──────────────────────────────────────────────────┤
│              │ 1    │ The center of curvature lies on the line AO (or  │
│              │      │ its extension) or vector .                       │
├──────────────┼──────┼──────────────────────────────────────────────────┤
│              │ 2    │ The tangent of centroid arc at end A is parallel │
│              │      │ to line AO or vector .  Point O (or vector ) and │
│              │      │ the arc  must be on the same side of the chord . │
├──────────────┼──────┼──────────────────────────────────────────────────┤
│              │ 3    │ The bend radius (RB) is specified on the PBEND   │
│              │      │ entry:  Points A, B, and O (or vector ) define a │
│              │      │ plane parallel or coincident with the plane of   │
│              │      │ the element arc.  Point O (or vector ) lies on   │
│              │      │ the opposite side of line AB from the center of  │
│              │      │ the curvature.                                   │
├──────────────┼──────┼──────────────────────────────────────────────────┤
│              │ 4    │ THETAB is specified on the PBEND entry.  Points  │
│              │      │ A, B, and O (or vector ) define a plane parallel │
│              │      │ or coincident with the plane of the element arc. │
│              │      │  Point O (or vector ) lies on the opposite side  │
│              │      │ of line AB from the center of curvature.         │
└──────────────┴──────┴──────────────────────────────────────────────────┘
```
