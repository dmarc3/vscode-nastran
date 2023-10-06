## [MDMOVE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDMOVE.xhtml) - Defines a Module repositioning sequence

Defines a Module repositioning sequence by referencing MDMIRi, MDROTi, and MDTRAN entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDMOVE  MODID   MVID1   MVID2   MVID3   -etc.-                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDMOVE  40      10      11      12                                              
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ MODID     │ Module identification number of a primary or copied module (Integer>0)                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ MVIDi     │ Move identification number of an MDTRAN, MDROTi or MDMIRi Bulk Data entry (Integer>0). │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. MDMOVE can only be specified in the main Bulk Data Section (Module 0) and will cause a fatal error message if it appears after the BEGIN MODULE=n command.
2. In order to use MDMOVE, an MDBULK entry with the same MODID must be specified with TYPE=”MOVE”.
3. If MDMIRi is referenced on an MDMOVE then its MVID must be specified in the MVID1 field and not in the second or subsequent MVIDi fields.
