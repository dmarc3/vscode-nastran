## [P2G (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.P2G.Case.xhtml) - Direct Input Load Matrix Selection

Selects direct input load matrices.

#### Format:

```nastran
P2G=name
```

#### Example:

```nastran
P2G = LDMIG
P2G = LDMIG1, LDMIG2, LDMIG3
SET 100 = LDMIG, L1, L8 
P2G = 100
P2G = 1.25*LDMIG1, 1.0*LDMIG2, 0.82*LDMIG3
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                             │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ name      │ Name of a P2G matrix to be input on the DMIG Bulk Data entry, or name list with or without factors. │
│           │ See Remark 4. (Character).                                                                          │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Terms are added to the load matrix before any constraints are applied.
2. The matrix must be columnar in form (e.g., Field 4 on DMIG entry, IFO, must contain the integer 9.)
3. A scale factor may be applied to this input using the user parameter PARAM,CP2. See  .
4. The formats of the name list:
     - Names without factor.
     Names separated by a comma or blank.
     - Names with factors.
     Each entry in the list consists of a factor, followed by a star, followed by a name. The entries are separated by a comma or blank. The factors are real numbers. Each name must be paired with a factor including 1.0.
5. SOL 101: P2G should be selected above all subcase. The number of columns specified for NCOL on the DMIG Bulk Data entry must equal the number of subcases.
     SOL 106 and SOL 400: There are two choices. P2G may be selected in every subcase (or step in SOL 400), with NCOL=1. Otherwise, P2G may be selected above the subcases and PARAM,CP2 selected in every subcase.
