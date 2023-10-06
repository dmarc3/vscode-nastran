## [PBEAM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBEAM.xhtml) - Beam Property

Defines the properties of a beam element (CBEAM entry). This element may be used to model tapered beams.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBEAM   PID     MID     A(A)    I1(A)   I2(A)   I12(A)  J(A)    NSM(A)  +       
+       C1 (A)  C2 (A)  D1 (A)  D2 (A)  E1 (A)  E2 (A)  F1 (A)  F2 (A)          
```

The next two continuations are repeated for each intermediate station as described in Remark  6.  and SO and X/XB must be specified.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
+       SO      X/XB    A       I1      I2      I12     J       NSM     +
+       C1      C2      D1      D2      E1      E2      F1      F2      +
```

The last two continuations are:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
+       K1      K2      S1      S2      NSI(A)  NSI(B)  CW(A)   CW(B)   +
+       M1(A)   M2(A)   M1(B)   M2(B)   N1(A)   N2(A)   N1(B)   N2(B)   +
```

#### Example:

Tapered beam with A=2.9 at end A and A=5.3 at end B.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBEAM   39      6       2.9     3.5     5.97                            +        
+                       2.0     -4.0                                    +        
+       YES     1.0     5.3     56.2    78.6                            +        
+                       2.5     -5.0                                    +        
+                       1.1             2.1             0.21            +        
+                                       0.5             0.0                     
```

