## [TIC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TIC.xhtml) - Transient Analysis Initial Condition

Defines values for the initial conditions of variables used in structural transient analysis.  Both displacement and velocity values may be specified at independent degrees-of-freedom (See Remark  6. ).  This entry may not be used for heat transfer analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TIC     SID     G       C       U0      V0                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TIC     100     10      3       0.1     0.5                                     
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number.  (Integer > 0)                                                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G         │ Grid, scalar, or extra point or modal coordinate identification number.  (Integer > 0).  See    │
│           │ Remark 4.                                                                                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component numbers.  (Any one of the integers 1 through 6 for grid points, integer zero or blank │
│           │ for scalar or extra points and -1 for modal coordinates.)                                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ U0        │ Initial displacement.  (Real)                                                                   │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ V0        │ Initial velocity.  (Real)                                                                       │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
