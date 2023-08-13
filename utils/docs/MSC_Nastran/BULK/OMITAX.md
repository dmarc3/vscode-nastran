## [OMITAX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.OMITAX.xhtml) - Omitted Conical Shell Degrees-of-Freedom

Defines degrees-of-freedom to be excluded (o-set) from the analysis set (a-set).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
OMITAX  RID1    HID1    C1      RID2    HID2    C2                              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
OMITAX  2       6       3       4       7       1                               
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ RIDi      │ Ring identification number.  (Integer > 0)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ HIDi      │ Harmonic identification number.  (Integer > 0)                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component number(s).  (Any unique combination of the Integers 1 through 6 with no embedded │
│           │ blanks.)                                                                                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. OMITAX is allowed only if an AXIC entry is also present.
2. Up to 12 degrees-of-freedom may be specified on this entry.
3. Degrees-of-freedom appearing on OMITAX entries may not appear on MPCAX, SUPAX, or SPCAX entries.
4. SOL 400 does not support OMITAX as well as ASETi, OMITi, BSETi, CSETi, SUPORTi, and QSETi except in some situations (See Remark  4.  under  ).
