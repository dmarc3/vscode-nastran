## [BOUTPUT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BOUTPUT.xhtml) - Output for Slideline Contact

Defines secondary nodes at which output is requested.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BOUTPUT ID      G1      G2      G3      G4      G5      G6      G7              
```

#### Alternate Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BOUTPUT ID      G1      “THRU”  G2      “BY”    INC                             
```

The Continuation Entry formats may be used more than once and in any order.  They may also be used with either format above.

#### Continuation Entry Format 1:

```text
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
G8      G9      G10     G11     -etc.-
```

#### Continuation Entry Format 2:

```text
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
G8      “THRU”  G9      “BY”    INC
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BOUTPUT 15      5       THRU    21      BY      4                       +       
+       27      30      32      33                                      +       
+       35      THRU    44                                              +       
+       67      68      72      75      84      93                              
```

#### Format and Example Using “ALL” (No continuation entry is allowed):

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BOUTPUT ID      ALL                                                             
BOUTPUT 15      ALL                                                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Contact region identification number of a BCONP entry for which output is desired, or the      │
│           │ contact Grid ID, in 3D contact. (Integer > 0)                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Secondary node numbers for which output is desired. (Integer > 0)                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INC       │ Grid point identification number increment. See Remark 1. (Integer or blank)                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. For automatic generation of grid numbers, the default increment value is 1 if grid numbers are increasing or -1 if grid numbers are decreasing (i.e., the user need not specify BY and the increment value).
