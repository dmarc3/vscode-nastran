## [DBSAVE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.DBSAVE.Case.xhtml) - Saving Control Parameter of Datablocks for Advanced Nonlinear Elements

Selects saving of datablocks of advanced nonlinear elements for static and transient nonlinear analysis in SOL 400.

#### Format:

```nastran
DBSAVE=n
```

#### Example:

```nastran
DBSAVE  =2
SUBCASE=1
    ANALYSIS=HSTAT
SUBCASE=2
    ANALYSIS=NLSTAT
DBSAVE  = -1
SUBCASE=1
    STEP = 1
    ANALYSIS=NLSTAT
    DBSAVE = 1
    STEP = 2
    ANALYSIS=NLSTAT
SUBCASE=2
    ANALYSIS=NLSTAT
SUBCASE=3
    ANALYSIS=NLSTAT
SUBCASE=4
    ANALYSIS=NLSTAT
```

```text
┌───────────┬───────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│ Describer │ Meaning                                           │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ n         │ selected value to control saving of datablocks of │                                                  │
│           │ advanced nonlinear elements (Integer > =          │                                                  │
│           │ -1).(Default=0)                                   │                                                  │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ -1                                                │ No datablocks of advanced nonlinear elements is  │
│           │                                                   │ saved                                            │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ 0                                                 │ Saving datablocks of advanced nonlinear elements │
│           │                                                   │ at the end of each loadcase                      │
├───────────┼───────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│           │ >0                                                │ Saving datablocks of advanced nonlinear elements │
│           │                                                   │ at the every nth output request of results       │
└───────────┴───────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```

#### Remarks:

1. DBSAVE can be applied above all the subcases, within subcases, and steps. DBSAVE above all the subcases is going to be applied to all the subcases.
2. If DBSAVE is present both above subcase and in step, the DBSAVE in step is dominant and used to control datablocks saving in this step.
3. When DBSAVE=-1, advanced nonlinear element can't be used in Linear Perturbation or other analysis step with NLIC.
