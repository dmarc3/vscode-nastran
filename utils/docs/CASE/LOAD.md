## [LOAD (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.LOAD.Case.xhtml) - External Static Load Set Selection

Selects an external static load set.

#### Format:

```nastran
LOAD=n
```

#### Example:

```nastran
LOAD=15
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of at least one external load Bulk Data entry. The set identification must      │
│           │ appear on at least one ACCEL, ACCEL1, FORCE, FORCE1, FORCE2, FORCEAX, GRAV, LOAD, MOMAX, MOMENT,   │
│           │ MOMENT1, MOMENT2, MPCD, PLOAD, PLOAD1, PLOAD2, PLOAD4, PLOADB3, PLOADX, QVOL, QVECT, QHBDY, QBDY1, │
│           │ QBDY2, QBDY3, PRESAX, RFORCE, SPCD, or SLOAD entry (Integer  > 0).                                 │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. A GRAV entry cannot have the same set identification number as any of the other loading entry types. Apply a gravity load along with other static loads, a LOAD Bulk Data entry must be used.
2. LOAD is only applicable in linear and nonlinear statics, inertia relief, differential stiffness, buckling, and heat transfer analyses.
3. The total load applied will be the sum of external (LOAD), thermal (TEMP(LOAD)), element deformation (DEFORM), and constrained displacement (SPC) loads.
4. Static, thermal, and element deformation loads should have unique set identification numbers.
