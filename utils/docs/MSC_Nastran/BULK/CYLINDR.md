## [CYLINDR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CYLINDR.xhtml) - Defines the Shape of a Cylinder

Cylindrical shape used in the initial condition definition on the TICEUL1 entry. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CYLINDR VID             XC1     YC1     ZC1     XC2     YC2     ZC2     +       
+       RAD                                                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CYLINDR 4               0.      0.      0.      1.      1.      1.      +       
+       .5                                                                      
```

```text
┌───────────┬────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                │
├───────────┼────────────────────────────────────────────────────────┤
│ VID       │ Unique cylinder number. (Integer > 0; Required)        │
├───────────┼────────────────────────────────────────────────────────┤
│ XC1, YC1, │ Coordinates of point 1, See Remark 1. (Real; Required) │
│ ZC1       │                                                        │
├───────────┼────────────────────────────────────────────────────────┤
│ XC2, YC2, │ Coordinates of point 2. See Remark 1. (Real; Required) │
│ ZC2       │                                                        │
├───────────┼────────────────────────────────────────────────────────┤
│ RAD       │ Radius of the cylinder. (Real; Required)               │
└───────────┴────────────────────────────────────────────────────────┘
```

#### Remarks:

1. A cylinder is defined by the two end points of the cylinder axis and a radius.
2. Initial conditions are defined for the elements that are fully or partially inside the cylinder.
3. See also the TICEUL1 Bulk Data entry.
