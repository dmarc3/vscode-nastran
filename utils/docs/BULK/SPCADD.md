## [SPCADD](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SPCADD.xhtml) - Single-Point Constraint Set Combination

Defines a single-point constraint set as a union of single-point constraint sets defined on SPC or SPC1 entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPCADD  SID     S1      S2      S3      S4      S5      S6      S7      +       
+       S8      S9      -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SPCADD  101     3       2       9       1                                       
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Single-point constraint set identification number. (Integer > 0)                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ Si        │ Identification numbers of single-point constraint sets defined via SPC or by SPC1 entries. │
│           │ (Integer > 0)                                                                              │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```
