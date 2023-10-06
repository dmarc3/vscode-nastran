## [MATVE ](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MATVE.xhtml) - Visco-Elastic Material Properties

Specifies visco-elastic material properties to be used for quasi-static or dynamic analysis in SOL 400.

#### Format for Model = Iso:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATVE   MID     Model   Alphas  Alpha1  G1      Td1     K1      Tv1     +
+       G2      Td2     G3      Td3     G4      Td4     G5      Td5     +
+       K2      Tv2     K3      Tv3     K4      Tv4     K5      Tv5     
```

#### Format for Model = Iso1:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATVE   MID     Model   Alphas  Alphal                                  +
+       G1      Td1     K1      Tv1                                     +
+       G2      Td2     K2      Tv2                                     +
+       G3      Td3     K3      Tv3                                     +
+       G4      Td4     K4      Tv4                                     +
+       G5      Td5     K5      Tv5                                     +
+       Gi      Tdi     Ki      Tvi                                     
```

#### Format for Model = Mooney, Ogden and Foam:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATVE   MID     Model   Alphas  Alphal  Wd1     Td1     Wv1     Tv1     +
+       Wd2     Td2     Wd3     Td3     Wd4     Td4     Wd5     Td5     +
+       Wv2     Tv2     Wv3     Tv3     Wv4     Tv4     Wv5     Tv5     
```

#### Format for Model = Mooney1, Ogden1 and Foam1:****

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATVE   MID     Model   Alphas  Alphal                                  +
+       Wd1     Td1     Wv1     Tv1                                     +
+       Wd2     Td2     Wv2     Tv2                                     +
+       Wd3     Td3     Wv3     Tv3                                     +
+       Wd4     Td4     Wv4     Tv4                                     +
+       Wd5     Td5     Wv5     Tv5                                     +
+       Wdi     Tdi     Wvi     Tvi                                     
```

