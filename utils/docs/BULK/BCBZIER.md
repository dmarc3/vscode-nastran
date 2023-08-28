## [BCBZIER](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCBZIER.xhtml) - Defines a Rigid Contact Body Made up of Bezier Surfaces in SOLs 101 and 400

Defines a rigid contact body made up of Bezier surfaces used in SOLs 101 and 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBZIER RBID    NP1     NP2     NSUB1   NSUB2                           +       
+       G1      G2      G3      G4      -etc.-                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCBZIER 98      3       3       25      15                              +       
+       21      11      1       84      74      64      147     137     +       
+       127                                                                     
```

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RBID        │ Unique identification number referenced by a BCRGSRF or BCBODY1 entry. (Integer > 0) See Remark 1. │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NP1         │ Number of points in 1st direction. (Integer > 0)                                                   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NP2         │ Number of points in 2nd direction. (Integer > 0)                                                   │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSUB1       │ Number of subdivisions in 1st direction. (Integer > 0)                                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSUB2       │ Number of subdivisions in 2nd direction. (Integer > 0)                                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2, G3, │ Grid numbers of each point (must be in order). There must be NP1*NP2 grid points defined. Enter    │
│ etc.        │ NP1 points for NP2=1, then NP1 points for NP2=2, etc. (Integer > 0)                                │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If BCRGSRF entry does not exist, BCBZIER entry will be referenced by the  BCBODY1  entry directly.
2. For BEZIER surfaces, enter np1*np2 points in the order shown below

![bcbzier_1.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/../../../assets/bcbzier_1.png?_LANG=enus)
