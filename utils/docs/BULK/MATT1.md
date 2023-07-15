## [MATT1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATT1.xhtml) - Isotropic Material Temperature Dependence

Specifies temperature-dependent material properties on MAT1 entry fields via TABLEMi entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATT1   MID     T(E)    T(G)    T(NU)   T(RHO)  T(A)            T(GE)           
        T(ST)   T(SC)   T(SS)                                                   
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATT1   17      32      65      84              15                              
        52                                                                      
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material property identification number that matches the identification number on MAT1 entry.  │
│           │  (Integer > 0)                                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(E)      │ Identification number of a TABLEMi entry for the Young’s modulus.  (Integer > 0 or blank)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(G)      │ Identification number of a TABLEMi entry for the shear modulus.  (Integer > 0 or blank)        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(NU)     │ Identification number of a TABLEMi entry for the Poisson’s ratio.  (Integer > 0 or blank)      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(RHO)    │ Identification number of a TABLEMi entry for the mass density.  (Integer > 0 or blank)         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(A)      │ Identification number of a TABLEMi entry for the thermal expansion coefficient. See Remark 4.  │
│           │ (Positive or negative integer, 0 or blank)                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(GE)     │ Identification number of a TABLEMi entry for the damping coefficient.  (Integer > 0 or blank)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(ST)     │ Identification number of a TABLEMi entry for the tension stress limit.  (Integer > 0 or blank) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(SC)     │ Identification number of a TABLEMi entry for the compression limit.  (Integer > 0 or blank)    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T(SS)     │ Identification number of a TABLEMi entry for the shear limit.  (Integer > 0 or blank)          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. Fields 3, 4, etc., of this entry correspond, field-by-field, to fields 3, 4, etc., of the MAT1 entry referenced in field 2.  The value in a particular field of the MAT1 entry is replaced or modified by the table referenced in the corresponding field of this entry.  In the example shown, E is modified by TABLEMi 32, G is modified by TABLEMi 65, NU is modified by TABLEMi 84, A is modified by TABLEMi 15, and ST is modified by TABLEMi 52.  Blank or zero entries mean that there is no temperature dependence of the fields on the MAT1 entry.

2. Any quantity modified by this entry must have a value on the MAT1 entry.  Initial values of E, G, or NU may be supplied according to Remark 3 on the MAT1 entry.

3. Table references must be present for each item that is temperature dependent. If any one of Young’s modulus, shear modulus or Poisson’s ratio is temperature dependent, then T(E), T(G) and T(NU) should be specified together to get accurate results.

4. The T(A) table value can be either a positive or negative integer. For a nonlinear static analysis of a composite element with the PARAM,COMPMATT,YES, if the TABLEMi ID for the coefficient of thermal expansion is negative, the TABLEMi ordinate values will be interpreted as the thermal strain  ![bulkno05788.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05788.jpg?_LANG=enus)  rather than the coefficient of thermal expansion ordinate values  ![bulkno05790.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05790.jpg?_LANG=enus) . Internally to Nastran, a negative  ![bulkno05792.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05792.jpg?_LANG=enus)  value will be changed to  ![bulkno05794.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05794.jpg?_LANG=enus) .

5. This entry is not used by SOL 700.

