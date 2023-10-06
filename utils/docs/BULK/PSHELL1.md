## [PSHELL1](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkp/TOC.PSHELL1.xhtml) - Properties of shell elements for SOL 700 only

Defines the properties of shell elements with variable shell thickness for SOL 700 only.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSHELL1 PID     MID     FORM    QUAD    NUMB    SHFACT  REF     SPINCOR +       
+       T1      T2      T3      T4      TRANSHR SHRLCK                          
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
PSHELL1 7       2       BLT     GAUSS   5       0.9                             
        10.0    10.0    10.0    10.0                                            
```

```text
┌───────────┬───────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ PID       │ Unique property number. (Integer; Required)       │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ MID       │ Material number. See Remark 2. (Integer;          │                                                  │
│           │ Required)                                         │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ FORM      │ Shell formulation. See Remark 2. (Character;      │                                                  │
│           │ Required)                                         │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ HUGHES                                            │ Hughes-Liu                                       │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ BLT                                               │ Belytschko-Lin-Tsay                              │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ KEYHOFF                                           │ Key-Hoff                                         │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ C0-TRIA                                           │ C0 triangle                                      │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ MEMB                                              │ Membrane element (no bending)                    │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ DUMMY                                             │ Dummy element (only applicable for FSI coupling) │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ QUAD      │ Type of quadrature. (Character; Default = GAUSS)  │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ GAUSS                                             │ Gauss quadrature                                 │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ LOBATTO                                           │ Lobatto quadrature                               │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ NUMB      │ The number of integration points through the      │                                                  │
│           │ thickness. (Integer; Default = 3 for quadrature). │                                                  │
│           │ 1 for membrane element. Maximum value is 5.       │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ SHFACT    │ Shear factor. (Real; Default = 0.83333)           │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ REF       │ Reference surface. (character, default=MID)       │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ TOP                                               │ Reference surface is the top surface.            │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ MID                                               │ Reference surface is the central surface.        │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ BOT                                               │ Reference surface is the bottom surface.         │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ SPINCOR   │ Spin correction. See Remark 5. (Character;        │                                                  │
│           │ default=NO)                                       │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ NO                                                │ No SPINCOR applied                               │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ YES                                               │ SPINCOR is applied                               │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ T1 toT4   │ Element thickness at the grid points. See Remark  │                                                  │
│           │ 4. (Real; Default = 0.0)                          │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ TRANSHR   │ Method of transverse-shear calculation.           │                                                  │
│           │ (Character; See Remark 6.)                        │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ LINEAR                                            │ Linear transverse shear                          │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ CONSTANT                                          │ Constant transverse shear                        │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ CONAPX                                            │ Approximated constant transverse shear           │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ SHRLCK    │ Shear-lock avoidance. (Character; See Remark 6.)  │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ AVOID                                             │ Avoid shear lockup                               │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ NOAVOID                                           │ No avoid                                         │
└───────────┴───────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```

#### Remarks:

1. For constant thickness shell element with three-point Gauss integration, PSHELL entry is recommended.
2. For CQUAD4 elements, the default of FORM for formulation is KEYHOFF.
For CTRIA3 elements, the default of FORM for formulation is CO-TRIA.
3. Property identification number (PID) must be unique.
4. If the thickness T1 is set to blank or 0.0, the thickness of the shell must be defined on the CTRIA3 and CQUAD4 entry.
5. The options for SPINCOR are:

     ```text
     ┌─────┬───────────────────────────────────┐
     │ NO  │ No SPINCOR correction is applied. │
     ├─────┼───────────────────────────────────┤
     │ YES │ SPINCOR correction is applied.    │
     └─────┴───────────────────────────────────┘
     ```

     When SPINCOR = NO, slight asymmetric forces are applied to the shell element’s grid points. This approach is, in general, acceptable up to about 10° in plane shear angle.

6. The following defaults apply:

     ```text
     ┌─────────┬───────────────┬───────────────┬─────────┐
     │         │ BLT           │ HUGHES        │ KEYHOFF │
     ├─────────┼───────────────┼───────────────┼─────────┤
     │ TRANSHR │ Not Available │ Not Available │ LINEAR  │
     ├─────────┼───────────────┼───────────────┼─────────┤
     │ SHRLCK  │ NOAVOID       │ Not Available │ AVOID   │
     └─────────┴───────────────┴───────────────┴─────────┘
     ```
