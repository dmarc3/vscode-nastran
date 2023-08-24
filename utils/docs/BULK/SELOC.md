## [SELOC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SELOC.xhtml) - Partitioned Superelement Location

Defines a partitioned superelement relocation by listing three noncolinear points in the superelement and three corresponding points not belonging to the superelement.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SELOC   SEID    PA1     PA2     PA3     PB1     PB2     PB3                     
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SELOC   110     10      100     111     1010    112     30                      
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Partitioned identification number of the partitioned superelement.  (Integer > 0)                │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PAi       │ Identification numbers of three noncolinear grids (GRID entry) or points (POINT entry) which are │
│           │ in the partitioned superelement.  (Integer > 0)                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PBi       │ Identification numbers of three grids (GRID entry) or points (POINT entry) defined in the main   │
│           │ Bulk Data Section to which PAi will be aligned.  (Integer > 0)                                   │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
