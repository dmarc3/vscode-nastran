## [MAT8F](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MAT8F.xhtml) - Shell Element Orthotropic Material Frequency Dependence

Specifies frequency-dependent material properties on MAT8 entry fields via TABLEDi entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT8F   MID     E1      E2      NU12    G12     G1Z     G2Z             +       
+                                                                       +       
+       GE                                                                      
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT8F   76                                                                      
                                                                                
        97                                                                      
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material property identification number that matches the identification number on MAT8 entry.     │
│           │ (Integer > 0)                                                                                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ E1        │ Identification number of a TABLEDi entry for the Modulus of elasticity in longitudinal direction, │
│           │ also defined as the fiber direction or 1-direction. (Integer > 0 or blank)                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ E2        │ Identification number of a TABLEDi entry for the Modulus of elasticity in lateral direction, also │
│           │ defined as the matrix direction or 2-direction. (Integer > 0 or blank)                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NU12      │ Identification number of a TABLEDi entry for Poisson’s ratio. (Integer > 0 or blank)              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G12       │ Identification number of a TABLEDi entry for the in-plane shear modulus. (Integer > 0 or blank)   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G1Z       │ Identification number of a TABLEDi entry for the transverse shear modulus for shear in 1-Z plane. │
│           │ (Integer > 0 or blank)                                                                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G2Z       │ Identification number of a TABLEDi entry for the transverse shear modulus for shear in 2-Z plane. │
│           │ (Integer > 0 or blank)                                                                            │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GE        │ Identification number of a TABLEDi entry for the element structural damping coefficient. (Integer │
│           │ > 0 or blank)                                                                                     │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Fields 3, 4, etc., of this entry correspond, field-by-field, to fields 3, 4, etc., of the MAT8 entry referenced in field 2. The value in a particular field of the MAT8 entry is replaced by the table referenced in the corresponding field of this entry. Blank or zero entries mean that there is no frequency dependence of the fields on the MAT8 entry.
2. Table references must be present for each item that is frequency dependent.
3. IF GE=0.0 on corresponding MAT8 then GE table must be blank or 0.
