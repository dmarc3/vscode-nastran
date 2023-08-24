## [CACINF3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CACINF3.xhtml) - Acoustic Conjugate Infinite Element Base Connection

Defines an acoustic conjugate infinite element with triangular base.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CACINF3 EID     PID     G1      G2      G3                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CACINF3 111     10      1004    1008    1011                                    
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element Identification Number. (0 < Integer < 100,000,000)                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property Identification Number of a PACINF entry. (Integer > 0)                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Grid Point Identification Numbers of Element Base Connection Points. (Integer > 0) │
└───────────┴────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Element identification numbers should be unique with respect to all other element identification numbers.
2. The element must be connected to acoustic grid points.
3. The element normal is defined by the right-hand rule. If the normal does not point into the exterior domain, the element orientation will be changed automatically, and an information message will be written to the .f06 file.
