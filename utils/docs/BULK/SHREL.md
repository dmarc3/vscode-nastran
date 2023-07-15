## [SHREL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SHREL.xhtml) - Elastic Shear Model

Defines an elastic shear model with a constant shear modulus. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SHREL   SID     G                                                               
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SHREL   250     80.E6                                                           
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Unique shear model number referenced from a MATDEUL entry. (Integer > 0; Required) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ G         │ Shear-modulus value. (Real; Default = 0.0)                                         │
└───────────┴────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remark:

1. SID must unique among all SHRxx entries in one model.

