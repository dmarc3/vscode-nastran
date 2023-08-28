## [RSPLINE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RSPLINE.xhtml) - Interpolation Constraint Element

Defines multipoint constraints for the interpolation of displacements at grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RSPLINE EID     D/L     G1      G2      C2      G3      C3      G4      +       
+       C4      G5      C5      G6      -etc.-                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RSPLINE 73      .05     27      28      123456  29              30              
        123     75      123     71                                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ D/L       │ Ratio of the diameter of the elastic tube to the sum of the lengths of all segments.  (Real > 0.0; │
│           │ Default = 0.1)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid point identification number.  (Integer > 0)                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Components to be constrained.  See Remark 2. (Blank or any combination of the Integers 1 through   │
│           │ 6.)                                                                                                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
