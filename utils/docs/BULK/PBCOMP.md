## [PBCOMP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBCOMP.xhtml) - Beam Property (Alternate Form of PBEAM)

Alternate form of the PBEAM entry to define properties of a uniform cross-sectional beam referenced by a CBEAM entry. This entry is also used to specify lumped areas of the beam cross section for nonlinear analysis and/or composite analysis.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBCOMP  PID     MID     A       I1      I2      I12     J       NSM     +       
+       K1      K2      M1      M2      N1      N2      SYMOPT          +       
+       Y1      Z1      C1      MID1                                    +       
+       Y2      Z2      C2      MID2                                    +       
+       -etc.-                                                                  
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBCOMP  39      6       2.9                                                     
                                                        1                       
        -0.5    1.2     0.1     18                                              
        0.2     0.9     0.15                                                    
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. See Remark 1. (Integer > 0)                                      │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number. See Remarks 3. and 6. (Integer > 0)                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ A         │ Area of beam cross section. (Real > 0.0)                                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ I1        │ Area moment of inertia in plane 1 about the neutral axis. See Remark 7. (Real > 0.0)             │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ I2        │ Area moment of inertia in plane 2 about the neutral axis. See Remark 7. (Real > 0.0)             │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ I12       │ Area product of inertia. See Remark 7. (Real; Default = 0.0, but  > 0.0)                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ J         │ Torsional stiffness parameter. See Remark 7. (Real > 0.0; Default = 0.0)                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSM       │ Nonstructural mass per unit length. (Real > 0.0; Default = 0.0)                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ K1, K2    │ Shear stiffness factor K in K*A*G for plane 1 and plane 2. See Remark 5. (Real > 0.0;            │
│           │ Default = 1.0)                                                                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ M1, M2    │ The (y,z) coordinates of center of gravity of nonstructural mass. See the figure in the CBEAM    │
│           │ entry description. (Real; Default = 0.0)                                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ N1, N2    │ The (y,z) coordinates of neutral axis. See the figure in the CBEAM entry description. (Real;     │
│           │ Default = 0.0)                                                                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SYMOPT    │ Symmetry option to input lumped areas for the beam cross section. See Figure 0-74 and Remark 8.  │
│           │ (0 < Integer < 5; Default = 0)                                                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Yi, Zi    │ The (y,z) coordinates of the lumped areas in the element coordinate system. See Remark 1. (Real) │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci        │ Fraction of the total area for the i-th lumped area. (Real > 0.0; Default = 0.0)                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MIDi      │ Material identification number for the i-th integration point. See Remark 6. (Integer > 0)       │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. PBCOMP is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PBCOMP property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PBEAM, PBEAML, PBCOMP, PBMSECT, PBEAM3 entries.
2. The second continuation entry may be repeated 18 more times. If SYMOPT = 5 a maximum of 21 continuation entries is allowed; i.e., a maximum of 20 lumped areas may be input. If SYMOPT = 1 through 4, the total number of areas input plus the total number generated by symmetry must not exceed 20. If these are not specified, the program defaults, as usual, to the elliptically distributed eight nonlinear rods. See Figure 0-73.

        See link for figure.

Figure 0-73   PBCOMP Entry SYMOPT Type Examples with 8 Lumped Areas

```text
┌────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Notes: │ Integration points (lumped area) are numbered 1 through 8. User-specified points are denoted by │
│        │  and the mirrored points are denoted by  .                                                      │
└────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

3. For structural problems, MID and MIDi must reference a MAT1 material entry. For material nonlinear analysis, the material should be perfectly plastic since the plastic hinge formulation is not valid for strain hardening. For heat transfer problems, MID and MIDi must reference a MAT4 or MAT5 material entry.
4. For the case where the user specifies I1, I2 and I12 on the parent entry, the stress-output location may also be specified on continuation entries. The (y,z) coordinates specified on these entries will serve as stress output locations with the corresponding Ci’s set to 0. Stress output is provided at the first four lumped area locations only. If one of the symmetry options is used and fewer than four lumped areas are input explicitly, the sequence of output locations in the imaged quadrants is shown in  . For one specific example in the model shown in Remark   ( ), output can be obtained at points 1 and 2 and in the image points 3 and 4.
5. Blank fields for K1 and K2 are defaulted to 1.0. If a value of 0.0 is used for K1 and K2, the transverse shear stiffness becomes rigid and the transverse shear flexibilities are set to 0.0.
6. The values  ![bulkp06586.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06586.jpg?_LANG=enus)  and  ![bulkp06588.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06588.jpg?_LANG=enus)  are computed based on the value of MID on the parent entry. MID is will follow the same symmetry rules as Ci depending on the value of SYMOPT. If the MIDi field on a continuation entry is blank, the value will   be that of MID on the parent entry. MIDi values may be input on continuations without the corresponding Yi, Zi, and Ci values to allow different stress-strain laws.
7. If the lumped cross-sectional areas are specified, fields I1, I2, and I12 will be ignored. These and other modified values will be calculated based on the input data (Yi, Zi, Ci, MIDi) as follows:

    ![bulkp06590.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06590.jpg?_LANG=enus)  
    
    ![bulkp06592.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06592.jpg?_LANG=enus)  
    
    ![bulkp06594.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06594.jpg?_LANG=enus)  
    
    ![bulkp06596.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06596.jpg?_LANG=enus)  
    
    ![bulkp06598.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06598.jpg?_LANG=enus)  
    
    ![bulkp06600.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06600.jpg?_LANG=enus)  
    
    ![bulkp06602.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06602.jpg?_LANG=enus)  

    where n is the number of lumped cross-sectional areas specified.

8. For a doubly symmetric section (SYMOPT = 1), if the lumped areas are specified on either axis, the symmetry option will double the areas. For example, for the section shown in  , points 2 and 4 are coincident and so are points 6 and 8. In such cases, it is recommended that users input the value of area as half of the actual value at point 2 to obtain the desired effect.

    ![bulkp06604.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06604.jpg?_LANG=enus)
    
    Figure 0-74 Doubly Symmetric PBCOMP Section

9. For SYMOPT =0, 5, or blank at least three Yi and one Zi coordinates must be nonzero. All of the points (input plus mirrored) should not lie on a straight line.All of the points (input plus mirrored) should not lie on a straight line or a FATAL message will be issued.
