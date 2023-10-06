## [MAT2F](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MAT2F.xhtml) - Shell Element Anisotropic Frequency Dependence

Specifies frequency-dependent material properties on MAT2 entry fields via TABLEDi entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT2F   MID     G11     G12     G13     G22     G23     G33             +       
+                                       GE                              +       
+               GE11    GE12    GE13    GE22    GE23    GE33                    
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT2F   34                                                                      
                                                                                
                47      48      51      47      48      51                      
```

#### Example: 

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material property identification number that matches the identification number on MAT2 entry.      │
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

1. Fields 3, 4, etc., of this entry correspond, field-by-field, to fields 3, 4, etc., of the MAT2 entry referenced in field 2. The value in a particular field of the MAT2 entry is replaced by the table referenced in the corresponding field of this entry. Blank or zero entries mean that there is no frequency dependence of the fields on the MAT2 entry.
2. Table references must be present for each item that is frequency dependent.
3. If the GEij values are present on the MAT2 entry for any ply, then Nastran will ignore the GE value given on the first continuation entry field (6) and the GE entry given in field (8) of the PCOMP/PCOMPG entry and use the given GEij values. The rational of these entries is that with composite materials made of a viscoelastic resin system, the damping matrix does not scale with the stiffness matrix. For example, in the directions where you have more fibers, the stiffness is higher because you have more fibers but the damping coefficient is smaller because you have less resin matrix which is the main source of damping. To use this feature in composites, the PCOMP/PCOMPG MIDi entries must refer to MAT2 entries. See Remarks   and  of MAT2 entry. The damping is applied in element material routines by forming the product GEij * Gij when forming the K4 damping matrix.
4. IF GE=0.0 on corresponding MAT2 then GE table must be blank or 0. For any GEij=0.0 on corresponding MAT2 the corresponding GEij table must be blank or 0.
