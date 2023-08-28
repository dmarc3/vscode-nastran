## [EULFOR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkde/TOC.EULFOR.xhtml) - Body Force Loading on Euler Elements - SOL 700 only

Defines a body force loading (acceleration) on Euler elements per unit mass. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EULFOR  BID     CID     VALUE   TID     N1      N2      N3                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
EULFOR  100     5               13      1.      0.      0.                      
```

```text
┌────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                           │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BID        │ Unique body force number. (Integer > 0; Required)                                                 │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CID        │ ID of a coordinate system. (Integer > 0; Default = 0)                                             │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ VALUE      │ Scale factor for the vector. See Remark 1. (Real > 0.0)                                           │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TID        │ TABLED1 ID describing the scale factor for the load as function of time. See Remark 1. (Integer)  │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ N1, N2, N3 │ Components of a vector giving the load (acceleration) direction defined in coordinate system CID. │
│            │ At lease one must be nonzero. See Remark 2. (Real; Default = 0.0)                                 │
└────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Either VALUE or TID must be nonzero.
2. By default the components are zero, but at least one of them should be nonzero.
