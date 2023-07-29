## [MATT9](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATT9.xhtml) - Solid Element Anisotropic Material Temperature Dependence

Specifies temperature-dependent material properties on MAT9 entry fields via TABLEMk entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATT9   MID     T(G11)  T(G12)  T(G13)  T(G14)  T(G15)  T(G16)  T(G22)  +       
+       T(G23)  T(G24)  T(G25)  T(G26)  T(G33)  T(G34)  T(G35)  T(G36)  +       
+       T(G44)  T(G45)  T(G46)  T(G55)  T(G56)  T(G66)  T(RHO)  T(A1)   +       
+       T(A2)   T(A3)   T(A4)   T(A5)   T(A6)           T(GE)           +       
+       T(GE11) T(GE12) T(GE13) T(GE14) T(GE15) T(GE16) T(GE22) T(GE23) +       
+       T(GE24) T(GE25) T(GE26) T(GE33) T(GE34) T(GE35) T(GE36) T(GE44) +       
+       T(GE45) T(GE46) T(GE55) T(GE56) T(GE66)                                 
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATT9   17      32                      18                      17              
                                12                                              
                                5                       10                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material property identification number that matches the identification number on MAT9 entry.      │
│           │  (Integer > 0)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Gij)    │ Identification number of a TABLEMk entry for the terms in the material property matrix.            │
│           │ (Integer > 0 or blank)                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(RHO)    │ Identification number of a TABLEMk entry for the mass density.  (Integer > 0 or blank)             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Ai)     │ Identification number of a TABLEMk entry for the thermal expansion coefficients. (Integer > 0 or   │
│           │ blank)                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(GE)     │ Identification number of a TABLEMk entry for the damping coefficient. (Integer > 0 or blank)       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(GEij)   │ Identification number of a TABLEMk entry for the terms in the material structural damping property │
│           │ matrix. (Integer > 0 or blank).                                                                    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Fields 3, 4, etc., of this entry correspond, field by field, to fields 3, 4, etc., of the MAT9 entry referenced in field 2. The value recorded in a particular field of the MAT9 entry is replaced or modified by the table referenced in the corresponding field of this entry. In the example shown, G11 is modified by TABLEMj 32, G14 is   modified by TABLEMj 18, etc. If the fields are zero or blank, then there is no temperature dependence of the fields on the MAT9 entry.
2. Any quantity modified by this entry must have a value on the MAT9 entry.
3. The continuation entries are optional.
