## [PBUSH](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBUSH.xhtml) - Generalized Spring-and-Damper Property

Defines the nominal property values for a generalized spring-and-damper structural element.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBUSH   PID     “K”     K1      K2      K3      K4      K5      K6      +       
+               “B”     B1      B2      B3      B4      B5      B6      +       
+               “GE”    GE1     GE2     GE3     GE4     GE5     GE6     +       
+               “RCV”   SA      ST      EA      ET                      +       
+               “M”     M                                               +       
+               “T”     ALPHA   TREF    COINL                                   
```

#### Example 1:

Stiffness and structural damping are specified.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBUSH   35      K       4.35    2.4                             3.1     +       
+               GE      .06                                             +       
+               RCV     7.3     3.3                                             
```

#### Example 2:

Damping force per unit velocity are specified.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBUSH   35      B       2.3                                                     
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “K”       │ Flag indicating that the next 1 to 6 fields are stiffness values in the element coordinate system. │
│           │ (Character)                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ki        │ Nominal stiffness values in directions 1 through 6. See Remarks 2. and 3. (Real; Default = 0.0)    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “B”       │ Flag indicating that the next 1 to 6 fields are force-per-velocity damping. (Character)            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Bi        │ Nominal damping coefficients in direction 1 through 6 in units of force per unit velocity. See     │
│           │ Remarks 2., 3., and 9. (Real; Default = 0.0)                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “GE”      │ Flag indicating that the next fields, 1 through 6 are structural damping constants. See Remark 7.  │
│           │ (Character)                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GEi       │ Nominal structural damping constant in directions 1 through 6. See Remarks 2. and 3. and 9. (Real; │
│           │ GE1 default = 0.0, GE2-6, defaults described in Remark 9.)                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “RCV”     │ Flag indicating that the next 1 to 4 fields are stress or strain coefficients. See Remarks 4. and  │
│           │ 5.(Character).                                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SA        │ Stress recovery coefficient in the translational component numbers 1 through 3. (Real; Default =   │
│           │ 1.0)                                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ST        │ Stress recovery coefficient in the rotational component numbers 4 through 6. (Real; Default = 1.0) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EA        │ Strain recovery coefficient in the translational component numbers 1 through 3. (Real; Default =   │
│           │ 1.0)                                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ET        │ Strain recovery coefficient in the rotational component numbers 4 through 6. (Real; Default = 1.0) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ “M”       │ Flag indicating that the following entries are mass properties for the CBUSH element. If inertia   │
│           │ properties ( Iij )are desired CONM2 should be used.                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ M         │ Lumped mass of the CBUSH. (Real³0.0; Default=0.0)                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ "T"       │ Flag indicating that the following entries are thermal properties for the CBUSH element. See       │
│           │ Remark 12.. (Character)                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA     │ Thermal expansion coefficient for the CBUSH. (Real; Default=0.0)                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF      │ Reference temperature for the calculation of thermal loads. (Real; Default=0.0, See Remark 12.)    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COINL     │ Length of a CBUSH with coincident grids. (Real; Default=0.0, COINL ≥ 0.0)                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Ki, Bi, or GEi may be made frequency dependent for both direct and modal frequency response by use of the PBUSHT entry.
2. The nominal values are used for all analysis types except frequency response and nonlinear analysis. For modal frequency response, the normal modes are computed using the nominal Ki values. The frequency-dependent values are used at every excitation frequency.
3. If PARAM,W4 is not specified, GEi is ignored in transient analysis.
4. The element stresses are computed by multiplying the stress coefficients with the recovered element forces.  ![bulkp06780.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06780.jpg?_LANG=enus)  or  ![bulkp06782.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06782.jpg?_LANG=enus)
5. The element strains are computed by multiplying the strain coefficients with the recovered element displacements.  ![bulkp06784.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06784.jpg?_LANG=enus)  or  ![bulkp06786.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06786.jpg?_LANG=enus)
6. The “K”, “B”, “GE”, “RCV”, or “M” entries may be specified in any order.
7. To obtain the damping coefficient GE, multiply the critical damping ratio  ![bulkp06788.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06788.jpg?_LANG=enus)  by 2.0.
8. Applicable fields refer to directions in the element’s coordinate system.
9. For upward compatibility, if ONLY GE1 is specified on a PBUSH entry and GEi, i = 2 – 6 are all blank on the PBUSH entry, then the single structural damping GE1 is applied to all defined Ki for the PBUSH entry. In this case, GEi, i = 2 - 6, blank is not equivalent to 0.0 but a special flag.

     For any PBUSH entry that has any GEi, i = 2 – 6 numerically specified including a 0.0, the fields GEi are all treated separately and any GEi, i =2 - 6 field with no entry specified is defaulted to 0.0. In this case, for any GEi, i = 2 – 6, blank is equivalent to 0.0 and the results are radically different from the no GEi, i = 2- 6 specified as described above.

     Thus for the entry:

     ```nastran
     $---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
     PBUSH   3303000 K       653.    4000.   460.    10.+3   10.+3   10.+3   +        
     +               GE      .05                                                     
     ```

     The GE=.05 will be replicated to fields 5 through 9.

     While for the entry: 

     ```nastran
     $---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
     PBUSH   3303000 K       653.    4000.   460.    10.+3   10.+3   10.+3   +       
     +               GE      .05     0.0                                             
     ```

     The element x-direction will have a GE=.05 while the other 5 directions will have an associated GE=0.0

     The entry:

     ```nastran
     $---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
     PBUSH   3303000 K       653.    4000.   460.    10.+3   10.+3   10.+3   +        
     +               GE      .05             .02                                     
     ```

     is equivalent to the full entry:

     ```nastran
     $---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
     PBUSH   3303000 K       653.    4000.   460.    10.+3   10.+3   10.+3   +        
     +               GE      .05     .0      .02     .0      .0      .0              
     ```

     IFPSTAR introduced an incompatibility with the above rules in Nastran versions 2014 to 2017. For Nastran version 2018 IFPSTAR, the above original rules have been restored. However, the previous incompatible IFPSTAR results can be recovered with bulk data entry MDLPRM, GEV1417, 1 or NASTRAN, SYSTEM(754)=1 in which case the last example becomes equivalent to the full entry: 

     ```nastran
     $---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
     PBUSH   3303000 K       653.    4000.   460.    10.+3   10.+3   10.+3   +        
     +               GE      .05     .05     .02     .05     .05     .05             
     ```

