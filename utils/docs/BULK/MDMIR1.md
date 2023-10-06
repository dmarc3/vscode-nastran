## [MDMIR1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDMIR1.xhtml) - Module Reposition by Mirroring - Option 1

Defines reposition of a Module with a mirror plane defined by three non-collinear points in Module 0.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDMIR1  MVID    P1      P2      P3                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDMIR1  110     12      45      1125                                            
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ MVID      │ Move identification number to be referenced on an MDMOVE entry. (Integer>0).                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ Pi        │ GRID or POINT identification numbers of three non-collinear points in Module 0. (Integer>0). │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. MDMIR1 can only be specified in the main Bulk Data Section (Module 0) and will cause a fatal error message if it appears after the BEGIN MODULE=n command.
2. MDMIR1 must be referenced by an MDMOVE entry in order to reposition a Module.
3. GRIDs or POINTs referenced on this entry must be defined in the main Bulk Data Section (Module 0).
