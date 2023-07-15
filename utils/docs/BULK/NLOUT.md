## [NLOUT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NLOUT1.xhtml) - Selects Additional Nonlinear Output Quantities as Referenced By NLSTRESS Case Control Command

Selects additional nonlinear output quantities as referenced by NLSTRESS Case Control Command in SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLOUT   ID      AIO1    AIO2    AIO3    AIO4    AIO5    AIO6    AIO7            
        AIO8    AIO9    etc.                                                    
        ESV     SV2     SV3     etc.                                            
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLOUT   1       TOTTEMP                                                         
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLOUT   1       TOTTEMP                                                         
        ESV     SV2     SV3                                                     
```
```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLOUT   1                                                                       
        FAILND1 FAILND2 FAILND3 FAILND4 etc.                                    
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification number of a NLOUT entry. Selected by the NLOUT keyword on the NLSTRESS Case Control │
│           │ command. (Integer > 0)                                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AIOi      │ Additional Output request. See Remark 3. (Character)                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ESV       │ Keyword indicating the following are user state variables, it is optional.                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SVi       │ State variable names selected for output.                                                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The keywords can appear in any order.

2. Any item selected that is inappropriate for the element will be ignored.

3. The request codes, meaningful only to elements who refer to PRODN1, PBARN1, PBEMN1, PSHLN1, PSHLN2, PSLDN1, PLCOMP, PCOMLS, or PCOHE entries, are as follows:

```text
┌─────────────┬──────────────────────────────────────────────────────────────────────────┐
│ Additional  │                                                                          │
│ Output Code │                                                                          │
│ Keywords    │                                                                          │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ Keyword     │ Description                                                              │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ CCASTRSS    │ Components of Cauchy Stress                                              │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ CTOTSTRN    │ Components of Total Strain                                               │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ CELASTRN    │ Components of Elastic Strain                                             │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ CPLASTRN    │ Components of Plastic Strain                                             │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ CCRPSTRN    │ Components of Creep Strain                                               │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ CTHMSTRN    │ Components of Thermal Strain                                             │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ TSTRNPS     │ Thickness Strain for Plane Stress                                        │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ MAJESTRN    │ Major Engineering Strain                                                 │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ MINESTRN    │ Minor Engineering Strain                                                 │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ CURVOL      │ Current Volume                                                           │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ ORGVOL      │ Original Volume                                                          │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ TOTTEMP     │ Total Temperature                                                        │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ INCTEMP     │ Incremental Temperature                                                  │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ EQVMSTRS    │ Equivalent von Mises Stress                                              │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ EQSTRSA     │ Equivalent Stress/Yield Stress Ratio                                     │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ EQELSTRN    │ Equivalent Elastic Strain                                                │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ EQPLSTRN    │ Equivalent Plastic Strain                                                │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ EQCRSTRN    │ Equivalent Creep Strain                                                  │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ TTSTRNED    │ Total Strain Energy Density                                              │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ ELSTRNED    │ Elastic Strain Energy Density                                            │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ PLSTRNED    │ Plastic Strain Energy Density                                            │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ PLSTRNRT    │ Plastic Strain Rate                                                      │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ ILNMSTRS    │ Interlaminar Normal Stress. See Remark 5.                                │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ ILSHSTRS    │ Interlaminar Shear Stress. See Remark 5.                                 │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ ILSHTKCX    │ X-component of the interlaminar shear stress for thick composite shells. │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ ILSHTKCY    │ Y-component of the interlaminar shear stress for thick composite shells  │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ CSTRSCRD    │ Components of Stress Preferred System                                    │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ GSKTCLST    │ Gasket Pressure                                                          │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ GSKTCLSR    │ Gasket Closure                                                           │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ PGSKTCLS    │ Plastic Gasket Closure                                                   │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ FAILINDX    │ Failure Index (%)                                                        │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ TOTVSV1     │ Total Value of First State Variable                                      │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ TOTVSV2     │ Total Value of Second State Variable                                     │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ TOTVSV3     │ Total Value of Third State Variable                                      │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ EQPHSTRN    │ Equivalent phase transformation strain                                   │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ EQTWSTRN    │ Equivalent TWIN strain                                                   │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ EQTPSTRN    │ Equivalent TRIP strain 75                                                │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ CPHSTRN     │ Phase transformation strain tensor                                       │
├─────────────┼──────────────────────────────────────────────────────────────────────────┤
│ VOLFMART    │ Volume fraction of Martensite                                            │
└─────────────┴──────────────────────────────────────────────────────────────────────────┘
```
4. User state variable name following the ESV keyword can be the default nominal name or user defined name in UDSESV.

5. ILNMSTRS and ILSHSTRS are stress tensors formed in the basic coordinate system, their principal directions are the directions of stress vector of interlaminar normal and shear stresses respectively. More precisely, the tensor components  ![bulkno06090.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06090.jpg?_LANG=enus)  satisfy below equation:
 ![bulkno06092.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06092.jpg?_LANG=enus)  
where;
n  is the stress vector direction,
 ![bulkno06094.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06094.jpg?_LANG=enus)  is the normal of stress vector, and
 ![bulkno06096.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06096.jpg?_LANG=enus)  =0 when i != j and  ![bulkno06098.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06098.jpg?_LANG=enus)  = 1 when i = j.

6. Select additional nonlinear quantities for Cuntze-bold failure model in NLOUT as referenced by NLSTRESS.

Additional Output Code Keywords

Keyword

Description

UD

WOVEN

FAILND1

Effort

Effort

Complete effort of the ply, similar to failure index

FAILND2

FF1

fiber failure 1

fiber tension

warp tension

FAILND3

FF2

fiber failure 2

fiber compression

warp compression

FAILND4

FF3

fiber failure 3

n.a.

fill tension

FAILND5

FF4

fiber failure 4

n.a.

fill compression

FAILND6

IFF1

inter fiber failure 1

cross fiber tension

thickness direction tension

FAILND7

IFF2

inter fiber failure 2

cross fiber compression

thickness direction compression

FAILND8

IFF3

inter fiber failure 3

in-plane shear

in-plane shear

FAILND9

IFF4

inter fiber failure 4

n.a.

out-of-plane shear TW

FAILND10

IFF5

inter fiber failure 5

n.a.

out-of-plane shear WF

--------------------



