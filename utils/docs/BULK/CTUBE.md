## [CTUBE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CTUBE.xhtml) - Tube Element Connection

Defines a tension-compression-torsion tube element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CTUBE   EID     PID     G1      G2                                              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CTUBE   12      13      21      23                                              
```
```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number of a PTUBE entry. (Integer > 0; Default = EID) │
├───────────┼───────────────────────────────────────────────────────────────────────────────┤
│ G1, G2    │ Grid point identification numbers of connection points. (Integer > 0; )       │
└───────────┴───────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Element identification numbers should be unique with respect to all other element identification numbers.

2. Only one tube element may be defined on a single entry.

