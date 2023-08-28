## [MATVP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATVP.xhtml) - Viscoplastic or Creep Material Properties - SOL400

Specifies viscoplastic or creep material properties to be used for quasi-static analysis.

#### Format: Power-Law Creep Model

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATVP   MID     A       IT3D    M       N       P       Q       IUSER           
```

#### Example 1: TABL3D used to specify computation of A for Power-Law Creep Model

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATVP   10      1.0     20      1.5     1.1     1.0     1.0                     
```

#### Example 2: Coefficient A provided with exponents for stress, strain, temperature, and time for Power-Law Creep Model

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATVP   10      .00375          1.5     1.1     1.0     1.0                     
```

#### Example 3: User subroutine crplaw.f is used for Power-Law Creep Model

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATVP   10                                                      1               
```

#### Format: Anand Solder Creep Model

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATVP   MID     ANAND   PREXF   ACTEN   MULST   STNRT   SATCO   STNSA   +       
+       HRCN    STNHR   DEFRS                                                   
```

#### Example 1: Anand Solder Creep Model

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATVP   2       ANAND   2.23+4  15583   7       0.143   72.73   0.00437         
        1787.02 3.73    15.09                                                   
```

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID         │ Identification number of MAT1, MAT2, MATORT or MAT9 entry. See Remark 1. (Integer > 0)             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Power-Law   │                                                                                                    │
│ Creep Model │                                                                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ A           │ Enter the coefficient A in for the equations of Remark 2. (this value could alternatively be built │
│             │ into the table referenced using IT3D in which case A should be set to 1.0. If A=0.0, user          │
│             │ subroutine(s) designated by the flag in field 9 may be used to define the creep law and fields 4-8 │
│             │ will be ignored if entered. (Real; no Default)                                                     │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IT3D        │ ID of a TABL3Di entry that defines the variation with respect to stress, strain, temperature       │
│             │ and/or time per the equations discussed in Remark 2. The exponents are provided in the next 4      │
│             │ fields. (Integer > 0; Default = 0)                                                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ M           │ Exponent m for stress in equation in Remark 2. (Real; Default = 0.0)                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ N           │ Exponent n for strain in equation in Remark 2. (Real; Default = 0.0)                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ P           │ Exponent p for temperature in equation in Remark 2. (Real; Default = 0.0)                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Q           │ Exponent q for time in equation in Remark 2. (Real; Default = 0.0)                                 │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ IUSER       │ IUSER=1 if user subroutine crplaw.f is desired. (Integer; Default = 0)                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Anand Solar │                                                                                                    │
│ Creep Model │                                                                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ANAND       │ A keyword specifying the Anand solder creep model. The Anand solder creep model consists of a      │
│             │ simple set of constitutive equations for large, isotropic, viscoplastic problems. If this key word │
│             │ is used, next 9 fields for parameters of Material properties must be filled with values. Please    │
│             │ note that Anand solder creep model is only for isotropic materials. See Remark 6., 7., and 8.      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PREXF       │ Pre-exponential factor, A(s-1).                                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ACTEN       │ Activiation Energy, Q (J/mol).                                                                     │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MULST       │ Multiplier of stress, ξ .                                                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STNRT       │ Strain rate sensitivity of stress, m.                                                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SATCO       │ Deformation resistance saturation coefficient,  (MPa).                                             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STNSA       │ Strain rate sensitivity of saturation, n.                                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HRCN        │ Hardening constant, h0 (MPa).                                                                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STNHR       │ Stain rate sensitivity of hardening, a.                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DEFRS       │ Initial value of deformation resistance, s0 (MPa).                                                 │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This MATVP entry is activated if a MAT1, MAT2, MATORT, or MAT9 entry with the same MID is specified in an implicit nonlinear analysis. This creep capability is available for isotropic, orthotropic, and anisotropic elasticity, which can be coupled with plasticity using MATEP entry. Coupling with plasticity is allowed only for selected plasticity models, which include von Mises, Hill’s anisotropy (creep stays isotropic), and Mohr-Coulomb models. However, viscoelasticity (MATVE) cannot be combined with viscoplasticity (MATVP).

     Note that ANAND solder creep model may be associated with isotropic material, i.e., MAT1, only.

2. The creep behavior of the material is expressed in terms of creep strain rate as a product of a number of terms (functions of effective stress, equivalent creep strain, temperature, and time) in exponential form, i.e.,

     ![bulkno05964.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05964.jpg?_LANG=enus)  

     Power-Law creep (exponential form) can be used with either explicit or implicit creep methods. The choice of explicit or implicit creep is made via the NLMOPTS option.

- Explicit creep can be combined with other plasticity options defined through the MATEP card. The supported plasticity models include Von Mises, Hill’s Anisotropy (creep remains isotropic) and Mohr-Coulomb models. The creep and plastic strains are treated separately with the algorithm handling the creep in an explicit manner and handling the plasticity in an implicit manner.

- Implicit power law creep can be combined with the Von Mises yield criterion defined through the MATEP card. Both the creep and plasticity are handled simultaneously through an implicit viscoplasticity algorithm and a combined inelastic strain is computed.

- The dependence of time (Q) is specified as function of total equivalent creep strain i.e.,  ![bulkno05966.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05966.jpg?_LANG=enus) .

Note that the creep strain rate is internally computed as:

![bulkno05968.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05968.jpg?_LANG=enus)  

The creep strain from the creep material is a permanent strain unlike the creep strain for materials using the CREEP Bulk Data entry. As such, this creep material may be classified as viscoplastic material. This creep capability is provided for the primary and the secondary creep behavior, because the tertiary creep involves material instability such as necking.

3. See associated Bulk Data entry, NLMOPTS
4. For NLSTEP adaptive stepping, use of TABSCTL to specify user criteria on creep strains and stresses is also recommended. MATVP is used only supported for elements with property extensions. This implies that for such elements, PBAR / PBARL, PBEAM / PBEAML, PCOMP / PCOMPG, PROD, PSHEAR, PSHELL, PLPLANE and PSOLID should be associated with PBARN1, PBEMN1, PSHLN1, PRODN1, PSHEARN, PSHLN1, PSHLN2 and PSLDN1 respectively. Note that, prior to MD Nastran 2010, if the property extensions were missing, then the MATVP data was not considered in the element's formulation. From MD Nastran 2010 onwards, if the property extensions are missing, they are automatically added with appropriate settings by the program unless the user has set NLMOPTS, SPROPMAP, -1 in the bulk data.
5. When used with PBAR, PBEAM, PBEAML, PCOMP, PCOMPG, PROD, PSHEAR, PSHELL or PLPLANE (with BEH=PSTRS) the explicit formulation must be used, set VALC3=0 on NLMOPTS.
6. Flow equation for Anand Solder model is given by:

     ![bulkno05970.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05970.jpg?_LANG=enus)  

     where A is the pre-exponential factor; Q is the activation energy; m is the strain rate sensitivity;  ξ  is the multiplier of stress, R is the gas constant (8.314 J/mol/K); T is the absolute temperature; s is deformation resistance with an initial value s 0 . The evolution of deformation resistance is given by

     ![bulkno05972.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05972.jpg?_LANG=enus)  

     where;

     ![bulkno05974.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05974.jpg?_LANG=enus)  

     and

     ![bulkno05976.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05976.jpg?_LANG=enus)  

     where h 0  is hardening constant; a is the strain rate sensitivity of hardening;  ![bulkno05978.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05978.jpg?_LANG=enus)  is the deformation resistance saturation coefficient, n is the strain rate sensitivity of saturation.

7. To activating creep analysis with ANAND creep model, the following parameters are mandatory:

- In Bulk Data Card NLMOPTS: keyword “CREEP” and “LRGSTRN” must be selected with value:

“LRGSTRN” with value 1 for updated Lagrange formulation, Hypo-elasticity and additive plasticity with mean normal value.

“CREEP” with valc3=1, Implicit Creep on; and valc4=0/1/2, for elastic tangent as default (Blank or 0), 1 for secant tangent, and 2 for Radial Return, respectively.

- In Bulk Data Card NLSTEP: CREEP in “GENERAL” is required for ANAND creep model.

- In Bulk Data Card MATVP: material parameters of ANAND creep model are defined in MATVP card with keyword “ANAND” in the 3 rd  field and following 9 fields.

8. NLSTRESS in Case Control will output the equivalent creep strain on grid point. To output the component of the creep strain, NLOUT in NLSTRESS Case Control command must be set and request Creep output in Bulk Data Card.

     In case control section:
               
     ```nastran
     NLSTRESS (NLOUT=num) = ALL
     ```

     In bulk data section:

     ```nastran
     NLOUT, num, TOTTEMP, CCRPSTRN
     ```
