## [CDAMP5](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CDAMP5.xhtml) - Scalar Damper with Material Property

Defines a damping element that refers to a material property entry and connection to grid or scalar points. This element is intended for heat transfer analysis only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CDAMP5  EID     PID     G1      G2                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CDAMP5  1       4       10      20                                              
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Unique element identification number. (0 < Integer < 100,000,000)               │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Identification number of a PDAMP5 property entry.  (Integer > 0; Default = EID) │
├───────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2    │ Grid or scalar point identification numbers.  (Integer > 0 and )                │
└───────────┴─────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. G1 or G2 may be blank or zero indicating a constraint.
2. Element identification numbers should be unique with respect to all other element identification numbers.
3. CDAMP5 generates a lumped heat capacity in heat transfer analysis.
4. A scalar point specified on CDAMP5 need not be defined on an SPOINT entry.
