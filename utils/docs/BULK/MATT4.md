## [MATT4](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATT4.xhtml) - Thermal Material Temperature Dependence

Specifies table references for temperature-dependent MAT4 material properties.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATT4   MID     T(K)    T(CP)           T(H)    T(μ)    T(HGEN)                 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATT4   17      102     103                     105                             
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number of a MAT4 entry that is temperature dependent.  (Integer > 0)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(K)      │ Identification number of a TABLEMj entry that gives the temperature dependence of the thermal      │
│           │ conductivity.  (Integer > 0 or blank)                                                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(CP)     │ Identification number of a TABLEMj entry that gives the temperature dependence of the thermal heat │
│           │ capacity.  (Integer > 0 or blank)                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(H)      │ Identification number of a TABLEMj entry that gives the temperature dependence of the free         │
│           │ convection heat transfer coefficient.  (Integer > 0 or blank)                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(μ)      │ Identification number of a TABLEMj entry that gives the temperature dependence of the dynamic      │
│           │ viscosity.  (Integer > 0 or blank)                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(HGEN)   │ Identification number of a TABLEMj entry that gives the temperature dependence of the internal     │
│           │ heat generation property for QVOL.  (Integer > 0 or blank)                                         │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The basic quantities on the MAT4 entry are always multiplied by the corresponding tabular function referenced by the MATT4 entry.
2. If the fields are blank or zero, then there is no temperature dependence of the referenced quantity on the MAT4 entry.
