## [MATSMA](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATSMA.xhtml) - Material Properties for Shape Memory Alloys

For SOL 400 only.

#### Format:

1

2

3

4

5

6

7

8

9

10

MATSMA

MID

MODEL

 

L

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

--------------------

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATSMA  1       2       77.     0.05                                            
        50000.  0.33    0.00001 1.0E+20         520.    600.    8.66            
        50000.  0.33    0.00001 1.0e+20         300     200.    6.66            
        0.0     0.0     100.    1.0e+20                                         
        300.    -4.     2.      0.      0.      0.      3.0     1.0             
```
MID

Material ID.  (Integer > 0)

MODEL

Flag to indicate the model being used. (Integer > 0; see Remark 1.):
= 1 (Mechanical: Aruchhio’s model)
= 2 (Thermo-Mechanical: Asaro-Sayeedvafa model)

 

Reference temperature used to measure stresses. (Real > 0)

L

For the mechanical model, the parameter L represents maximum deformation, obtainable by detwinning of multiple-variant martensite. (Real > 0; for the thermo-mechanical model, see Remark 2.) (typically 0.06-0.104)

Austenite Properties (all Real):

 

Young’s modulus of elasticity (typically 60-83 GPa).

 

Poisson’s ratio (typically 0.33).

 

Coefficient of thermal expansion (typically .

 

Equivalent von Mises stress (not used in mechanical model) (typically 195-690 MPa).

 

Mass density.

 

Material parameter representing start of Austenite to Martensite transformation.
For thermo-mechanical model, the program calculates the Austenite start temperature in the stress-free configuration  related to  from relations shown in Table 0-20.

 

Material parameter representing finish of Austenite to Martensite transformation. For thermo-mechanical model, the program calculates the Austenite finish temperature in the stress-free configuration  related to  from relations shown in Table 0-20.

 

Slope of the stress-dependence of austenite start finish and start temperatures (typically 6-8 MPa).

Martensite Properties (all Real):

 

Young’s modulus of elasticity

 

Poisson’s ratio

 

Coefficient of thermal expansion

 

Equivalent von Mises stress (not used in mechanical model)

 

Density

 

Material parameter representing start of Martensite to Austenite transformation.
For thermo-mechanical model, the program calculates the Martensite start temperature in the stress-free configuration  related to  from relations shown in Table 0-20.

 

Material parameter representing finish of Martensite to Austenite transformation. For thermo-mechanical model, the program calculates the Martensite finish temperature in the stress-free configuration  related to  from relations shown in Table 0-20.

 

Slope of the stress-dependence of austenite start finish and start temperatures. (typically 5-6 MPa)

The following quantities are applicable to only thermo-mechanical model (all Real):

 

Equivalent volumetric transformation strain. (typically 0.0-0.003)

 

Initial martensite volume fraction. (0.0-1.0)

 

Twinning stress (see Remark 2.). (typically 100-150 MPa)

 

Stress at which the maximum value of  is reached if a cut-off value is needed (normalized with ).

 

Stress level used to nondimensionalizing the stress in the function. (2.0-10.0*)

 

g function coefficient (typically )

 

g function exponent (typically )

 

g function coefficient (typically )

 

g function exponent (typically )

 

g function coefficient (typically )

 

g function exponent (typically )

 

Maximum value of function g if a cut-off value is needed (typically ).

--------------------

#### Remarks:

1. The mechanical (Auricchio's) model can be obtained from the thermo-mechanical model by ignoring the last two rows in the input.

2. Twinning becomes active when the equivalent stress reaches twinning stress. For thermo-mechanical model, the “unstressed transformation temperatures” for Martensite and Austenite,  , , ,  are calculated from the reference temperature, the material parameters representing the start and finish of the Austenite and Martensite transformations, i.e.,  ,   ,   , and    as well as the coefficients,   ,    that provide the stress dependence of the transformation temperatures as shown in  .

The Relationship between Mechanical Model and Thermo-Mechanical Model

 

 

 

 

--------------------

![nofig8-152.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/nofig8-152.jpg?_LANG=enus)

Figure 0-63  

3. For the thermo-mechanical model, the equivalent deviatoric strain, (typically 0.05 - 0.085) is automatically calculated by the program as  ![bulkno05784.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05784.jpg?_LANG=enus)  (since it is assumed that the input to this model is an extension of the mechanical model and conversion is done wherever applicable as in  . However, in the case where the thermal-mechanical model input parameters are directly used then one must enter a value of  ![bulkno05786.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05786.jpg?_LANG=enus)  so that a correct value of eq is used in the calculations.

4. The Mechanical (Auricchio's) model is not available for 1-D or plane stress conditions. The thermo-mechanical model must be used.

5. In SOL 400, MATSMA is only supported for nonlinear elements with property extensions, PBARN1, PBEMN1, PRODN1, PSHEARN, PSHLN1, PSHLN2 and PSLDN1 respectively. Note that, prior to MSC Nastran 2010, if the property extensions were missing, then the analysis would stop with an error. From MSC Nastran 2010 onwards, if the property extensions are missing, they are automatically added with appropriate settings by the program unless the user has set NLMOPTS,SPROPMAP,-1 in the bulk data.

6. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD* entries.

7. In SOL 400; remark   implies that the Mechanical model may not be used with PBAR, PBARL, PBEAM, PBEAML, PROD, PSHEAR, PSHELL, PCOMP(G). It can only be used with PLPLANE/PSHLN2 (without BEH=PSTRS) and PSOLID/PSLDN1.

