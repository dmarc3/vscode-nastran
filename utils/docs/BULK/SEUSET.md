## [SEUSET](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SEUSET.xhtml) - Superelement Degree-of-Freedom Set Definition

Defines a degree-of-freedom set for a superelement.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEUSET  SEID    SNAME   ID1     C1      ID2     C2      ID3     C3              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEUSET  15      U4      1       123456  7       5       22      3               
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Superelement identification number.  (Integer > 0)                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SNAME     │ Set name.  (One to four characters or string “ZERO”, followed by the set name.)                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification numbers.  (Integer > 0)                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component number.  (Any unique combination of the Integers 1 through 6 with no embedded blank for │
│           │ grid points; Integer 0 or blank for scalar points.)                                               │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