10. PBUSH is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PBUSH property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PBUSH entries.
11. The CBUSH is a self-equilibrating element which means that for a CBUSH of finite length, its translational stiffness terms couple with rotational stiffness for rotational degrees of freedom. However, this coupling is dependent on the orientation of the CBUSH element. Thus there may be times when no explicit rotational stiffness is specified along a direction for which translational stiffness was specified that there is also no coupled rotational stiffness for that direction.

     In modal analysis, a CBUSH of finite length having rotational degrees of freedom with no rotational stiffness (coupled or explicit) and no associated mass on the grids may cause massless mechanisms. A massless mechanism means the natural frequency for this rotational mode approaches the limit of zero rotational stiffness divided by zero mass, which is an undefined quantity. If the elements lie along a global coordinate axis, the mass term is identically zero, which leads to very large negative or positive eigenvalues and is usually beyond any reasonable search region. If the elements are skewed from the global axes, the eigenvalues may be computed at any value (including negative) because of the indeterminacy caused by numerical truncation.

12. The thermal expansion for the CBUSH will be calculated if the user supplies the thermal expansion coefficient ALPHA and TEMPERATURE(LOAD) is requested. See TEMPERTURE Case Control command for thermal loading rules. For a CBUSH with coincident grids, or a single grid, if COINL is provided, the thermal expansion is always just along the element x-axis.

    ![PBUSH_r_15.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/PBUSH_r_15.png?_LANG=enus)

13. The mass properties are assumed located at the point defined by S (or S1, S2, S3 if OCID> -1) on the CBUSH entry. They are assumed to be in the element coordinate system. Define  α =S for the case OCID= -1 (default). See CBUSH entry. For the case OCID> -1, define r , r  to be the vector from grid GA to (S1,S2,S3) and from grid GB to (S1,S2,S3) respectively, then

    ![bulkp06790.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06790.jpg?_LANG=enus)  
    
    ![bulkp06792.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06792.jpg?_LANG=enus)  
    
    ![bulkp06794.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06794.jpg?_LANG=enus)  
    
    Then the diagonal contribution to GA for the mass matrix in the element coordinate system is:
    
    M11A= M22A=M33A= (1-  α )*M
    
    The diagonal contribution to GB for the mass matrix in the element coordinate system is:
    
    M11B= M22B=M33B=(  α )*M
