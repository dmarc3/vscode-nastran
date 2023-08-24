## [MATT2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATT2.xhtml) - Anisotropic Material Temperature Dependence

Specifies temperature-dependent material properties on MAT2 entry fields via TABLEMj entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATT2   MID     T(G11)  T(G12)  T(G13)  T(G22)  T(G23)  T(G33)  T(RHO)  +       
+       T(A1)   T(A2)   T(A3)           T(GE)   T(ST)   T(SC)   T(SS)   +       
+               T(GE11) T (GE12)T (GE13)T (GE22)T (GE23)T (GE33)                
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATT2   17      32                                      15                      
        62                                                                      
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material property identification number that matches the identification number on a MAT2 entry.    │
│           │  (Integer > 0)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Gij)    │ Identification number of a TABLEMk entry for the terms in the material property matrix.            │
│           │  (Integer > 0 or blank)                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(RHO)    │ Identification number of a TABLEMk entry for the mass density.  (Integer > 0 or blank)             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Ai)     │ Identification number of a TABLEMk entry for the thermal expansion coefficient.  See Remark 3.     │
│           │ (Positive or negative integer, 0 or blank)                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(GE)     │ Identification number of a TABLEMk entry for the damping coefficient.  (Integer > 0 or blank)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(ST)     │ Identification number of a TABLEMk entry for the tension stress limit.  (Integer > 0 or blank)     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(SC)     │ Identification number of a TABLEMk entry for the tension compression limit.  (Integer > 0 or       │
│           │ blank)                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(SS)     │ Identification number of a TABLEMk entry for the tension shear limit.  (Integer > 0 or blank)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T (GEij)  │ Identification number of a TABLEMk entry for the terms in the material structural damping property │
│           │ matrix. (Integer > 0 or blank)                                                                     │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Fields 3, 4, etc., of this entry correspond, field by field, to fields 3, 4, etc., of the MAT2 entry referenced in field 2.  The value in a particular field of the MAT2 entry is replaced or modified by the table referenced in the corresponding field of this entry.  In the example shown, G11 is modified by TABLEMk 32, G33 is modified by TABLEMk 15, and A1 is modified by TABLEMk 62.  If Ri is zero or blank, then there is no temperature dependence of the field on the MAT2 entry.
2. Any quantity modified by this   entry must have a value on the MAT2 entry.
3. Any of the T(A) table value can be either a positive or negative integer. For a nonlinear static analysis of a composite element with the PARAM,COMPMATT,YES, if the TABLEMk ID for the coefficient of thermal expansion is negative, the TABLEMk ordinate values will be interpreted as the thermal strain  ![bulkno05796.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05796.jpg?_LANG=enus)  rather than the coefficient of thermal expansion ordinate values  ![bulkno05798.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05798.jpg?_LANG=enus) . Internally to Nastran, a negative  ![bulkno05800.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05800.jpg?_LANG=enus)  value will be changed to  ![bulkno05802.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05802.jpg?_LANG=enus)
