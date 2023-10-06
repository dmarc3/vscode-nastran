## [HADAPT (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.HADAPT.Case.xhtml) - Mesh Adaptivity Activation and Control

Specifies Mesh adaptivity control parameters in SOLs 101 and 400.

#### Format:

```nastran
HADAPT=N
```

#### Example:

```nastran
HADAPT=1
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────┤
│ N         │ Identification number for a HADAPTL Bulk Data entry (Integer  >  0). │
└───────────┴──────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The HADAPT command can be used only in SOL 101 or SOL 400 with ANALYSIS=STATICS.
2. In SOL 101, with NO SUPERELEMENTS, the HADAPT command may appear either above all SUBCASEs or within specific SUBCASEs. In the last scenario, only stresses on the solution corresponding to the specific SUBCASE where the HADAPT command has been placed will be used to compute error indicators should the user requests an error indicator based refinement criterion (see Bulk Data entries,   and  ). If superelements are present, then the HADAPT command should appear only in Residual Superelement (SE0) SUBCASE structure.
3. In SOL 400, the HADAPT command can only be placed on a Linear static structural analysis SUBCASE (ANALYSIS=STATICS) either above all STEPS or within each single STEP. All STEPs must be Linear Static structural STEPS (ANALYSIS=STATICS). In other words an adaptive meshing linear analysis cannot be chained with any other analysis type.
4. HADAPT remeshing should only be performed on lower order elements.
