## [NLMOPTS](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NLMOPTS.xhtml) - Nonlinear Multiple Options

Specifies nonlinear material options and composite options. The nonlinear material options are for advanced materials used in SOL400. The composite options (TSHEAR and INLAM, CPROJ) are applicable to all solution sequences in which Layered Solid Elements (PCOMPLS) are available, namely, SOL 400, SOL 200 (analysis only), and all linear solution sequences between SOL 101 and SOL 112.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLMOPTS “CREEP” valc1   valc2   valc3   valc4                                   
        “ASSM”  vala                                                            
        “TSHEAR”vals                                                            
        “LRGS...valle                                                           
        “HEMI...VALUE   NPIXEL          CUTOFF  FRACTIONFACCNT  FACTOL          
        “TEMPP” valtd                                                           
        “TEMGO” vmaptg                                                          
        “SPRO...PROPMAP PROPBEH DIRECT  THICKOP IPRINT                          
        “SPCR...vramp                                                           
        “DEAC...vald1   vald2                                                   
        “ENTH...valclu  valen1                                                  
        “MAPTOL”vmptol                                                          
        "INLAM" vcoord  cproj                                                   
```
#### Examples:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLMOPTS CREEP   0                                                               
        HEMICUBE1       500             0       0.01                            
```
```text
┌──────────────┬───────────────────────────────────────────────────┐
│ Describer    │ Meaning                                           │
├──────────────┼───────────────────────────────────────────────────┤
│ “CREEP”      │ Keyword that indicates that creep is possible     │
│              │ during one or more steps in the job.  It also     │
│              │ indicates the formulation for creep analysis.  It │
│              │ should be noted that this keyword is only valid   │
│              │ for elements with extended property extensions    │
│              │ (PSLDN1, PSHLN1, etc.). (Character Default        │
│              │ CREEP). Creep data should be entered using MATVP, │
│              │ not the CREEP bulk data entry. There are 2 kinds  │
│              │ of creep models (a) Explicit Creep - ValC1 and    │
│              │ ValC2 are used for this.                          │
├──────────────┼───────────────────────────────────────────────────┤
│ valc1        │ 0 : Maxwell Model Creep (default)                 │
├──────────────┼───────────────────────────────────────────────────┤
│ 1 : Explicit │                                                   │
│ Viscoplastic │                                                   │
│ Creep (only  │                                                   │
│ supported    │                                                   │
│ via user     │                                                   │
│ subroutine   │                                                   │
│ CRPLAW)      │                                                   │
├──────────────┼───────────────────────────────────────────────────┤
│ valc2        │ (Blank or 0) : (Default)                          │
├──────────────┼───────────────────────────────────────────────────┤
│ 1:           │                                                   │
│ (Reserved)   │                                                   │
├──────────────┼───────────────────────────────────────────────────┤
│ (b) Implicit │                                                   │
│ Creep -      │                                                   │
│ ValC3 and    │                                                   │
│ ValC4 are    │                                                   │
│ used for     │                                                   │
│ this.        │                                                   │
├──────────────┼───────────────────────────────────────────────────┤
│ valc3        │ 0 : Implicit Creep off                            │
├──────────────┼───────────────────────────────────────────────────┤
│ 1 : Implicit │                                                   │
│ Creep on     │                                                   │
├──────────────┼───────────────────────────────────────────────────┤
│ valc4        │ (Blank or 0) : elastic tangent (Default)          │
├──────────────┼───────────────────────────────────────────────────┤
│ 1: secant    │                                                   │
│ tangent      │                                                   │
├──────────────┼───────────────────────────────────────────────────┤
│ 2: radial    │                                                   │
│ return       │                                                   │
├──────────────┼───────────────────────────────────────────────────┤
│ Note that:   │                                                   │
│ (1) ValC3 =  │                                                   │
│ 0 means      │                                                   │
│ Explicit     │                                                   │
│ Creep (see   │                                                   │
│ ValC1).      │                                                   │
│ ValC3 = 1    │                                                   │
│ means        │                                                   │
│ Implicit     │                                                   │
│ Creep. (2)   │                                                   │
│ ValC4 is     │                                                   │
│ only used in │                                                   │
│ conjunction  │                                                   │
│ with         │                                                   │
│ Valc3=1. The │                                                   │
│ recommended  │                                                   │
│ value for    │                                                   │
│ ValC4 is 1   │                                                   │
│ (secant      │                                                   │
│ tangent).    │                                                   │
│ The CREEP    │                                                   │
│ option on    │                                                   │
│ NLMOPTS is   │                                                   │
│ generally    │                                                   │
│ used in      │                                                   │
│ conjunction  │                                                   │
│ with the     │                                                   │
│ following    │                                                   │
│ bulk data    │                                                   │
│ entries -    │                                                   │
│ the user can │                                                   │
│ refer to     │                                                   │
│ each of the  │                                                   │
│ bulk data    │                                                   │
│ entries      │                                                   │
│ identified   │                                                   │
│ below for    │                                                   │
│ more         │                                                   │
│ information. │                                                   │
├──────────────┼───────────────────────────────────────────────────┤
│              │ NLSTEP                                            │
├──────────────┼───────────────────────────────────────────────────┤
│              │ MATVP                                             │
├──────────────┼───────────────────────────────────────────────────┤
│              │ MATEP                                             │
├──────────────┼───────────────────────────────────────────────────┤
│ “ASSM”       │ Keyword indicating that the item following        │
│              │ applies to assumed strain. See Remark             │
│              │ 3. (Character; Default = See Remark 3.)           │
├──────────────┼───────────────────────────────────────────────────┤
│ vala         │ ASSUMED                                           │
├──────────────┼───────────────────────────────────────────────────┤
│              │ OFF                                               │
├──────────────┼───────────────────────────────────────────────────┤
│ “TSHEAR”     │ Keyword indicating that the item following        │
│              │ applies to a parabolic shear distribution through │
│              │ the shell thickness (or ply thickness). See       │
│              │ Remark 4.                                         │
├──────────────┼───────────────────────────────────────────────────┤
│ vals         │ TSHEAR for parabolic distribution. (Character;    │
│              │ Default = blank)                                  │
├──────────────┼───────────────────────────────────────────────────┤
│ “LRGSTRN”    │ Keyword indicating that the item following        │
│              │ applies to a formulation for large strain.        │
│              │ (Default; Integer = 0)                            │
├──────────────┼───────────────────────────────────────────────────┤
│              │ -1                                                │
├──────────────┼───────────────────────────────────────────────────┤
│ valle        │ 0                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 1                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 2                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│ “HEMICUBE”   │ Keyword to select the view factor calculation     │
│              │ method. See Remarks 2. and 7.                     │
├──────────────┼───────────────────────────────────────────────────┤
│              │ Field 3                                           │
├──────────────┼───────────────────────────────────────────────────┤
│              │ Field 4                                           │
├──────────────┼───────────────────────────────────────────────────┤
│              │ Field 6                                           │
├──────────────┼───────────────────────────────────────────────────┤
│              │ Field 7                                           │
├──────────────┼───────────────────────────────────────────────────┤
│              │ Field 8                                           │
├──────────────┼───────────────────────────────────────────────────┤
│              │ Field 9                                           │
├──────────────┼───────────────────────────────────────────────────┤
│ “TEMPP”      │ Keyword indicating temperature distribution       │
│              │ across the thickness of advanced heat shell       │
│              │ elements. Internal invisible scalar points will   │
│              │ be created to store these extra variables. LINE   │
│              │ and QUAD options require shell elements to have   │
│              │ full 3-D thermal material data. When the          │
│              │ temperature results of these internal points are  │
│              │ applied to calculating thermal loading effect in  │
│              │ a separate mechanical analysis, this keyword must │
│              │ also be specified in the structural model (See    │
│              │ Remarks 12. ,13. and 14.).                        │
├──────────────┼───────────────────────────────────────────────────┤
│ valtd        │ CONS                                              │
├──────────────┼───────────────────────────────────────────────────┤
│              │ LINE                                              │
├──────────────┼───────────────────────────────────────────────────┤
│              │ QUAD                                              │
├──────────────┼───────────────────────────────────────────────────┤
│ “TEMGO”      │ Keyword indicating user request identified in     │
│              │ .f06 file, the mapping of user supplied and       │
│              │ internally generated grids for the linear and     │
│              │ quadratic thermal shell elements. See Remark 8.   │
├──────────────┼───────────────────────────────────────────────────┤
│ vmaptg       │ NO                                                │
├──────────────┼───────────────────────────────────────────────────┤
│              │ YES                                               │
├──────────────┼───────────────────────────────────────────────────┤
│ “SPROPMAP”   │ Keyword controlling automated inclusion of        │
│              │ nonlinear property options for SOL 400. See       │
│              │ Remark 9.                                         │
├──────────────┼───────────────────────────────────────────────────┤
│ PROPMAP      │ (Integer≥-1 and ≤ 3; Default 0)                   │
├──────────────┼───────────────────────────────────────────────────┤
│              │ -1                                                │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 0                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 1                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 2                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 3                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ Note: The nonlinear property extension entries    │
│              │ refer to: PBARN1, PBEMN1, PRODN1, PSHEARN,        │
│              │ PSHLN1, PSHLN2 and PSLDN1 entries. To ensure that │
│              │ the automatic mapping is unique for an element    │
│              │ ID, whenever advanced elements are detected /     │
│              │ specified by the user, ELTPRT will be             │
│              │ automatically called.                             │
├──────────────┼───────────────────────────────────────────────────┤
│ PROPBEH      │ Property behavior flag. Valid values are 1D, 3D,  │
│              │ PLST, PSTR, AXI. (Default = None for 1D, 3D. PLST │
│              │ for 2D; Character)                                │
├──────────────┼───────────────────────────────────────────────────┤
│ DIRECT       │ Layer direction flag. Valid values; 1, 2, 3.      │
│              │ (Integer > 0; Default 1)                          │
├──────────────┼───────────────────────────────────────────────────┤
│ THICKOP      │ For 2D solids: out of plane thickness. (Real >    │
│              │ 0.0; Default 1.0)                                 │
├──────────────┼───────────────────────────────────────────────────┤
│ IPRINT       │ Print flag for generated property flags.          │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 0                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 1                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 2                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 3                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│ “SPCRMPT”    │ Keyword indicating heat transfer SPC is to be     │
│              │ applied instantaneously or by linear step.        │
│              │ (Character Default SPCRMPT)                       │
├──────────────┼───────────────────────────────────────────────────┤
│ vramp        │ 0                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 1                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│ “DEACTEL”    │ Keyword controlling default behavior and output   │
│              │ diagnostics for element deactivation              │
├──────────────┼───────────────────────────────────────────────────┤
│ vald1        │ Select default deactivation rules for each        │
│              │ physics pass in the analysis. See Remark 10.      │
├──────────────┼───────────────────────────────────────────────────┤
│              │ -1                                                │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 0                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 1                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 2                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│ vald2        │ Select diagnostic output behavior for active and  │
│              │ deactivated elements.                             │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 0                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 1                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 2                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 3                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│ “ENTHALP”    │ Keyword controlling the scheme used to form the   │
│              │ capacitance matrix and the enthalpy vector for    │
│              │ elements with nonlinear property extensions in    │
│              │ transient heat transfer. See Remark 10.           │
├──────────────┼───────────────────────────────────────────────────┤
│ valclu       │ Select option to form copacitance matrix for      │
│              │ elements with nonlinear property extensions.      │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 0                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 1                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 2                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 3                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│ valen1       │ Select option to form enthalpy vector for         │
│              │ elements with nonlinear property extensions       │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 0                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 1                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│              │ 2                                                 │
├──────────────┼───────────────────────────────────────────────────┤
│ “MAPTOL”     │ Keyword controlling the tolerance used to check   │
│              │ if a structural node lies inside a thermal        │
│              │ element.                                          │
├──────────────┼───────────────────────────────────────────────────┤
│ vmptol       │ Value of MAPTOL. (Real > 0.0; Default = 0.2)      │
├──────────────┼───────────────────────────────────────────────────┤
│ INLAM        │ (Character; Default Blank)                        │
├──────────────┼───────────────────────────────────────────────────┤
│ vcoord       │ Selects coordinate system for interlaminar stress │
│              │ output.                                           │
├──────────────┼───────────────────────────────────────────────────┤
│              │ Blank                                             │
├──────────────┼───────────────────────────────────────────────────┤
│              │ BOTT                                              │
├──────────────┼───────────────────────────────────────────────────┤
│              │ TOP                                               │
├──────────────┼───────────────────────────────────────────────────┤
│ cproj        │ Activates projection system for projecting X-axis │
│              │ of CORDM onto layer plane. See remark 5.          │
├──────────────┼───────────────────────────────────────────────────┤
│              │ OFF                                               │
├──────────────┼───────────────────────────────────────────────────┤
│              │ ON                                                │
└──────────────┴───────────────────────────────────────────────────┘
```
#### Remarks:

