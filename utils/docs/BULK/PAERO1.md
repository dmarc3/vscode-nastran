## [PAERO1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PAERO1.xhtml) - Aerodynamic Panel Property

Defines associated bodies for the panels in the Doublet-Lattice method.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAERO1  PID     B1      B2      B3      B4      B5      B6                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PAERO1  1       3                                                               
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number referenced by a CAERO1 entry. (Integer > 0)                      │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Bi        │ Identification number of CAERO2 entries for associated bodies. Embedded blanks are not allowed. │
│           │ (Integer > 0 or blank)                                                                          │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The associated bodies must be in the same aerodynamic group, as specified in the IGID field on CAERO2 entry.
2. If there are no bodies, the entry is still   required (with Bi fields blank).
3. The Bi numbers above must appear on a CAERO2 entry to define these bodies completely.
