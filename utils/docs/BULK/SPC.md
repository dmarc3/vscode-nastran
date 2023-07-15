## [SPC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPC.xhtml) - Single-Point Constraint

Defines a set of single-point constraints and enforced motion (enforced displacements in static analysis and enforced displacements, velocities or acceleration in dynamic analysis).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPC     SID     G1      C1      D1      G2      C2      D2                      
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPC     2       32      3       -2.6    5                                       
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Identification number of the single-point constraint set.  (Integer > 0)                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid or scalar point identification number.  (Integer > 0)                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component number.  See Remark 8. (0 < Integer < 6; up to six Unique Integers, 1 through 6, may be │
│           │ placed in the field with no embedded blanks. 0 or 1applies to scalar points and 1 through 6       │
│           │ applies to grid points.)                                                                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Di        │ Value of enforced motion for components Gi at grid Ci.  (Real; Default = 0.0)                     │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
