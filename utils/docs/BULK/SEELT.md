## [SEELT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SEELT.xhtml) - Superelement Boundary Element Reassignment

Reassigns superelement boundary elements to an upstream superelement.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEELT   SEID    EID1    EID2    EID3    EID4    EID5    EID6    EID7    +       
+       EID8    EID9    -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEELT   2       147     562     937                                             
```

#### Alternate Format and Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SEELT   SEID    EID1    “THRU”  EID2                                            
SEELT   5       12006   THRU    12050                                           
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ SEID      │ Superelement identification number.  See Remark 7. (Integer > 0)                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ EIDi      │ Element identification numbers.  (Integer > 0 or “THRU”; for “THRU” option EID1 < EID2.) │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────┘
```
