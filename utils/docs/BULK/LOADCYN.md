## [LOADCYN](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.LOADCYN.xhtml) - Physical Load Input for Cyclic Symmetry

Defines a physical static or dynamic load for use in cyclic symmetry analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LOADCYN SID     S       SEGID   SEGTYPE S1      L1      S2      L2              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
LOADCYN 10      1.0     1       R       0.5     17                              
```

```text
┌───────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │
├───────────┼───────────────────────────────────────────────────┤
│ SID       │ Load set identification number.  (Integer > 0)    │
├───────────┼───────────────────────────────────────────────────┤
│ S         │ Scale Factor.  (Real)                             │
├───────────┼───────────────────────────────────────────────────┤
│ SEGID     │ Segment identification number.  (Integer)         │
├───────────┼───────────────────────────────────────────────────┤
│ SEGTYPE   │ Segment type.  (Character:  “R”, “L”, or blank)   │
├───────────┼───────────────────────────────────────────────────┤
│ Si        │ Scale Factors.  (Real)                            │
├───────────┼───────────────────────────────────────────────────┤
│ Li        │ Load set ID numbers.  See Remark 8. (Integer > 0) │
└───────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The LOADCYN entry is selected by the LOAD Case Control command.
2. If SEGTYPE is blank, both R and L segments will be used in DIH-type symmetry.
3. L1 and L2 may reference LOAD entries.  However, the LOAD entry in such a case must not reference load sets defined via RFORCE and/or GRAV entries.
4. If L1 refers to a set ID defined by SPCD loading entry, the same ID must not reference any nonzero loading specified by the other Bulk Data loading entries given via FORCE, MOMENT, FORCE1, MOMENT1, FORCE2, DAREA (if these entries have been converted), MOMENT2, PLOAD, PLOAD1, PLOAD2, PLOAD4, PLOADX1, and SLOAD entries.  In other words, an enforced deformation loading via the SPCD entry is specified by a load set ID L1 or L2 and a zero magnitude loading via a load (such as FORCE) with the same ID.
5. Load set IDs L1 or L2 may not be referenced by load set ID L1 or L2 of LOADCYH entries.
6. The load on the segment (or half-segment) is  ![bulkfgil04075.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04075.jpg?_LANG=enus) .
7. S must be nonzero.  In addition, either S1 or S2 must be nonzero.
8. L1 and L2 may reference any of the static or dynamic loading entries except GRAV and RFORCE.
9. For cyclic buckling loads may only be applied to the first segment and only zero harmonic loads may be applied so the LOADCYH entry should be used.
