## [FSLIST](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FSLIST.xhtml) - Free Surface List

Defines the fluid points (RINGFL entry) that lie on a free surface boundary.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FSLIST  RHO     IDF1    IDF2    IDF3    IDF4    IDF5    IDF6    IDF7    +       
+       IDF8    -etc.-                                                          
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FSLIST  1.0-4   AXIS    432     325     416     203     256     175             
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Mass density at the surface. (Real > 0.0 or blank; the default is taken from DRHO on the AXIF    │
│           │ entry.)                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDF1      │ Identification number of RINGFL entry. (Integer > 0 or Character = “AXIS” or “LAXIS”) See Remark │
│           │ 5.                                                                                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDF2-IDFi │ Identification number of additional RINGFL entries. (Unique Integers > 0)                        │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry is allowed only if an AXIF entry is also present.
2. The order of the points must be sequential with the fluid on the right with respect to the direction of travel.
3. The word “AXIS” defines an intersection with the polar axis of the fluid coordinate system.
4. If the fluid density varies along the boundary, there must be one FSLIST entry for each interval between fluid points.
5. If the polar axis of the fluid coordinate system is to occur at the first point use AXIS. If the polar axis of the fluid coordinate system is to occur at the last point use LAXIS. See Remark 