1. The keyword entries may occur in any order or not at all. If a keyword entry is missing, its defaults are assumed.

2. The material and property related keywords associated with the entry (CREEP, ASSM, TSHEAR, LRGSTRN, TEMPP and ENTHALP) are only applicable to elements associated with PAXISYM, PBARN1, PBEMN1, PRODN1, PSHLN1, PSHLN2, PSLDN1, PLCOMP, PCOMPLS, and PCOHE entries. Other keywords SPCRMPT, HEMICUBE, DEACTEL, MAPTOL) are more generally applicable. Keyword SPCRMPT applies to all SPC temperature boundary conditions, HEMICUBE applies to radiation boundary conditions and DEACTEL applies to all elements on the job.

3. The setting of ASSUMED STRAIN in SOL 400 is automatic for the following three elements with some conditions.

a. 4 nodes full integration Plane Stress (PLPLANE + PSHLN2 with PSTRS -- BEH4=PSTRS, INT4=L);

b. 4 nodes full integration Plane Strain (PLPLANE + PSHLN2 with PSTRN -- BEH4=PLSTRN, INT4=L); and

c. 8 nodes full integration HEXA (PSOLID + PSLDN1 -- BEH8=SOLID, INT8=L,)

     The application conditions are summarized here.

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
OFF     Assum...
ASSUMED Assumed strain will be turned on manually for 3 element types (PSTRS, PSTRN, PSLDN1) under the following cases:
        a.Elastic / Elasto-Plastic materials using small strain formulation (i.e., PARAM,LGDISP,-1 / NLMOPTS,LRGSTRN,-1). This includes isotropic and non-isotropic materials.
        b.Elastic / Elasto-Plastic materials using large strain additive formulation (i.e., PARAM,LGDISP,1 / NLMOPTS,LRGSTRN,0 or 1). This includes isotropic and non-isotropic materials.
        Assumed strain flag will be turned off for all materials using the Multiplicative Formulation (NLMOPTS,LRGSTRN,2).
