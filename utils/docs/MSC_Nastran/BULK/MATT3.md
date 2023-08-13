## [MATT3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATT3.xhtml) - MAT3 Material Temperature Dependence

Specifies temperature-dependent material properties on MAT3 entry fields via TABLEMi entries that are temperature dependent.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATT3   MID     T(EX)   T(ETH)  T(EZ)   T(NUXTH)T(NUTHZ)T(NUZX) T(RHO)  +       
+                       T(GZX)  T(AX)   T(ATH)  T(AZ)           T(GE)           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATT3   23      32              15                                              
                        62                                                      
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID          │ Material property identification number that matches the identification number on MAT3 entry.      │
│              │  (Integer > 0)                                                                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(EX) T(ETH) │ Identification number of a TABLEMi entry for the Young’s modulus in the x, , and z directions.     │
│ T(EZ)        │  (Integer > 0 or blank)                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(GZX)       │ Identification number of a TABLEMi entry for the shear modulus.  (Integer > 0 or blank)            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(NUXTH)     │ Identification number of a TABLEMi entry for the Poisson’s ratio in the , , and zx directions.     │
│ T(NUTHZ)     │  (Integer > 0 or blank)                                                                            │
│ T(NUZX)      │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(RHO)       │ Identification number of a TABLEMi entry for the mass density.  (Integer > 0 or blank)             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(AX) T(ATH) │ Identification number of a TABLEMi entry for the thermal expansion coefficients in the x, θ, and z │
│ T(AZ)        │ directions.  (Integer > 0 or blank)                                                                │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(GE)        │ Identification number of a TABLEMi entry for the damping coefficient.  (Integer > 0 or blank)      │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Fields 3, 4, etc., of this entry correspond, field by field, to fields 3, 4, etc., of the MAT3 entry referenced in field 2. The value recorded in a particular field of the MAT3 entry is replaced or modified by the table referenced in the corresponding field of this entry.  In the example shown, EX is modified by TABLEMi 32, EZ is modified by TABLEMi 15, and GZX is modified by TABLEMi 62.  If Ri is zero or blank, then there is no temperature dependence of the field on the MAT3 entry.
2. Any quantity modified by this entry must have a value on the MAT3 entry.
