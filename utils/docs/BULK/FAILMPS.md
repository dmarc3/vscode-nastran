## [FAILMPS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FAILMPS.xhtml) - Maximum Plastic Strain Failure Model - SOL 700 only

Defines the properties of a failure model where failure occurs when the equivalent plastic strain exceeds the specified value. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FAILMPS FID     MPS                                                             
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FAILMPS 1       .15                                                             
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────┤
│ FID       │ Unique failure model number referenced from MATDEUL. (Integer > 0; Required) │
├───────────┼──────────────────────────────────────────────────────────────────────────────┤
│ MPS       │ Maximum plastic strain that causes failure. (Real; Required)                 │
└───────────┴──────────────────────────────────────────────────────────────────────────────┘
```
