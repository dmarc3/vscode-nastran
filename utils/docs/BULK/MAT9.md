## [MAT9](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MAT9.xhtml) - Solid Element Anisotropic Material Property Definition

Defines the material properties for linear, temperature-independent, anisotropic materials for solid isoparametric elements (see PSOLID entry description).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT9    MID     G11     G12     G13     G14     G15     G16     G22             
        G23     G24     G25     G26     G33     G34     G35     G36             
        G44     G45     G46     G55     G56     G66     RHO     A1              
        A2      A3      A4      A5      A6      TREF    GE                      
        GE11    GE12    GE13    GE14    GE15    GE16    GE22    GE23            
        GE24    GE25    GE26    GE33    GE34    GE35    GE36    GE44            
        GE45    GE46    GE55    GE56    GE66                                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT9    17      6.2+3                                           6.2+3           
                                        6.2+3                                   
        5.1+3                   5.1+3           5.1+3   3.2     6.5-6           
        6.5-6                                   125.    .003                    
```
```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Material identification number.  (Integer > 0)                                              │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gij       │ Elements of the 6 x 6 symmetric material property matrix in the material coordinate system. │
│           │  (Real)                                                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO       │ Mass density.  (Real)                                                                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ai        │ Thermal expansion coefficient. (Real)                                                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF      │ Reference temperature for the calculation thermal loads, or a temperature-dependent thermal │
│           │ expansion coefficient. See Remark 7. (Real or blank)                                        │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ GE        │ Structural element damping coefficient. See Remarks 6. and 8. (Real)                        │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────┤
│ GEij      │ Structural damping matrix. See Remark 9. (Real)                                             │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD* entries.

2. MAT9 materials may be made temperature-dependent by use of the MATT9 entry.  In nonlinear static analysis (e.g., SOL 106), linear and nonlinear elastic material properties in the residual structure will be updated as prescribed under the TEMPERATURE Case Control command.

3. The mass density RHO will be used to compute mass in a structural dynamics problem automatically.

4. The third continuation entry is optional.

5. The subscripts 1 through 6 refer to x, y, z, xy, yz, and zx of the material coordinate system (see the CORDM field on the PSOLID entry description).  The stress-strain relationship is

![bulkmno04140.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04140.jpg?_LANG=enus) 
 
 
 

6. The damping coefficient GE is given by

     ![bulkmno04142.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04142.jpg?_LANG=enus)  

7. TREF is used in two different ways (See Remarks   and   of TEMPERATURE Case Control entry for details.):

     • Except for SOL106 and SOL400 nonlinear analysis, TREF is used as the reference temperature for the calculation of thermal loads. TEMPERATURE(INITIAL) may be used for this purpose, in which case, TREF is ignored.

     • In SOL106 and SOL400 nonlinear analysis, TREF is used only for the calculation of a temperature-dependent thermal expansion coefficient. The reference temperature for the calculation of thermal loads is obtained from the TEMPERATURE(INITIAL) set selection. See   in Remark 10 of the MAT1 description.

8. If PARAM,W4 is not specified, GE is ignored in transient analysis. See  .

9. Defines structural damping matrix data for advanced composites. If the GEij values are present, the Nastran will ignore the GE value given on the third continuation entry field (8) and use the given GEij values. The rational of these entries is that with composite materials made of a viscoelastic resin system, the damping matrix does not scale with the stiffness matrix. For example, in the directions where you have more fibers, the stiffness is higher because you have more fibers but the damping coefficient is smaller because you have less resin matrix which is the main source of damping. To use this feature in composites, the PCOMPLS MIDi entries must refer to MAT9 entries.

The damping is applied in element material routines by forming the product GEij * Gij when forming the K4 damping matrix in EMG.

