## [WETELME](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.WETELME.xhtml) - Wetted element in OpenFSI by side in SOL 400

Defines a wetted element used in OpenFSI fluid structure interaction simulations in SOL 400 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
WETELME WEID    EID     SIDE                                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
WETELME 10001   34      3                                                       
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ WEID      │ Wetted element identification number. (Integer > 0; no Default)                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EID       │ Structural element identification number, which corresponds to a surface element CQUAD4, CQUAD8, │
│           │ CQUADR, CTRIA3, CTRIA6, CTRIAR; or a solid element CTETRA, CPENTA, or CHEXA. (Integer > 0; no    │
│           │ Default)                                                                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SIDE      │ Side identification number of element EID. (1 < Integer < 6; no Default)                         │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```
