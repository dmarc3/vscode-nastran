## [CINTC](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkc1/TOC.CINTC.xhtml) - Line Interface Element Connection

Defines a line interface element with specified boundaries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CINTC   EID     TYPE                                                    +       
+       LIST=(BID1(INTP1), BID2(INTP2),...,BIDn(INTPn))
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
CINTC   1001    GRDLIST                                                 +       
+       LIST=(101,102(Q),-103(Q),104(L))
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Element identification number. (0 < Integer < 100,000,000)                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Connectivity. If TYPE = “GRDLIST” or blank (Default), the user will specify the boundaries via │
│           │ Bulk Data entry, GMBNDC. See Remark 2. (Character; Default = “GRDLIST”)                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BIDi      │ Boundary curve identification number, referenced to Bulk Data entry, GMBNDC. See Remark 2. ()  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTPi     │ Interpolation scheme. (Character; Default = “L”) INTP = “L”: Linear interpolation; INTP = “Q”: │
│           │ Quadratic interpolation.                                                                       │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Line interface element identification numbers must be unique with respect to all other line interface elements.
2. There must be at least two BIDi specified. If all BIDi are positive, by default, the degrees of freedom associated with the grids on the boundary represented by the first BID will be taken as the independent (n-set), and the degrees of freedom with the grids on the rest of boundaries are taken as the dependent (m-set). If there is a single negative BID, the degrees of freedom associated with the grids on the boundary represented by this BID will be taken as the independent (n-set), and the rest of the degrees of freedom with other boundaries are used as the dependent (m-set). If there are two or more negative BIDs, the degrees of freedom with the first negative one will be taken as the independent.
3. Forces of multipoint constraints may be recovered with the MPCFORCE Case Control command.
4. The m-set degrees of freedom specified on the boundary grids by this entry may not be specified by other entries that define mutually exclusive sets.
