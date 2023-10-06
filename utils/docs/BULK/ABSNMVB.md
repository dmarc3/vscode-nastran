## [ABSNMVB](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ABSNMVB.xhtml) - Meta data group Boolean name/value pairs

Associate Boolean Name/Value pairs to meta data collectors (ABSTRCT)

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ABSNMVB ABSTID          NAME1   VAL1    NAME2   VAL2    -etc.-  ...             
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ABSNMVB 50              STIFFNERTRUE    VARSECT FALSE                           
```
```text
┌───────────┬──────────────────────────────────────────────────┐
│ Describer │ Meaning                                          │
├───────────┼──────────────────────────────────────────────────┤
│ ABSTID    │ Unique identification number for meta data group │
│           │ (ABSTRCT). (Integer>0).                          │
├───────────┼──────────────────────────────────────────────────┤
│ NAMEi     │ Up to eight characters defining the name of this │
│           │ Name/Value pair. (Character).                    │
├───────────┼──────────────────────────────────────────────────┤
│ VALi      │ Value of this Name/Value pair -Boolean- data     │
│           │ (Character) TRUE or FALSE.                       │
└───────────┴──────────────────────────────────────────────────┘
```
#### Remarks:

1. This entry has no impact on the solution.

2. The only allowed character values are “TRUE” or “FALSE”.

