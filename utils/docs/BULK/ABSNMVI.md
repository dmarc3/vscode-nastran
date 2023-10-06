## [ABSNMVI](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.ABSNMVI.xhtml) - Meta data group Integer name/value pairs

Associate Integer Name/Value pairs to meta data collectors (ABSTRCT).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ABSNMVI ABSTID          NAME1   VAL1    NAME2   VAL2    -etc.-                  
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ABSNMVI 50              SPANS   12                                              
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
│ VALi      │ Value of this Name/Value pair (Integer).         │
└───────────┴──────────────────────────────────────────────────┘
```
#### Remarks:

1. This entry has no impact on the solution.

