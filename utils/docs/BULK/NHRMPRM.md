## [NHRMPRM](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.NHRMPRM.xhtml) - Parameters for Nonlinear frequency response analysis (SOL 128)

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NHRMPRM PARAM1  VAL1    PARAM2  VAL2                                            
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
NHRMPRM MNCSF   3       NLHDIAG 1                                               
```

```text
┌──────────┬───────────────┬───────────────────────────────────────────────────┐
│ Var Name │ Type/ Default │ Description                                       │
├──────────┼───────────────┼───────────────────────────────────────────────────┤
│ NLHRED   │ I = -1        │ Use reduction for nonlinear analysis.             │
├──────────┼───────────────┼───────────────────────────────────────────────────┤
│ NHPLUS   │ I = 20        │ Number of extra points to avoid aliasing.         │
├──────────┼───────────────┼───────────────────────────────────────────────────┤
│ NLHTOL   │ R = 1.0E-5    │ Tolerance for convergence.                        │
├──────────┼───────────────┼───────────────────────────────────────────────────┤
│ NLHTWK   │ R = 1.1       │ Push-off factor for line search in case           │
│          │               │ convergence fails.                                │
├──────────┼───────────────┼───────────────────────────────────────────────────┤
│ MXICODE0 │ I = 5         │ If solution fails to converge for mxicode0 steps, │
│          │               │ new trial displacement is used.                   │
├──────────┼───────────────┼───────────────────────────────────────────────────┤
│ TICPNCH  │ I = 0         │ If TICPNCH = -1 then write a TIC Bulk Data entry  │
│          │               │ for each degree-of-freedom in the d-set to be     │
│          │               │ included in a subsequent transient analysis run.  │
├──────────┼───────────────┼───────────────────────────────────────────────────┤
│ MNCSF    │ I = 1000      │ Max number of non-converged sequential            │
│          │               │ frequencies for RESET.                            │
├──────────┼───────────────┼───────────────────────────────────────────────────┤
│ MFRINT   │ R = 10.       │ Maximum frequency interval for RESET.             │
├──────────┼───────────────┼───────────────────────────────────────────────────┤
│ NLHDIAG  │ I = 0         │ Output additional diagnostic messages.            │
├──────────┼───────────────┼───────────────────────────────────────────────────┤
│ CONTP    │ I = 0         │ Continuation procedure.                           │
└──────────┴───────────────┴───────────────────────────────────────────────────┘
```

#### Remarks:

1. Following parameters can also be specified using PARAM option: NLHRED, NHPLUS, NLHTOL, NLHTWK, TICPNCH and MXICODE0.
See description under PARAM for more details about these variables.
In case a parameter is specified in NHRMPRM and also using PARAM, the value specified using PARAM entry is used.
2. Parameters MNCSF or MFRINT can be used to reset initial condition in case of non-convergence. If both these parameters are specified, the condition which is satisfied first is used.
3. CONTP =1 is used to initiate continuation procedure method. In this case, following parameters are not used in the analysis: NLHRED, MNCSF, MFRINT. Currently, the CONTP option is available for frequency-independent analysis only.
Here, NLHRED is set to 0 to not use the reduction method. And initial condition for the continuation procedure is determined using the results from two previously converged solutions.
