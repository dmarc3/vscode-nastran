## [SENQSET](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SENQSET.xhtml) - Superelement Internal Generalized Degree-of-Freedom

Defines number of internally generated scalar points for superelement dynamic reduction.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SENQSET SEID    N                                                               
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SENQSET 110     45                                                              
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Partitioned superelement identification number.  See Remark 3. (Integer > 0 or Character = “ALL”) │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ N         │ Number of internally generated scalar points for dynamic reduction generalized coordinates.       │
│           │  (Integer > 0; Default = 0)                                                                       │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
