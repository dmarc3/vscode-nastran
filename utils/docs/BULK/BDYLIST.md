## [BDYLIST](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BDYLIST.xhtml) - Fluid Boundary List

Defines the boundary between a fluid and a structure.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BDYLIST RHO     IDF1    lDF2    IDF3    IDF4    IDF5    IDF6    IDF7    +       
+       IDF8    -etc.-                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BDYLIST .037    AXIS    432     325     416     203     256     175             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Fluid mass density at boundary. (Real > 0.0 or blank; Default is DRHO on the AXIF entry)           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDF1      │ Identification number of a RINGFL entry. (Integer > 0 or Character = “AXIS” or “LAXIS”) See Remark │
│           │ 7.                                                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDF2-IDFi │ Identification number of additional RINGFL entries. (Unique Integers > 0)                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry is allowed only if an AXIF entry is also present.
2. Each entry defines a boundary if RHO ![bulkab02252.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bulkab02252.jpg?_LANG=enus) 0.0. The order of the points must be sequential with the fluid on the right with respect to the direction of travel.
3. The word “AXIS” defines an intersection with the polar axis of the fluid coordinate system.
4. There is no limit to the number of BDYLIST entries specified. If the fluid density varies along the boundary, there must be one BDYLIST entry for each interval between fluid points.
5. The BDYLIST entry is not required and should not be used to specify a rigid boundary where structural points are not defined. Such a boundary is automatically implied by the omission of a BDYLIST.
6. If RHO   =   0.0, no boundary matrix terms will be generated to connect the GRIDB points to the fluid. This option is a convenience for structural plotting purposes. GRIDB points may be located on a fluid ring (RINGFL entry) only if the rings are included in a BDYLIST.
7. If the polar axis of the fluid coordinate system is to occur at the first point use AXIS. If the polar axis of the fluid coordinate system is to occur at the last point use LAXIS.
