## [MATS1](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATS1.xhtml) - Material Stress Dependence

Specifies stress-dependent material properties for use in applications involving nonlinear materials. This entry is used if a MAT1 entry is specified with the same MID in a nonlinear solution sequence (SOLs 106, 129 and 400). For SOL 400 the MATEP option is the recommended approach for elastic-plastic materials.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATS1   MID     TID     TYPE    H       YF      HR      LIMIT1  LIMIT2          
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATS1   17      28      PLASTIC 0.0     1       1       2.+4                    
```
```text
┌───────────┬───────────────────────────────────────────────────┬────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                            │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ MID       │ Identification number of a MAT1 entry.            │                                            │
│           │  (Integer > 0)                                    │                                            │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ TID       │ Identification number of a TABLES1 or TABLEST     │                                            │
│           │ entry.  If H is given, then this field must be    │                                            │
│           │ blank.  See Remark 3. (Integer > 0 or blank)      │                                            │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ TYPE      │ Type of material nonlinearity.  See Remarks.      │                                            │
│           │  (Character: “NLELAST” for nonlinear elastic or   │                                            │
│           │ “PLASTIC” for elastoplastic.)                     │                                            │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ H         │ Work hardening slope (slope of stress versus      │                                            │
│           │ plastic strain) in units of stress.  For elastic- │                                            │
│           │ perfectly plastic cases, H = 0.0.  For more than  │                                            │
│           │ a single slope in the plastic range, the stress-  │                                            │
│           │ strain data must be supplied on a TABLES1 entry   │                                            │
│           │ referenced by TID, and this field must be blank.  │                                            │
│           │  See Remark 2. (Real)                             │                                            │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ YF        │ Yield function criterion, selected by one of the  │                                            │
│           │ following values (Integer):                       │                                            │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│           │ 1                                                 │ von Mises (Default)                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│           │ 2                                                 │ Tresca                                     │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│           │ 3                                                 │ Mohr-Coulomb                               │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│           │ 4                                                 │ Drucker-Prager                             │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ HR        │ Hardening Rule, selected by one of the following  │                                            │
│           │ values (Integer):                                 │                                            │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│           │ 1                                                 │ Isotropic (Default)                        │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│           │ 2                                                 │ Kinematic                                  │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│           │ 3                                                 │ Combined isotropic and kinematic hardening │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ LIMIT1    │ Initial yield point.  See Table 0-19.  (Real)     │                                            │
├───────────┼───────────────────────────────────────────────────┼────────────────────────────────────────────┤
│ LIMIT2    │ Internal friction angle, measured in degrees, for │                                            │
│           │ the Mohr-Coulomb and Drucker-Prager yield         │                                            │
│           │ criterion.  See Table 0-19.  (0.0 < Real < 45.0)  │                                            │
└───────────┴───────────────────────────────────────────────────┴────────────────────────────────────────────┘
```
```text
┌──────────────┬─────────────────────────────────────┬───────────────────────────────────────────┐
│ Yield        │ LIMIT1                              │ LIMIT2                                    │
│ Function     │                                     │                                           │
│ (YF)         │                                     │                                           │
├──────────────┼─────────────────────────────────────┼───────────────────────────────────────────┤
│ von Mises    │ Initial Yield Stress in Tension, Y1 │ Not used                                  │
│ (1) or       │                                     │                                           │
│ Tresca (2)   │                                     │                                           │
├──────────────┼─────────────────────────────────────┼───────────────────────────────────────────┤
│ Mohr-Coulomb │ 2*Cohesion, 2c (in units of stress) │ Angle of Internal Friction φ (in degrees) │
│ (3) or       │                                     │                                           │
│ Drucker-     │                                     │                                           │
│ Prager (4)   │                                     │                                           │
└──────────────┴─────────────────────────────────────┴───────────────────────────────────────────┘
```
#### Remarks:

1. If TYPE = “NLELAST”, then MID may refer to a MAT1 entry only.  Also, the stress-strain data given in the TABLES1 entry will be used to determine the stress for a given value of strain.  The values H, YF, HR, LIMIT1, and LIMIT2 will not be used in this case.

     Thermoelastic analysis with temperature-dependent material properties is available for linear and nonlinear elastic isotropic materials (TYPE = “NLELAST”) and linear elastic anisotropic materials.  Four options of constitutive relations exist.  The relations appear in   Table 17   along with the required Bulk Data entries.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
        MAT1 ...
        MAT1,...
        MAT1,...
        MAT1,...
```
     In   Table 17    ![bulkno05583.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05583.jpg?_LANG=enus)  and ![bulkno05585.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05585.jpg?_LANG=enus)   are the stress and strain vectors,  ![bulkno05587.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05587.jpg?_LANG=enus)  the elasticity matrix,  ![bulkno05589.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05589.jpg?_LANG=enus)   the effective elasticity modulus, and   E  the reference elasticity modulus.

