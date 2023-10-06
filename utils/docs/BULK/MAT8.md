## [MAT8](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkmno/TOC.MAT8.xhtml) - Shell Element Orthotropic Material Property Definition

Defines the material property for an orthotropic material for isoparametric shell elements.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT8    MID     E1      E2      NU12    G12     G1Z     G2Z     RHO     +       
+       A1      A2      TREF    Xt      Xc      Yt      Yc      S       +       
+       GE      F12     STRN                                            +       
+       “HFAIL” HF1     HF2     HF3     HF4     HF10    HF11            +       
+       “HTAPE” HT1     HT2     HT3     HT4     HT5     HT6     HT10    +       
+               HT11    HT12                                            +       
+       “HFABR” HFB1    HFB2    HFB3    HFB4    HFB5    HFB6    HFB10   +       
+               HFB11   HFB12                                                   
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MAT8    171     30.+6   1.+6    0.3     2.+6    3.+6    1.5+6   0.056   +       
+       28.-6   1.5-6   155.0   1.+4    1.5+4   2.+2    8.+2    1.+3    +       
+       1.-4            1.0                                             +       
+       HFAIL   1010.   1020.   33.     34.     1011.   1012.           +       
+       HTAPE   2001.   2002.   35.     36.     2003.   1.0     1004.   +       
+               1007.   1008.                                           +       
+       HFABR   3001.   3002.   3003.   3004.   1005.   1005.   1006.   +       
+               1007.   1008.                                                   
```

```text
┌───────────┬───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ MID       │ Material identification number.  Referenced on a  │                                                   │
│           │ PSHELL, PCOMP or PCOMPG entry only.  (0 < Integer │                                                   │
│           │ < 100,000,000)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ E1        │ Modulus of elasticity in X material coordinate    │                                                   │
│           │ direction, also defined as the fiber direction or │                                                   │
│           │ 1-direction.  (Real > 0.0)                        │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ E2        │ Modulus of elasticity in Y material coordinate    │                                                   │
│           │ direction, also defined as the matrix direction   │                                                   │
│           │ or 2-direction.  (Real > 0.0)                     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ NU12      │ Poisson’s ratio ( for uniaxial loading in         │                                                   │
│           │ 1-direction).  Note that  for uniaxial loading in │                                                   │
│           │ 2-direction is related to  by the relation .      │                                                   │
│           │  (Real)                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ G12       │ In-plane shear modulus.  (Real > 0.0;             │                                                   │
│           │ Default = 0.0)                                    │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ G1Z       │ Transverse shear modulus for shear in 1-Z plane.  │                                                   │
│           │  (Real ³ 0.0 or blank; Default implies infinite   │                                                   │
│           │ shear modulus.)                                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ G2Z       │ Transverse shear modulus for shear in 2-Z plane.  │                                                   │
│           │  (Real ³ 0.0 or blank; Default implies infinite   │                                                   │
│           │ shear modulus.)                                   │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ RHO       │ Mass density.  (Real)                             │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Ai        │ Thermal expansion coefficient in i-direction.     │                                                   │
│           │  (Real)                                           │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ TREF      │ Reference temperature for the calculation of      │                                                   │
│           │ thermal loads, or a temperature-dependent thermal │                                                   │
│           │ expansion coefficient.  See Remarks 4. and        │                                                   │
│           │ 5. (Real or blank)                                │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Xt, Xc    │ Allowable stresses or strains in tension and      │                                                   │
│           │ compression, respectively, in the longitudinal    │                                                   │
│           │ direction.  Required if failure index is desired. │                                                   │
│           │  See the FT field on the PCOMP/PCOMPG entry.      │                                                   │
│           │  (Real > 0.0; Default value for Xc is Xt.)        │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ Yt, Yc    │ Allowable stresses or strains in tension and      │                                                   │
│           │ compression, respectively, in the lateral         │                                                   │
│           │ direction.  Required if failure index is desired. │                                                   │
│           │  (Real > 0.0; Default value for Yc is Yt.)        │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ S         │ Allowable stress or strain for in-plane shear.    │                                                   │
│           │  See the FT field on the PCOMP/PCOMPG entry.      │                                                   │
│           │  (Real > 0.0)                                     │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ GE        │ Structural damping coefficient.  See Remarks      │                                                   │
│           │ 5. and 7. (Real)                                  │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ F12       │ Interaction term in the tensor polynomial theory  │                                                   │
│           │ of Tsai-Wu.  Required if failure index by Tsai-Wu │                                                   │
│           │ theory is desired and if value of F12 is          │                                                   │
│           │ different from 0.0.  See the FT field on the      │                                                   │
│           │ PCOMP/PCOMPG entry. (Real)                        │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ STRN      │ For the maximum strain theory only (see STRN in   │                                                   │
│           │ PCOMP/PCOMPG entry).  Indicates whether Xt, Xc,   │                                                   │
│           │ Yt, Yc, and S are stress or strain allowables.    │                                                   │
│           │ (Real = 1.0 for strain allowables; blank          │                                                   │
│           │ (Default) for stress allowables.)                 │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ “HFAIL”   │ Keyword indicating that Hashin failure criterion, │                                                   │
│           │ to calculate its four failure indices.            │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HF1                                               │ Maximum fiber tensile stress, no default          │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HF2                                               │ Maximum fiber compressive stress, default=HF1     │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HF3                                               │ Maximum matrix tensile stress, no default         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HF4                                               │ Maximum matrix compressive stress, default=HF3    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HF10                                              │ Maximum in-plane shear stress, no default         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HF11                                              │ Maximum transverse shear stress, default=HF10     │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ “HTAPE”   │ Keyword indicating that Hashin-Tape criterion, a  │                                                   │
│           │ variant of the Hashin criterion, adapted for tape │                                                   │
│           │ type of materials are calculated.                 │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HT1                                               │ Maximum tape fiber tensile stress, no default     │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HT2                                               │ Maximum tape fiber compressive stress,            │
│           │                                                   │ default=HT1                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HT3                                               │ Maximum tape cross-fiber tensile stress, no       │
│           │                                                   │ default                                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HT4                                               │ Maximum tape cross-fiber compressive stress,      │
│           │                                                   │ default=HT3                                       │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HT5                                               │ Maximum fiber tensile stress for matrix           │
│           │                                                   │ compression; Required if HT6=1.0, otherwise not   │
│           │                                                   │ used.                                             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HT6                                               │ Contribution factor for HT5 (Real, 0.0 or 1.0,    │
│           │                                                   │ default = 0.0)                                    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HT10                                              │ Maximum in-plane shear stress, no default         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HT11                                              │ Maximum transverse shear stress, default=HT10     │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HT12                                              │ Maximum z-x transverse shear stress, default=HT11 │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│ “HFABR”   │ Keyword indicating that Hashin-Fabric criterion,  │                                                   │
│           │ a variant of the Hashin criterion, adapted for    │                                                   │
│           │ fabric type of materials are calculated.          │                                                   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HFB1                                              │ Maximum first fiber tensile stress, no default    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HFB2                                              │ Maximum first fiber compressive stress,           │
│           │                                                   │ default=HFB1                                      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HFB3                                              │ Maximum second cross-fiber tensile stress, no     │
│           │                                                   │ default                                           │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HFB4                                              │ Maximum second cross-fiber compressive stress,    │
│           │                                                   │ default=HFB3                                      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HFB5                                              │ Maximum thickness tensile stress, no default      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HFB6                                              │ Maximum thickness compressive stress,             │
│           │                                                   │ default=HFB5                                      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HFB10                                             │ Maximum in-plane shear stress, no default         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HFB11                                             │ Maximum transverse shear stress, default=HFB10    │
├───────────┼───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
│           │ HFB12                                             │ Maximum z-x transverse shear stress,              │
│           │                                                   │ default=HFB11                                     │
└───────────┴───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. The material identification number must be unique for all COHESIV, MAT1, MAT2, MAT3, MAT8, MAT9, MATDIGI, MATG, MATHE, MATHP, MATNLE, MATORT, MATPE1, MATSMA, MATUSR, MCOHE, MIXTURE, and MATD* entries.
2. If G1Z and G2Z values are specified as zero or blank, then transverse shear flexibility calculations will not be performed, which is equivalent to zero shear flexibility (i.e., infinite shear stiffness). If MAT8 is referenced by Advanced Nonlinear Element, G1Z and G2Z must be positive.
3. An approximate value for G1Z and G2Z is the in-plane shear modulus G12.  If test data are not available to accurately determine G1Z and G2Z for the material and transverse shear calculations are deemed essential; the value of G12 may be supplied for G1Z and G2Z.  In SOL 106, linear and nonlinear elastic material properties in the residual structure will   be updated as prescribed in the TEMPERATURE Case Control command.
4. Xt, Yt, and S are required for composite element failure calculations when requested in the FT field of the PCOMP/PCOMPG entry.  Xc and Yc are also used but not required.
5. TREF and GE are ignored if this entry is referenced by a PCOMP/PCOMPG entry.
6. TREF is used in two different ways (See Remarks   and   of TEMPERATURE Case Control entry for details.):
     - Except for SOL106 and SOL400 nonlinear analysis, TREF is used as the reference temperature for the calculation of thermal loads. TEMPERATURE(INITIAL) may be used for this purpose, in which case, TREF is ignored.
     - In SOL106 and SOL400 nonlinear analysis, TREF is used only for the calculation of a temperature-dependent thermal expansion coefficient. The reference temperature for the calculation of thermal loads is obtained from the TEMPERATURE(INITIAL) set selection. See   in Remark 10 of the MAT1 description.
7. If PARAM,W4 is not specified, GE is ignored in transient analysis.  See  .
8. In nonlinear static analysis (SOL 106) the QUAD4 and TRIA3 thermal loads are computed using the secant (default) method. To use the more accurate integral method, specify ‘PARAM,EPSILONT,INTEGRAL’ in bulk data. See  .
9. If MAT8 with Hashin is used in SOL 400 with PSLDN1 then Hashin FT will be ignored with an appropriate warning message to include MATF instead.
