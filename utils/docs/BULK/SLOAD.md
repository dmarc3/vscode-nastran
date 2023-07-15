## [SLOAD](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SLOAD.xhtml) - Static Scalar Load

Defines concentrated static loads on scalar or grid points.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SLOAD   SID     S1      F1      S2      F2      S3      F3                      
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SLOAD   16      2       5.9     17      -6.3    14      -2.93                   
```
```text
┌───────────┬────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                    │
├───────────┼────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number.  (Integer > 0)             │
├───────────┼────────────────────────────────────────────────────────────┤
│ Si        │ Scalar or grid point identification number.  (Integer > 0) │
├───────────┼────────────────────────────────────────────────────────────┤
│ Fi        │ Load magnitude.  (Real)                                    │
└───────────┴────────────────────────────────────────────────────────────┘
```
