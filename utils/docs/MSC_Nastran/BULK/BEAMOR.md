## [BEAMOR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BEAMOR.xhtml) - CBEAM Entry Default Values

Defines default values for field 3 and fields 6 through 9 of the CBEAM entry.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BEAMOR          PID                     X1      X2      X3      OFFT            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BEAMOR          39                      0.6     2.9     -5.87   GOG             
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BEAMOR          PID                     G0                      OFFT            
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BEAMOR          39                      86                      GOG             
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID        │ Property identification number of the PBEAM or PBCOMP entry.  (Integer > 0 or blank)               │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ X1, X2, X3 │ Components of orientation vector , from GA, in the displacement coordinate system at GA (default), │
│            │ or in the basic coordinate system. See Remark 5. (Real)                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G0         │ Alternate method to supply the orientation vector , using grid point G0.  Direction of  is from GA │
│            │ to G0.  is then translated to End A.  (Integer > 0; G0GA or GB on CBEAM entry)                     │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ OFFT       │ Offset vector interpretation flag. See Remark 5. (Character or blank)                              │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
