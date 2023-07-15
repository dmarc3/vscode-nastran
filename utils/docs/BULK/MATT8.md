## [MATT8](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATT8.xhtml) - Shell Orthotropic Material Temperature Dependence

Specifies temperature-dependent material properties on MAT8 entry fields via TABLEMi entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATT8   MID     T(E1)   T(E2)   T(NU12) T(G12)  T(G1Z)  T(G2Z)  T(RHO)          
        T(A1)   T(A2)           T(Xt)   T(Xc)   T(Yt)   T(Yc)   T(S)            
        T(GE)   T(F12)                                                          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATT8   17      32                                                              
        15                      52                                              
                                                                                
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAT       │ Material property identification number that matches the identification number on MAT1 entry.      │
│           │  (Integer > 0)                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(E1)     │ Identification number of a TABLEMi entry for the Young’s modulus 1. (Integer > 0 or blank)         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(E2)     │ Identification number of a TABLEMi entry for the Young’s modulus 2.  (Integer > 0 or blank)        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(NU12)   │ Identification number of a TABLEMi entry for Poisson’s ratio 12.  (Integer > 0 or blank)           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(G12)    │ Identification number of a TABLEMi entry for shear modulus 12.  (Integer > 0 or blank)             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(G1Z)    │ Identification number of a TABLEMi entry for transverse shear modulus 1Z.  (Integer > 0 or blank)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(G2Z)    │ Identification number of a TABLEMi entry for transverse shear modulus 2Z.  (Integer > 0 or blank)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(RHO)    │ Identification number of a TABLEMi entry for mass density.  (Integer > 0 or blank)                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Ai)     │ Identification number of a TABLEMi entry for thermal expansion coefficient 1. See Remark 3.        │
│           │ (Positive or negative integer, 0 or blank)                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(A2)     │ Identification number of a TABLEMi entry for thermal expansion coefficient 2. See Remark 3.        │
│           │ (Integer or blank)                                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Xt)     │ Identification number of a TABLEMi entry for tension stress/strain limit 1. (Integer > 0 or blank) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Xc)     │ Identification number of a TABLEMi entry for compression stress/strain limit 1. (Integer > 0 or    │
│           │ blank)                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Yt)     │ Identification number of a TABLEMi entry for tension stress/strain limit 2. (Integer > 0 or blank) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(Yc)     │ Identification number of a TABLEMi entry for compression stress/strain limit 2. (Integer > 0 or    │
│           │ blank)                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(S)      │ Identification number of a TABLEMi entry for shear stress/strain limit. (Integer > 0 or blank)     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(GE)     │ Identification number of a TABLEMi entry for structural damping coefficient. (Integer > 0 or       │
│           │ blank)                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(F12)    │ Identification number of a TABLEMi entry for Tsai-Wu interaction term. (Integer > 0 or blank)      │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Fields 3, 4, etc., of this entry correspond, field-by-field, to fields 3, 4, etc., of the MAT8 entry referenced in field 2.  The value in a particular field of the MAT8 entry is replaced or modified by the table referenced in the corresponding field of this entry.  In the example shown, E1 is modified by TABLEMi 32, A1 is modified by TABLEMi 15, and Xt is modified by TABLEMi 52.  Blank or zero entries mean that there is no temperature dependence of the fields on the MAT8 entry.

2. Any quantity modified by this entry must have a value on the MAT8 entry.

3. Any of the T(Ai) table value can be either a positive or negative integer. For a nonlinear static analysis of a composite element with the PARAM,COMPMATT,YES, if the TABLEMi ID for the coefficient of thermal expansion is negative, the TABLEMi ordinate values will be interpreted as the thermal strain  ![bulkno05810.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05810.jpg?_LANG=enus)  rather than the coefficient of thermal expansion ordinate values  ![bulkno05812.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05812.jpg?_LANG=enus) . Internally to Nastran, a negative  ![bulkno05814.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05814.jpg?_LANG=enus)  value will be changed to  ![bulkno05816.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05816.jpg?_LANG=enus) .