Default Assumed Strain will be turned on automatically for 3 element types (PSTRS, PSTRN, PSLDN1) under the following cases:
        a.Isotropic Elastic materials using small strain formulation (i.e,. PARAM,LGDISP,-1 / NLMOPTS,LRGSTRN,-1)
        b.Isotropic Elastic materials using large strain additive formulation (i.e., PARAM,LGDISP,1 / NLMOPTS,LRGSTRN,0 or 1)
        Note that this turns on Total Lagrange Formulation currently by default for the isotropic elastic materials.
        Assumed Strain will be turned off automatically for the following cases:
        a.Any material that uses Updated Lagrange in either Additive or Multiplicative Formulation
        b.Any non-isotropic material
```
4. TSHEAR allows a parabolic shear distribution for the BEH4=DCT, INT4=L or LRIH (shell) elements, and BEH8 or BEH20=SLCOMP, INTi=L, Q (Layered Solid) or ASTN (Layered Solid Shell) elements.

5. In  , plane ABCD is the layer plane of interest. Z  is normal to the layer plane (or is the thickness direction). X  is the projection of the X axis of the MCID coordinate system on the layer plane.  ![bulkno06074.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06074.jpg?_LANG=enus)  gives the Y . Angle  ![bulkno06076.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06076.jpg?_LANG=enus)  is measured counter-clockwise from X  axis about the Z  axis.

![NLMOPTS_linsol_projscheme.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/NLMOPTS_linsol_projscheme.png?_LANG=enus)

Figure 0-64   Projection Scheme

6. NLMOPTS,LRGS,valle can be used separately or in conjunction with the PARAM,LGDISP option. Two separate cases can be identified:

a. Only NLMOPTS,LRGS specified. In this case, valle = -1 and valle = 0 mean the same, i.e., no large strain flags are turned on for the applicable elements identified in remark 2. Valle = 1 flags the additive framework and valle = 2 flags the multiplicative framework.

b. Both NLMOPTS,LRGS and PARAM,LGDISP,N (N > -1) specified. In this case, valle = -1 supercedes the PARAM,LGDISP option and turns off all  large displacement / large strain flags for the applicable elements identified in remark 2.  Also, valle = 0 behaves the same way as valle = 1 (i.e., for the applicable elements, both options flag the additive framework).

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
8. TEMGO,YES results in the following type of print.

```text
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ U S E R  G R I D  P O I N T (T O P)  M A P P I N G  T O  B O T/M I D  I N T E R N A L  G R I D TOP                    1                    2                    3                 4                    5                   6                  7                  8                   9                 10 BOT  101000001 101000002 101000003 101000004 101000005 101000006 101000007 101000008 101000009 101000010 MID                    0                    0                    0                 0                    0                   0                  0                  0                   0                  0  ... │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
9. The “SPROPMAP” keyword provides a convenient option to automatically flag secondary properties like PBARN1, PBEMN1, PRODN1, PSHEARN, PSHLN1, PSHLN2, and PSLDN1.    Note that these secondary property entries expose the user to a set of sophisticated 2-D continuum and 3-D beam, shell and continuum elements in SOL 400. The rules governing the generation of the additional properties are many and are a function of the problem dimension, material type, and procedure. All these rules have been incorporated into the automatic generation option. These are briefly summarized in the table below for the default SPROPMAP = 0 case:

