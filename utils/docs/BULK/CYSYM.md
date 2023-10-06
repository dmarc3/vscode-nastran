## [CYSYM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc2/TOC.CYSYM.xhtml) - Cyclic Symmetry Parameters

Defines parameters for cyclic symmetry analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CYSYM   NSEG    STYPE                                                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CYSYM   6       ROT                                                             
```

```text
┌───────────┬──────────────────────────────────────────────────────┐
│ Describer │ Meaning                                              │
├───────────┼──────────────────────────────────────────────────────┤
│ NSEG      │ Number of segments.  (Integer > 0)                   │
├───────────┼──────────────────────────────────────────────────────┤
│ STYPE     │ Symmetry type.  (Character:  “ROT”, “DIH”, or “AXI”) │
└───────────┴──────────────────────────────────────────────────────┘
```

#### Remarks:

1. STYPE = “AXI” is a special case of STYPE = “ROT” used to model axisymmetric structures.
2. If STYPE = “AXI”, then all grid points must lie on side 1, side 2, or the axis.  Also, plate elements with midside grid points may not be defined.
