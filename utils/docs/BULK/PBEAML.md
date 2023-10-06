## [PBEAML](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBEAML.xhtml) - Beam Cross-Section Property

Defines the properties of a beam element by cross-sectional dimensions.

#### Format:

(Note: n = number of dimensions and m = number of intermediate stations)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBEAML  PID     MID     GROUP   TYPE                                    +       
+       DIM1(A) DIM2(A) -etc.-  DIMn(A) NSM(A)  SO(1)   X(1)/XB DIM1(1) +       
+       DIM2(1) -etc.-  DIMn(1) NSM(1)  SO(2)   X(2)/XB DIM1(2) DIM2(2) +       
+       -etc.-  DIMn(2) NSM(m)  -etc.-  SO(m)   X(m)/XB DIM1(m) -etc.-  +       
+       DIMn(m) NSM(m)  SO(B)   1.0     DIM1(B) DIM2(B) -etc.-  DIMn(B) +       
+       NSM(B)                                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBEAML  99      21              T                                               
        12.     14.8    2.5     2.6             NO      0.4     6.              
        7.      1.2     2.6             YES     0.6     6.      7.8             
        5.6     2.3             YES                                             
```

```text
┌─────────────┬───────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describer   │ Meaning                                           │                                                  │
├─────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ PID         │ Property identification number. (Integer > 0)     │                                                  │
├─────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ MID         │ Material identification number. (Integer > 0)     │                                                  │
├─────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ GROUP       │ Cross-section group. (Character; Default =        │                                                  │
│             │ “MSCBML0")                                        │                                                  │
├─────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ TYPE        │ Cross-section shape. See Remark 4. (Character:    │                                                  │
│             │ “ROD”, “TUBE”, “TUBE2”, “L”, “I”, “CHAN”, “T”,    │                                                  │
│             │ “BOX”, “BAR”, “CROSS”, “H”, “T1”, “I1”, “CHAN1”,  │                                                  │
│             │ “Z”, “CHAN2”, “T2”, “BOX1”, “HEXA”, “HAT”,        │                                                  │
│             │ “HAT1”, “DBOX” for GROUP = “MSCBML0”)             │                                                  │
├─────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ DIMi(j)     │ Cross-section dimensions at end A, intermediate   │                                                  │
│             │ station j and end B. (Real > 0.0 for              │                                                  │
│             │ GROUP = “MSCBML0”)                                │                                                  │
├─────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ NSM(j)      │ Nonstructural mass per unit length.               │                                                  │
│             │ (Default = 0.0)                                   │                                                  │
├─────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ SO(j),SO(B) │ Stress output request option for intermediate     │                                                  │
│             │ station j and end B. (Character; Default = “YES”) │                                                  │
├─────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│             │ YES                                               │ Stresses and forces are recovered at all points  │
│             │                                                   │ shown under TYPE figures below at points labeled │
│             │                                                   │ C, D, E, F                                       │
├─────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│             │ NO                                                │ No stresses or forces are recovered.             │
├─────────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ X(j)/XB     │ Distance from end A to intermediate station j in  │                                                  │
│             │ the element coordinate system divided by the      │                                                  │
│             │ length of the element. (REAL, 0.0<x(j)/xb £1.0,   │                                                  │
│             │ default=1.0                                       │                                                  │
└─────────────┴───────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```

#### Remarks:

1. For structural problems, PBEAML entries must reference a MAT1 material entry.
2. PBEAML is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PBEAML property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PBEAM, PBEAML, PBCOMP, PBMSECT, PBEAM3 entries.
3. For heat-transfer problems, the MID must reference a MAT4 or MAT5 material entry.
4. See the PBEAM entry description for a discussion of beam-element geometry.
5. If any of the fields NSM(B), DIMi(B) are blank on the continuation entry for End B, the values are set to the values given for end A. For the continuation entries that have values of X(j)/XB between 0.0 and 1.0 and use the default option (blank field), a linear interpolation between the values at ends A and B is performed to obtain the missing field.
6. The GROUP is associated with a FMS CONNECT statement, which specifies the evaluator. A reserved GROUP name is “MSCBML0”. Users may create their own cross-section types. Each of the types will require a one or more subroutines to convert DIMi information to geometric property information contained on a PBEAM entry. See  Building and Using the Sample Programs  in the  MSC Nastran Utilities Guide  for a discussion of how to include a user-defined beam library.
7. For GROUP = “MSCBML0”, the cross-sectional properties, shear flexibility factors and stress recovery points are computed using the TYPE and DIMi as shown in  . The element coordinate system is located at the shear center.
8. A function of this entry is to derive an equivalent PBEAM entry. Any sorted echo request will also cause printout and/or punch of the derived PBEAM.
9. Beams can have no more than 14 dimensions per station. The total number of dimensions at all stations must be less than 200. The transfer of data with the beam server is limited to 4000 words.

     None of these limits are exceeded with the MSC beam library, but a user defined beam library could.

10. The finite element formulation (FEF) utilized for the arbitrary beam cross section is selected as the default method for computing sectional properties for all supported cross section types of PBEAML when GROUP=MSCBML0. The original beam equations, which are based on thin-walled assumption can be accessed via Bulk Data entry ‘MDLPRM,TWBRBML,1’.
11. For optimization, individual DIMx of PBEAML can be selected as designed properties even with finite element formulation.
12. The origin of the  ![bulkp06650.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06650.jpg?_LANG=enus)  and  ![bulkp06652.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06652.jpg?_LANG=enus) . coordinate system for the section types is at the shear center for all element types when using the FEF. For section types ‘L’, ‘T’, ‘T1’, ‘T2’ and ‘HAT1’, no shear center calculation is calculated with the original beam equations and the origins of these types are at the locations specified in the following figures. For these sections types, this can result in a difference in the stress recovery points and the neutral axis locations between the beam equations and the FEF. The FEF results are considered more exact. For the remaining types with the beam equation, the shear center is either computed or is obvious due to symmetry considerations.

    ![bulkp06654.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06654.jpg?_LANG=enus)
    
    ![bulkp06656.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06656.jpg?_LANG=enus)
    
    ![bulkp06658.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06658.jpg?_LANG=enus)
    
    ![bulkp06660.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06660.jpg?_LANG=enus)
    
    ![bulkp06662.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06662.jpg?_LANG=enus)
    
    Figure 0-76 Definition of Cross-Section Geometry and Stress Recovery Points for GROUP  =  “MSCBML0"
