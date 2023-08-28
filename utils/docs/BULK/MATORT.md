## [MATORT ](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATORT.xhtml) - 3D Orthotropic Material Properties

Specifies orthotropic material properties. Parameters for both isotropic and anisotropic yield conditions can also be specified along with elastic material properties. Can be specified for all 3-D and 2-D continuum elements and shells in SOL 400/700. Can also be specified with solid composite, solid shell composite and pyramid elements in all linear solution sequences between SOL 101 and SOL 112, and analysis only for SOL 200.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATORT  MID     E1      E2      E3      NU12    NU23    NU31    RHO     +       
+       G12     G23     G31     A1      A2      A3      TREF    GE      +       
+       IYLD    IHARD   SY              R11 or mR22 o...R33 o...N/A     +       
+       R12 o...R23 o...R31     N/A     N/A     N/A     N/A     N/A     +       
+       OPTION  FILE    X1      Y1      Z1      X2      Y2      Z2              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATORT  100     3.e6    2.8e7   1.5e5   0.25                                    
```

     See link for definitions.

#### Remarks:

1. All the material constants are specified in the orthotropic material coordinates in 1, 2, and 3 direction.  
2. In general,  ![bulkno05526.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05526.jpg?_LANG=enus)  is not the same as  ![bulkno05528.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05528.jpg?_LANG=enus) , but they are related by  ![bulkno05530.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05530.jpg?_LANG=enus) . Furthermore, material stability requires that

     ![bulkno05532.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05532.jpg?_LANG=enus)

     and ![bulkno05534.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05534.jpg?_LANG=enus) .  

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
