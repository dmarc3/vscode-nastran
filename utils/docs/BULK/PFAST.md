## [PFAST](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PFAST.xhtml) - CFAST Fastener Property

Defines the CFAST fastener property values.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PFAST   PID     D       MCID    MFLAG   KT1     KT2     KT3     KR1             
        KR2     KR3     MASS    GE      ALPHA   TREF    COINL                   
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PFAST   7       1.1     70              100000. 46000.  12300.                  
```
```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID       │ Property identification number. (Integer > 0)                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ D         │ Diameter of the fastener. See Remark 2. (Real > 0)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MCID      │ Specifies the element stiffness coordinate system. See Remark 1. (Integer > -1 or blank; Default = │
│           │ -1)                                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MFLAG     │ Defines if the coordinate system defined by MCID is absolute or relative. See Remark 1. (Integer 0 │
│           │ or 1; Default = 0) If MFLAG = 0, MCID defines a relative coordinate system. See Remark 1a. If      │
│           │ MFLAG = 1, MCID defines an absolute coordinate system. See Remark 1c.                              │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KTi       │ Stiffness values in directions 1 through 3. (Real)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KRi       │ Rotational stiffness values in directions 1 through 3. (Real; Default = 0.0)                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MASS      │ Lumped mass of fastener. (Real; Default = 0.0)                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GE        │ Structural damping. (Real; Default = 0.0)                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALPHA     │ Thermal expansion coefficient for the CFAST. (Real; Default=0.0)                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF      │ Reference temperature for the calculation of thermal loads. (Real; Default=0.0, See Remark 8.)     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COINL     │ Length of a CFAST with coincident grids. (Real; Default=0.0, COINL ≥ 0.0)                          │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. 

a. If MCID  >  0 and MFLAG = 0 (Default), then the KT1 stiffness will be applied along the  ![bulkp06966.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06966.jpg?_LANG=enus)  axis direction of the fastener defined as

![bulkp06968.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06968.jpg?_LANG=enus) 
 
 
 

The T2 direction defined by MCID will be used to define the orientation vector  ![bulkp06970.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06970.jpg?_LANG=enus) of the fastener. Then the element  ![bulkp06972.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06972.jpg?_LANG=enus)  axis will be defined as 
 


![bulkp06974.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06974.jpg?_LANG=enus)  

The KT3 stiffness will lie along the  ![bulkp06976.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06976.jpg?_LANG=enus)  axis. The element  ![bulkp06978.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06978.jpg?_LANG=enus)  axis is defined as 
 


![bulkp06980.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06980.jpg?_LANG=enus) 
 
 
 

The KT2 stiffness will lie along the  ![bulkp06982.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06982.jpg?_LANG=enus)  axis

This option allows the user to define orthotropic material properties normal to the axis of the fastener that will “slide” with the curve of the patches.

b. If MCID = -1, MFLAG is ignored, and the following element system is defined: the  ![bulkp06984.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06984.jpg?_LANG=enus)  axis direction of the fastener defined as

![bulkp06986.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06986.jpg?_LANG=enus) 
 
 
 

Relative to the basic system, find the smallest component  ![bulkp06988.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06988.jpg?_LANG=enus)  of the element  ![bulkp06990.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06990.jpg?_LANG=enus)  axis unit vector. If two such components are equal, take the first one. Form a unit vector in the basic system. For example, assuming the  ![bulkp06992.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06992.jpg?_LANG=enus)  component of  ![bulkp06994.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06994.jpg?_LANG=enus)  was the smallest.


 
 
 ![bulkp06996.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06996.jpg?_LANG=enus) 
 
 
 


 
 
Form the following orthogonal vector: 
 


![bulkp06998.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06998.jpg?_LANG=enus) 
 
 
 
 
 
 

![bulkp07000.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07000.jpg?_LANG=enus) 
 
 
 
 
 
 

Form  ![bulkp07002.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07002.jpg?_LANG=enus)  as 
 


![bulkp07004.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07004.jpg?_LANG=enus) 

