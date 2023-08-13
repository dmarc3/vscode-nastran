## [MATHE ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATHE.xhtml) - Hyperelastic Material Properties

Specifies hyperelastic (rubber-like) material properties for nonlinear (large strain and large rotation) analysis in SOL 400 only.

#### Format 1 (Default): Generalized Mooney-Rivlin Model (Model = Mooney). The first two lines are required, the others may be omitted depending on how many terms are desired.)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATHE   MID     Model           K       RHO     Texp    Tref    GE      +
+       C10     C01     D1      TAB1    TAB2    TAB3    TAB4    TABD    +
+       C20     C11     C02     D2      NA      ND                      +
+       C30     C21     C12     C03     D3                              +
+       C40     C31     C22     C13     C04     D4                      +
+       C50     C41     C32     C23     C14     C05     D5              
```

#### Format 2: (Model = Ogden or Foam)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATHE   MID     Model   NOT     K       RHO     Texp    Tref    GE      +
+       Mu1     Alpha1  Beta1                                           +
+       Mu2     Alpha2  Beta2   Mu3     Alpha3  Beta3                   +
+       Mu4     Alpha4  Beta4   Mu5     Alpha5  Beta5                   +
+       D1      D2      D3      D4      D5                              
```

Note that Foam does not support D1~D5.

#### Format 3: Arruda-Boyce model or Gent Model (Model = Aboyce or Gent)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATHE   MID     Model           K       RHO     Texp    Tref    GE      +
+       NKT     N/E     Im                                              +
+       D1      D2      D3      D4      D5                              
```

#### Format 4: User Strain Energy Function (Model = GHEMi) (SOL 400 only)

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATHE   MID     Model           K       RHO     Texp    Tref    GE
```

#### Example - Format 1:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATHE       2   Foam            3.30E+070.00035 4.00E-0675      0.02
        20000   1.5     1.15                                        
        15000                                                       
```

#### Example - Format 2:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATHE    1      Ogden   2       200000
        16      2       1.15          
        -4      -2                    
```

#### Example - Format 3:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATHE       2   Gent    3.30E+070.00035 4.00E-0675      0.02
        20000   1250                                        
