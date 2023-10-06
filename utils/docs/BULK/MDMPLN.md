## [MDMPLN](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDMPLN.xhtml) - Module Reposition by Mirroring

Defines reposition of a Module with a mirror plane defined by three non-collinear points in Module 0.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDMPLN  MODID   P1      P2      P3                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDMPLN  110     12      45      1125                                            
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODID     │ Module identification number of a primary or secondary (copied) module (Integer>0).         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ Pi        │ GRID or POINT identification numbers of three non-collinear points in Module 0 (Integer>0). │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. MDMPLN can only be specified in the main Bulk Data Section (Module 0) and will cause a fatal error message if it appears after the BEGIN MDMPLN=n command.
2. GRID or POINT entries referenced on this entry must be defined in the main Bulk Data Section (Module 0).
