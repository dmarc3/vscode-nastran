## [SPCAX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPCAX.xhtml) - Conical Shell Single-Point Constraint

Defines a set of single-point constraints or enforced displacements for conical shell coordinates.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPCAX   SID     RID     HID     C       D                                       
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPCAX   2       3       4       13      6.0                                     
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Identification number of a single-point constraint set.  (Integer > 0)                  │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ RID       │ Ring identification number.  See RINGAX entry.  (Integer > 0)                           │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ HID       │ Harmonic identification number.  (Integer > 0)                                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component identification number.  (Any unique combination of the Integers 1 through 6.) │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ D         │ Enforced displacement value.  (Real)                                                    │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────┘
```
