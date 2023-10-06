## [PDAMP](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PDAMP.xhtml) - Scalar Damper Property

Specifies the damping value of a scalar damper element using defined CDAMP1 or CDAMP3 entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PDAMP   PID1    B1      PID2    B2      PID3    B3      PID4    B4              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PDAMP   14      2.3     2       6.1                                             
```

```text
┌───────────┬───────────────────────────────────────────────┐
│ Describer │ Meaning                                       │
├───────────┼───────────────────────────────────────────────┤
│ PIDi      │ Property identification number. (Integer > 0) │
├───────────┼───────────────────────────────────────────────┤
│ Bi        │ Force per unit velocity. (Real)               │
└───────────┴───────────────────────────────────────────────┘
```

#### Remarks:

1. Damping values are defined directly on the CDAMP2 and CDAMP4 entries, and therefore do not require a PDAMP entry.
2. A structural viscous damper, CVISC, may also be used for geometric grid points.
3. Up to four damping properties may be defined on a single entry.
4. For a discussion of scalar elements, see   in the  MSC Nastran Reference Guide.
5. PDAMP is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PDAMP property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PDAMP entries.
