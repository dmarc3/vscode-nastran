## [MAT3](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MAT3.xhtml) - CTRIAX6 or PSHLN2 or PLCOMP Material Property Definition

Defines the material properties for linear orthotropic materials used by the CTRIAX6 element entry. It also is allowed with orthotropic materials on the PSHLN2 and PLCOMP entries.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT3    MID     EX      ETH     EZ      NUXTH   NUTHZ   NUZX    RHO     +       
+                       GZX     AX      ATH     AZ      TREF    GE              
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT3    23      1.0+7   1.1+7   1.2+7   .3      .25     .27     1.0-5           
                        2.5+6   1.0-4   1.0-4   1.1-4   68.5    .23             
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                       │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ MID          │ Material identification number.  (Integer > 0)                                                │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ EX, ETH, EZ  │ Young’s moduli in the x, , and z directions, respectively.  (Real > 0.0)                      │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ NUXTH, NUTHZ │ Poisson’s ratios (coupled strain ratios in the x, , and zx directions, respectively).  (Real) │
│ NUZX         │                                                                                               │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ RHO          │ Mass density.  (Real)                                                                         │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ GZX          │ Shear modulus.  (Real > 0.0)                                                                  │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ AX, ATH, AZ  │ Thermal expansion coefficients.  (Real)                                                       │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ TREF         │ Reference temperature for the calculation of thermal loads or a temperature-dependent thermal │
│              │ expansion coefficient.  See Remark 10. (Real or blank)                                        │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ GE           │ Structural element damping coefficient.  See Remarks 9. and 11. (Real)                        │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MAT9, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD* entries.
2. MAT3 materials may be made temperature dependent by use of the MATT3 entry.  In SOL 106, linear and nonlinear elastic material properties in the residual structure will be updated as prescribed under the TEMPERATURE (INIT) Case Control command.
3. The few numbers EX, ETH, EZ, and GZX must be present.
4. A warning message will be issued if any value of NUXTH or NUTHZ has an absolute value greater than 1.0.
5. MAT3 materials may only be referenced by the CTRIAX6 entry or the PSHLN2 or PLCOMP entries.
6. The mass density RHO will be used to automatically compute mass for the CTRIAX6 element.
7. The x-axis lies along the material axis (see   in the CTRIAX6 entry).  The  θ -axis lies in the azimuthal direction.  The z-axis is normal to both.
8. The strain-stress relationship is

     ![bulkmno04106.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/../../../assets/bulkmno04106.jpg?_LANG=enus)  

     Note that

          See link for definitions.

     The compliance matrix as shown must be positive definite. This requires that EX, ETH, EZ, and GZX be positive. There are additional restrictions as well, see a standard text on elasticity.

9. To obtain the damping coefficient GE, multiply the critical damping ratio    by 2.0.
10. TREF is used in two different ways (See Remarks   and   of TEMPERATURE Case Control entry for details.):
     - Except for SOL106 and SOL400 nonlinear analysis, TREF is used as the reference temperature for the calculation of thermal loads. TEMPERATURE(INITIAL) may be used for this purpose, in which case, TREF is ignored.
     - In SOL106 and SOL400 nonlinear analysis, TREF is used only for the calculation of a temperature-dependent thermal expansion coefficient. The reference temperature for the calculation of thermal loads is obtained from the TEMPERATURE(INITIAL) set selection. See   in Remark 10 of the MAT1 description.
11. If PARAM,W4 is not specified, GE is ignored in transient analysis. See  .