```text
┌──────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Caution: │ Using MCID=-1 for non-isotropic in-patch stiffness with KT2 ≠ KT3 or KR2 ≠ KR3 or both is       │
│          │ inconsistent with arbitrary in-patch y-z axes determined by the smallest near zero component of │
│          │ the element x-axis. Option 1(a) is recommended in this case.                                    │
└──────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
c. If MCID  >  0 and MFLAG = 1, then the MCID will be used to compute stiffness. KT1 will be applied along the MCID T1 axis, KT2 along the MCID T2 axis, and KT3 along the MCID T3 axis. The element forces will be computed in the coordinate system defined in Remark 1b.

d. If the length of GA - GB is zero, then the element  ![bulkp07006.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07006.jpg?_LANG=enus)  axis is defined to lie along the projected normal to patch A.

2. The diameter D is used along with the piercing points of GA and GB to determine the location of fictitious grid points to form a fictitious hexa volume that determines the elements and physical grids used for the fastener element. Four points are positioned at  ![bulkp07008.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07008.jpg?_LANG=enus)  positions parallel to the element axis where  ![bulkp07010.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07010.jpg?_LANG=enus) . The stiffness contribution of the fastener depends on both the stiffness values specified and the diameter D. It is a function of D, because the  ![bulkp07012.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07012.jpg?_LANG=enus)  positions are used along with the surface shape functions of the fictitious hexa to weight the contribution of the physical grids used to the grids GA and GB of the fastener element.

3. The CFAST element (see  ), for stiffness and structural damping calculations, is designed to satisfy rigid body equilibrium requirements. When  ![bulkp07014.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07014.jpg?_LANG=enus)  has finite length, internal rigid links connect grids GA and GB. This may result in coupling between translational and rotational degrees-of freedom even when no rotational stiffness (KR1-KR3) are specified.

     For mass calculations, half the specified mass value is placed directly onto the projected grid A and grid B translational degrees-of-freedom.

![bulkp07016.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07016.jpg?_LANG=enus)

Figure 0-84 CFAST Element

4. The CFAST element lies midway between GA and GB.

5. Values for  ![bulkp07018.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07018.jpg?_LANG=enus)  and  ![bulkp07020.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07020.jpg?_LANG=enus)  are specified at the user’s discretion. Assuming a short stubby beam where shear is dominate, possible values might be:

![bulkp07022.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07022.jpg?_LANG=enus)  

![bulkp07024.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07024.jpg?_LANG=enus)  

![bulkp07026.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07026.jpg?_LANG=enus)  

![bulkp07028.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07028.jpg?_LANG=enus)  

![bulkp07030.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07030.jpg?_LANG=enus)  

![bulkp07032.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07032.jpg?_LANG=enus)  

     where:

```text
┌───┐
│ = │
├───┤
│ = │
├───┤
│ = │
├───┤
│ = │
├───┤
│ = │
├───┤
│ = │
└───┘
```
     ![bulkp07058.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07058.jpg?_LANG=enus) ,  ![bulkp07060.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07060.jpg?_LANG=enus) ,  ![bulkp07062.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07062.jpg?_LANG=enus) , and G are the material properties of the fastener.

     The fastener stiffness is not, however, independent of the surrounding structure. The values of stiffness specified should not overwhelm the stiffness of the local structure or max ratio’s will occur. One possible way to estimate the local stiffness  ![bulkp07064.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07064.jpg?_LANG=enus)  is by the relationship.

![bulkp07066.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07066.jpg?_LANG=enus)  

     where  ![bulkp07068.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07068.jpg?_LANG=enus)  is a shell thickness and  ![bulkp07070.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07070.jpg?_LANG=enus)  is the modulus of the shell.

6. The element force and strain are computed as follows:

![bulkp07072.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07072.jpg?_LANG=enus)  for statics

![bulkp07074.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07074.jpg?_LANG=enus)  for frequency

![bulkp07076.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07076.jpg?_LANG=enus)  for transient

     where  ![bulkp07078.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07078.jpg?_LANG=enus)  is the 6 x 6 element stiffness matrix,  ![bulkp07080.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07080.jpg?_LANG=enus)  relative displacement in the element coordinate system, and  ![bulkp07082.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07082.jpg?_LANG=enus)  relative velocity in the element coordinate system. The subscripts  ![bulkp07084.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07084.jpg?_LANG=enus)  and  ![bulkp07086.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07086.jpg?_LANG=enus)  stand for end A and end B of the fastener.  ![bulkp07088.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07088.jpg?_LANG=enus)  is defined by param,g;  ![bulkp07090.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07090.jpg?_LANG=enus)  is defined by param,w3,  ![bulkp07092.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07092.jpg?_LANG=enus)  is defined by param,w4; and  ![bulkp07094.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07094.jpg?_LANG=enus)  is the GE entry of the PFAST.  ![bulkp07096.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp07096.jpg?_LANG=enus)  is the strain output. Stress output is the same as force output.

7. PFAST is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PFAST property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PFAST entries.

8. The thermal expansion for the CFAST will be calculated if the user supplies the thermal expansion coefficient ALPHA and TEMPERATURE(LOAD) is requested. See TEMPERTURE Case Control command for thermal loading rules. For a CFAST with coincident grids, if COINL is provided, the thermal expansion is always just along the element x-axis.

![PFAST_r_15.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/PFAST_r_15.png?_LANG=enus)