```text
┌───────────┬──────────────────┬───────────┐
│ Secondary │ Primary Property │ Dimension │
│ Property  │                  │           │
├───────────┼──────────────────┼───────────┤
│ PBARN1    │ PBARL            │ 1-D       │
├───────────┼──────────────────┼───────────┤
│ MATS1     │ Note 1           │           │
├───────────┼──────────────────┼───────────┤
│ MATEP     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATF      │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATSMA    │ Note 2           │           │
├───────────┼──────────────────┼───────────┤
│ MATVE     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATVP     │ Note 3           │           │
├───────────┼──────────────────┼───────────┤
│ PBEMN1    │ PBEAML           │ 1-D       │
├───────────┼──────────────────┼───────────┤
│ MATS1     │ Note 1           │           │
├───────────┼──────────────────┼───────────┤
│ MATEP     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATF      │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATSMA    │ Note 2           │           │
├───────────┼──────────────────┼───────────┤
│ MATVE     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATVP     │ Note 3           │           │
├───────────┼──────────────────┼───────────┤
│ PRODN1    │ PROD             │ 1-D       │
├───────────┼──────────────────┼───────────┤
│ MATS1     │ Note 1           │           │
├───────────┼──────────────────┼───────────┤
│ MATEP     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATF      │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATSMA    │ Note 2           │           │
├───────────┼──────────────────┼───────────┤
│ MATVE     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATVP     │ Note 3           │           │
├───────────┼──────────────────┼───────────┤
│ PSHEARN   │ PSHEAR           │ 3-D       │
├───────────┼──────────────────┼───────────┤
│ MAT8      │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATS1     │ Note 1           │           │
├───────────┼──────────────────┼───────────┤
│ MATS8     │ Note 1           │           │
├───────────┼──────────────────┼───────────┤
│ MATEP     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATF      │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATORT    │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATSMA    │ Note 2           │           │
├───────────┼──────────────────┼───────────┤
│ MATVE     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATVP     │ Note 3           │           │
├───────────┼──────────────────┼───────────┤
│ PSHLN1    │ PSHELL           │ 3-D       │
├───────────┼──────────────────┼───────────┤
│ MAT5      │ Note 4           │           │
├───────────┼──────────────────┼───────────┤
│ MATS1     │ Note 1           │           │
├───────────┼──────────────────┼───────────┤
│ MATS8     │ Note 1           │           │
├───────────┼──────────────────┼───────────┤
│ MATEP     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATF      │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATORT    │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATSMA    │ Note 2           │           │
├───────────┼──────────────────┼───────────┤
│ MATVE     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATVP     │ Note 3           │           │
├───────────┼──────────────────┼───────────┤
│ PSHLN1    │ PCOMP/ PCOMPG    │ 3-D       │
├───────────┼──────────────────┼───────────┤
│ MAT5      │ Note 4           │           │
├───────────┼──────────────────┼───────────┤
│ MAT8      │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATS1     │ Note 1           │           │
├───────────┼──────────────────┼───────────┤
│ MATS2     │ Note 1           │           │
├───────────┼──────────────────┼───────────┤
│ MATS8     │ Note 1           │           │
├───────────┼──────────────────┼───────────┤
│ MATEP     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATF      │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATORT    │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATSMA    │ Note 2           │           │
├───────────┼──────────────────┼───────────┤
│ MATVE     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATVP     │ Note 3           │           │
├───────────┼──────────────────┼───────────┤
│ PSHLN2    │ PLPLANE          │ 2-D       │
├───────────┼──────────────────┼───────────┤
│ MAT5      │ Note 4           │           │
├───────────┼──────────────────┼───────────┤
│ MATG      │ Note 5           │           │
├───────────┼──────────────────┼───────────┤
│ MATS1     │ Note 1           │           │
├───────────┼──────────────────┼───────────┤
│ MATS3     │ Note 1           │           │
├───────────┼──────────────────┼───────────┤
│ MATS8     │ Note 1           │           │
├───────────┼──────────────────┼───────────┤
│ MATEP     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATF      │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATORT    │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATSMA    │ Note 6           │           │
├───────────┼──────────────────┼───────────┤
│ MATVE     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATVP     │ Note 7           │           │
├───────────┼──────────────────┼───────────┤
│ PSLDN1    │ PSOLID           │ 3-D       │
├───────────┼──────────────────┼───────────┤
│ MAT5      │ Note 4           │           │
├───────────┼──────────────────┼───────────┤
│ MATS1     │ Note 1           │           │
├───────────┼──────────────────┼───────────┤
│ MATEP     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATF      │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATORT    │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATSMA    │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATVE     │                  │           │
├───────────┼──────────────────┼───────────┤
│ MATVP     │                  │           │
└───────────┴──────────────────┴───────────┘
```
Note:

