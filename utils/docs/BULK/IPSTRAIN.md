## [IPSTRAIN](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.IPSTRAIN.xhtml) - Initial Equivalent Plastic Strain Values in SOL 400

Defines initial equivalent plastic strain values. This is the initial plastic strain option used in SOL 400 only. (NOTE: This entry is SINGLE FIELD ONLY! Double field will fatal)

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
IPSTRAINEID1    EID2    INT1    INTN    LAY1    LAYN    STRAIN                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
IPSTRAIN2001    2020    1       4       1       5       0.025                   
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID1      │ First Element ID to which these strains apply. (Integer > 0)                                    │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID2      │ Last Element ID to which these strains apply. (Integer; Default = EID1)                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INT1      │ First Integration point for which the strain applies. (Integer > 0; Default = 1)                │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTN      │ Last Integration point for which the strain applies. (Integer > 0; Default = 4)                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LAY1      │ First element layer for which the strain applies. (Integer > 0; no Default. Enter zero or leave │
│           │ blank if the model does not contain beams or shells.)                                           │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LAYN      │ Last element layer for which the strain applies. (Integer > 0; no Default. Enter zero or leave  │
│           │ blank if the model does not contain beams or shells.)                                           │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STRAIN    │ Equivalent plastic strain value at start of analysis. (Real; Default is 0.0)                    │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This entry only applies to SOL 400 advanced nonlinear elements (selected with PSHLN1, PSLDN1, etc.) and is ignored for other solutions.
2. This entry is normally used for metal forming and represents the amount of plastic deformation that the model was previously subjected to. It is used in work (strain) hardening models.
