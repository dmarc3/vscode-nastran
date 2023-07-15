## [AELIST](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AELIST.xhtml) - Aerodynamic List

Defines a list of aerodynamic elements or grid ID’s.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AELIST  SID     E1      E2      E3      E4      E5      E6      E7      +       
+       E8      -etc.-                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AELIST  75      1001    THRU    1075    1101    THRU    1109    1201    +       
+       1202                                                                    
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Set identification number.  (Integer > 0)                                   │
├───────────┼─────────────────────────────────────────────────────────────────────────────┤
│ Ei        │ List of aerodynamic box ID's or aerodynamic grid ID's (Integer>0 or "THRU") │
└───────────┴─────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The AELIST entry can be referenced by AESURF, AECOMP, SPLINEi, SPLINRB, SPBLND2 and SPRELAX entries.  Refer to these entries for the meaning of the data provided.
2. When the “THRU” option is used, all intermediate grid points must exist.  The word “THRU” may not appear in field 3 or 9 (2 or 9 for continuations).
3. Intervening blank fields are not allowed.
