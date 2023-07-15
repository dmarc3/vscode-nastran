## [CYJOIN](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CYJOIN.xhtml) - Cyclic Symmetry Boundary Points

Defines the boundary points of a segment in cyclic symmetry problems.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CYJOIN  SIDE    C       G1      G2      G3      G4      G5      G6              
        G7      G8      G9      -etc.-                                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CYJOIN  1       T2      7       9       16      THRU    33      64              
        72      THRU    89                                                      
```
```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SIDE      │ Side identification.  (Integer 1 or 2)                                                           │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Type of coordinate system used on boundaries of dihedral or axisymmetry problems.  See Remark 3. │
│           │ (Character:  “T1”, “T2”, “T3”, “R”, “C”, “S”)                                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid or scalar point identification numbers.  (Integer > 0 or Character “THRU”)                  │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. CYJOIN entries are used only for cyclic symmetry problems.  The CYSYM entry must be used to specify rotational, dihedral, or axisymmetry.

2. For rotational or axisymmetry problems, there must be one logical entry for SIDE = 1 and one for SIDE = 2.  The two lists specify grid points to be connected; therefore, both lists must have the same length.

3. For dihedral problems, side 1 refers to the boundary between segments and side 2 refers to the middle of a segment.  For dihedral and/or AXI type of symmetry, the grid point degree-of-freedom that is normal to the boundary must be specified in field 3 as “T1”, “T2”, or “T3” (“R”, rectangular, and “C”, cylindrical, are the same as “T2” while “S”, spherical, is the same as “T3”).  For scalar and extra points with one degree-of-freedom, these should be specified as blank, “T2”, or “T3” if they are to have the same sign, and “T1”, if the two connected points are to be opposite in sign.

4. All components of displacement at boundary points are connected to adjacent segments except those constrained by SPCi, MPC, or OMITi entries.

5. The points on the axis of symmetry of the model, defined in the CYAX entry must not be defined as a side 1 or side 2 point by means of this entry.

6. The word “THRU” may not appear in fields 4 or 9 of the parent entry and fields 2 or 9 on the continuation entries.

7. All grid points that are implicitly or explicitly referenced must be defined.

8. For rotational and axisymmetry problems, the displacement coordinate systems must be consistent between sides 1 and 2.  This is best satisfied by the use of a spherical or cylindrical coordinate system.

