## [RVDOF](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RVDOF.xhtml) - Degrees-of-Freedom Specification for Residual Vector Computations

Specifies the degrees-of-freedom where unit loads are to be applied to obtain static solutions for use in residual vector computations.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RVDOF   ID1     C1      ID2     C2      ID3     C3      ID4     C4              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RVDOF   800     1       850     2                                               
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar identification number.  (Integer > 0)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers.  (Any one of the integers 1 through 6 for grid points and integer zero or blank │
│           │ for scalar points)                                                                                 │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
