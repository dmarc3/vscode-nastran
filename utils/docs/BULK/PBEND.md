## [PBEND](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PBEND.xhtml) - Curved Beam or Pipe Element Property

Defines the properties of a curved beam, curved pipe,   or elbow element (CBEND entry).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBEND   PID     MID     A       I1      I2      J       RB      THETAB  +       
+       C1      C2      DI      D2      E1      E2      F1      F2      +       
+       K1      K2      NSM     RC      ZC      DELTAN                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBEND   39      1       0.8     0.07    0.04    0.04    10.                     
        0.5     0.4     -0.5    0.4                                             
        0.6     0.6                             0.1                             
```

#### Alternate Format and Example for Elbows and Curved Pipes:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBEND   PID     MID     FSI     RM      T       P       RB      THETAB  +       
+                       NSM     RC      ZC                                      
```

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PBEND   39      1       1       0.5     0.02    10.     10.                     
                                        0.1                                     
```

```text
┌─────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer   │ Meaning                                                                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PID         │ Property identification number. (Integer > 0)                                                      │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID         │ Material identification number. See Remarks 1. and 2. (Integer > 0)                                │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ A           │ Area of the beam cross section. (Real > 0.0)                                                       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ I1, I2      │ Area moments of inertia in planes 1 and 2. (Real > 0.0)                                            │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ J           │ Torsional stiffness. (Real > 0.0)                                                                  │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FSI         │ Flag selecting the flexibility and stress intensification factors. See Remark 3. (Integer = 1, 2,  │
│             │ or 3)                                                                                              │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RM          │ Mean cross-sectional radius of the curved pipe. (Real > 0.0)                                       │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T           │ Wall thickness of the curved pipe. (Real > 0.0; RM + T/2 < RB)                                     │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ P           │ Internal pressure. (Real)                                                                          │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RB          │ Bend radius of the line of centroids. (Real. Optional, see CBEND entry.)                           │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ THETAB      │ Arc angle of element. (Real, in degrees. Optional, see CBEND entry.)                               │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ci, Di, Ei, │ The r,z locations from the geometric centroid for stress data recovery. See Remark 8. (Real)       │
│ Fi          │                                                                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ K1, K2      │ Shear stiffness factor K in K*A*G for plane 1 and plane 2. (Real)                                  │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NSM         │ Nonstructural mass per unit length. (Real)                                                         │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RC          │ Radial offset of the geometric centroid from points GA and GB. See Figure 0-78. (Real)             │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ZC          │ Offset of the geometric centroid in a direction perpendicular to the plane of points GA and GB and │
│             │ vector v. See Figure 0-78. See Remark 9. (Real)                                                    │
├─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DELTAN      │ Radial offset of the neutral axis from the geometric centroid, positive is toward the center of    │
│             │ curvature. See Figure 0-78. See Remark 9. (Real; Default is described in Remark 5.)                │
└─────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. For structural problems, MID must reference a MAT1 material entry.
2. For heat transfer problems, MID must reference a MAT4 or MAT5 material entry.
3. When the alternate PBEND entry with FSI is used the following options are available:
Using the notation of Dodge and Moore from ORNL-TM-3658, 1972 we define:

   The bend characteristic parameter  ![bulkp06664.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06664.jpg?_LANG=enus)  as:

   ![bulkp06666.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06666.jpg?_LANG=enus)  

   The internal loading parameter  ![bulkp06668.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06668.jpg?_LANG=enus)  as

   ![bulkp06670.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06670.jpg?_LANG=enus)  

   And the radius ratio parameter  ![bulkp06672.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06672.jpg?_LANG=enus)  as

   ![bulkp06674.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06674.jpg?_LANG=enus)  

   For  ![bulkp06676.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06676.jpg?_LANG=enus)

   ![bulkp06678.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06678.jpg?_LANG=enus)  

   For  ![bulkp06680.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06680.jpg?_LANG=enus)

   ![bulkp06682.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06682.jpg?_LANG=enus)  

   For  ![bulkp06684.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06684.jpg?_LANG=enus)

   ![bulkp06686.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06686.jpg?_LANG=enus)  

   For  ![bulkp06688.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06688.jpg?_LANG=enus)

   ![bulkp06690.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06690.jpg?_LANG=enus)  

   ##### Element flexibility calculations:
   
   The shear stiffness factor represents a correction to the section area by computing an effective area 
    
   A s  = KA. Here K is defined as:
   
   ![bulkp06692.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06692.jpg?_LANG=enus)  
   
   ![bulkp06694.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06694.jpg?_LANG=enus) is the form factor obtained here from the principal of complementary virtual work. There are many other ways to obtain this factor. By complementary virtual work it is defined as:
   
   ![bulkp06696.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06696.jpg?_LANG=enus)  
   
   where Q is the first moment of area and b is the width of section cut.
   
   For a solid circular cross-section the above expressions yields a value of K = 0.9, and for very thin walled pipes the above integral evaluates as  ![bulkp06698.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06698.jpg?_LANG=enus)  and we get a value of K = 0.5.
   
   For pipes with general thickness T >0 we define the radius ratio as:
   
   ![bulkp06700.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06700.jpg?_LANG=enus)  
   
   where T = R o  - R i  and R o  is the outer radius of the pipe and R i  is the inner radius of the pipe. The above integral becomes a complicated function in terms of radicals and arc sine functions of q and its explicit integration form is not warranted in view of the approximate nature for  ![bulkp06702.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06702.jpg?_LANG=enus) . We therefore approximate with the curve fit
   
   ![bulkp06704.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06704.jpg?_LANG=enus)  
   
   ![pbend_rem3_12.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/pbend_rem3_12.png?_LANG=enus)
   
   The in and out of plane flexibility factors K p  used in computing the element flexibility are calculated as:
   
   For FSI = 1
   
   ![bulkp06706.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06706.jpg?_LANG=enus)  
   
   For FSI = 2 (ASME code Section III, NB-3687.2, NB-3685.2, 1977)
   
   ![bulkp06708.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06708.jpg?_LANG=enus)  
   
   where it is recommended that  ![bulkp06710.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06710.jpg?_LANG=enus)
   
   For FSI = 3 (Empirical factors from Welding Research Council Bulletin 179, Dodge and Moore)
   
   ![bulkp06712.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06712.jpg?_LANG=enus)  
   
   where it is recommended that  ![bulkp06714.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06714.jpg?_LANG=enus)  and  ![bulkp06716.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06716.jpg?_LANG=enus) . (Note in the cited Dodge and Moore the K p  coefficient has a value of 1.66 which was updated in 1991 to the current value of 1.73)
   
   Also we must have  ![bulkp06718.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06718.jpg?_LANG=enus) for all FSI. Therefore, for FSI=2 or FSI=3, when K p  is computed as 
    
   K p  < 1.0, it is set to K p =1.
   
   ##### Stress recovery stress intensification factor calculations:
   
   Define S 1  as the in plane stress intensification factor and S 2  as the out of plane stress intensification factor.
   
   For FSI = 1
   
   ![bulkp06720.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06720.jpg?_LANG=enus)  
   
   ![bulkp06722.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06722.jpg?_LANG=enus)  
   
   If  ![bulkp06724.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06724.jpg?_LANG=enus) , T = 0.0, R M  = 0.0 then S 1  = 1.0.
   
   r i  is the C1, D1, E1, F1 of the (r,z) recovery locations.
   
   For FSI = 2 (ASME code Section III, NB-3687.2, NB-3685.2, 1977)
   
   Define:
   
   ![bulkp06726.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06726.jpg?_LANG=enus)  
   
   and
   
   ![bulkp06728.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06728.jpg?_LANG=enus)  
   
   For data recovery the circumferential angle  ![bulkp06730.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06730.jpg?_LANG=enus)  is evaluated at 0 deg, 90 deg, 180 deg, and 270 deg. For FSI = 3 (Empirical factors from Welding Research Council Bulletin 179, Dodge and Moore)
   
   ![bulkp06732.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06732.jpg?_LANG=enus)  

