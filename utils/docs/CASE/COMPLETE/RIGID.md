## [RIGID (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.RIGID.Case.xhtml) - Rigid Element Method

Selects rigid elements processing method for RBAR, RBAR1, RJOINT, RROD, RTRPLT, RTRPLT1, RBE1, RBE2, and RBE3.

#### Format:

![casecontrol4a01280.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01280.jpg?_LANG=enus)  

#### Example:

```nastran
RIGID=LAGRAN
```

```text
┌───────────┬──────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                  │
├───────────┼──────────────────────────────────────────────────────────┤
│ LINEAR    │ Selects the linear elimination method.                   │
├───────────┼──────────────────────────────────────────────────────────┤
│ LAGRAN    │ Selects the Lagrange multiplier method.                  │
├───────────┼──────────────────────────────────────────────────────────┤
│ LGELIM    │ Selects the Lagrange multiplier method with elimination. │
└───────────┴──────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The RIGID command must be above the SUBCASE level.
2. The RIGID command can be used in SOLs 101, 103, 105, and 400 only. For all other solution sequences, only RIGID=LINEAR is available.
3. If the RIGID command is not specified in the Case Control Section, RIGID=LINEAR is used for all solution sequences except SOL 400. For SOL 400,  RIGID=LAGRAN is used. If the RIGID command is specified, the full command must be specified, including  the right hand side.
4. RIGID=LGELIM is not available for SOL 400.
5. LINEAR processing will not compute thermal loads. Also, for SOLs 103 and 105, LINEAR processing will not compute differential stiffness. In order to compute thermal load or differential stiffness, the LAGRAN or LGELIM methods must be used.
6. For SOL 400, the LINEAR rigid elements are valid for small rotation only. The LAGRAN method is valid for both small and large rotation (parameter LGDISP=1).
7. For the LINEAR method, the dependent DOFs are eliminated and placed in the mp-set. For the LAGRAN method, both independent and dependent DOFs are placed in the l-set. Lagrange multiplier DOFs are created internally for the dependent DOFs and placed in l-set. For the LGELIM method, the LAGRAN rigid elements are created first. Then, both the Lagrange DOFs and the dependent DOFs are eliminated, and the dependent DOFs are placed in the mr-set. Both the mp-set and mr-set are subsets of the m-set. See  .
8. Between LAGRAN and LGELIM, LAGRAN is the preferred method. LGELIM is a backup method if difficulty is encountered using the LAGRAN method.
9. The parameters LMFACT and PENFN can be used as scale factor and penalty function, respectively, for the LAGRAN method of processing.
10. In a SOL 400 analysis with CWELD, CFAST, and/or CSEAM elements Nastran internally creates RBE3 elements. These internal RBE3 elements respond in the same way to the RIGID command as any other rigid body elements that may have been defined in the model. Therefore the RIGID command also has an effect on the behavior of CWELD and CFAST elements in a SOL 400 analysis.
     For "ANALYSIS=NLSTAT" or "ANALYSIS=NLTRAN", the generated RBE3 constraints become Lagrange elements and will undergo large rotation. For "ANALYSIS=NLTRAN" with initial conditions (IC=n) in case control that cause large initial stresses in the structure at time t=0, the case control entry RIGID needs to have the value "RIGID=LINEAR." If "PARAM, OLDWELD, YES" is specified, the CSEAM is considered a linear element.
11. For external superelements, both the Case Control Command EXTSEOUT and the PARAM, EXTOUT, REQUIRE a value of RIGID=LINEAR (the default for non SOL400 solution sequences) when running non SOL 400 jobs.
12. When creating superelements in SOL 400, RIGID=LAGRAN produces incorrect answers, RIGID-LINEAR should be used or put the rigid elements into the residual.
13. When RIGID=LAGRAN is used, one may observe SWM 4968, indicating negative terms on multiple DOF which is due to the Lagrange multiplier. This message may be ignored and an accurate solution will be obtained.
14. When RIGID=LAGRAN is used, the CASI iterative solver may fail to converge or terminate, one should switch to a direct solver.
15. For the Lagrange method, the thermal expansion effect will be computed, if user supplies the thermal expansion coefficient ALPHA, and the thermal load is requested by the TEMPERATURE(INITIAL) and TEMPERATURE(LOAD) Case Control commands. The average temperature of the connected grid points is used as the temperature of the rigid body element. In this case, for the Lagrange method, PARAM, BAILOUT, -1 is activated within the solver.
16. For coupled thermal-mechanical analysis, only RIGID=LINEAR is available.
