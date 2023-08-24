## [BWIDTH](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BWIDTH.xhtml) - Boundary Line Segment Width or Thickness

Defines widths or thicknesses for line segments in 3-D or 2-D slideline contact defined in the corresponding BLSEG Bulk Data entry for SOL 106 or SOL 129. SOL 400 general contact capability, defined with BCONTACT, BCTABL1, etc. is the recommended approach for contact analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BWIDTH  ID      W1      W2      W3      W4      W5      W6      W7              
```

#### Alternate Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BWIDTH  ID      W1      “THRU”  W2      “BY”    INC                             
```

The continuation entry formats may be used more than once and in any order.  They may also be used with either format above.

#### Continuation Entry Format 1:

```text
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
W8      W9      W10     W11     -etc.-
```

#### Continuation Entry Format 2:

```text
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
W8      “THRU”  W9      “BY”    INC
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BWIDTH  15      2.0     THRU    5.0     BY      1.0                     +       
+       2.0     2.0     2.0     2.0                                     +       
+       35.     THRU    44.                                             +       
+       1.5     3.4     7.6     0.4     0.7                                     
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ BLSEG entry identification number.  (Integer > 0)                                           │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ Wi        │ Width values for the corresponding line segments defined in the BLSEG entry.  See Remark 1. │
│           │ (Real > 0.0)                                                                                │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ INC       │ Width value increment.  See Remark 2. (Real or blank)                                       │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. BWIDTH may be omitted if the width of each segment defined in the BLSEG entry is unity. The number of widths to be specified is equal to the number of segments defined in the corresponding BLSEG entry.
2. The default value for INC is 1.0 if the width is increasing or -1.0 if the width is decreasing. That is, the user need not specify BY and the increment value. If the number of widths specified is less than the number of segments defined in the corresponding BLSEG entry, the width for the remaining segments is assumed to be equal to the last width specified.
3. If there is only one grid point in the corresponding BLSEG entry, there is no contributory area associated with the grid point. To compute correct contact stresses an area may be associated with the single grid point by specifying the area in field W1.
