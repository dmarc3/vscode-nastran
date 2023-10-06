## [LOADCYH](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.LOADCYH.xhtml) - Harmonic Load Input for Cyclic Symmetry

Defines the harmonic coefficients of a static or dynamic load for use in cyclic symmetry analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LOADCYH SID     S       HID     HTYPE   S1      L1      S2      L2              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LOADCYH 10      1.0     7       C       0.5     15                              
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Load set identification number. (Integer > 0)                                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ S         │ Scale Factor.  (Real)                                                                │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ HID       │ Harmonic.  See Remark 6. (Integer or blank)                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ HTYPE     │ Harmonic type.  (Character:  “C”, “S”, “CSTAR” “SSTAR”, “GRAV”, “RFORCE”, or blank). │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ Si        │ Scale factor on Li.  (Real)                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ Li        │ Load set identification number.  See Remark 10. (Integer > 0)                        │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The LOADCYH entry is selected with the Case Control command LOAD = SID.
2. If HTYPE is blank, the load will be applied to all applicable types in the problem.
3. If HTYPE is “GRAV” or “RFORCE”, GRAV or RFORCE entry loading will be used.  Harmonic loads for appropriate available harmonics will be generated automatically in these cases.
4. L1 and L2 may reference LOAD entries.  However, the LOAD entry in such a case must not reference load sets defined via RFORCE and/or GRAV entries.
5. If L1 refers to a set ID defined by an SPCD entry, the same ID must not reference any nonzero loading specified by the other Bulk Data loading entries given via FORCE, MOMENT, FORCE1, MOMENT1, FORCE2, DAREA (if these entries have been converted), MOMENT2, PLOAD, PLOAD1, PLOAD2, PLOAD4, PLOADX, and SLOAD or converted DAREA entries.  In other words, an enforced deformation loading via the SPCD entry is specified by a load set ID L1 or L2 and a zero magnitude loading via a load (such as FORCE) with the same ID.
6. If HTYPE is “GRAV” or “RFORCE”, the entry in HID will be ignored and therefore may be blank.  S2 and L2 must be blank for this case.
7. Load set IDs L1 or L2 may not be referenced by load set ID L1 or L2 of LOADCYN entries.
8. If HTYPE = “C”, “S”, “CSTAR”, or “SSTAR”, the load on component (HTYPE) of harmonic (HID) is  ![bulkfgil04073.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04073.jpg?_LANG=enus) .
9. S must be nonzero.  In addition, either S1 or S2 must be nonzero.
10. L1 and L2 may reference any of the static or dynamic loading entries including GRAV and RFORCE.