1.

Only when NLMOPTS, LRGSTRN, 1 is flagged or HGENPLAS is provided NLSTEP entry for coupled analysis.

2.

For shape memory materials, define through MATSMA only the thermo-mechanical model is available.

3.

For creep, define through MATVP, VALC=0 must be set on NLMOPTS for explicit formulation.

4.

Only when phase changes are flagged.

5.

Gasket materials for BEH4=COMPS or AXCOMP,INT4=L.

6.

For shape memory materials, define through MATSMA and BEH=PLSTRS only the thermo-mechanical model is available.

7.

For creep, define through MATVP and BEH=PLSTRS VALC=0 must be set on NLMOPTS for explicit formulation.

8.

The “SPROPMAP” does not support MATDIGI.

--------------------

     In the previous table, the Secondary Property (Column 1) is automatically flagged depending on the Primary Property (Column 2) and the Primary/Secondary Materials (Column 4). The Comments column (Column 5) indicates any special conditions that are followed by the program while doing this mapping. The Unsupported Features column (Column 6) indicates the list of options on the Primary Property entry that are not supported by the Secondary Property.

     It should be noted that the Secondary Property additions offer a wide range of element formulations that primarily cater to nonlinear extension but can also serve for linear applications. By default, the PROPMAP field is set to 0 and maps to the full integration elements of the secondary property only if necessary. For a less memory intensive element, the PROPMAP field can be manually set to 1 and this then maps to the equivalent reduced integration element of the secondary property only if available and necessary. PROPMAP field can be manually set to 2 or 3 when secondary properties need to be tagged to all elements in the model. In this case, the special conditions given in the 5th column above are ignored and the mapping is carried out for both linear and nonlinear materials (if allowed). PROPMAP = 2 maps to full integration elements whenever possible and PROPMAP = 3 maps to reduced integration elements whenever possible.