```text
┌──────────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer    │ Meaning                                           │ Default Values                                    │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ PID          │ Property identification number. (Integer > 0)     │ Required                                          │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MID          │ Material identification number. See Remarks       │ Required                                          │
│              │ 1. and 3. (Integer > 0)                           │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ A(A)         │ Area of the beam cross section at end A.          │ Required                                          │
│              │ (Real > 0.0)                                      │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ I1(A)        │ Area moment of inertia at end A for bending in    │ Required                                          │
│              │ plane 1 about the neutral axis. See Remark 10.    │                                                   │
│              │ (Real > 0.0)                                      │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ I2(A)        │ Area moment of inertia at end A for bending in    │ Required                                          │
│              │ plane 2 about the neutral axis. See Remark 10.    │                                                   │
│              │ (Real > 0.0)                                      │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ I12(A)       │ Area product of inertia at end A. See Remark      │ 0.0                                               │
│              │ 10. (Real, but )                                  │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ J(A)         │ Torsional stiffness parameter at end A. See       │ 0.0                                               │
│              │ Remark 10. (Real > 0.0 but > 0.0 if warping is    │                                                   │
│              │ present)                                          │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NSM(A)       │ Nonstructural mass per unit length at end A.      │ 0.0                                               │
│              │ (Real)                                            │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Ci(A), Di(A) │ The y and z locations (i = 1 corresponds to y and │ y = z = 0.0                                       │
│ Ei(A), Fi(A) │ i = 2 corresponds to z) in element coordinates    │                                                   │
│              │ relative to the shear center (see the diagram     │                                                   │
│              │ following the remarks) at end A for stress data   │                                                   │
│              │ recovery. (Real)                                  │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ SO           │ Stress output request option. See Remark          │ Required*                                         │
│              │ 9. (Character)                                    │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│              │ “YES” Stresses recovered at points Ci, Di, Ei,    │                                                   │
│              │ and Fi on the next continuation. “YESA” Stresses  │                                                   │
│              │ recovered at points with the same y and z         │                                                   │
│              │ location as end A. “NO” No stresses or forces are │                                                   │
│              │ recovered.                                        │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ X/XB         │ Distance from end A in the element coordinate     │ Required* See Remark 6.                           │
│              │ system divided by the length of the element See   │                                                   │
│              │ Figure 0-75 in Remark 10. (Real, 0.0 < x/xb       │                                                   │
│              │ £ 1.0)                                            │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ A, I1, I2,   │ Area, moments of inertia, torsional stiffness     │ See Remark 7.                                     │
│ I12, J, NSM  │ parameter, and nonstructural mass for the cross   │                                                   │
│              │ section located at x. (Real; J > 0.0 if warping   │                                                   │
│              │ is present.)                                      │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Ci, Di, Ei,  │ The y and z locations (i = 1 corresponds to y and │                                                   │
│ Fi           │ i = 2 corresponds to z) in element coordinates    │                                                   │
│              │ relative to the shear center (see Figure 0-75 in  │                                                   │
│              │ Remark 10.) for the cross section located at      │                                                   │
│              │ X/XB. The values are fiber locations for stress   │                                                   │
│              │ data recovery. (Real).                            │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ K1, K2       │ Shear stiffness factor K in K*A*G for plane 1 and │ 1.0,  1.0                                         │
│              │ plane 2. See Remark 12. (Real)                    │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ S1, S2       │ Shear relief coefficient due to taper for plane 1 │ 0.0,  0.0                                         │
│              │ and plane 2.                                      │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NSI(A),      │ Nonstructural mass moment of inertia per unit     │ 0.0, same as end A                                │
│ NSI(B)       │ length about nonstructural mass center of gravity │                                                   │
│              │ at end A and end B. See Figure 0-75. (Real)       │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ CW(A), CW(B) │ Warping coefficient for end A and end B. See      │ 0.0, same as end A                                │
│              │ Remark 11. (Real)                                 │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ M1(A),       │ (y,z) coordinates of center of gravity of         │ 0.0 (no offset from shear center), same values as │
│ M2(A),       │ nonstructural mass for end A and end B. See       │ end A                                             │
│ M1(B), M2(B) │ Figure 0-75. (Real)                               │                                                   │
├──────────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ N1(A),       │ (y,z) coordinates of neutral axis for end A and   │ 0.0 (no offset from shear center), same values as │
│ N2(A),       │ end B. See Figure 0-75. (Real)                    │ end A                                             │
│ N1(B), N2(B) │                                                   │                                                   │
└──────────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. For structural analysis, MID must reference a MAT1 material entry. The beam may be described by any valid stress-strain law. A plastic hinge is not used for SOL 700; instead, a standard nonlinear analysis is performed
2. For material nonlinear analysis, MID may also reference a MATS1 entry, but the material properties must be defined as elastic-perfectly plastic; for example, H = 0.0 on the MATS1 entry. Also, only one-eighth of the length at each end of the element abides by material nonlinear law; i.e., the element is modeled as a plastic hinge. Any other type of material property specification may yield inaccurate results.
3. For heat transfer analysis, MID must reference a MAT4 or MAT5 material entry.
4. If no stress data at end A is to be recovered and a continuation with the SO field is specified, then the first continuation entry, which contains the fields C1(A) through F2(A), may be omitted.
5. If SO is “YESA” or “NO”, the third continuation entry, which contains the fields C1 through F2, must be omitted. If SO is “YES”, the continuation for Ci, Di,   Ei, and Fi must be the next entry. The blank fields are defaulted to 0.0 on these continuations.
6. The rules for the continuations entries are:
     - The second and third continuation entries, which contain fields SO through F2, may be repeated nine more times for intermediate X/XB values for linear beam elements. The order of these continuation pairs is independent of the X/XB value; however, one value of X/XB must be 1.0, corresponding to end B. The intermediate stress output requests will be ignored in the nonlinear solution sequences (SOLs 106 and 129).
     - The value of X/XB must be unique among the stations of a PBEAM. Duplication of X/XB is not permitted.
     - The fourth and fifth continuation entries, which contain fields K1 through N2(B), are optional and may be omitted if the default values are appropriate.
7. If any fields 4 through 9 are blank on the continuation with the value of X/XB = 1.0, then the values for A, I1, I2, I12, J and NSM are set to the values given for end A. For the continuations that have intermediate values of X/XB between 0.0   and 1.0 and use the default option (any of the fields 4 through 9 are blank), a linear interpolation between the values at ends A and B is performed to obtain the missing section properties.
8. Blank fields for K1, K2 are defaulted to 1.0. If a value of 0.0 is used for K1 and K2, the transverse shear flexibilities are set to 0.0 and field G on the MAT1 entry selected by MID must be nonzero.
9. If end B forces are desired and station data are input, use “YES” or “YESA” in the SO field of the record with X/XB=1. If station data are not input you will get end B forces if forces are requested.
10.  describes the PBEAM element coordinate system.

    ![bulkp06632.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06632.jpg?_LANG=enus)
    
    Figure 0-75 PBEAM Element Coordinate System

11. The warping coefficient CW is represented in the following differential equation for the torsion of a beam about the axis of the shear centers:

    ![bulkp06634.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06634.jpg?_LANG=enus)  

    where:

    ```text
    ┌───────┬───┬──────────────────────────────────────────┐
    │ G     │ = │ shear modulus                            │
    ├───────┼───┼──────────────────────────────────────────┤
    │ J     │ = │ torsional stiffness                      │
    ├───────┼───┼──────────────────────────────────────────┤
    │ E     │ = │ Young’s modulus                          │
    ├───────┼───┼──────────────────────────────────────────┤
    │ theta │ = │ angle of rotation at any cross-section   │
    ├───────┼───┼──────────────────────────────────────────┤
    │ m     │ = │ applied torsional moment per unit length │
    └───────┴───┴──────────────────────────────────────────┘
    ```
    
    ```text
    ┌───────┬────────────────────────────┐
    │ Note: │ CW has units of (length)6. │
    └───────┴────────────────────────────┘
    ```

12. The shear stiffness factors  ![bulkp06638.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06638.jpg?_LANG=enus)  and ![bulkp06640.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06640.jpg?_LANG=enus)  adjust the effective transverse shear cross-section area according to the Timoshenko beam theory. Their default values of 1.0 approximate the effects of shear deformation. To neglect shear deformation (i.e., to obtain the Bernoulli-Euler beam theory), the values of  ![bulkp06642.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06642.jpg?_LANG=enus)  and  ![bulkp06644.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06644.jpg?_LANG=enus)  should be set to 0.0.
13. In nonlinear analysis the location of the 8 plastic rods is the same on the PBEAM entry as it is on the SYMOPT field on the PBCOMP entry when SYMOPT = 0. Please see the   for more information on the SYMOPT field.
14. PBEAM is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PBEAM property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PBEAM, PBEAML, PBCOMP, PBMSECT, PBEAM3 entries.
