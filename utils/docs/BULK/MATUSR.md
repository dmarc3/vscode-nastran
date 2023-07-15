## [MATUSR](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATUSR.xhtml) - Defines Generic Material Properties for Hypoelastic or User Material Model

Specifies user-defined, generic material properties for hypoelastic material models and user defined material models in SOL 400 only. This entry is used in conjunction with the MATUDS option to activate user subroutine md_hypela2 for planar, shell or solid elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATUSR  MID     IPREF   IKINEM  RHO     A1      A2      A3      TREF            
        GE      ST      SC      SS                                              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATUSR  20      1       2       1.0E-4  2.0E-6                                  
```
```text
┌───────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │
├───────────┼───────────────────────────────────────────────────┤
│ MID       │ Identification number. (Integer > 0; no Default)  │
│           │ Flag to indicate that user defined material is    │
│           │ given with respect to user defined coordinate     │
│           │ system. (Integer; Default = 0; see Remark 14.)    │
├───────────┼───────────────────────────────────────────────────┤
│ IPREF     │                                                   │
├───────────┼───────────────────────────────────────────────────┤
│           │ 0                                                 │
├───────────┼───────────────────────────────────────────────────┤
│           │ 1                                                 │
├───────────┼───────────────────────────────────────────────────┤
│ IKINEM    │ Flag to indicate which additional kinematic       │
│           │ quantity is passed into user subroutine.          │
│           │ Incremental and total strains are always passed   │
│           │ into user subroutine. (Integer; Default = 0 , see │
│           │ Remark 3.)                                        │
├───────────┼───────────────────────────────────────────────────┤
│           │ 0                                                 │
├───────────┼───────────────────────────────────────────────────┤
│           │ 1                                                 │
├───────────┼───────────────────────────────────────────────────┤
│           │ 2                                                 │
├───────────┼───────────────────────────────────────────────────┤
│           │ 3                                                 │
├───────────┼───────────────────────────────────────────────────┤
│           │ 13                                                │
├───────────┼───────────────────────────────────────────────────┤
│           │ 23                                                │
├───────────┼───────────────────────────────────────────────────┤
│ RHO       │ Mass density for structural analysis  (Real > 0;  │
│           │ no Default)                                       │
├───────────┼───────────────────────────────────────────────────┤
│ Ai        │ Coefficient of thermal expansion. (Real; no       │
│           │ Default)                                          │
├───────────┼───────────────────────────────────────────────────┤
│ TREF      │ Reference temperature for the calculation of      │
│           │ thermal loads, or a temperature-dependent thermal │
│           │ coefficient. See Remarks 6., 8. and 15. (Real;    │
│           │ Default = 0.0)                                    │
├───────────┼───────────────────────────────────────────────────┤
│ GE        │ Structural element damping coefficient. See       │
│           │ Remarks 7., 8., 9. and 15.                        │
├───────────┼───────────────────────────────────────────────────┤
│ ST,SC,SS  │ Stress limits for tension, compression and shear  │
│           │ are optionally supplied ( these are used only to  │
│           │ compute margins of safety in certain elements)    │
│           │ and have no effect on the computational           │
│           │ procedures. See Remark 15. (Real; Default = 0.0)  │
└───────────┴───────────────────────────────────────────────────┘
```
#### Remarks:

1. This option is used together with MATUDS to define a generic material model.

2. Only enter those fields necessary for the analysis being performed.

3. For SOL 400, IKINEM should be greater than 0 and user subroutine HYPELA2 is used.

4. The generic material  model is able to represent a nonlinear material behavior. For this constitutive theory, it is assumed that

     ![bulkno05916.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05916.jpg?_LANG=enus)  

     where  L  is a function of the mechanical strain and  g  is a function of the temperature.

     The stress and strains are true stresses and logarithmic strains, respectively, when used in conjunction with large strain requests.

     When used in conjunction with PARAM,LGDISP,1 (without large strain) the above equation is expressed as

     ![bulkno05918.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05918.jpg?_LANG=enus)  

     where  E  and  S  are the Green-Lagrange strain and second Piola-Kirchhoff stress, respectively.

5. For the MD_HYPELA2 user subroutine,  in order to provide an accurate solution,  a tangent stiffness should be evaluated at each  iteration. In addition, the total stress should be defined as its exact value at the end of the increment.  This allows the residual  load correction to work effectively.  In MD_HYPELA2, additional information is available regarding the kinematics of deformation. In particular, the deformation gradient (F), rotation tensor (R), and the eigenvalues ( ![bulkno05920.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05920.jpg?_LANG=enus) ) and eigenvectors (N) to form the stretch tensor (U) are also provided. This information is available only for the continuum elements namely: plane strain, plane stress, axisymmetric, axisymmetric with twist, and three-dimensional cases.

6. TREF is used as the reference temperature for the calculation of the thermal loads. TEMPERATURE (INITIAL) may be used for this purpose, in which case TREF should be blank

7. Note that the structural damping will change with time, to obtain the damping coefficient, multiply the critical damping ratio  ![bulkno05922.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05922.jpg?_LANG=enus) by 2.

8. TREF and GE are ignored if this entry is referenced by a PCOMP or a PCOMPG entry.

9. If PARAM,W4 is not specified, GE is ignored in a transient analysis. See  .

10. This material model should not be used with the PSHELL option or with PBARN1, PBEAMN1 or PCOMP(G) and smeared section integration.

11. For SOL 400 the user subroutines md_hypela2 or md_ubeam are used.

12. For SOL 400 this option automatically invokes the PSHLN1, PSHLN2, PSLDN1 element formulation

13. In a thermal-mechanically coupled simulation, MAT4 or MAT5 should be used to define the material behavior.

14. If A1 is given and A2, A 3 are not then isotropic thermal expansion and A1 = A2 = A3.

15. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MAT9, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD* entries.

