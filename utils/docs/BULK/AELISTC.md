## [AELISTC](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AELISTC.xhtml) - Character Item List

Defines a list of 8-character strings.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AELISTC SID     C1      C2      C3      C4      C5      C6      C7      +       
+       C8      -etc.-                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AELISTC 101     FBS     STRING12                                                
```

```text
┌───────────┬──────────────────────────────────────────┐
│ Describer │ Meaning                                  │
├───────────┼──────────────────────────────────────────┤
│ SID       │ Set identification number. (Integer > 0) │
├───────────┼──────────────────────────────────────────┤
│ Ci        │ List of 8-character strings.             │
└───────────┴──────────────────────────────────────────┘
```

#### Remark:

1. Intervening blank fields are not allowed.
