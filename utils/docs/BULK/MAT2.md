## [MAT2](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MAT2.xhtml) - Shell Element Anisotropic Material Property Definition

Defines the material properties for linear anisotropic materials for two-dimensional elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT2    MID     G11     G12     G13     G22     G23     G33     RHO             
        A1      A2      A3      TREF    GE      ST      SC      SS              
        MCSID   GE11    GE12    GE13    GE22    GE23    GE33                    
```
#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT2    13      6.2+3                   6.2+3           5.1+3   0.056           
        6.5-6   6.5-6           -500.0  0.002   20.+5                           
        1003                                                                    
```
```text
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer  │ Meaning                                                                                            │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID        │ Material identification number. See Remark 1.(Integer > 0)                                         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Gij        │ The material property matrix. (Real) See Remarks 4., 5., 6., and 9.                                │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO        │ Mass density. (Real)                                                                               │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Ai         │ Thermal expansion coefficient vector. (Real)                                                       │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF       │ Reference temperature for the calculation of thermal loads, or a temperature-dependent thermal     │
│            │ expansion coefficient. See Remarks 10., 11. and 14. (Real or blank)                                │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GE         │ Structural element damping coefficient. See Remarks 8., 10., and 13. (Real)                        │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ST, SC, SS │ Stress limits for tension, compression, and shear are optionally supplied (these are used only to  │
│            │ compute margins of safety in certain elements) and have no effect on the computational procedures. │
│            │ (Real or blank). See Remark 17.                                                                    │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MCSID      │ Material coordinate system identification number.  Used only for PARAM, CURV processing. See       │
│            │ Parameters. (Integer > 0 or blank)                                                                 │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GEij       │ Structural damping matrix. See Remark 17. (Real)                                                   │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MAT9, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD* entries.

2. MAT2 materials may be made temperature dependent by use of the MATT2 entry. In SOL 106, linear and nonlinear elastic material properties in the residual structure will be updated as prescribed under the TEMPERATURE Case Control command.

3. The mass density, RHO, will be used to automatically compute mass for all structural elements.

4. The convention for the Gij in fields 3 through 8 are represented by the matrix relationship

![bulkmno04094.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04094.jpg?_LANG=enus)  

The G matrix, including G13 and G23 is an extension to conventional orthotropic plans stress behavior that allows membrane-shear coupling. If the MAT2 is used for plane stress elements or referenced as MID1 or MID2 in a PSHELL, the G matrix must be invertible and positive definite.

5. When MAT2 is referenced as a MID3 in a PSHELL, then it is used as:

![bulkmno04096.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04096.jpg?_LANG=enus)  

     This may lead to user warning message 6134 which may be ignored. See  The NASTRAN Theoretical Manual ,   Section 4.2.

6. When MAT2 is referenced as a MID4 in a PSHELL, then only G  and G  are required. One will observe a user warning message 9994,  The Material Property Matrix is not positive definite  which may be ignored.

7. MCSID must be nonzero if PARAM,CURV is specified to extrapolate element centroid stresses or strains to grid points on plate and shell elements only.  CQUAD4 element corner stresses are not supported by PARAM,CURV.

8. To obtain the damping coefficient GE, multiply the critical damping ratio    by 2.0.

9. Unlike the MAT1 entry, data from the MAT2 entry is used directly without adjustment of equivalent E, G, or NU values.

10. TREF and GE are ignored if this entry is referenced by a PCOMP/PCOMPG entry.

11. TREF is used in two different ways (See Remarks   and   of TEMPERATURE Case Control entry for details.):

     • Except for SOL106 and SOL400 nonlinear analysis, TREF is used as the reference temperature for the calculation of thermal loads. TEMPERATURE(INITIAL) may be used for this purpose, in which case, TREF is ignored.

     • In SOL106 and SOL400 nonlinear analysis, TREF is used only for the calculation of a temperature-dependent thermal expansion coefficient. The reference temperature for the calculation of thermal loads is obtained from the TEMPERATURE(INITIAL) set selection. See   in Remark 10 of the MAT1 description.

12. If PARAM,W4 is not specified, GE is ignored in transient analysis.  See  .

13. PCOMP/PCOMPG entries generate MAT2 entries starting from 100,000,001 onwards. Explicitly specified MAT2 IDs must not conflict with internally generated MAT2 IDs. Furthermore, the A1, A2 and A3 fields of MAT2 generated by Nastran from PCOMP that's used for PSHELL's MID4 has a special format. They are [G4]×[ α 4] and not [ α 4]. These generated MAT2 entries have MID greater than 100,000,000. User supplied MAT2 should avoid using MID greater than 100,000,000 if it's used for MID4 of a PSHELL entry. If MIDs larger than 99999999 are used, PARAM,NOCOMPS,-1 must be specified to obtain stress output.

14. In nonlinear static analysis (SOL 106) the QUAD4, TRIA3, QUADR, and TRIAR thermal loads are computed using the secant (default) method. To use the more accurate integral method, specify ‘PARAM,EPSILONT,INTEGRAL’ in bulk data. See  .

15. Negative values for ST, SC, and SS lead to no margins of safety being computed.

16. If the MAT2 is referenced by the PCOMP/PCOMPG entry, the transverse shear flexibility for the referenced lamina is zero.

17. Defines structural damping matrix data for advanced composites. If the GEij values are present, then Nastran will ignore the GE value given on the first continuation entry field (6) and the GE entry given in field (8) of the PCOMP/PCOMPG entry and use the given GEij values. The rational of these entries is that with composite materials made of a viscoelastic resin system, the damping matrix does not scale with the stiffness matrix. For example, in the directions where you have more fibers, the stiffness is higher because you have more fibers but the damping coefficient is smaller because you have less resin matrix which is the main source of damping. To use this feature in composites, the PCOMP/PCOMPG MIDi entries must refer to MAT2 entries.

For any ply that does not point to a MAT2 with extended GEij, the GE value will be taken from the GE field of the corresponding MATi entry (MAT1 field 9, MAT2 field 6 of first continuation, MAT8 field 2 of second continuation.).

The damping when extended GEij is in effect is applied in element material routines by forming the product GEij * Gij when forming the K4 damping matrix. For any ply not using an extended GEij of MAT2 the product GE*Gij is used.