#### Format for ORTHO:****

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATVE   MID     ORTHO                                                   +
+       Td1     Exx1    Eyy1    Ezz1    Vxy1    Vyz1    Vzx1            +
+       Gxy1    Gyz1    Gzx1                                            +
+       Td2     Exx2    Eyy2    Ezz2    Vxy2    Vyz2    Vzx2            +
+       Gxy2    Gyz2    Gzx2                                            +
+       Td3     Exx3    Eyy3    Ezz3    Vxy3    Vyz3    Vzx3            +
+       Gxy3    Gyz3    Gzx3                                            +
+       Td4     Exx4    Eyy4    Ezz4    Vxy4    Vyz4    Vzx4            +
+       Gxy4    Gyz4    Gzx4                                            +
+       Td5     Exx5    Eyy5    Ezz5    Vxy5    Vyz5    Vzx5            +
+       Gxy5    Gyz5    Gzx5                                            +
+       Tdi     Exxi    Eyyi    Ezzi    Vxyi    Vyzi    Vzxi            +
+       Gxyi    Gyzi    Gzxi                                            
```

#### Example****

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATVE   1       ISO                     3030    0.98                    
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATVE      1    ISO1
        3030    0.98
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Identification number of primary material (MAT1 or MAT3 or MAT8 or MATROT or MATHE) entry.       │
│           │ (Integer > 0). See Remark 2.                                                                     │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Model     │ Selects a visco-elastic model defining time-dependent deformation behavior (Character):          │
│           │ ISO1 for isotropic materials referenced by MAT1 (Default) (an alternate name is Linear).         │
│           │ ORTHO if referenced by MAT3, MAT8 and MATORT.                                                    │
│           │ MOONEY1 for Mooney-Rivlin model if referenced by MATHE.                                          │
│           │ OGDEN1 for Ogden model if referenced by MATHE.                                                   │
│           │ FOAM1 for foam model if referenced by MATHE (SOL 400 only).                                      │
│           │ See Remarks 2., 3., 4., 6. and 8.                                                                │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Alphas    │ Solid coefficient of thermal expansion (Real; Default = 0). See Remark 6.                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Alphal    │ Liquid coefficient of thermal expansion (Real; Default = 0). See Remark 6.                       │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gi        │ Shear modulus for ith term in Prony series (Real > 0.; Default = 0).                             │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ki        │ Bulk modulus for ith term in Prony series (Real > 0.; Default = 0).                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Wdi       │ Multiplier (scale factor) for ith term deviatoric behavior in Prony series (Real > 0.; Default = │
│           │ 0). for Hyperelastic Material.                                                                   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Wvi       │ Multiplier (scale factor) for ith term volumetric behavior in Prony series (Real > 0.; Default = │
│           │ 0.). See Remark 7.                                                                               │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Tdi       │ Defines time constants for deviatoric behavior in Prony series (Real > 0.; Default = 0). See     │
│           │ Remark 7.                                                                                        │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Tvi       │ Defines time constants for volumetric behavior in Prony series (Real > 0.; Default = 0). See     │
│           │ Remark 7.                                                                                        │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MAT9, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD* entries.
2. The time-dependent behavior in the viscoelastic material is modeled by a Prony series expression for both small and large strain problems. The stress relaxation behavior can be modeled by relaxation functions of the shear modulus and bulk modulus and total strain energy in terms of a series of exponential decay terms, which is known as the Prony series. This is equivalent to the generalized Maxwell model, which consists of many Maxwell models connected in parallel along with an elastic spring representing a long-term behavior. The constitutive behavior of viscoelasticity depends not only on the current state of stress and strain, but also on the entire history of the development of these states. Such a behavior is most readily expressed by hereditary or Duhamel integral. The Prony series is a discrete form of this hereditary integral.
3. ISO1 supports both volumetric and deviatoric viscoelastic behavior by allowing deviatoric terms (Gi and Tdi) and volumetric terms (Ki and Tvi) in the Prony series. The shear and bulk moduli for isotropic material (ISO1) can be expressed in a Prony series as

     ![bulkno05924.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05924.jpg?_LANG=enus)  

     ![bulkno05926.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05926.jpg?_LANG=enus)  

     where instantaneous values are given by:

     ![bulkno05928.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05928.jpg?_LANG=enus)  

     ![bulkno05930.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05930.jpg?_LANG=enus)  

     In terms of instantaneous values, the shear and the bulk modulus relaxation can also be written as.

     ![bulkno05932.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05932.jpg?_LANG=enus)  

     ![bulkno05934.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05934.jpg?_LANG=enus)  

     If a Prony series is selected, at least one set of modulus and time constant must be provided i.e., (G1, Td1) and /or (K1, Tv1).    

4. ORTHO supports only deviatoric viscoelastic behavior by allowing deviatoric terms (Gij and Tdi) in the Prony series. For orthotopic material behavior, the relaxation coefficients are applied to the shear modulus as

     where  ![bulkno05938.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05938.jpg?_LANG=enus)  is the shear modulus for n th  term is Prony series (Real > 0; Default = 0) for Orthotopic Material. (Here G ij  imply Gxy, Gyz and Gzx as mentioned in ORTHO table).

5. In case of a viscous hyperelastic material, total strain energy be expressed as a Prony series expansion in terms of energy functional

     ![bulkno05940.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05940.jpg?_LANG=enus)  

     Above equation can also be expressed as a function of the elastic strain energy density for instantaneous deformations  ![bulkno05942.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05942.jpg?_LANG=enus) .

     ![bulkno05944.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05944.jpg?_LANG=enus)  

     where Wi are weighting factors  ![bulkno05946.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05946.jpg?_LANG=enus)  and Ti are time constants. Two Prony series can be formed based on deviatoric  ![bulkno05948.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05948.jpg?_LANG=enus) and volumetric strain energy  ![bulkno05950.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno05950.jpg?_LANG=enus) . If a viscous hyperelastic Prony series is selected, at least one pair of weighting factor and time constant must be provided: (Wd1, Td1) and /or (Wv1, Tv1). OGDEN support both deviatoric (Wdi, Tdi) and volumetric strain energy (Wvi, Tvi) Prony series. However, Mooney supports only deviatoric strain energy (Wdi, Tdi) Prony series. Foam is defined in total strain energy density function and specified through Wi and Ti.

6. If ALPHAS or ALPHAL is specified, the thermal expansion coefficient specified in MAT1, MATT1, MATHE, MATTHE, MATORT or MATTORT will be ignored. Use of ALPHAS or ALPHAL requires the MATTVE Narayanaswami model.
7. If the weighting factor is left blank, the relaxation function corresponding to that coefficient is omitted.
8. In SOL 400, MATVE is used only supported for elements with property extensions. This implies that for such elements, PBAR / PBARL, PBEAM / PBEAML, PCOMP / PCOMPG, PROD, PSHEAR, PSHELL, PLPLANE and PSOLID should be associated with PBARN1, PBEMN1, PSHLN1, PRODN1, PSHEARN, PSHLN1, PSHLN2 and PSLDN1 respectively. Note that, prior to MSC Nastran 2010, if the property extensions were missing, then the MATVE data was not considered in the element’s formulation. If the property extensions are missing, they are automatically added with appropriate settings by the program unless the user has set NLMOPTS,SPROPMAP,-1 in the bulk data.
9. FOAM (FOAM1) no difference between deviatoric and volumetric multipliers and relaxation time. Program will use deviatoric input to apply on entire strain energy function.

#### Notes:

1. The Prony series uses values of Gi or Ki for Isotropic and Orthotropic materials. It uses weighting (Wi) functions for Mooney, Ogden and Foam materials.
2. The instantaneous material properties are specified on primary material entries (i.e., for MAT1 or MAT3 or MAT8 or MATORT or MATHE)
3. In the MATVE entries, material properties with the Prony series parameters are specified.
4. MATVE with “ISO”, “MOONEY”, “OGDEN”, “FOAM” models are similar to the corresponding “ISO1”, “MOONEY1”, “OGDEN1”, “FOAM1” models with the only exception being that the former models are limited to 5 terms in the Prony series. With the latter models, there is no limit to the number of terms in the Prony series.
