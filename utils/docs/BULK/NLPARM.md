## [NLPARM](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NLPARM.xhtml) - Parameters for Nonlinear Static Analysis Control

Defines a set of parameters for nonlinear static analysis iteration strategy. NLSTEP is the preferred option for SOL 400.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLPARM  ID      NINC    DT      KMETHOD KSTEP   MAXITER CONV    INTOUT  +       
+       EPSU    EPSP    EPSW    MAXDIV  MAXQN   MAXLS   FSTRESS LSTOL   +       
+       MAXBIS                          MAXR            RTOLB   MINITER         
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NLPARM  15      5               ITER                                            
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ID        │ Identification number. (Integer > 0)                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NINC      │ Number of increments. See Remark 16. (Integer > 0)                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DT        │ Incremental time interval for creep analysis. See Remark 3. (Real > 0.0; Default = 0.0 for no      │
│           │ creep.)                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KMETHOD   │ Method for controlling stiffness updates. See Remark 4. (Character = “AUTO”, “ITER”, “SEMI”,       │
│           │ “FNT”, or “PFNT”; Default = “AUTO” for SOL 106, “AUTO” for SOL 400 with non-contact analysis, and  │
│           │ “FNT” for SOL 400 with contact analysis.)                                                          │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KSTEP     │ Number of iterations before the stiffness update for ITER method. See Remarks 5. For the FNT and   │
│           │ PFNT usage of KSTEP, please see Remark 18. (Integer > -1; Default = 5 for SOL 106 and 10 for SOL   │
│           │ 400)                                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXITER   │ Limit on number of iterations for each load increment.  See Remark 6. (Integer0; Default = 25)     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ CONV      │ Flags to select convergence criteria.  See Remarks 7., 20., and 21. (Character = “U”, “P”, “W”,    │
│           │ “V”, “N”, “A” or any combination; Default = “PW”. (See Remark 4 for additional default comment.)   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ INTOUT    │ Intermediate output flag.  See Remark 8. (Character = “YES”, “NO”, “ALL” or Integer > 0 for SOL    │
│           │ 400 only; Default = NO)                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EPSU      │ Error tolerance for displacement (U) criterion. See Remarks 4., 16., 17. and 19. (Real > 0.0;      │
│           │ Default = 1.0E-2)                                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EPSP      │ Error tolerance for load (P) criterion. See Remarks 4., 16. and 17. (Real > 0.0; Default = 1.0E-2) │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ EPSW      │ Error tolerance for work (W) criterion. See Remarks 4., 16., 17. and 19. (Real > 0.0;              │
│           │ Default = 1.0E-2)                                                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXDIV    │ Limit on probable divergence conditions per iteration before the solution is assumed to diverge.   │
│           │  See Remark 9. (Integer0; Default = 3)                                                             │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXQN     │ Maximum number of quasi-Newton correction vectors to be saved on the database.  See Remark 10.     │
│           │ (Integer > 0; Default = MAXITER for all methods except PFNT. For PFNT, Default = 0)                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXLS     │ Maximum number of line searches allowed for each iteration.  See Remark 11. (Integer > 0;          │
│           │ Default = 4 for all methods except PFNT. For PFNT, Default = 0)                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FSTRESS   │ Fraction of effective stress  used to limit the subincrement size in the material routines. See    │
│           │ Remark 12. (0.0 < Real < 1.0; Default = 0.2)                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LSTOL     │ Line search tolerance. See Remark 12. (0.01 < Real < 0.9; Default = 0.5)                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXBIS    │ Maximum number of bisections allowed for each load increment.  See Remark 13. (-10 < MAXBIS < 10;  │
│           │ Default = 5 except for MAXITER < 0; Default = 0 if MAXITER < 0)                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MAXR      │ Maximum ratio for the adjusted arc-length increment relative to the initial value.  See Remark 14. │
│           │ (1.0 < MAXR < 40.0; Default = 20.0)                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RTOLB     │ Maximum value of incremental rotation (in degrees) allowed per iteration to activate bisection.    │
│           │  See Remark 15. (Real > 2.0; Default = 20.0)                                                       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MINITER   │ Minimum number of iterations for each increment, SOL 101 with contact and SOL 400 only. (Integer > │
│           │ 0; Default = 1; In contact analysis, Default = 2) When high accuracy is required, it is also       │
│           │ recommended to set MINITER = 2.                                                                    │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The NLPARM entry   is   selected by the Case Control command NLPARM = ID. Each solution subcase requires an NLPARM command.
2. In cases of static analysis (DT = 0.0) using Newton methods, NINC is the number of equal subdivisions of the load change defined for the subcase. Applied loads, gravity loads, temperature sets, enforced displacements, etc., define the new loading conditions. The differences from the previous case are divided by NINC to define the incremental values.  In cases of static analysis (DT = 0.0) using arc-length methods, NINC is used to   determine the initial arc-length for the subcase, and the number of load subdivisions will not be equal to NINC. In cases of creep analysis (DT > 0.0), NINC is the number of time step increments.
3. For creep analysis, the unit of DT must be consistent with the unit used on the CREEP entry that defines the creep characteristics.  Total creep time for the subcase or step is DT multiplied by the value in the field NINC; i.e., DT*NINC. For SOL 400 with advanced nonlinear elements (elements with PSLDN1, PSHLN1, etc.) for creep analysis, if the total time does not equal 1.0, then the NLSTEP Bulk Data entry must be used.
4. The stiffness update strategy is selected in the KMETHOD field.
     - If the AUTO option is selected, the program automatically selects the most efficient strategy based on convergence rates. At each step the number of iterations required to converge is estimated. Stiffness is updated, if (i) estimated number of iterations to converge exceeds MAXITER, (ii) estimated time required for convergence with current stiffness exceeds the estimated time required for convergence with updated stiffness, and (iii) solution diverges. See Remarks  9.  and  13.  for diverging solutions.
     - If the SEMI option is selected, the program for each load increment (i) performs a single iteration based upon the new load, (ii) updates the stiffness matrix, and (iii) resumes the normal AUTO option.
     - If the ITER option is selected, the program updates the stiffness matrix at every KSTEP iterations and on convergence if KSTEP  <  MAXITER.  However, if KSTEP > MAXITER, stiffness matrix is never updated.  Note that the modified Newton-Raphson iteration method is obtained by selecting the ITER option and KSTEP = MAXITER. The "U" convergence test is not used if ITER-1 is selected.
     - If the FNT option is selected, the program will use the full Newton iteration method for which the stiffness matrix will be updated at every iteration. FNT option is available for SOL 400 only. For SOL 106, please use “KMETHOD=ITER and KSTEP=1” instead. In comparison with the PFNT method, the defaults for FNT are EPSU=0.01, EPSW=0.01 and MAXLS=4. See Remark 18.
     - If the PFNT option is selected, the program will use the Pure Full Newton iteration method. The PFNT method is the same as the FNT method except that the defaults for PFNT method are internally set as EPSU=-0.01, EPSW=-0.01, and MAXLS=0. The PFNT method is available for SOL 400 only. See Remark 18.
5. For AUTO and SEMI options, the stiffness matrix is updated on convergence if KSTEP is less than the number of iterations that were required for convergence with the current stiffness.
6. The number of iterations for a load increment is limited to MAXITER.  If the solution does not converge in MAXITER iterations, the load increment is bisected and the analysis is repeated.  If the load increment cannot be bisected (i.e., MAXBIS is attained or MAXBIS = 0) and MAXDIV is positive, the best attainable solution is computed and the analysis is   continued to the next load increment.  One best solution is computed for SOL 106 and 4 best solutions are computed for SOL 400. The analysis is terminated if the solution still diverges. If MAXDIV is negative, the analysis is terminated immediately.

     For SOL 400 only, MAXITER can be negative. If MAXITER is negative, the solution is continued to the end of the current step, even if the solution is divergent. In this case, the best attainable solution is computed for each load increment. The default for MAXBIS = 0, if MAXITER < 0. Also, for SOL 400, the value of MAXITER for the AUTO method is an approximation. The program will try to obtain a converged solution if it senses the solution can converge.

7. The test flags (U = displacement error, P = load equilibrium error, W = work error, V = vector component method, N = length method, and A = auto switch) and the tolerances (EPSU, EPSP, and EPSW) define the convergence criteria.  All the requested criteria (combination of U,   P, W, V and/or N) are satisfied upon convergence.  For SOL 400, if the U criterion is selected together with P or W, then for the first iteration of a load increment, the U criterion will not be checked. For SOL 400 if CONV = ‘blank’ the code will use a default of “UPW” if no contact analysis and “PV” if a contact analysis is performed. See the  MSC Nastran Handbook for Nonlinear Analysis  for more details on convergence criteria. For V and N, see Remark   For A, see Remark 
8. INTOUT controls the output requests for displacements, element forces and stresses, etc.  YES or ALL must be specified in order to be able to perform a subsequent restart from the middle of a subcase.

     ```text
     ┌────────┬───────────────────────────────────────────────────────┐
     │ INTOUT │ Output Processed                                      │
     ├────────┼───────────────────────────────────────────────────────┤
     │ YES    │ For every computed load increment.                    │
     ├────────┼───────────────────────────────────────────────────────┤
     │ NO     │ For the last load of the subcase or step.             │
     ├────────┼───────────────────────────────────────────────────────┤
     │ ALL    │ For every computed and user-specified load increment. │
     └────────┴───────────────────────────────────────────────────────┘
     ```

     - For the Newton family of iteration methods (i.e., when no NLPCI command is specified), the option ALL is equivalent to option YES since the computed load increment is always equal to the user-specified load increment.
     - For SOL 400 only, if the adaptive time stepping scheme is used (i.e., when a NLADAPT Bulk Data entry with the same ID is specified), INTOUT is allowed to be Integer > 0. In this case, the load step is divided into INTOUT increments for output. For example, if INTOUT=5, the output will be at load increments 0.2, 04, 0.6, 08, and 1.0. Please note that INTOUT defines only the output load increments, which are different from the analysis increments. The analysis load increment size is smaller than or equal to the output load increment size.
     - For arc-length methods (i.e., when the NLPCI command is specified) the computed load increment in general is not going to be equal to the user-specified load increment, and is   not known in advance. The option ALL allows the user to obtain solutions at the desired intermediate load increments.

9. The ratio of energy errors before and after the iteration is defined as divergence rate  ![bulkno06110.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06110.jpg?_LANG=enus) , i.e.,

     ![bulkno06112.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06112.jpg?_LANG=enus)  

     Depending on the divergence rate, the number of diverging iteration (NDIV) is incremented as follows:

     If  ![bulkno06114.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06114.jpg?_LANG=enus)  or  ![bulkno06116.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06116.jpg?_LANG=enus) , then NDIV = NDIV + 2

     If  ![bulkno06118.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06118.jpg?_LANG=enus) , then NDIV = NDIV + 1

     The solution is assumed to diverge when NDIV  >  |MAXDIV|.  If the solution diverges and the load increment cannot be further bisected (i.e., MAXBIS is attained or MAXBIS is zero), the stiffness is updated based on the previous iteration and the analysis is continued.  If the solution diverges again in the same load increment while MAXDIV is positive, the best solution is computed and the analysis is continued to the next load increment.  If MAXDIV is negative, the analysis is terminated on the second divergence.

10. The BFGS update is   performed if MAXQN > 0.  As many as MAXQN quasi-Newton vectors can be accumulated.  The BFGS update with these QN vectors provides a secant modulus in the search direction.  If MAXQN is reached, no additional ON vectors will be accumulated.  Accumulated QN vectors are purged when the stiffness is updated and the accumulation is resumed.
11. The line search is performed as required, if MAXLS > 0.  In the line search, the displacement increment is scaled to minimize the energy error.  The line search is   not performed if the absolute value of the relative energy error is less than the value specified in LSTOL.
12. The number of subincrements in the material routines (elastoplastic and creep) is determined so that the subincrement size is approximately  ![bulkno06120.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06120.jpg?_LANG=enus)  (equivalent stress).  FSTRESS is also used to establish a tolerance for error correction in the elastoplastic material; i.e.,

     error in yield function <  ![bulkno06122.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06122.jpg?_LANG=enus)

     If the limit is exceeded at the converging state, the program will exit with a fatal message.  Otherwise, the stress state is   adjusted to the current yield surface.

13. The number of bisections for a load increment/arc-length is limited to the absolute value of MAXBIS.  Different actions are taken when the solution diverges depending on the sign of MAXBIS.  If MAXBIS is positive, the stiffness is updated on the first divergence, and the load is bisected on the second divergence.  If MAXBIS is negative, the load is bisected every time the solution diverges until the limit on bisection is reached.  If the solution does not converge after |MAXBIS| bisections, the analysis is continued or terminated depending on the sign of MAXDIV.  See Remark  9.
14. MAXR is used in the adaptive load increment/arc-length method to define the overall upper and lower bounds on the load increment/arc-length in the subcase; i.e.,

     ![bulkno06124.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06124.jpg?_LANG=enus)

     where  ![bulkno06126.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06126.jpg?_LANG=enus)  is the arc-length at step  n  and  ![bulkno06128.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06128.jpg?_LANG=enus)  is the original arc-length.  The arc-length method for load increments is selected by an NLPCI Bulk Data entry.  This entry must have the same ID as the NLPARM Bulk Data entry.

15. The bisection is activated if the incremental rotation for any degree-of-freedom  ![bulkno06130.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06130.jpg?_LANG=enus)  exceeds the value specified by RTOLB.  This bisection strategy is based on the incremental rotation and controlled by MAXBIS.
16. The default for NINC is 10, except if there is a GAP, Line Contact, Heat Transfer or PARAM,NLTOL,0, in which case the default is 1. Default tolerance sets are determined based on model type and desired accuracy. Accuracy is under user control and can be specified on the PARAM, NLTOL entry. For SOL 106, NLTOL’s value is used only if the CONV, EPSU, EPSP and EPSW fields are blank, and if NINC is set to a value of 10 or larger. Otherwise, the NLTOL selection will be overridden. The overridden values are CONV=PW, EPSP=1.0E-3, and EPSW=1.0E-7. For SOL 400, NLTOL’s value is used if the value of CONV, EPSU, EPSP, or EPSW fields are blank. The tables below list tolerances according to NLTOL selections:

```text
┌───────┬───────────────┬──────┬─────────┬────────┬────────┐
│ NLTOL │ Designation   │ CONV │ EPSU    │ EPSP   │ EPSW   │
├───────┼───────────────┼──────┼─────────┼────────┼────────┤
│ 0     │ Very high     │ PW   │ _______ │ 1.0E-3 │ 1.0E-7 │
├───────┼───────────────┼──────┼─────────┼────────┼────────┤
│ 1     │ High          │ PW   │ _______ │ 1.0E-2 │ 1.0E-3 │
├───────┼───────────────┼──────┼─────────┼────────┼────────┤
│ 2     │ Engineering   │ PW   │ _______ │ 1.0E-2 │ 1.0E-2 │
├───────┼───────────────┼──────┼─────────┼────────┼────────┤
│ 3     │ Prelim Design │ PW   │ _______ │ 1.0E-1 │ 1.0E-1 │
├───────┼───────────────┼──────┼─────────┼────────┼────────┤
│ None  │ Engineering   │ PW   │ _______ │ 1.0E-2 │ 1.0E-2 │
└───────┴───────────────┴──────┴─────────┴────────┴────────┘
```

```text
┌───────┬─────────────┬──────┬─────────┬────────┬────────┐
│ NLTOL │ Designation │ CONV │ EPSU    │ EPSP   │ EPSW   │
├───────┼─────────────┼──────┼─────────┼────────┼────────┤
│ 0     │ Very high   │ PW   │ _______ │ 1.0E-3 │ 1.0E-7 │
├───────┼─────────────┼──────┼─────────┼────────┼────────┤
│ 2     │ Engineering │ PW   │ _______ │ 1.0E-3 │ 1.0E-5 │
├───────┼─────────────┼──────┼─────────┼────────┼────────┤
│ None  │ Engineering │ PW   │ _______ │ 1.0E-3 │ 1.0E-5 │
└───────┴─────────────┴──────┴─────────┴────────┴────────┘
```

```text
┌───────┬─────────────┬──────┬─────────┬────────┬────────┐
│ NLTOL │ Designation │ CONV │ EPSU    │ EPSP   │ EPSW   │
├───────┼─────────────┼──────┼─────────┼────────┼────────┤
│ 0     │ Very high   │ PW   │ _______ │ 1.0E-3 │ 1.0E-7 │
├───────┼─────────────┼──────┼─────────┼────────┼────────┤
│ None  │ Very high   │ PW   │ _______ │ 1.0E-3 │ 1.0E-7 │
└───────┴─────────────┴──────┴─────────┴────────┴────────┘
```

```text
┌───────┬───────────────┬──────┬──────┬────────┬────────┐
│ NLTOL │ Designation   │ CONV │ EPSU │ EPSP   │ EPSW   │
├───────┼───────────────┼──────┼──────┼────────┼────────┤
│ 0     │ Very high     │ PW   │ -    │ 1.0E-3 │ 1.0E-3 │
├───────┼───────────────┼──────┼──────┼────────┼────────┤
│ 1     │ High          │ PW   │ -    │ 1.0E-2 │ 1.0E-3 │
├───────┼───────────────┼──────┼──────┼────────┼────────┤
│ 2     │ Engineering   │ PW   │ -    │ 1.0E-2 │ 1.0E-2 │
├───────┼───────────────┼──────┼──────┼────────┼────────┤
│ 3     │ Prelim Design │ PW   │ -    │ 1.0E-1 │ 1.0E-1 │
├───────┼───────────────┼──────┼──────┼────────┼────────┤
│ None  │ Engineering   │ PW   │ -    │ 1.0E-2 │ 1.0E-2 │
└───────┴───────────────┴──────┴──────┴────────┴────────┘
```

```text
┌───────┬─────────────┬──────┬──────┬────────┬────────┐
│ NLTOL │ Designation │ CONV │ EPSU │ EPSP   │ EPSW   │
├───────┼─────────────┼──────┼──────┼────────┼────────┤
│ 0     │ Very high   │ PW   │ -    │ 1.0E-3 │ 1.0E-3 │
├───────┼─────────────┼──────┼──────┼────────┼────────┤
│ 2     │ Engineering │ PW   │ -    │ 1.0E-3 │ 1.0E-3 │
├───────┼─────────────┼──────┼──────┼────────┼────────┤
│ None  │ Engineering │ PW   │ -    │ 1.0E-3 │ 1.0E-3 │
└───────┴─────────────┴──────┴──────┴────────┴────────┘
```

17. The method to compute the energy (work) error is different for SOL 106 and SOL 400. For SOL 106, the energy error is computed based on the residue forces. While, for SOL 400, the energy error computed is the total energy error, which is based on the nonlinear forces acting on the structure. At the start of the iteration, these two methods give approximately the same value. However, near convergence, the SOL 106 method will field a much smaller value than that provided by the SOL 400 method. The difference in these two methods is reflected in the default values shown in Remark   The reason for a new method used in SOL 400 is that it gives the true error of the physical energy. On the other hand, the error computed in SOL 106 has no counter part in the physical world.
18. For FNT and PFNT methods, whether the stiffness matrix will be updated between the convergence of a load increment and the start of the next load increment depends on the value of KSTEP. In this case, KSTEP = -1, ‘BLANK’, or 1. A user fatal error will be issued if other value is input. If KSTEP = -1, the stiffness matrix will not be updated. If KSTEP = ‘BLANK’, the program will decide whether to update depending element type. If KSTEP = 1, the stiffness matrix will be forced to be updated.
19. If EPSU > 0.0, the displacement error is computed with respect to the total displacements. If EPSU < 0.0, the displacement error is computed with respect to the delta displacements of a load increment. If EPSW > 0.0, the energy error is computed with respect to the total energy. If EPSW < 0.0, the energy error is computed with respect to the delta energy of a load increment. The options EPSU < 0.0 and EPSW < 0.0 are available for SOL 400 only.
20. V and N are additional methods for convergence checking using the displacement (U) and/or load (P) criteria. V stands for vector component checking. In this method, convergence checking is performed on the maximum vector component of all components in the model. N stands for length checking. In this method, the length of a vector at a grid point is first computed by the SRSS (square root of the sum of the squares) method. Then convergence checking is performed on the maximum length of all grid points in the model. For example, if CONV=UV, then V checking method will be performed with the U criteria, i.e., the maximum displacement component of all displacement components in the model is used for convergence checking. For V and N, the EPSU is always negative, i.e., the error is computed with respect to the delta displacements of a load increment, even if positive value is requested by users. CONV=V is the same as CONV=UPV. If both V and N are specified; V will take precedence over N. For example, CONV=VN is the same as CONV=V.

     By default, for UPV or UPN, separate checks are made over force and moment vectors, and translation and rotation vectors. While the force/translation check is valid always, the moment or rotation check is only valid for 6 DOF elements (beams, shells, etc.). In certain cases (i.e., simply supported or hinged structures where moments are numerically small, small rotation problems), it may be beneficial to turn off the additional convergence testing done for moments and/or rotations.

21. For SOL 400, the convergence checking flag “A” is implemented. “A” means automatically switching to an appropriate convergence checking flag if an unappropriated one is selected for a particular problem. For example, for the problem of stress-free contact analysis, the convergence checking flag PV is inappropriate because this may result of zero divided by zero in convergence checking computation. In this case, PV is switched to UV automatically if A is selected and the residual force is small, i.e.,  ![bulkno06132.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06132.jpg?_LANG=enus) . The legal combinations for A and PA, UA, WA, PVA, UVA, PNA, and UNA. The rules for auto-switching are that P is switched to U, U is switched to P, and W is switched to UP. For example,  ![bulkno06134.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06134.jpg?_LANG=enus) ,  ![bulkno06136.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/../../../assets/bulkno06136.jpg?_LANG=enus) , etc. For all other combinations, the A selection is ignored, for example, UPA is the same as UP.
22. For SOL 101 contact, NLPARM can be used to control nonlinear solution process, such as the number of load increments. Since the only source of nonlinearity comes from contact, some fields, however, are neither relevant to the iterative solution nor considered as user-controllable. These fields include DT(=0.0), KMETHOD(=AUTO), KSTEP(=500), INTOUT(=NO) and MAXLS(=0). NLPARM is not required for running SOL 101 contact jobs. If it is not provided by the user, Nastran will create one. All the values of its fields are printed in F06 file under N O N - L I N E A R   I T E R A T I O N   S O L U T I O N   C O N T R O L   P A R A M E T E R S. Listed below are the remaining defaults for SOL 101 contact analysis.

```text
┌──────┬─────────┬──────┬────────┬───────┬─────────┬───────┬────────┬──────┬───────┬─────────┐
│ NINC │ MAXITER │ CONV │ MAXDIV │ MAXQN │ FSTRESS │ LSTOL │ MAXBIS │ MAXR │ RTOLB │ MINITER │
├──────┼─────────┼──────┼────────┼───────┼─────────┼───────┼────────┼──────┼───────┼─────────┤
│ 10   │ 25      │ “PV” │ 3      │ 0     │ 0.2     │ 0.5   │ 5      │ 20.0 │ 20.0  │ 2       │
└──────┴─────────┴──────┴────────┴───────┴─────────┴───────┴────────┴──────┴───────┴─────────┘
```

Note that the defaults for EPSU, EPSP and EPSW are different for NINC < 10 and NINC  ³  10.

```text
┌───────────┬───────┬───────┬───────┐
│           │ EPSU  │ EPSP  │ EPSW  │
├───────────┼───────┼───────┼───────┤
│ NINC < 10 │ 1.e-3 │ 1.e-3 │ 1.e-7 │
├───────────┼───────┼───────┼───────┤
│ NINC ³ 10 │ 1.e-2 │ 1.e-2 │ 1.e-2 │
└───────────┴───────┴───────┴───────┘
```

23. If Modules are present then this entry may only be specified in the main Bulk Data section.
