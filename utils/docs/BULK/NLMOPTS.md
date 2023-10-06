## [NLMOPTS](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NLMOPTS.xhtml) - Nonlinear Multiple Options

Specifies nonlinear material options and composite options. The nonlinear material options are for advanced materials used in SOL400. The composite options (TSHEAR and INLAM, CPROJ) are applicable to all solution sequences in which Layered Solid Elements (PCOMPLS) are available, namely, SOL 400, SOL 200 (analysis only), and all linear solution sequences between SOL 101 and SOL 112.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLMOPTS “CREEP” valc1   valc2   valc3   valc4                           +       
+       “ASSM”  vala                                                    +       
+       “TSHEAR”vals                                                    +       
+       “LRGS...valle                                                   +       
+       “HEMI...VALUE   NPIXEL          CUTOFF  FRACTIONFACCNT  FACTOL  +       
+       “TEMPP” valtd                                                   +       
+       “TEMGO” vmaptg                                                  +       
+       “SPRO...PROPMAP PROPBEH DIRECT  THICKOP IPRINT                  +       
+       “SPCR...vramp                                                   +       
+       “DEAC...vald1   vald2                                           +       
+       “ENTH...valclu  valen1                                          +       
+       “MAPTOL”vmptol                                                  +       
+       "INLAM" vcoord  cproj                                                   
```

#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLMOPTS CREEP   0                                                       +       
+       HEMICUBE1       500             0       0.01                            
```

     See link for table.

#### Remarks:

