## [PBARL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBARL.xhtml) - Simple Beam Cross-Section Property

Defines the properties of a simple beam element (CBAR entry) by cross-sectional dimensions.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBARL   PID     MID     GROUP   TYPE                                            
        DIM1    DIM2    DIM3    DIM4    DIM5    DIM6    DIM7    DIM8            
        DIM9    -etc.-  NSM                                                     
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBARL   39      6               I                                               
        14.     6.      .5      .5      .5      .5      .2                      
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number. (Integer > 0)                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GROUP     │ Cross-section group. See Remarks 6. and 8. (Character; Default = “MSCBML0”)                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TYPE      │ Cross-section type. See Remarks 6. and 8. and Figure 0-69. (Character: “ROD”, “TUBE”, “TUBE2”, │
│           │ “I”, “CHAN”, “T”, “BOX”, “BAR”, “CROSS”, “H”, “T1”, “I1”, “CHAN1”, “Z”, “CHAN2”, “T2”, “BOX1”, │
│           │ “HEXA”, “HAT”, “HAT1”, “DBOX” for GROUP = “MSCBML0”)                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIMi      │ Cross-sectional dimensions. (Real > 0.0 for GROUP = “MSCBMLO”)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSM       │ Nonstructural mass per unit length. NSM is specified after the last DIMi. (Default = 0.0)      │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. For structural problems, PBARL entries must reference a MAT1 material entry.

2. PBARL is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PBARL property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PBAR, PBARL, PBRSECT entries.

3. See CBAR entry for a discussion of bar element geometry.

4. For heat-transfer problems, the MID must reference a MAT4 or MAT5 material entry.

5. For response spectra analysis on stress recovery coefficients, the CBEAM element should be used because results for the CBAR element will not be accurate.

6. The GROUP is associated with an FMS CONNECT statement that specifies the evaluator. A reserved GROUP name is “MSCBML0”. Users may create their own cross-section types. Each of the types will require one or more subroutines to convert DIMi information to geometric property information contained on a PBAR entry and optimization information. See  Building and Using the Sample Programs  in the  MSC Nastran Utilities Guide  for a discussion on how to include a user-defined beam library.

7. A function of this entry is to derive an equivalent PBAR entry. Any sorted echo request will also cause printout and/or punch of the derived PBAR.

8. For GROUP = “MSCBML0”, the cross-sectional properties, shear flexibility factors, and stress recovery points (C, D, E, and F) are computed using the TYPE and DIMi as shown in   through  . The figures show the origin of the cross section, but the PBARL does not account for differences between the shear center and the neutral axis and the properties are computed relative to the neutral axis. This results in approximations for section types ‘I’, ‘CHAN’, ‘T’, ‘CHAN1’, ‘T1’, ‘CHAN2’, ‘T2’, ‘L’ and ‘BOX1’. The PBEAML provides a better representation of section properties in these cases and is recommended.

     The PBARL does not account for offsets between the neutral axis and the shear center. Therefore, the CHAN, CHAN1 and CHAN2 cross-sections may produce incorrect results. The PBEAML is recommended.

9. For DBOX section, the default value for DIM5 to DIM10 are based on the following rules:

a. DIM5, DIM6, DIM7 and DIM8 have a default value of DIM4 if not provided.

b. DIM9 and DIM10 have a default value of DIM6 if not provided.

```text
┌───────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ The above default value rules for DIM5 to DIM10 are not applicable to design optimization property │
│       │ value update.                                                                                      │
└───────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
10. The finite element formulation (FEF) utilized for arbitrary beam cross section is selected as the default method for computing sectional properties for all supported cross section types of PBARL when GROUP=MSCBML0. The original beam equations which are based on thin-walled assumptions can be accessed via Bulk Data entry ‘MDLPRM,TWBRBML,1’. Thus the shear stiffness factors K1 and K2 are calculated as in Remark   of the PBMSECT entry and the element will behave according to the Timoshenko beam theory by default. Thus the resulting CBAR will have non-infinite K1/K2 shear flexibility factors, and therefore will not behave as a Bernoulli-Euler.

11. For optimization, individual DIMx of PBARL can be selected as designed properties even with the finite element formulation.

![bulkp06540.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06540.jpg?_LANG=enus)

Figure 0-69 Definition of Cross-Section Geometry and Stress Recovery Points for GROUP = “MSCBML0”

![bulkp06542.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06542.jpg?_LANG=enus)

Figure 0-70 Definition of Cross-Section Geometry and Stress Recovery Points for GROUP = “MSCBML0" (continued)

![bulkp06544.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06544.jpg?_LANG=enus)

Figure 0-71 Definition of Cross-Section Geometry and Stress Recovery Points for GROUP = “MSCBML0" (continued)

![bulkp06546.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06546.jpg?_LANG=enus)

Figure 0-72 Definition of Cross-Section Geometry and Stress Recovery Points for GROUP = “MSCBML0" (continued)

