## [IRLOAD (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.IRLOAD.Case.xhtml) - Nonlinear Inertia Relief Selection (SOL 400 only)

Selects nonlinear inertia relief set for SOL 400

#### Format:

![casecontrol4a01088.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01088.jpg?_LANG=enus)

#### Example:

```nastran
IRLOAD=QLINEAR 
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ QLINEAR   │ Inertia Load Calculation with small displacement (Quasi-Linear) is activated in SOL 400. │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ No Inertia Relief (Default)                                                              │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remark:

1. This command is active only in SOL 400 with ANALYSIS=NLSTATIC and its use requires a set of STATIC supports that constrain all six rigid body motions.
2. IRLOAD=QLINEAR, which has to be applied above to all SUBCASES, is a global case control command and activates the inertia load calculations in SOL 400 for all applied static loads. In nonlinear static analyses (ANALYSIS=NLSTAT), it also activates the inertia relief analysis with small displacement. When IRLOAD=QLINEAR with large displacement (PARAM,LGDISP,1), a fatal error message will be issued. Also superelements in conjunction with IRLOAD=QLINEAR will cause a fatal error.
IRLOAD=NONE (default) deactivates the inertia load calculations.
3. IRLOAD=QLINEAR is ignored by perturbation analyses in SOL 400.