```

#### Example - Format 4:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATHE   2       GHEM1   3.3e+07 0.00035 2.5e-06 70.5    0.015
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MID       │ Identification number of a MATHE entry.           │                                                   │
│           │ (Integer > 0; no Default)                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Model     │ Select hyperelastic material model from           │                                                   │
│           │ (Character; Default = Mooney):                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Mooney                                            │ for generalized Mooney-Rivlin hyperelastic model. │
│           │                                                   │ See Remark 1.                                     │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Ogden                                             │ for Ogden hyperelastic model. See Remark 2.       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Foam                                              │ for foam model. See Remark 3.                     │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Aboyce                                            │ for Arruda-Boyce strain energy model. See Remarks │
│           │                                                   │ 4. and 15.                                        │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ Gent                                              │ for Gent strain energy model. See Remarks 5. and  │
│           │                                                   │ 15.                                               │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ GHEM1                                             │ Invariant-base user subroutine (foam models only) │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ GHEM2                                             │ Principal-stretch based user subroutine (foam     │
│           │                                                   │ models only)                                      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ GHEM3                                             │ Invariant-based with volumetric and deviatoric    │
│           │                                                   │ split user subroutine (foam models only)          │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ GHEM4                                             │ Principal-stretch based with volumetric and       │
│           │                                                   │ deviatoric split user subroutine (foam models     │
│           │                                                   │ only)                                             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ GHEM5                                             │ Invariant-based with deviatoric part only (rubber │
│           │                                                   │ models only)                                      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ GHEM6                                             │ Principal-stretch based with deviatoric part only │
│           │                                                   │ (rubber models only)   where  (and ) are strain   │
│           │                                                   │ invariants (principal stretches), and  and  (and  │
│           │                                                   │ ) are their deviatoric parts, defined by  and ,   │
│           │                                                   │ (i = 1,2,3);  is the determinant of the           │
│           │                                                   │ deformation gradient. For GHEMi models, see       │
│           │                                                   │ Remarks 11., 12., and 13.                         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NOT       │ Number of terms to be used in Ogden and Foam      │                                                   │
│           │ model. (0 < Integer < 5; Default = 1)             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ K         │ Specifies a bulk modulus. See Remarks 7. and      │                                                   │
│           │ 14. (Real > 0 or -1.0; Default = automatically    │                                                   │
│           │ set for nearly incompressible condition. Enter    │                                                   │
│           │ -1.0 if nonlinear volumetric strain energy        │                                                   │
│           │ function defined by Di will be used).             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ RHO       │ Mass density in original configuration. (Real;    │                                                   │
│           │ Default = 0.0)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Texp      │ Coefficient of thermal expansion. See Remark 7.   │                                                   │
│           │ (Real; Default = 0.0)                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Tref      │ Reference temperature at which the thermal        │                                                   │
│           │ expansion coefficient is measured. Tref is used   │                                                   │
│           │ only if the thermal expansion coefficient is      │                                                   │
│           │ temperature-dependent. (Real; Default = 0.0)      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ GE        │ GE represents the structural damping coefficient. │                                                   │
│           │ See Remark 11. (Real; Default = 0.0).             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NA        │ Order of the distortional strain energy           │                                                   │
│           │ polynomial function. See Remark 6. (0 < Integer < │                                                   │
│           │ or =5; Default = 2)                               │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ ND        │ Order of the Volumetric strain energy polynomial  │                                                   │
│           │ function. See Remark 6. (0 < Integer < or =5;     │                                                   │
│           │ Default = 1)                                      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Cij       │ Material constants related to distortional        │                                                   │
│           │ deformation for generalized Mooney-Rivlin model.  │                                                   │
│           │ (Real; Default = 0.0)                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Di        │ Material constants related to volumetric          │                                                   │
│           │ deformation. (Real > 0.0) Needed only if K =      │                                                   │
│           │ -1.0. Not used for foam model. See Remark 7.      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TAB1      │ Table identification number of a TABLES1 entry    │                                                   │
│           │ that contains simple tension-compression data to  │                                                   │
│           │ be used in the estimation of the material         │                                                   │
│           │ constants Cij. The x-values in the TABLES1 entry  │                                                   │
│           │ must be stretch ratios  and y-values must be      │                                                   │
│           │ values of the engineering stress .   is the       │                                                   │
│           │ initial length and  is the initial cross-         │                                                   │
│           │ sectional area. See Remark 8. (Integer > 0 or     │                                                   │
│           │ blank)                                            │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TAB2      │ Table identification number of a TABLES1 entry    │                                                   │
│           │ that contains equibaxial tension data to be used  │                                                   │
│           │ in the estimation of the material constants Cij.  │                                                   │
│           │ The x-values in the TABLES1 entry must be stretch │                                                   │
│           │ ratios  and y-values must be values of the        │                                                   │
│           │ engineering stress  is the initial length and  is │                                                   │
│           │ the initial cross-sectional area. See Remark      │                                                   │
│           │ 8. (Integer > 0 or blank)                         │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TAB3      │ Table identification number of a TABLES1 entry    │                                                   │
│           │ that contains simple shear data to be used in the │                                                   │
│           │ estimation of the material constants Cij. The     │                                                   │
│           │ x-values in the TABLES1 entry must be values of   │                                                   │
│           │ the shear strain and y-values must be values of   │                                                   │
│           │ the engineering shear stress. (Integer > 0 or     │                                                   │
│           │ blank)                                            │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TAB4      │ Table identification number of a TABLES1 entry    │                                                   │
│           │ that contains pure shear data to be used in the   │                                                   │
│           │ estimation of the material constants Cij. The x   │                                                   │
│           │ and y values in the TABLES1 entry must be stretch │                                                   │
│           │ ratios  and the values of the nominal stress .    │                                                   │
│           │  and  are the initial length and cross-sectional  │                                                   │
│           │ area, respectively, in the l-direction. See       │                                                   │
│           │ Remark 8. (Integer > 0 or blank)                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TABD      │ Table identification number of a TABLES1 entry    │                                                   │
│           │ that contains pure volumetric compression data to │                                                   │
│           │ be used in the estimation of the material         │                                                   │
│           │ constant Di. The x-values in the TABLES1 entry    │                                                   │
│           │ must be values of the volume ration  where  is    │                                                   │
│           │ the stretch ratio in all three directions;        │                                                   │
│           │ y-values must be values of the pressure, assumed  │                                                   │
│           │ positive in compression. See Remark 8. (Integer > │                                                   │
│           │ 0 or blank)                                       │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Muk       │ Coefficients  of the strain energy function for   │                                                   │
│           │ Ogden or foam material. See Remarks 2. and 3.     │                                                   │
│           │ (Real; Default = 0)                               │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Alphak    │ Coefficients  of the strain energy function for   │                                                   │
│           │ Ogden or foam material. See Remarks 2. and 3.     │                                                   │
│           │ (Real; Default = 0)                               │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Betak     │ Coefficients  of the strain energy function for   │                                                   │
│           │ foam material. These fields should be left blank  │                                                   │
│           │ for Ogden mode. See Remarks 2. and 3. (Real;      │                                                   │
│           │ Default = 0)                                      │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NTK       │ Material constant for Arruda-Boyce strain energy  │                                                   │
│           │ model. (Real > 0; Default = 1)                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ N/E       │ Material constant representing the number (N) of  │                                                   │
│           │ statistical links of the chain for Arruda-Boyce   │                                                   │
│           │ model; or tensile modulus (E) for Gent strain     │                                                   │
│           │ energy model. (Real > 0; Default = 1)             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Im        │ Maximum first invariant for Gent strain energy    │                                                   │
│           │ model. (Real > 0; Default = 0)                    │                                                   │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The generalized Mooney-Rivlin strain energy function may be expressed as follows:

     ![bulkno05393.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05393.jpg?_LANG=enus)            

     with

     ![bulkno05395.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05395.jpg?_LANG=enus)  

     where  ![bulkno05397.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05397.jpg?_LANG=enus)  and  ![bulkno05399.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05399.jpg?_LANG=enus)  are bulk modulus and volume ratio, respectively.

     For small strains, the shear modulus G is related to the Mooney-Rivlin constants by

     ![bulkno05401.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05401.jpg?_LANG=enus)    

     The model reduces to a Mooney-Rivlin material with only two constants (C10 and C01), and to a Neo-Hookean material with one constant (C10). Instead of MATHE, the hyperelastic material can be specified using MATHP Bulk Data entry in SOLs 106 and 129.

2. For the Ogden material model, the strain energy function is

     ![bulkno05403.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05403.jpg?_LANG=enus)  

     where  ![bulkno05405.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05405.jpg?_LANG=enus)  and  ![bulkno05407.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05407.jpg?_LANG=enus)  are the moduli and exponent constants, while  ![bulkno05409.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05409.jpg?_LANG=enus)  is the deviatoric stretch ratio defined as:

     ![bulkno05411.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05411.jpg?_LANG=enus)  

     and  ![bulkno05413.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05413.jpg?_LANG=enus)  and  ![bulkno05415.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05415.jpg?_LANG=enus)  are the determinant of the deformation gradient and the bulk modulus, respectively. A two-term Ogden model is equivalent to a simple Mooney-Rivlin model with:

          See link for definitions.

3. For foam material model, the distortional strain energy function is the same as Ogden. The volumetric energy function of foam model is defined by a polynomial function with coefficients  ![bulkno05425.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05425.jpg?_LANG=enus)

4. For the Arruda-Boyce model, the strain energy function is

     ![bulkno05427.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05427.jpg?_LANG=enus)            

     with  ![bulkno05429.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05429.jpg?_LANG=enus)

     where  ![bulkno05431.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05431.jpg?_LANG=enus)  is a material constant and  ![bulkno05433.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05433.jpg?_LANG=enus)  is a material parameter representing the number of statistical links of the material chain.

     If the material test data are available from multiple experiments such as uniaxial and equi-biaxial tests, the Ogden model is more accurate in fitting experimental results. If only uniaxial tension data is available, the Arruda-Boyce model provides more accurate data fitting for multiple modes of deformation.

5. For the Gent model, the strain energy function is

     ![bulkno05435.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05435.jpg?_LANG=enus)            

     where  ![bulkno05437.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05437.jpg?_LANG=enus)  and  ![bulkno05439.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05439.jpg?_LANG=enus)  are tensile modulus and maximum first invariant, respectively.

6. The curve fitting is activated if any of the TAB1, TAB2, TAB3, TAB4 and/or TABD are specified. The NA and ND fields are used in case of the curve fitting for Mooney from the experimental data.

7. The thermal expansion coefficient is a secant value measured with respect to a temperature, Tref.

     The thermal strain is computed by  ![bulkno05441.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05441.jpg?_LANG=enus) ![inset_105443.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/inset_105443.jpg?_LANG=enus)            

     where  ![bulkno05445.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05445.jpg?_LANG=enus)  is an initial temperature. The secant coefficient of thermal expansion is related to the instantaneous coefficient of thermal expansion by

     ![bulkno05447.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05447.jpg?_LANG=enus)             .

8. All the material constants may be obtained from least squares fitting of experimental data. One or more of four experiments (TAB1 to TAB4) may be used to obtain constants for distortional properties. The bulk modulus K may be obtained from pure volumetric compression data (TABD). If all TAB1 through TAB4 fields are blank, the material constants must be specified by the user. Parameter estimation, specified through any of the TABLES1 entries, supersedes the manual input of the parameters. It is recommended that the GUI be used to determine the materials constants, so one can visualize the correlation between the numerical representation and the experimental data. It is recommended that the experimental data span the range of anticipated strains to reduce the chances of adverse numerical calculations.

9. All the alphanumeric fields are recognizable by the first four letters.
10. Enter NKT and N/E for Aboyce (leave Im blank). Enter N/E and Im for Gent (leave NKT blank).
11. The GHEMi models using the user subroutine are only available if the updated Lagrange formulation is used for the hyperelastic material. The user subroutine MD UELASTOMER defined with the GHEMi must be used along with the Bulk Data entry MATUDS.
12. The GHEMi are not available for plane stress, shell, membrane, and beam elements.
13. For the GHEM3 and GHEM4 models, the user subroutine is called twice, once with either a 3 or 4 to evaluate the deviatoric strain energy and once with a 7 to evaluate the volumetric strain energy.
14. The series representation of the volumetric strain energy is only available for the updated Lagrange formulation.
15. The Gent and Arruda-Boyce models are not available for plane stress, shell, membrane, and beam elements.
16. The Ogden, Foam, Arruda-Boyce and Gent models are not available in SOLs 106 and 129.
17. In SOL 400, MATHE is only supported for nonlinear elements with property extensions. This implies that for such elements, PBEAM / PBEAML, PCOMP / PCOMPG, PROD, PSHEAR, PSHELL, PLPLANE and PSOLID should be associated with PBEMN1, PSHLN1, PRODN1, PSHEARN, PSHLN1, PSHLN2 and PSLDN1 respectively.   Also, for incompressible rubber models, linear 2D triangular elements specified on PSHLN2 and 3D tetrahedral elements specified on PSLDN1 should be associated with an incompressible formulation (IPS for 2D plane strain, IAX for 2D axisymmetric and ISOL for 3D tetrahedral.   

     Note that only PSOLID with PSLDN1 should be used for 3D solid nonlinear elements and PLSOLID cannot be used for MATHE.   Note also that, prior to MD Nastran 2010, if the property extensions were missing, then the analysis would stop with an error. From MD Nastran 2010 onwards, if the property extensions are missing, they are automatically added with appropriate settings by the program unless the user has set NLMOPTS,SPROPMAP,-1 in the bulk data.

18. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD* entries.
