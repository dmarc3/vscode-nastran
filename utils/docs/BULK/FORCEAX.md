## [FORCEAX](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.FORCEAX.xhtml) - Conical Shell Static Force

Defines a static concentrated force on a conical shell ring.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FORCEAX SID     RID     HID     S       FR      FP      FZ                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
FORCEAX 1       2       3       2.0     0.1     0.2     0.3                     
```

```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ SID        │ Load set identification number. (Integer > 0)                                          │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ RID        │ RINGAX entry identification number. (Integer > 0)                                      │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ HID        │ Harmonic identification number or a sequence of harmonics. See Remark 5. (Integer > 0) │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ S          │ Scale factor for the force. (Real)                                                     │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ FR, FP, FZ │ Force components in  directions. (Real)                                                │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. FORCEAX is allowed only if an AXIC entry is also present.
2. Axisymmetric shell loads must   be selected with the Case Control command LOAD = SID.
3. A separate entry is needed for the definition of the force associated with each harmonic.
4. See   in the  MSC Nastran Reference Guide  for further discussion.
5. If a sequence of harmonics is to be placed in HID, the form is as follows:  “Sn1Tn2” where n1 is the start of the sequence and n2 is the end of the sequence (e.g., for harmonics 0 through 10, the field would contain “S0T10”).
