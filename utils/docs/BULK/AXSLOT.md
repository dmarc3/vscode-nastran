## [AXSLOT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkab/TOC.AXSLOT.xhtml) - Axisymmetric Slot Analysis Parameters

Defines the harmonic index and the default values for acoustic analysis entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AXSLOT  RHOD    BD      N       WD      MD                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
AXSLOT  0.003   1.5+2   3       0.75    6                                       
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHOD      │ Default density of fluid in units of mass/volume.  (Real > 0.0 or blank)                    │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ BD        │ Default bulk modulus of fluid in units of force/volume ratio change.  (Real ³ 0.0 or blank) │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ N         │ Harmonic index number.  (Integer > 0 or blank)                                              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ WD        │ Default slot width.  (Real  > 0.0 or blank)                                                 │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ MD        │ Default number of slots.  (Integer > 0 or blank)                                            │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only one AXSLOT entry is allowed.
2. If any of the RHO, B, W, and M fields on the GRID, SLBDY, CAXIFi, and CSLOTi entries are blank, then values must be specified for the RHOD, BD and MD fields.
3. If the number of slots (M) is different in different regions of the cavity, this fact may be indicated on the CSLOTi and SLBDY entries.  If the number of slots is zero, no matrices for CSLOTi elements are generated.
4. BD   =    0.0 implies the fluid is incompressible.
