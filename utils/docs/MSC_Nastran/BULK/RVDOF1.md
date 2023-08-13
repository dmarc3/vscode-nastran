## [RVDOF1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.RVDOF1.xhtml) - Degrees-of-Freedom Specification for Residual Vector Computations

Specifies the degrees-of-freedom where unit loads are to be applied to obtain static solutions for use in residual vector computations.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RVDOF1  C       ID1     ID2     ID3     ID4     ID5     ID6     ID7     +       
+       ID8     ID9     -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RVDOF1  3       100     210     450                                             
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
RVDOF1  C       ID1     “THRU”  ID2                                             
RVDOF1  12      6       THRU    21                                              
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ C         │ Component numbers.  (Any unique combination of the Integers 1 through 6 with no embedded blanks │
│           │ for grid points. This number must be Integer 0 or blank for scalar points.)                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar identification numbers.  (Integer > 0 or “THRU”; for “THRU” option, ID1 < ID2)   │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