a. Property mapping is considered for all possible elements (i.e., PROPMAP = 0/1 is automatically converted to PROPMAP = 2/3) for the following conditions:

• When IDAMP (damping scheme specified through the NLSTEP entry) > 0 is used for static analysis. Note that the damping scheme is only available for elements with nonlinear property extensions.

• When CRITTID (user criteria specified through the NLSTEP entry) and the associated TABSCTL entry refer to displacement / stress / strain criteria for all elements in the model. Note that the user criteria are only supported for elements with nonlinear property extensions.

• When a small displacement analysis is flagged for thermo-mechanical coupled analysis specified through SUBSTEP or for real-time thermo-mechanical chained analysis specified through TEMP(LOAD,HSUB,HSTEP,HTIME). Note that for real-time temperatures to be transferred from the heat pass to the structural pass, all elements need to be processed in the nonlinear program flow and this is accomplished by flagging all possible elements with nonlinear property extensions.

b. Property mapping is provided for elements that are associated with special procedures / flags:

• Elements whose grids are specified on the VCCT Bulk Data entry. VCCT is only supported for grids of elements with nonlinear property extensions.

• Elements that are specified on the IPSTRN / ISTRESS commands. These are only supported for elements with nonlinear property extensions.

• Elements that are specified on the BOLT1 entry. BOLT1 is only supported for elements with nonlinear property extensions.

     It should be noted also that while the NLMOPTS,SPROPMAP option is powerful and allows a user-friendly way to map to advanced elements, it does not provide a substitute for all cases. Defaults are provided for the most common cases on the NLMOPTS,SPROPMAP entry itself. This includes PROPBEH - especially useful to distinguish between plane strain and plane stress, DIRECT - the layer thickness direction for gaskets, THICKOP - the out-of-plane thickness for the planar case. It should be noted that these defaults are global defaults and apply to all the elements for which the secondary properties are added. If such defaults are not applicable (for e.g., different out-of-plane thicknesses), it is the user’s responsibility to add individual secondary property entries. No mapping to advanced nonlinear elements takes place for PSHELL entries with MID greater than 100,000,000 to avoid conflicts with internally generated material IDs.

     IPRINT can be used to get additional information on the secondary properties that have been added. Default is 0 in which case, there is no print-out. IPRINT = 1 allows the print-out in the .f06 file, IPRINT = 2 allows the print-out in the .pch file, IPRINT = 3 allows print-out in both the .f06 and .pch files.

