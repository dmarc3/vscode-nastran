## [YLDHY](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.YLDHY.xhtml) - Hydrodynamic Yield Model

Defines a yield model with zero yield stress. Used in SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDHY   YID                                                                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
YLDHY   200                                                                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ YID       │ Unique yield-model number referenced from a MATDEUL entry. (Integer > 0; Required) │
└───────────┴────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. This yield model should be used for fluids that have no shear strength.
2. YID must unique among all YLDxx entries in one model.
