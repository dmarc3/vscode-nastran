## [CYAX](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CYAX.xhtml) - Grid Points on Axis of Symmetry

Lists grid points that lie on the axis of symmetry in cyclic symmetry analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CYAX    G1      G2      G3      G4      G5      G6      G7      G8      +       
+       G9      G10     -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CYAX    27      152     THRU    160     192     11                              
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ A list of grid points on the axis of symmetry.  (Integer > 0 or Character     │
│           │ “THRU”)                                                                       │
└───────────┴───────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The displacement coordinate system (see CD field on GRID entry) for a grid point lying on the axis of symmetry must be a rectangular system with the z-component of motion aligned with the axis of symmetry.  The positive axis of symmetry is defined so that the azimuthal angle from positive side 1 to side 2 of a segment is in the same direction as the angle from T1 to T2 for the axis point.  This is consistent with left- or right-hand rule.
2. If the dihedral symmetry option (STYPE = “DIH” on the CYSYM entry) is selected, the y-axis must be perpendicular to side 1.
3. Grid points lying on the axis of symmetry may be constrained by SPCs but not by MPCs.  If the number of segments is three or more, SPCs must be applied to both components 1 and 2 or to neither, and SPCs must be applied to both components 4 and 5 or to neither in order to satisfy symmetry.  In addition, the degrees-of-freedom (not constrained by SPCs, if any) at these grid points must be in the analysis set (a-set).  If all degrees-of-freedom of grid points on the axis of symmetry are constrained by SPCs (including heat transfer, where there is only one degree-of-freedom), the grid point should not be listed on the CYAX entry.
4. Grid points lying on the axis of symmetry must not be defined on side 1 or on side 2 by means of a CYJOIN entry.
5. The word “THRU” must not appear in fields 2 or 9.
