## [MAT1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MAT1.xhtml) - Isotropic Material Property Definition

Defines the material properties for linear isotropic materials.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT1    MID     E       G       NU      RHO     A       TREF    GE      +       
+       ST      SC      SS      MCSID                                           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT1    17      3.+7            0.33    4.28    6.5-6   5.37+2  0.23            
        20.+4   15.+4   12.+4   1003                                            
```

```text
┌────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                         │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID        │ Material identification number.  (Integer > 0)                                                  │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ E          │ Young’s modulus.  (Real > 0.0 or blank)                                                         │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ G          │ Shear modulus.  (Real > 0.0 or blank)                                                           │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NU         │ Poisson’s ratio. (-1.0 < Real < 0.5 or blank)                                                   │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO        │ Mass density.  See Remark 5. (Real)                                                             │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ A          │ Thermal expansion coefficient.  (Real)                                                          │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF       │ Reference temperature for the calculation of thermal loads, or a temperature-dependent thermal  │
│            │ expansion coefficient.  See Remarks 9. and 10. (Real; Default = 0.0 if A is specified.)         │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GE         │ Structural element damping coefficient.  See Remarks 8., 9., and 4. (Real)                      │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ST, SC, SS │ Stress limits for tension, compression, and shear are optionally supplied, used only to compute │
│            │ margins of safety in certain elements; and have no effect on the computational procedures.      │
│            │ (Real > 0.0 or blank). See Remark 13.                                                           │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MCSID      │ Material coordinate system identification number.  Used only for PARAM,CURV processing.  See    │
│            │ Parameters.  (Integer > 0 or blank)                                                             │
└────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MAT9, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD* entries.
2. The following rules apply when E, G, or NU are blank:
     - E and G may not both be blank.
     - If NU and E, or NU and G, are both blank, then both are set to 0.0.
     - If only one E, G, or NU is blank, then it will be computed from the equation:   ![bulkmno04082.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04082.jpg?_LANG=enus) .  If this is not desired, then the MAT2 entry is recommended.  If E, G, or NU are made temperature dependent by the MATT1 entry, then the equation is applied to the initial values only. Caution: Inconsistent E and G can result in NU >.5 which for three dimensional elasticity results in negative stress for positive strain. This can cause large max ratios.

3. If values are specified for all of the properties E, G, and NU, then it is recommended that the following relationship be satisfied:

     ![bulkmno04084.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04084.jpg?_LANG=enus)  

     If this relationship is not desired, then the MAT2 entry is recommended.

     It should also be noted that some of the properties are not applied in the stiffness formulation of certain elements as indicated in   Table 16  . Therefore, it is recommended that only the applicable properties be specified for a given element.

          See link for table.

4. MAT1 materials may be made temperature-dependent by use of the MATT1 entry.  In SOL 106, linear and nonlinear elastic material properties in the residual structure will be updated as prescribed under the TEMPERATURE Case Control command.
5. The mass density RHO will be used to compute mass for all structural elements automatically.
6. Weight density may be used in field 6 if the value 1/g is entered on the PARAM,WTMASS entry, where g is the acceleration of gravity (see  ).
7. MCSID must be nonzero if PARAM,CURV is specified to calculate stresses or strains at grid points on plate and shell elements only.
8. To obtain the damping coefficient GE, multiply the critical damping ratio C/C , by 2.0.
9. TREF and GE are ignored if the MAT1 entry is referenced by a PCOMP/PCOMPG entry.
10. TREF is used in two different ways (See Remarks   and   of TEMPERATURE Case Control entry for details.):
     - Except for SOL106 and SOL400 nonlinear analysis, TREF is used as the reference temperature for the calculation of thermal loads. TEMPERATURE(INITIAL) may be used for this purpose, in which case, TREF is ignored.
     - In SOL106 and SOL400 nonlinear analysis, TREF is used only for the calculation of a temperature-dependent thermal expansion coefficient. The reference temperature for the calculation of thermal loads is obtained from the TEMPERATURE(INITIAL) set selection.

![bulkmno04086.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04086.jpg?_LANG=enus)

Figure 0-55   Use of TREF in Calculation of Thermal Loads

![bulkmno04088.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04088.jpg?_LANG=enus)  

where  T   is requested by the TEMPERATURE(LOAD) command and  ![bulkmno04090.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04090.jpg?_LANG=enus)  is requested by the TEMPERATURE(INITIAL) command.

```text
┌────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Notes: │ ◾A is a secant quantity. ◾TREF is obtained from the same source as the other material      │
│        │ properties; e.g., ASTM, etc. ◾If A(T) constant, then  ◾If PARAM,W4 is not specified, GE is │
│        │ ignored in transient analysis.  See Parameters.                                              │
└────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

11. In nonlinear static analysis (SOL 106) the QUAD4 and TRIA3 thermal loads are computed using the secant (default) method. To use the more accurate integral method, specify ‘PARAM,EPSILONT,INTEGRAL’ in bulk data. See  .
12. Negative values for ST, SC, and SS lead to no margins of safety being computed.
13. ST, SC, and SS are not used in SOL 400 with advanced elements. Use MATF instead.