4. The transverse shear stiffness in planes 1 and 2 are K1*A*G and K2*A*G, respectively. The default values for K1 and K2 on the first format are zero, which means the transverse shear flexibilities (1/Ki*A*G) are set equal to zero. Transverse shear stiffness for the alternate format are automatically calculated for the curved pipe.

5. The neutral axis radial offset from the geometric centroid is default to the

     ![bulkp06734.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06734.jpg?_LANG=enus)  

     It is recommended that the default be used whenever

     ![bulkp06736.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06736.jpg?_LANG=enus)  

     in which case the default value of  ![bulkp06738.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06738.jpg?_LANG=enus)  is within 5% of the exact expression for circular or rectangular cross sections. For the alternate format, the neutral axis offset is calculated from an analytical expression for a hollow or solid circular cross section.

     The user may compute an exact value for  N  as follows:

     ![bulkp06740.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06740.jpg?_LANG=enus)  

     where

     ![bulkp06742.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06742.jpg?_LANG=enus)  

     The integration is carried out over the cross section of the element.

6. If T is zero, a solid circular cross section of radius RM is assumed and FSI must be 1.
7. If the first format is used, third-order moments are neglected for the consistent mass matrix. These moments are zero whenever the cross section of the beam is symmetric about both the r and z axes.
8. If the circular cross-sectional property entry format is used, the stress points are automatically located at the points indicated in  .
9. Offset vectors are treated like rigid elements and are therefore subject to the same limitations.
   - Offset vectors are not affected by thermal loads.
   - The specification of offset vectors is not recommended in solution sequences that compute differential stiffness because the offset vector remains parallel to its original orientation. (Differential stiffness is computed in buckling analysis provided in SOLs 105 and 200; SOLs 101,103 and 107 through 112 with STATSUB; and also nonlinear analysis provided in SOLs 106, 129, 153, and 159 with PARAM,LGDISP,1.)

   ![bulkp06744.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06744.jpg?_LANG=enus)
   
   Figure 0-77 PBEND Circular Cross Section
   
   ![bulkp06746.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06746.jpg?_LANG=enus)
   
   Figure 0-78 PBEND Element Coordinate System
   
   ![bulkp06748.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/../../../assets/bulkp06748.jpg?_LANG=enus)
   
   Figure 0-79  PBEND Circular Cross Section Element Coordinate System

10. PBEND is a primary property entry. Primary property entries are grouping entities for many applications in MSC Nastran. Therefore it is highly recommended that the PBEND property entries have unique identification numbers with respect to all other property entries else unexpected grouping results may occur. There must be uniqueness between PBEND entries.
11. If GRAV or PLOAD1 loads are applied to a CBEND element, then it is recommended that the element should subtend an arc of 20 degrees or less degrees.
