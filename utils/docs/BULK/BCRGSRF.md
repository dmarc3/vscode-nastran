## [BCRGSRF](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCRGSRF.xhtml) - Rigid Contact Surface List in SOLs 101 and 400

Defines a list of rigid contact surfaces used in SOLs 101 and 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCRGSRF BSID    RBID1   RBID2   RBID3   RBID4   RBID5   RBID6   RBID7   +       
+       RBID8   -etc.-                                                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCRGSRF 1008    35      2                                                       
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ BSID      │ Unique identification number referenced by a BCBODY1 entry. (Integer > 0) See Remark 1. │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────┤
│ RBIDi     │ Identification number of BCPATCH, BCBZIER, BCNURB2 or BCNURBS entry. (Integer > 0)      │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If BCRGSRF entry does not exist, BCBODY1 entry can refer to one of the identification number of BCPATCH, BCBZIER, BCNURB2 or BCNURBS entry directly.
