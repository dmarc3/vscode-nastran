## [MOMAX](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MOMAX.xhtml) - Conical Shell Static Moment

Defines a static concentrated moment load on a ring of a conical shell.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MOMAX   SID     RID     HID     S       MR      MP      MZ                      
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MOMAX   1       2       3       1.0     0.1     0.2     0.3                     
```
```text
┌────────────┬───────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                   │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ SID        │ Load set identification number.  (Integer > 0)                                            │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ RID        │ Ring identification number.  See the RINGAX entry.  (Integer > 0)                         │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ HID        │ Harmonic identification number or a sequence of harmonics.  See Remark 5. (Integer > 0 or │
│            │ Character)                                                                                │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ S          │ Scale factor.  (Real)                                                                     │
├────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ MR, MP, MZ │ Moment components in the r, φ, z directions.  (Real)                                      │
└────────────┴───────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. MOMAX is allowed only if an AXIC entry is also present.

2. Load sets must be selected with the Case Control command LOAD=SID.

3. A separate entry is needed for the definition of the moment associated with each harmonic.

4. For a discussion of the conical shell problem, see   in the  MSC Nastran Reference Guide.

5. If a sequence of harmonics is to be placed in HID, the form is as follows: “Sn1Tn2", where n1 is the start of the sequence and n2 is the end of the sequence; i.e., for harmonics 0   through 10, the field would contain “S0T10".