Example 1: 8 noded CHEXA, PSOLID, MAT1

SPROPMAP

Added Secondary Property

-1

No mapping considered

0

No mapping done - not necessary

1

No mapping done - not necessary

2

PSLDN1: C8, BEH8 = SOLID, INT8 = L, BEH8H = SOLID, INT8H = L

3

PSLDN1: C8, BEH8 = SOLID, INT8 = LRIH, BEH8H = SOLID, INT8H = LRIH

--------------------

Example 2: 4 noded CQUAD4, PSHELL, MATF

SPROPMAP

Added Secondary Property

-1

No mapping (note that MATF will not work in this case)

0

PSHLN1: C4, BEH4 = DCT, INT4 = L, BEH4H = DCT, INT4H = L

1

PSHLN1: C4, BEH4 = DCT, INT4 = LRIH, BEH4H = DCT, INT4H = L

2

PSHLN1: C8, BEH8 = DCT, INT4 = L, BEH4H = DCT, INT4H = L

3

PSHLN1: C4, BEH4 = DCT, INT4 = LRIH, BEH4H = DCT, INT4H = L

--------------------

10. The  vald1  value in “DEACTEL” determines in which physics pass the default deactivation rules are applied. If  vald1  is positive the deactivation rules are applied in the specified pass only and in all other passes the defaults are switched off, meaning that in those passes all elements remain active unless a DEACTEL Bulk Data input deactivates some of them.

     The default deactivation rules are summarized in the following table:

