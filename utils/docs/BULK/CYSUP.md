## [CYSUP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CYSUP.xhtml) - Fictitious Supports for Cyclic Symmetry

Defines fictitious supports for cyclic symmetry analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CYSUP   GID     C                                                               
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CYSUP   16      1245                                                            
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GID       │ Grid point identification number.  (Integer > 0)                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component numbers.  (Any unique combination of the Integers 1 through 6 with no embedded blanks.) │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Components of motion defined on this entry may not appear on SPC, SPC1, OMIT, OMIT1 entries, or in rigid elements or multipoint constraints as dependent degrees-of-freedom.
2. Supports are applied at the grid point identified in field 2 to prevent rigid body motions in static analysis, or to define rigid body modes in eigenvalue analysis.  All   degrees-of-freedom should be at a single grid point.  In other words, there can only be one such supported grid point in the model.  The supports are applied only to the cyclic components of order k=0 or k=1.  In order to satisfy conditions of symmetry, certain restrictions are placed on the location of the grid point and the orientation of its displacement coordinate system, as shown in the following table:

```text
┌──────────────┬─────────────────────┬─────────────┬────────┬─────────────┬─────────────┐
│ Symmetry     │ ROT                 │ ROT         │ DIH    │ DIH         │ DIH         │
│ Option       │                     │             │        │             │             │
│ (STYPE on    │                     │             │        │             │             │
│ the CYSYM    │                     │             │        │             │             │
│ entry)       │                     │             │        │             │             │
├──────────────┼─────────────────────┼─────────────┼────────┼─────────────┼─────────────┤
│ Number of    │ 2                   │ >3          │ 1      │ 2           │ >3          │
│ Segments, N  │                     │             │        │             │             │
├──────────────┼─────────────────────┼─────────────┼────────┼─────────────┼─────────────┤
│ Location of  │ See Note c.         │ See Note d. │ Side 1 │ Side 1      │ Side 1      │
│ Grid Point   │                     │             │        │             │             │
├──────────────┼─────────────────────┼─────────────┼────────┼─────────────┼─────────────┤
│ Special      │ See Notes a. and e. │ See Note b. │ None   │ See Note a. │ See Note b. │
│ Restrictions │                     │             │        │             │             │
│ on           │                     │             │        │             │             │
│ Displacement │                     │             │        │             │             │
│ Coordinate   │                     │             │        │             │             │
│ System       │                     │             │        │             │             │
└──────────────┴─────────────────────┴─────────────┴────────┴─────────────┴─────────────┘
```

```text
Notes:
a. T3 axis must be parallel to axis of symmetry.
b. Displacement coordinate system at the referenced grid point   must be cylindrical with z-axis along the axis of symmetry.
c. Any location except on side 2.
d. Any location except on the axis of symmetry or on side 2.
e. If the grid point is on the axis of symmetry, the displacement coordinate system must be rectangular.
```

3. If the number of segments, N, is 1 (in the case of DIH symmetry) or 2 (in the case of ROT or AXI symmetry), it is important that the rotational components referenced in field 3 be elastically connected to the structure.  If N  >  2 (in the case of DIH symmetry) or N  >  3 (in the case of ROT or AXI symmetry), it is not important, because in this case the supports for rigid body rotation are actually applied to translational motions.
4. If N  >  3, supports will be applied to both the 1 and 2 (inplane-translational) components, if either is referenced, and to both the 4 and 5 (out-of-plane rotational) components, if either is referenced.  If component 6 is supported, component 2 should not appear on OMIT or OMIT1 entries.
5. The restrictions noted in Remarks   and   are related to symmetry requirements.  For N  >  3, symmetry requires that the supports be symmetrical (or antisymmetrical), with respect to any plane passing through the axis of symmetry.  For the DIH options, N = 1 and N = 2, symmetry requires that the supports be symmetrical (or antisymmetrical) with respect to the plane(s) of symmetry.  For the ROT option, N = 2, symmetry requires that a support be either parallel or perpendicular to the axis of symmetry.
6. GID must be a grid point and not a scalar point.
