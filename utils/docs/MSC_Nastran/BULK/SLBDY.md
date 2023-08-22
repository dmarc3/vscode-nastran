## [SLBDY](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SLBDY.xhtml) - Slot Boundary List

  slots.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SLBDY   RHO     M       ID1     ID2     ID3     ID4     ID5     ID6     +       
+       ID7     -etc.-                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SLBDY   0.002   6       16      17      18      25      20      21              
        22                                                                      
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Density of fluid at boundary.  (Real > 0.0 or blank)                                              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ M         │ Number of slots.  (Integer > 0 or blank)                                                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDj       │ Identification numbers of GRIDS slot points at boundary with axisymmetric fluid cavity, j = 1, 2, │
│           │ ..., J.  (Integer > 0)                                                                            │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```