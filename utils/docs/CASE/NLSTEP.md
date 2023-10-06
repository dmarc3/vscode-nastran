## [NLSTEP (Case) ](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.NLSTEP.Case.xhtml) - Nonlinear Control Parameters for Mechanical, Thermal, and Coupled Analysis Selection

Selects integration and output time steps for static and transient nonlinear analysis in SOL 400.

#### Format:

```nastran
NLSTEP=n
```

#### Example:

```nastran
NLSTEP=10
SUBSTEP=1
ANALYSIS=HSTAT
SUBSTEP=2
ANALYSIS=NLSTAT
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                             │
├───────────┼─────────────────────────────────────────────────────────────────────┤
│ n         │ Identification number of a NLSTEP Bulk Data entry. (Integer  >  0). │
└───────────┴─────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. An NLSTEP entry can be selected to execute a nonlinear static or nonlinear transient analysis in SOL 400. A NLSTEP is used in lieu of a NLPARM or both.
2. If a NLSTEP is present  anywhere  in a SUBCASE, then any NLPARM or entries in the SUBCASE  will be ignored.
3. When used for coupled analysis, the NLSTEP must be above the first SUBSTEP command. A  single  NLSTEP entry is  used for all SUBSTEP s of the STEP. (See the above example for use with coupled analysis.)
4. NLSTEP command is only supported in SOL 101 linear contact analysis and SOL 400. If NLSTEP specified, TSTEP/NLPARM command will be ignored.
