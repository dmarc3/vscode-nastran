## [PCOMPFQ](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PCOMPFQ.xhtml) - Frequency Dependent Composite structural damping Property

Defines the frequency dependent properties for a PCOMP/PCOMPG Bulk Data entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMPFQ PID                                             GE                      
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PCOMPFQ 33                                              15                      
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number that matches the identification number on PCOMP/PCOMPG entry. │
│           │ (Integer > 0)                                                                                │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ GE        │ Identification number of a TABLEDi entry that defines the non-dimensional structural damping │
│           │ coefficient vs. frequency relationship. (Integer > 0; Default = 0)                           │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The Fields 8 of this entry corresponds to Field 8 of a PCOMP or PCOMG entry. The value in Field 8 of the PCOMP or PCOMPG entry is replaced by the table referenced in the corresponding field of this entry.
2. If the PCOMP/PCOMG MIDi fields point to MAT2 entries with the 2nd continuation fields containing GEij entries, then this entry is ignored for that MIDi entry and GE frequency dependency must be indicated by use of the MAT2F entry with same ID as the MIDi entry.
3. IF GE=0.0 on corresponding PCOMP or PCOMPG then GE table must be blank or 0.
