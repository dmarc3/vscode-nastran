## [MATT5](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATT5.xhtml) - Thermal Anisotropic Material Temperature Dependence

Specifies temperature-dependent material properties on MAT5 entry fields via TABLEMi entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATT5   MID     T(KXX)  T(KXY)  T(KXZ)  T(KYY)  T(KYZ)  T(KZZ)  T(CP)   +       
+               T(HGEN)                                                         
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATT5   24      73                                                              
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number of a MAT5 entry that is to be temperature dependent.  (Integer > 0)         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Kij)    │ Identification number of a TABLEMi entry.  The TABLEMi entry specifies temperature dependence of  │
│           │ the matrix term.  (Integer > 0 or blank)                                                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(CP)     │ Identification number of a TABLEMi entry that specifies the temperature dependence of the thermal │
│           │ heat capacity.  (Integer > 0 or blank)                                                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(HGEN)   │ Identification number of a TABLEMi entry that gives the temperature dependence of the internal    │
│           │ heat generation property for the QVOL entry.  (Integer > 0 or blank)                              │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The basic quantities on the MAT5 entry are always multiplied   by the tabular function referenced by the MATT5 entry.
2. If the fields are blank or zero, then there is no temperature dependence of the referenced quantity on the basic MAT5 entry.
