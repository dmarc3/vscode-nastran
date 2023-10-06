## [NLIC (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.NLIC.Case.xhtml) - Nonlinear Initial Condition or Preload

Selects a previously executed load increment as the initial conditions or preload for a nonlinear or perturbation STEP in SOL 400.

#### Format:

![casecontrol4a01186.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01186.jpg?_LANG=enus)  

#### Example:

```nastran
NLIC SUBCASE 100 STEP 10 LOADFACT 0.8 
NLIC SUBCASE 100 STEP 10 LOADFACT (t=0.01) 0.66 
NLIC STEP 10 TIME 12.0 
NLIC TIME NEAR 7.8
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SUBCASE   │ Keyword to select the SUBCASE ID                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i         │ Specifies the identification number of a previously executed subcase. (Integer > 0; Default is the │
│           │ subcase where the current NLIC is located).                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STEP      │ Keyword to select the STEP ID.                                                                     │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ j         │ Specifies the identification number of a previously executed STEP (Integer > 0, Default is the     │
│           │ last STEP).                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOADFACT  │ Keyword to select load factor or time. Both keywords are equivalent.                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ TIME      │                                                                                                    │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ f         │ Specifies the load factor of a previously executed load increment in linear or nonlinear static    │
│           │ analysis (Real > 0.0, see Remark 3 for default).                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ T         │ Keyword to select the tolerance.                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NEAR      │ Keyword for the nearest load factor or time to f.                                                  │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ tol       │ Specified the load factor or time tolerance to f. (Real > 0.0; Default = 1.0E-06)                  │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The NLIC command can only point to a load increment whose output flag is on - an available restart point in the static analysis. If NLIC is not pointing to an available restart point, a fatal error will be issued and the job will be terminated.
2. The NLIC can be used in nonlinear static, nonlinear transient and perturbation analysis. If SUBCASE referred in NLIC is not the current SUBCASE, this usage is not recommended. The system(779) = 1 may be used to avoid this usage, which stops the job in this case.
3. For nonlinear transient analysis (ANALYSIS=NLTRAN), NLIC can only appear in the first transient analysis STEP in a SUBCASE. (Note that the first transient analysis step may not be the first step of subcase.) Otherwise, it will be ignored and a warning message will be issued.
4. For linear perturbation analysis, NLIC must point to a previous NLSTATIC step in the same SUBCASE.
5. If NLIC is specified without any of the keywords, or NLIC is not present in a nonlinear STEP or perturbation STEP, the initial condition or PRELOAD is taken from the last available restart point in the immediate previous static step.
6. In the same nonlinear transient step, NLIC cannot appear together with the IC Case Control command. A fatal error message will be issued if NLIC and IC appear in the same step. Please note that IC is meaningful only in the first STEP of a SUBCASE, and the step is a nonlinear transient analysis.
7. When Keyword NEAR is used, the search for the nearest load factor or time is limited inside the specified SUBCASE i STEP j.
8. NLIC can be used in SOL 400 only.
9. If NLIC is used with ANALYSIS=NLSTATIC it may cause convergence problems. If NLIC is used across different subcases: the initial conditions, the deformation, the strains, the stresses, etc., are carried over between Subcases. However, the load is NOT carried over. This can cause an unbalanced load condition that may cause convergence problems.
