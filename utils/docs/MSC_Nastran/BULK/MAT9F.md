## [MAT9F](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MAT9F.xhtml) - Solid Element Anisotropic Frequency Dependence

Specifies frequency-dependent material properties on MAT9 entry fields via TABLEDi entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT9F   MID     G11     G12     G13     G14     G15     G16     G22     +       
+       G23     G24     G25     G26     G33     G34     G35     G36     +       
+       G44     G45     G46     G55     G56     G66                     +       
+                                                       GE              +       
+       GE11    GE12    GE13    GE14    GE15    GE16    GE22    GE23    +       
+       GE24    GE25    GE26    GE33    GE34    GE35    GE36    GE44    +       
+       GE45    GE46    GE55    GE56    GE66                                    
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT9F   101     5                                               5               
                                        5                                       
                                5               5                               
                                                                                
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material property identification number that matches the identification number on MAT9 entry.      │
│           │ (Integer > 0)                                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gij       │ Identification number of a TABLEDi entry for the material property matrix. (Integer > 0 or blank)  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GE        │ Identification number of a TABLEDi entry for the element structural damping coefficient. (Integer  │
│           │ > 0 or blank)                                                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GEij      │ Identification number of a TABLEDi entry for the element structural damping coefficients. (Integer │
│           │ > 0 or blank)                                                                                      │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Fields 3, 4, etc., of this entry correspond, field-by-field, to fields 3, 4, etc., of the MAT9 entry referenced in field 2. The value in a particular field of the MAT9 entry is replaced by the table referenced in the corresponding field of this entry. Blank or zero entries mean that there is no frequency dependence of the fields on the MAT9 entry.
2. Table references must be present for each item that is frequency dependent.
3. IF GE=0.0 on corresponding MAT9 then GE table must be blank or 0. For any GEij=0.0 on corresponding MAT9, the corresponding GEij table must be blank or 0.