Element Types

By Default Deactivated in Pass

Connector elements CWELD, CFAST, CSEAM

Thermal

Rigid body elements Rxxx

Thermal

CONMi and CMASSi elements

Thermal

Interface elements CIFxxx

Thermal

Surface elements CHBDYx

Mechanical

Heat convection elements CONVx

Mechanical

Radiation boundary elements RADBC

Mechanical

CDAMP4 elements originating from CMB or CMS fields in BCBODY input

Mechanical

--------------------

     The default for elements of all other types is that they are active in every pass.

11. The “ENTHALP” keyword is applicable to elements associated with the nonlinear property extensions PRODN1, PSHEARN, PSHLN1, PSLDN1 and for axisymmetric heat transfer shells specified through PAXISYM. It provides different options to form the capacitance matrix and enthalpy vector for these elements through   valclu  and   valenl  respectively.

     The   valclu  value allows the choice of 3 different capacitance formulations: consistent, coupled (average of consistent and lumped) and lumped. The default value of   valclu = 0  allows the nonlinear elements to follow the same scheme as that for linear elements; lumped for rods and 3D shells, coupled for axisymmetric shells and linear hexes, pentas, tetras and consistent for quadratic hexes, pentas and tetras. Values of   valclu > 0  allow the user to pick specific capacitance formulations for all elements.

     The   valenl  value allows the user the choice of 2 different enthalpy vector formulations: time integration of the enthalpy at each integration point or product of the nodal temperature with the capacitance. The default value of   valenl = 0  allows the program to pick automatically: use the time integration option for nonlinear specific heat / latent heat, use the nodal product option for linear specific heat. Values of   valenl > 0  allow the user to pick the approach. Note that for nonlinear problems, the time integration approach is more accurate.

12. To compute the thermal loads of 3D thermal shells in a separate mechanical run, a consistent temperature distribution type must be specified in mechanical models, i.e. LINE must be defined if the thermal model has a linear temperature distribution using LINE, or QUAD must be specified for the thermal model with a quadratic temperature distribution defined by QUAD.  If LINE or QUAD is specified, the program will switch the structural shell elements to advanced elements automatically by generating PSHLN1 entries internally if no PSHLN1 or PSHLN2 entries are specified in the original model.

13. MSC NASTRAN thermal analysis does not differentiate between top and bottom faces while applying loads or boundary conditions on shell, even though the top and bottom temperatures may be different through specifying TEMPP = LINE or QUAD.

14. TEMPP keyword is supported in coupled analysis or in separate runs of thermal and mechanical analyses. This keyword is not supported for CTRIA6 elements or in chained thermal and mechanical analyses.

