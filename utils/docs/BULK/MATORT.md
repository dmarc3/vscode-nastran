## [MATORT ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATORT.xhtml) - 3D Orthotropic Material Properties

Specifies orthotropic material properties. Parameters for both isotropic and anisotropic yield conditions can also be specified along with elastic material properties. Can be specified for all 3-D and 2-D continuum elements and shells in SOL 400/700. Can also be specified with solid composite, solid shell composite and pyramid elements in all linear solution sequences between SOL 101 and SOL 112, and analysis only for SOL 200.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATORT  MID     E1      E2      E3      NU12    NU23    NU31    RHO             
        G12     G23     G31     A1      A2      A3      TREF    GE              
        IYLD    IHARD   SY              R11 or mR22 o...R33 o...N/A             
        R12 o...R23 o...R31     N/A     N/A     N/A     N/A     N/A             
        OPTION  FILE    X1      Y1      Z1      X2      Y2      Z2              
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATORT  100     3.e6    2.8e7   1.5e5   0.25                                    
```
MID  

Identification number of a MATORT entry. (Integer > 0; No Default)

E1

Modulus of elasticity in longitudinal or 1-direction. See Remark 1. (Real > 0)

E2

Modulus of elasticity in lateral direction or 2-direction. (Real > 0; no Default; must be entered)

E3

Modulus of elasticity in thickness direction or 3-direction. (Real > 0; no Default; must be entered)

NU12

Poisson’s ratio  for uniaxial loading in 1-direction. See Remark 2. (Real; no Default; must be entered)

NU23

Poisson’s ratio  for uniaxial loading in 2-direction. (Real; no Default; must be entered)

NU31

Poisson’s ratio  for uniaxial loading in 3-direction. (Real; Default = NU23)

RHO

Mass density. (Real; Default = 0.0)

G12

Shear modulus in plane 1-2. See Remark 3. (Real > 0; no Default; must be entered)

G23

Shear modulus in plane 2-3. (Real > 0.; no Default; must be entered)

G31

Shear modulus in plane 3-1. (Real > 0; no Default; must be entered)

Ai     

Coefficient of thermal expansion in i-direction (Real; Default = 0.0).   

TREF

Reference temperature at which the thermal expansion coefficient is measured. TREF is used only if the thermal expansion coefficient is temperature-dependent. (Real; Default = 0.0)

GE

Structural damping coefficient. (Real; Default = 0.0).

IYLD

Integer pertaining to one of the following yield criterion: (Integer)

-1 = Elastic
1 = von Mises (Default)
2 = Hill (1948) yield
3 = Barlat (1991) yield
4 = Viscoplasticity through user subroutine UVSCPL

IHARD

Integer pertaining to one of the following work hardening rules: (Integer)
1 = Isotropic (Default)
2 = Kinematic
3 = Combined Isotropic/Kinematic

SY

Equivalent (von Mises) tensile yield stress. (Real > 0 or blank; Default=1020)

Rij

Stress ratios of initial yield stresses in various material directions to the reference yield stress. (Real > 0.0 or blank; Default = 1.0 for R11, R22, R33, R12, R23 and R31). See Hill's yield function in MSC Nastran Nonlinear User’s Guide (SOL 400) for details.

m

Barlat exponent (Real > 0.0 or blank; Default = 2.0).

Ci

Barlat material coefficient (Real > 0.0 or blank; Default = 1.0 for C1, C2, C3 and C6). See Balart's yield function in MSC Nastran Nonlinear User’s Guide (SOL 400) for details.

OPTION

Material axes option used to determine how the local material axis system is defined. See Remark 7. (Character; default=ELEM)

VECT

Globally orthotropic with the material axes defined by two vectors V1 and V2, specified using the fields X1, Y1, Z1 and X2, Y2, Z2. The a-axis is defined by the first vector. The b- and c-axes are then defined as:

ELEM

Globally orthotropic material with the material axes defined by element topology. Grid point 1 defines the origin, grid point 5 lies on the c-axis, and grid point 2 lies in the ac-plane. The a, b, and c axes are defined as follows:

ELMAT

Orthotropic material properties and the material coordinate system is defined by the element. The material properties are read from a formatted file. The filename is specified in the FILE field adjacent to OPTION.

Format of material properties file:

   Record#

   EID, DENSITY, DUMMY, DUMMY, DUMMY,

   E1, E2, E3, G12, G23, G31,

   NU12, NU13, NU23, NU21, NU31, NU32

ELPROP

Globally orthotropic material with the material axes defined by element topology (see also ELEM). The elasticity matrix is available per element.

FILE

Material file name (OPTION=ELMAT only). See Remark 8. 

(Character; default=blank)

X1, Y1, Z1

Components of the vector V1 in the basic coordinate system. See Remark 8. (Real; default=0.0)

X2, Y2, Z2

Components of the vector V2 in the basic coordinate system. See Remark 8. (Real; default=0.0)

--------------------

#### Remarks:

1. All the material constants are specified in the orthotropic material coordinates in 1, 2, and 3 direction.  

2. In general,  ![bulkno05526.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05526.jpg?_LANG=enus)  is not the same as  ![bulkno05528.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05528.jpg?_LANG=enus) , but they are related by  ![bulkno05530.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05530.jpg?_LANG=enus) . Furthermore, material stability requires that

     ![bulkno05532.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05532.jpg?_LANG=enus)                 

     and               ![bulkno05534.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05534.jpg?_LANG=enus) .  

3. It may be difficult to find all nine orthotropic constants. In some practical problems, the material properties may be reduced to normal anisotropy in which the material is isotropic in a plane, e.g., in plane 1-2 and has different properties in the direction normal to the plane 1-2. In the plane of isotropy, the properties are reduced to

     ![bulkno05536.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05536.jpg?_LANG=enus)  

     with  ![bulkno05538.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05538.jpg?_LANG=enus)  and  ![bulkno05540.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05540.jpg?_LANG=enus) . 
 
 
 

     There are five independent material constants for normal anisotropy (e.g.,  ![bulkno05542.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05542.jpg?_LANG=enus) ).

     In case the material has a planar anisotropy, in which the material is orthotropic only in a plane, the elastic constants are reduced to seven, e.g.,  ![bulkno05544.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05544.jpg?_LANG=enus) .

4. Do not enter values for SY, Rij, m and Ci unless plasticity is to be taken into account.

5. For elastoplastic case, MATORT only support perfect plasticity.

6. MATEP option is the recommended approach for elastoplastic materials.

7. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD* entries.

8. OPTION, FILE, X1, Y1, Z1, X2, Y2 and Z2 fields are only supported by new SOL700.

9. New SOL700 based on Dytran does not support A1, A2, A3, TREF, GE, IYLD, IHARD, SY, Rij, m and Ci fields.

#### Notes:

1. The structural damping constant GE is specified as a numerical damping  ![bulkno05546.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05546.jpg?_LANG=enus) , i.e.,

     ![bulkno05548.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05548.jpg?_LANG=enus)  

     in which  ![bulkno05550.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05550.jpg?_LANG=enus)  is equivalent to GE.

2. This Bulk Data entry accommodates Marc’s input data under the model definition option ORTHOTROPIC.