2. If TYPE = “PLASTIC”, the elastic stress-strain matrix is computed from MAT1 entry, and then the isotopic plasticity theory is used to perform the plastic analysis. In this case, either the table identification TID or the work hardening slope H may be specified, but not both.  If the TID is omitted, the work hardening slope H must be specified unless the material is perfectly plastic.  The plasticity modulus ( H ) is related to the tangential modulus ( E ) by

     ![bulkno05591.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05591.jpg?_LANG=enus)  

     where  E  is the elastic modulus and  ![bulkno05593.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05593.jpg?_LANG=enus)  is the slope of the uniaxial stress-strain curve in the plastic region.  See   Figure 0-61  .

![bulkno05595.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05595.jpg?_LANG=enus)

Figure 0-61 Stress-Strain Curve Definition When H Is Specified in Field 5

3. If TID is given, TABLES1 entries (Xi, Yi) of stress-strain data  ![bulkno05597.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05597.jpg?_LANG=enus)  must conform to the following rules (see  ):

     • If TYPE = "PLASTIC", the stress-total strain curve (i.e., TYPE in TABLES1 must be 1) must be defined in the first quadrant. The first point must be at the origin (X1 = 0, Y1 = 0) and the second point (X2, Y2) must be at the initial yield point (Y1 or 2c) specified on the MATS1 entry. The slope of the line joining the origin to the yield stress must be equal to the value of E. Also, TID may not reference a TABLEST entry.

     The stress-total strain curve has 2 different definitions

     • For conventional element, small strain formulation in terms of engineering strain and stress is used. Therefore, engineering stress-strain curve should be used here.

     • For advanced nonlinear element, large strain formulation in terms of logarithmic strain and true stress is adopted. Then true stress-logarithmic strain curve should be used.

     Note that SOL 106 and SOL 129 supports conventional element only.  SOL 400 supports both of the conventional and advanced elements.

     For TYPE = "PLASTIC", it should be noted that for conventional elements, strains should be below .05 to small strain formulation. Within this strain range, difference between logarithmic strain and engineering strain may be negligible.  If the element strains exceed .05, then it is recommended to use the MATEP entry which will automatically switch to a large strain formulation in SOL 400

     • If TYPE = “NLELAST”, the full stress-strain curve (- ∞  <  x  <  ∞ ) may be defined in the first and the third quadrant to accommodate different uniaxial compression data.  If the curve is defined only in the first quadrant, then the curve must start at the origin (X1 = 0.0, Y = 0.0) and the compression properties will be assumed identical to tension properties.

![bulkno05599.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05599.jpg?_LANG=enus)

Figure 0-62 Stress-Strain Curve Definition When TID Is Specified in Field 3

4. In SOL 400, MATS1 is supported for 2 sets of elements:

a. Elements with no property extensions that are prescribed through PROD, PBEAML, PSHELL and PSOLID.  The original small-strain element formulations that are also available in SOL106 are used in these cases.

b. Large-strain elements that are supported through property extensions.  For such elements, PBAR / PBARL, PBEAM / PBEAML, PCOMP / PCOMPG, PROD, PSHEAR, PSHELL, PLPLANE and PSOLID should be associated with PBARN1, PBEMN1, PSHLN1, PRODN1, PSHEARN, PSHLN1, PSHLN2 and PSLDN1 respectively.   Also, for TYPE = PLASTIC, linear 2D triangular elements specified on PSHLN2 and 3D tetrahedral elements specified on PSLDN1 should be associated with an incompressible formulation (IPS for 2D plane strain, IAX for 2D axisymmetric and ISOL for 3D tetrahedral.   Note also that, prior to MD Nastran 2010, if the property extensions were missing, then for supported elements (i.e., PROD, PBEAML, PSHELL or PSOLID), the analysis would use the element formulations in (a), or ignore the MATS1 data for unsupported elements.  From MD Nastran 2010 onwards, if the property extensions are missing, then they are automatically added with appropriate settings by the program unless the element belongs to group (a) or the user has set NLMOPTS,SPROPMAP,-1 in the bulk data.

