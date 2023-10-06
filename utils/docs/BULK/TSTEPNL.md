## [TSTEPNL](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulktuv/TOC.TSTEPNL.xhtml) - Parameters for Nonlinear Transient Analysis

Defines parametric controls and data for nonlinear transient structural or heat transfer analysis.   is intended for SOLs 129, 159, SOLs 400 and 700.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TSTEPNL ID      NDT     DT      NO      METHOD  KSTEP   MAXITER CONV    +       
+       EPSU    EPSP    EPSW    MAXDIV  MAXQN   MAXLS   FSTRESS         +       
+       MAXBIS  ADJUST  MSTEP   RB      MAXR    UTOL    RTOLB   MINITER         
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
TSTEPNL 250     100     .01     1       ADAPT   2       10      PW              
        1.E-2   1.E-3   1.E-6   2       10      2       .02                     
        5       5       0       0.75    16.0    0.1     20.                     
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification number.  (Integer > 0)                                                             │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NDT       │ Number of time steps of value DT.  See Remark 2. (Integer > 3)                                    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DT        │ Time increment.  See Remark 2. (Real > 0.0)                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NO        │ Time step interval for output.  Every NO-th step will be saved for output.  See Remark 3.         │
│           │ (Integer0; Default = 1)                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ METHOD    │ Method for stiffness matrix update and the transient time integration schemes. For SOLs 129 and   │
│           │ 159, only METHOD=ADAPT is allowed and it is also the default. For SOL 400, all options are        │
│           │ allowed. The default is AUTO with non-contact analysis and FNT with contact analysis. See Remark  │
│           │ 4. (Character: “AUTO”, “ITER”, “ADAPT”, “SEMI”, “FNT”, or “PFNT”)                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KSTEP     │ KSTEP is the number of converged bisection solutions between stiffness updates for ADAPT method.  │
│           │ (Default = 2). It is the number of iterations before stiffness updates for ITER method (Default = │
│           │ 10). See Remarks 18. and 19. (Integer > 0).                                                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXITER   │ Limit on number of iterations for each time step.  See Remarks 5., 6., and 18. (Integer0; Default │
│           │ = 10 for ADAPT method and 25 for non-ADAPT methods)                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CONV      │ Flags to select convergence criteria.  See Remarks 7. and 21. (Character; Default = “PW” for SOLs │
│           │ 129 and 159, “UPW” for SOL 400 with non-contact analysis, and “PV” for SOL 400 with contact       │
│           │ analysis.)                                                                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EPSU      │ Error tolerance for displacement (U) criterion. See Remark 20. (Real0.0; Default = 1.0E-2 for all │
│           │ methods except PFTN. For PFTN, Default = -1.0E-2)                                                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EPSP      │ Error tolerance for load (P) criterion.  (Real > 0.0; Default = 1.0E-3 for SOLs 129 and 159,      │
│           │ 1.0E-2 for SOL 400)                                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EPSW      │ Error tolerance for work (W) or energy criterion.  See Remark 20. (Real > 0.0; Default = 1.0E-6   │
│           │ for SOLs 129 and 159, 1.0E-2 for SOL 400 and non-PFNT methods, -1.0E-2 for SOL 400 and PFNT       │
│           │ method)                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXDIV    │ Limit on the number of diverging conditions for a time step before the solution is assumed to     │
│           │ diverge.  See Remark 8. (Integer0; Default = 2)                                                   │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXQN     │ Maximum number of quasi-Newton correction vectors to be saved on the database.  See Remark        │
│           │ 9. (Integer > 0; Default = 10 for all methods except PFNT. For PFNT, Default = 0)                 │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXLS     │ Maximum number of line searches allowed per iteration.  See Remark 9. (Integer > 0; Default = 2   │
│           │ for all methods except PFNT. For PFNT, Default = 0)                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FSTRESS   │ Fraction of effective stress  used to limit the subincrement size in the material routines.  See  │
│           │ Remark 10. (0.0 < Real < 1.0; Default = 0.2)                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXBIS    │ Maximum number of bisections allowed for each time step.  See Remark 11. and 12. (-9 <  Integer   │
│           │ < 9; Default = 5 except for MAXITER < 0 and SOL 400. For MAXITER < 0 and SOL 400, Default = 0)    │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ADJUST    │ Time step skip factor for automatic time step adjustment.  See Remark 13. (Integer > 0; Default = │
│           │ 5)                                                                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MSTEP     │ Number of steps to obtain the dominant period response.  See Remark 14. (10 < Integer < 200;      │
│           │ Default = variable between 20 and 40 for SOL 129 and between 10 and 20 for SOL 400.)              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RB        │ Define bounds for maintaining the same time step for the stepping function during the adaptive    │
│           │ process.  See Remark 14. (0.1 < Real < 1.0; Default = 0.6)                                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXR      │ Maximum ratio for the adjusted incremental time relative to DT allowed for time step adjustment.  │
│           │  See Remark 15. (Real > 1.0; Default = 32.0)                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ UTOL      │ Tolerance on displacement or temperature increment below which a special provision is made for    │
│           │ numerical stability.  See Remark 16. (0.001 < Real < 1.0; Default = 0.1)                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RTOLB     │ Maximum value of incremental rotation (in degrees) allowed per iteration to activate bisection.   │
│           │  See Remark 17. (Real > 2.0; Default = 20.0)                                                      │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MINITER   │ Minimum number of iterations for a load increment, SOL 400 only. (Default = 1 except for the      │
│           │ contact analysis. For contact analysis, Default = 2) It is recommended to set MINITER = 2 when    │
│           │ high accuracy is expected)                                                                        │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```
