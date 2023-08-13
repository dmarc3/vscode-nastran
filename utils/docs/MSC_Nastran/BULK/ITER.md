## [ITER](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/TOC.ITER.xhtml) - Iterative Solver Options

Defines options for the iterative solver in SOLs 101, 106, 108, 111, 153, 200 and 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ITER    SID                                                             +
+       OPTION1VALUE1, OPTION2VALUE2, -etc.-
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
ITER    100                                                             +
+       ITSEPS=1.0E0-7, MSGFLG=YES, PRECOND=BICWELL, IPAD=3
```


```text
┌────────────┬──────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describer  │ Meaning                                          │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ SID        │ Set identification number. (Integer > 0).        │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ PRECOND    │ Preconditioner option. (Character; Default =     │                                                  │
│            │ “BIC” for real analysis, “BICCMPLX” for complex  │                                                  │
│            │ analysis) See Remarks 3. and 4.                  │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ J                                                │ Jacobi                                           │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ JS                                               │ Jacobi with diagonal scaling.                    │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ C                                                │ Incomplete Cholesky.                             │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ CS                                               │ Incomplete Cholesky with diagonal scaling.       │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ RIC                                              │ Reduced incomplete Cholesky.                     │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ RICS                                             │ Reduced incomplete Cholesky with diagonal        │
│            │                                                  │ scaling.                                         │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ BIC                                              │ Block incomplete Cholesky for real problems.     │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ BICCMPLX                                         │ Block incomplete Cholesky for complex problems.  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ CASI                                             │ Element-based third party iterative solver.      │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ USER                                             │ User given preconditioning.  For direct          │
│            │                                                  │ frequency response (SOL 108): a decomposition    │
│            │                                                  │ will be done for 1st frequency and the factor    │
│            │                                                  │ will be used for all subsequent frequencies as a │
│            │                                                  │ preconditioner with the iterative solver. Other  │
│            │                                                  │ solutions require a DMAP alter. Please refer to  │
│            │                                                  │ the MSC Nastran Numerical Methods User’s Guide   │
│            │                                                  │ description of the SOLVIT module.                │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ CONV       │ Convergence criterion.  (Character; Default =    │                                                  │
│            │ “AREX”)                                          │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ AR                                               │ ||r||/||b|| where r is the residual vector of    │
│            │                                                  │ current iteration and b is the initial load      │
│            │                                                  │ vector; internal criterion.                      │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ GE                                               │ Alternative convergence criterion using          │
│            │                                                  │ geometric progression and the differences        │
│            │                                                  │ between two consecutive solution updates;        │
│            │                                                  │ internal criterion.                              │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ AREX                                             │ Same criterion as AR but with the additional     │
│            │                                                  │ consideration of the external convergence        │
│            │                                                  │ criterion.  See Remark 2. (Default).             │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ GEEX                                             │ Same criterion as GE but with the additional     │
│            │                                                  │ consideration of the external convergence        │
│            │                                                  │ criterion.  See Remark 2.                        │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ MSGFLG     │ Message flag.  (Character; Default = “NO”)       │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ YES                                              │ Messages will be printed for each iteration.     │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ NO                                               │ Only minimal messages will be printed from the   │
│            │                                                  │ iterative solver (Default).                      │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ ITSEPS     │ User-given convergence parameter epsilon. (Real  │                                                  │
│            │ > 0.0)                                           │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ Default= 1.E-4                                   │ for PRECOND = "CASI"                             │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ Default= 1.E-8                                   │ for PRECOND = "CASI" with contact in the model   │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ Default= 1.E-6                                   │ for all other PRECOND options                    │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ ITSMAX     │ Maximum number of iterations.  (Integer > 0;     │                                                  │
│            │ Default = N/4 where N is the number of rows in   │                                                  │
│            │ the matrix)                                      │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ IPAD       │ Padding value for RIC, RICS, BIC, and BICCMPLX   │                                                  │
│            │ preconditioning. (Integer > 0)                   │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ Default = 0                                      │ for PRECOND = “RIC” or “RICS”                    │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ Default = 2                                      │ for PRECOND = “BIC” for purely three-dimensional │
│            │                                                  │ models and three for two-dimensional and mixed   │
│            │                                                  │ element models.  IPAD may be reset automatically │
│            │                                                  │ by the program to the best value.                │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ Default = 5                                      │ for PRECOND = “BICCMPLX”.                        │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ IEXT       │ Extraction level in reduced incomplete Cholesky  │                                                  │
│            │ preconditioning.  Block structuring method in    │                                                  │
│            │ block incomplete Cholesky preconditioning.       │                                                  │
│            │ (Integer = 0 thought 7; Default = 0)             │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ 0                                                │ Uses USET/SIL tables (Default).                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ 1 - 7                                            │ The default value of 0 is recommended for all    │
│            │                                                  │ problems.  The values 1 - 7 use a heuristic      │
│            │                                                  │ algorithm with a maximum block size equal to     │
│            │                                                  │ IEXT.  Although setting IEXT to a value other    │
│            │                                                  │ than 0 could lead to slightly improved           │
│            │                                                  │ performance or reduced disk space use, it should │
│            │                                                  │ be considered exploratory without the            │
│            │                                                  │ expectation of a benefit.                        │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ PREFONLY   │ Specifies early termination of the iterative     │                                                  │
│            │ solver.  (Integer = 0 or -1; Default = 0)        │                                                  │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ 0                                                │ Runs to completion (Default).                    │
├────────────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│            │ -1                                               │ Terminates after preface giving resource         │
│            │                                                  │ estimates.                                       │
└────────────┴──────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```

#### Remarks:

1. The optional ITER Bulk Data entry is selected by the SMETHOD Case Control command and is only required to override the defaults specified above.
2. The external epsilon is computed as follows:

     ![bulkfgil04066.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkfgil/../../../assets/bulkfgil04066.jpg?_LANG=enus)

     where r is the final residual vector, x is the final solution vector and b is the initial load vector ( r ,  x ) indicates the inner product of  r  and  x  and ( b ,  x ) indicates the inner product of  b  and  x .

3. See the  MSC Nastran Numerical Methods User’s Guide   for more information on these options.
4. The element-based iterative solver is primarily intended for the solution of very large solid element structural analysis problems. The following restrictions apply:
     - SOLs 101, 200 and 400 only.
     - SOL 101 convergence parameter epsilon of 1.E-4 may be too large for some models and a decrease to 1.E-8 may be necessary.
     - Solver selection criteria and parameters cannot vary across subcases.
     - No GENEL elements allowed
     - x2GG/x2PP direct input matrix selection is allowed; however, the matrix size is limited to 100 grid points and must be symmetric.
     - No ASET/OMIT reduction allowed
     - Inertia relief is supported in SOL 101 for PARAM,INREL,-1. A SUPORT entry is required. PARAM,INREL,-2 and -4 are not supported.
     - No transfer functions allowed
     - No RFORCE or PLOADX follower forces allowed
     - Follower force stiffness must be symmetricized
     - No heat transfer allowed
     - DMP is not supported with the CASI solver.

     Only BAR, BEAM, BUSH, ROD, CONMi, CONROD, DAMPi, ELASi, HEXA, MASSi, PENTA, QUAD4, QUAD8, QUADR, SEAM, SHEAR, TRIA3, TRIA6, TRIAR, TETRA, VISC and WELD elements are allowed.

5. GPGPU devices are not supported for iterative methods.
6. If Modules are present then this entry may only be specified in the main Bulk Data section.