1. The keyword entries may occur in any order or not at all. If a keyword entry is missing, its defaults are assumed.
2. The material and property related keywords associated with the entry (CREEP, ASSM, TSHEAR, LRGSTRN, TEMPP and ENTHALP) are only applicable to elements associated with PAXISYM, PBARN1, PBEMN1, PRODN1, PSHLN1, PSHLN2, PSLDN1, PLCOMP, PCOMPLS, and PCOHE entries. Other keywords SPCRMPT, HEMICUBE, DEACTEL, MAPTOL) are more generally applicable. Keyword SPCRMPT applies to all SPC temperature boundary conditions, HEMICUBE applies to radiation boundary conditions and DEACTEL applies to all elements on the job.
3. The setting of ASSUMED STRAIN in SOL 400 is automatic for the following three elements with some conditions.
     - 4 nodes full integration Plane Stress (PLPLANE + PSHLN2 with PSTRS -- BEH4=PSTRS, INT4=L);
     - 4 nodes full integration Plane Strain (PLPLANE + PSHLN2 with PSTRN -- BEH4=PLSTRN, INT4=L); and
     - 8 nodes full integration HEXA (PSOLID + PSLDN1 -- BEH8=SOLID, INT8=L,)

     The application conditions are summarized here.

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ OFF       │ Assumed strain always turned off.                                                           │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ ASSUMED   │ Assumed strain will be turned on manually for 3 element types (PSTRS, PSTRN, PSLDN1) under  │
│           │ the following cases:                                                                        │
│           │ a.Elastic / Elasto-Plastic materials using small strain formulation (i.e., PARAM,LGDISP,-1 /│
│           │ NLMOPTS,LRGSTRN,-1). This includes isotropic and non-isotropic materials.                   │
│           │ b.Elastic / Elasto-Plastic materials using large strain additive formulation (i.e.,         │
│           │ PARAM,LGDISP,1 / NLMOPTS,LRGSTRN,0 or 1). This includes isotropic and non-isotropic         │
│           │ materials.                                                                                  │
│           │ Assumed strain flag will be turned off for all materials using the Multiplicative           │
│           │ Formulation (NLMOPTS,LRGSTRN,2).                                                            │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ Default   │ Assumed Strain will be turned on automatically for 3 element types (PSTRS, PSTRN, PSLDN1)   │
│           │ under the following cases:                                                                  │
│           │ a.Isotropic Elastic materials using small strain formulation (i.e,. PARAM,LGDISP,-1 /       │
│           │ NLMOPTS,LRGSTRN,-1)                                                                         │
│           │ b.Isotropic Elastic materials using large strain additive formulation (i.e., PARAM,LGDISP,1 │
│           │ / NLMOPTS,LRGSTRN,0 or 1)                                                                   │
│           │ Note that this turns on Total Lagrange Formulation currently by default for the isotropic   │
│           │ elastic materials.                                                                          │
│           │ Assumed Strain will be turned off automatically for the following cases:                    │
│           │ a.Any material that uses Updated Lagrange in either Additive or Multiplicative Formulation  │
│           │ b.Any non-isotropic material                                                                │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```

4. TSHEAR allows a parabolic shear distribution for the BEH4=DCT, INT4=L or LRIH (shell) elements, and BEH8 or BEH20=SLCOMP, INTi=L, Q (Layered Solid) or ASTN (Layered Solid Shell) elements.
5. In  , plane ABCD is the layer plane of interest. Z  is normal to the layer plane (or is the thickness direction). X  is the projection of the X axis of the MCID coordinate system on the layer plane.  ![bulkno06074.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06074.jpg?_LANG=enus)  gives the Y . Angle  ![bulkno06076.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06076.jpg?_LANG=enus)  is measured counter-clockwise from X  axis about the Z  axis.

![NLMOPTS_linsol_projscheme.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/NLMOPTS_linsol_projscheme.png?_LANG=enus)

Figure 0-64   Projection Scheme

6. NLMOPTS,LRGS,valle can be used separately or in conjunction with the PARAM,LGDISP option. Two separate cases can be identified:
     - Only NLMOPTS,LRGS specified. In this case, valle = -1 and valle = 0 mean the same, i.e., no large strain flags are turned on for the applicable elements identified in remark 2. Valle = 1 flags the additive framework and valle = 2 flags the multiplicative framework.
     - Both NLMOPTS,LRGS and PARAM,LGDISP,N (N > -1) specified. In this case, valle = -1 supercedes the PARAM,LGDISP option and turns off all  large displacement / large strain flags for the applicable elements identified in remark 2.  Also, valle = 0 behaves the same way as valle = 1 (i.e., for the applicable elements, both options flag the additive framework).
7. Definition of the radiation exchange matrix as in the  MSC Nastran Thermal User’s Guide , Eq. 0-15.

     ![bulkno06078.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06078.jpg?_LANG=enus)  

     in which the reflection matrix is:

     ![bulkno06080.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06080.jpg?_LANG=enus)  

     Note that the reflection term is costly, since it involves the factorization of a dense matrix.

     For the SOL 400 Newton’s method, the previous exchange matrix multiplied by a function of the temperature is added to the stiffness. If the exchange matrix is dense, which is generally the case, the sparse stiffness matrix consequently also becomes dense, and the factorization of the stiffness matrix becomes much more expensive.

     The input options are as follows. All options with the exception of the “faccnt” option, are available in SOLs 153, 159, and 400. The “faccnt” option is only available in SOL 400:

     hemi, value, npixel, cutoff, fraction, faccnt, factol

     where

     ```text
     ┌──────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
     │ value    │ 1 to flag hemicube method. Default is 0. The following options are available only if value = 1.    │
     ├──────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
     │ npixel   │ Number of pixels per quarter section, where total number of pixels = . Default is 500.             │
     ├──────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
     │ cutoff   │ Factor below which viewfactors will be set to zero. This one is applied during the last viewfactor │
     │          │ calculation. It results in a less dense exchange matrix and therefore a faster calculation of the  │
     │          │ reflection term and of the stiffness matrix factorization. Default is 0.0.                         │
     ├──────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
     │ fraction │ Factor below which radiation exchange matrix terms are not added to the stiffness matrix. For each │
     │          │ equation in the radiation exchange matrix, the fraction is multiplied by the diagonal term, and    │
     │          │ all terms in the equation less than this value is not added to the stiffness matrix. This          │
     │          │ procedure does not affect the density of the radiation exchange matrix or the cost of calculating  │
     │          │ it, including the reflection term, but reduces the density of the stiffness matrix and the cost of │
     │          │ factorizing the stiffness matrix. Note that the full radiation exchange matrix still is used to    │
     │          │ calculate fluxes. Default is 0.01.                                                                 │
     ├──────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
     │ faccnt   │ Set to 1 to activate explicit treatment of reflection matrix. Default is 0. In this procedure, the │
     │          │ radiation exchange matrix is constructed to be:                                                    │
     └──────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
     ```

     Note that the expensive reflection term is absent. This reduced form of the radiation exchange matrix is added to the stiffness matrix. Since the reflection matrix never is calculated and factorized, the calculation of the radiation exchange matrix is significantly cheaper. Since this reduced radiation exchange matrix is less dense, the factorization of the stiffness matrix also is significantly faster.

     For the flux calculation, an iterative procedure is used based on iterating towards a solution simultaneously satisfying both Poljak equations in the  MSC Nastran Thermal User’s Guide , Eqs. 6-11 and 6-12, respectively.

     ![bulkno06086.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06086.jpg?_LANG=enus) 
 
     ![bulkno06088.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06088.jpg?_LANG=enus)  

     The value of “faccnt’ also can be set to the maximum allowable number of iterations to be used in this procedure. If the value is set to 1, the maximum allowable number is internally set to 100. This procedure currently is available only in SOL 400 and is not available for wavelength-dependent emissivities.

     The “cutoff” and “fraction” parameters can be specified concurrently with this option.

     ```text
     ┌────────┬───────────────────────────────────────────────────────────────────────────────────┐
     │ factol │ tolerance to be used on the previous iterative procedure on the Poljak equations. │
     └────────┴───────────────────────────────────────────────────────────────────────────────────┘
     ```

          See Link for remaining remarks