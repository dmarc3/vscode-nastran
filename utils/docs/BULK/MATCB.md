## [MATCB](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MATCB.xhtml) - 2D and 3D Orthotropic Progressive Failure Properties

Specifies progressive failure properties for orthotropic materials via the Cuntze-Bold material model. A phenomenal-based material law for fiber reinforced plastics combined with the CUNTZE-BOLD failure criteria.

#### Format:

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MATCB   17000   CUBO    1.-4                                            +
+       "UNIDIR".1      .1      .1      2.5                             +
+       F-DIR   157413. 2413.   .0135   1275.   .2                      +
+               155000. 580.    .02     62.                             +
+       C-DIR   7703.   31.8    .0041   127.    .2                      +
+               10000.  199.    .03103  47.                             +
+       T-DIR   7703.   31.8    .0041   141.    .18                     +
+               10500.  300.    .0275   47.                             +
+       FC-DIR  4599.   70.7    .03584  300.    .02     0.01            +
+       CT-DIR  450.    70.7    .02584  250.    .01     1.00            +
+       TW-DIR  4599.   70.7    .03584  300.    .02     0.01
```

    See link for definitions.

#### Remarks:

1. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MAT9, MATCB, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD entries.
2. “Keywords” may appear in any order or not appear at all. When a “Keyword” appears, the required associated data must be supplied.
3. Note that  Unidirectional  and  Woven  use different coordinate systems.
4. User can add either  Unidirectional  or  Woven  material entry in MATCB card at time.
5. For unidirectional materials, in the literature, F-fiber is usually given the symbol || for parallel to the grain. Also, C-cross is usually given the symbol  ![bulkmno04534.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04534.jpg?_LANG=enus) for perpendicular to the grain. For T-thickness the value 3 is used.
    
    ![MATCB_104536.png](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/MATCB_104536.png?_LANG=enus)

6. For woven materials, W-warp is in the warp direction. F-fill is in the weft direction. In the literature, for T-thickness the value 3 is used.
    
    ![bulkmno04537.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04537.jpg?_LANG=enus)
    
7. Petersen,E., Cuntze, E., and Huhne,C., Experimental determination of material parameters in Cuntze's Failure-Mode-Concept-based UD strength failure conditions, Composites Science and Technology, 134 (2016) 12-25.
