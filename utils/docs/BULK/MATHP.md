## [MATHP](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATHP.xhtml) - Hyperelastic Material Properties

Specifies material properties for use in fully nonlinear (i.e., large strain and large rotation) hyperelastic analysis of rubber-like materials (elastomers).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATHP   MID     A10     A01     D1      RHO     AV      TREF    GE              
                NA      ND                                                      
        A20     A11     A02     D2                                              
        A30     A21     A12     A03     D3                                      
        A40     A31     A22     A13     A04     D4                              
        A50     A41     A32     A23     A14     A05     D5                      
        TAB1    TAB2    TAB3    TAB4                            TABD            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATHP   2       80.     20                                                      
                1       1                                                       
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number of a MATHP entry. (Integer > 0; No Default)                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Aij       │ Material constants related to distortional deformation. (Real; Default = 0.0)                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Di        │ Material constants related to volumetric deformation. (Real > 0; Default for D1 is ; Default for   │
│           │ D2 through D5 is 0.0.)                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Mass density in original configuration. (Real; Default = 0.0)                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AV        │ Coefficient of volumetric thermal expansion. (Real; Default = 0.0)                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF      │ Reference temperature.  See MATBV, 583.  (Real; Default = 0.0)                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GE        │ Structural damping element coefficient. (Real; Default = 0.0)                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NA        │ Order of the distortional strain energy polynomial function. (0 < Integer < 5; Default = 1)        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ND        │ Order of the volumetric strain energy polynomial function. (0 < Integer < 5; Default = 1)          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TAB1      │ Table identification number of a TABLES1 entry that contains simple tension/compression data to be │
│           │ used in the estimation of the material constants Aij.  xi values in the TABLES1 entry must be      │
│           │ stretch ratios  and yi values must be values of the engineering stress . Stresses are negative for │
│           │ compression and positive for tension. (Integer > 0 or blank)                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TAB2      │ Table identification number of a TABLES1 entry that contains equibiaxial tension data to be used   │
│           │ in the estimation of the material constants Aij.  xi values in the TABLES1 entry must be stretch   │
│           │ ratios .  yi values must be values of the engineering stress .   is the current length, F is the   │
│           │ current force,  is the initial length and  is the cross-sectional area.  In the case of pressure   │
│           │ of a spherical membrane, the engineering stress is given by  where P  =  current value of the      │
│           │ pressure and  = initial radius and thickness.  (Integer > 0 or blank)                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TAB3      │ Table identification number of a TABLES1 entry that contains simple shear data to be used in the   │
│           │ estimation of the material constants Aij.  xi values in the TABLES1 entry must be values of the    │
│           │ shear tangent  and yi values must be values of the engineering shear stress .  (Integer > 0 or     │
│           │ blank)                                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TAB4      │ Table identification number of a TABLES1 entry that contains pure shear data to be used in the     │
│           │ estimation of the material constants Aij.  xi and yi values in the TABLES1 entry must be stretch   │
│           │ ratios  and values of the nominal stress .  is the current length, F is the current force,  and    │
│           │  are the initial length and cross-sectional area, respectively in the 1-direction.  (Integer > 0   │
│           │ or blank)                                                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TABD      │ Table identification number of a TABLES1 entry that contains pure volumetric compression data to   │
│           │ be used in the estimation of the material constants Di.  xi values in the TABLES1 entry must be    │
│           │ values of the volume ratio  where  is the stretch ratio in all three directions; yi values must be │
│           │ values of the pressure, assumed positive in compression.  (Integer > 0 or blank)                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The generalized Mooney-Rivlin strain energy function may be expressed as follows:

     ![bulkno05509.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05509.jpg?_LANG=enus)  

     where  ![bulkno05511.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05511.jpg?_LANG=enus)  and  ![bulkno05513.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05513.jpg?_LANG=enus)  are the first and second distortional strain invariants, respectively;  J  = det  F  is the determinant of the deformation gradient; For small strains, the bulk modulus K and the shear modulus G are related to the Mooney-Rivlin Material.

     ![bulkno05515.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05515.jpg?_LANG=enus)  at small strains, in which  K  is the bulk modulus and  G  is the shear modulus. The model reduces to a Mooney-Rivlin material if NA   =   1 and to a Neo-Hookean material if NA = 1 and A01 = 0.0.  See Remark  2.  For Neo-Hookean or Mooney-Rivlin materials no continuation entry is required.  T is the current temperature and T 0  is the initial temperature.

2. Conventional Mooney-Rivlin and Neo-Hookean materials are fully incompressible.  Full incompressibility is not presently available but may be simulated with a large enough value of D1. Note that a value of D1 lower than  ![bulkno05517.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05517.jpg?_LANG=enus)  is, however, not recommended.

3. The material constants Aij and Di are obtained from least squares fitting of experimental data.  One or more of four experiments (TAB1 to TAB4) may be used to obtain constants for distortional properties Aij.  Di may be obtained from pure volumetric compression data (TABD).  If all TAB1 through TAB4 are blank, Aij must be specified by the user.  Parameter estimation, specified through any of the TABLES1 entries, supercedes the manual input of the parameters.

4. IF ND=1 and a nonzero value of D1 is provided or obtained from experimental data in TABD, then the parameter estimation of the material constants Aij takes compressibility into account in the cases of simple tension/compression, equibiaxial tension, and general biaxial deformation.  Otherwise, full incompressibility is assumed in estimating the material constants.

5. See Chapters  ,   and   in the  MSC Nastran Reference Guide  for further details.

6. In SOL400, MATHP is supported for 2 sets of elements:

a. Incompressible conventional 2D (plane strain and axisymmetric) elements and 3D (continuum) elements without property extensions. They are prescribed through PLPLANE and PLSOLID, respectively. The original element formulations that are also available in SOL106 are used in these cases.

b. Incompressible elements that are supported through property extensions.  For such elements, PBAR / PBARL, PBEAM / PBEAML, PCOMP / PCOMPG, PROD, PSHEAR, PSHELL, PLPLANE and PSOLID should be associated with PBARN1, PBEMN1, PSHLN1, PRODN1, PSHEARN, PSHLN1, PSHLN2 and PSLDN1 respectively.
Also, for incompressible rubber models, 2D 3-node triangular elements and 3D 4-node tetrahedral elements should be associated with an incompressible formulation by specifying IPS for 2D plane strain and IAX for 2D axisymmetric elements in PSHLN2, as well ISOL for 3D tetrahedral element in PSLDN1.

7. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD* entries.

```text
┌───────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Note: │ 1.PLSOLID is only used with the elements in (a) and only PSOLID with PSLDN1 can be used for 3D │
│       │ solid nonlinear elements in (b). 2.Prior to MD Nastran 2010, if the property extensions were   │
│       │ missing, the analysis would stop with an error. From MD Nastran 2010 onwards, if the property  │
│       │ extensions are missing, they are automatically added with appropriate settings by the program  │
│       │ unless the user has set NLMOPTS,SPROPMAP,-1 in the bulk data.                                  │
└───────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```


