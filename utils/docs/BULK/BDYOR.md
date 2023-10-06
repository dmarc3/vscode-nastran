## [BDYOR](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BDYOR.xhtml) - CHBDYi Entry Default Values

Defines default values for the CHBDYP, CHBDYG, and CHBDYE entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BDYOR   TYPE    IVIEWF  IVIEWB  RADMIDF RADMIDB         PID     GO      +       
+       CE      E1      E2      E3                                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BDYOR   AREA4   2       2       3       3               10                      
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE       │ Default surface type. See Remark 2. (Character)                                                    │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IVIEWF     │ Default identification number of front VIEW entry. (Integer > 0 or blank)                          │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IVIEWB     │ Default identification number of back VIEW entry. (Integer > 0 or blank)                           │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RADMIDF    │ Default identification number of a RADM entry for front face. (Integer > 0 or blank)               │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RADMIDB    │ Default identification number of a RADM entry for back face. (Integer > 0 or blank)                │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID        │ Default PHBDY property entry identification number. (Integer > 0 or blank)                         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GO         │ Default orientation grid point.  (Integer > 0; Default = 0)                                        │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CE         │ Default coordinate system for defining the orientation vector. (Integer > 0 or blank)              │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ E1, E2, E3 │ Default components of the orientation vector in coordinate system CE. The origin of this vector is │
│            │ grid point G1 on a CHBDYP entry. (Real or blank)                                                   │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only one BDYOR entry may be specified in the Bulk Data Section.
2. TYPE specifies the type of CHBDYi element surface; allowable values are:  POINT, LINE, REV, AREA3, AREA4, ELCYL, FTUBE, AREA6, AREA8, and TUBE.
3. IVIEWF and IVIEWB are specified for view factor calculations only (see VIEW entry).
4. GO is only used from BDYOR if neither GO nor the orientation vector is defined on the CHBDYP entry and GO is > 0.
5. E1, E2, E3 is not used if GO is defined on either the BDYOR entry or the CHBDYP entry.
