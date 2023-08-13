## [AEFACT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AEFACT.xhtml) - Aerodynamic Lists

Defines real numbers for aeroelastic analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AEFACT  SID     D1      D2      D3      D4      D5      D6      D7      +       
+       D8      D9      -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AEFACT  97      .3      .7      1.0                                             
```

```text
┌───────────┬──────────────────────────────────────────────────┐
│ Describer │ Meaning                                          │
├───────────┼──────────────────────────────────────────────────┤
│ SID       │ Set identification number.  (Unique Integer > 0) │
├───────────┼──────────────────────────────────────────────────┤
│ Di        │ Number.  (Real)                                  │
└───────────┴──────────────────────────────────────────────────┘
```

#### Remarks:

1. AEFACT entries must be selected by a CAEROi, PAEROi or SPLINEX entry.
2. Embedded blank fields are not allowed.
3. To specify division points, there must be one more division point than the number of divisions.
4. When referenced by the CAERO3 entry, AEFACT defines the aerodynamic grid points.  The ID number of the first point defined by each AEFACT entry is the value of the CAERO3 ID that selected the AEFACT entry.  The ID of each following point defined on the AEFACT is incremented by 1.
