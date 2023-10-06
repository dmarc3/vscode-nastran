## [SUPORT1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkqrs/TOC.SUPORT1.xhtml) - Fictitious Support, Alternate Form

Defines determinate reaction degrees-of-freedom (r-set) in a free body-analysis. SUPORT1 must be requested by the SUPORT1 Case Control command.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SUPORT1 SID     ID1     C1      ID2     C2      ID3     C3              +       
+       ID4     C4      -etc.-                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
SUPORT1 5       16      215                                                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Identification number of the support set. See Remark 1. (Integer > 0)                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IDi       │ Grid or scalar point identification number. (Integer > 0)                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Component numbers. (Integer 0 or blank for scalar points. Any unique combination of the Integers 1 │
│           │ through 6 for grid points with no embedded blanks.)                                                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
