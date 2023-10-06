## [PDAMPT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PDAMPT.xhtml) - Frequency-Dependent Damper Property

Defines the frequency-dependent properties for a PDAMP Bulk Data entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PDAMPT  PID1    TBID1                                                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PDAMPT  12      34                                                              
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number that matches the identification number on a PDAMP entry.          │
│           │ (Integer > 0)                                                                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TBID1     │ Identification number of a TABLEDi entry that defines the damping force per-unit velocity versus │
│           │ frequency relationship. (Integer > 0; Default = 0)                                               │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. PDAMPT may only be referenced by CDAMP1 or CDAMP3 elements in the residual structure, which do not attach to any omitted degrees-of-freedom.
2. The PDAMPT entry is ignored in all solution sequences except frequency response analysis.
