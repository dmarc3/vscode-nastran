## [BCPATCH](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.BCPATCH.xhtml) - Defines a Rigid Contact Body Made up of Quadrilateral Patches in SOLs 101 and 400

Defines a rigid contact body made up of quadrilateral patches used in SOLs 101 and 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCPATCH RBID                                                            +       
+       IDP     G1      G2      G3      G4                              +       
+       IDP     G1      G2      G3      G4                              +       
+       -etc.-                                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
BCPATCH 12                                                              +       
+       1       101     102     103     104                                     
```

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RBID        │ Unique identification number referenced by a BCRGSRF or BCBODY1 entry (Integer > 0). See Remark 1. │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDP         │ ID of the patch (Integer number 1 through highest value).                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1, G2, G3, │ Grid numbers for each of the 4 nodes of the patch.                                                 │
│ G4          │                                                                                                    │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If BCRGSRF entry does not exist, BCPATCH entry will be referenced by the BCBODY1 entry directly.
