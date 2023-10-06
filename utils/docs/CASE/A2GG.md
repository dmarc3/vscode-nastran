## [A2GG (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.A2GG.Case.xhtml) - Selects a Direct Input Fluid-Structure Coupling Matrix

Selects a direct input fluid-structure coupling matrix.

#### Format:

```nastran
A2GG = name
```

#### Example:

```nastran
A2GG = AGG0
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────┤
│ name      │ Name of a fluid-structure coupling matrix that is input on the DMIG Bulk Data entry. │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────┘
```
#### Remarks:

1. DMIG entries will not be used unless selected by the A2GG Case Control command.
2. This entry must be above subcase level or in the first subcase.
3. If the A2GG Case Control command selects a DMIG entry, then Nastran will add the selected fluid-structure coupling matrix to the computed coupling matrix. To replace the computed coupling matrix with the selected A2GG matrix, set PARAM,ASCOUP,NO. The user may still define panels with the panel selection procedure.
4. When filling out the DMIG entries: IFO = 1, NCOL = g-size, GJ-column index corresponds to fluid points, CJ = 0, Gi-row index corresponds to structural points, Ci-corresponds to DOF, Ai-the area values.
5. A2GG is supported in dynamic solutions with fluid-structure coupling.
6. Only one A2GG command should be used.
