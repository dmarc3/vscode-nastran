## [METHOD (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.METHOD.Case.xhtml) - Real Eigenvalue Extraction Method Selection

Selects the real eigenvalue extraction parameters.

#### Format:

![casecontrol4a01144.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01144.jpg?_LANG=enus)  

#### Examples:

```nastran
METHOD=33
METHOD(FLUID)=34
METHOD(COUPLED)=100
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ BOTH         │ The referenced EIGR or EIGRL Bulk Data entry will be applied to both the structure and the fluid   │
│              │ portion of the model (Default).                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STRUCTURE or │ The referenced EIGR or EIGRL Bulk Data entry is applied to the structural or fluid portion of the  │
│ FLUID        │ model.                                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ COUPLED      │ The referenced EIGR or EIGRL Bulk Data entry is applied to the structural and fluid coupled system │
│              │ of the model.                                                                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification number of an EIGR or EIGRL Bulk Data entry for normal modes or modal            │
│              │ formulation, or an EIGB or EIGRL entry for buckling (Integer  >  0).                               │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. An eigenvalue extraction method must be selected when extracting real eigenvalues.
2. If the set identification number selected is present on both EIGRL and EIGR and/or EIGB entries, the EIGRL entry will be used.
3. METHOD(FLUID) and METHOD(STRUCTURE) permits a different request of EIGR or EIGRL for the fluid portion of the model in coupled fluid-structural analysis.
     - If METHOD(STRUCTURE) or METHOD(FLUID) is also specified, then they will override the METHOD(BOTH) selection.
     - The METHOD(FLUID) and METHOD(STRUCTURE) may be specified simultaneously in the same subcase for the residual structure only. Do not specify METHOD(FLUID) in a superelement subcase even if the superelement contains fluid elements.
     - The auto-omit feature (see   in the  MSC Nastran Reference Guide ) is not recommended. Therefore, only those methods of eigenvalue extraction that can process a singular mass matrix should be used; e.g., the EIGRL entry, or MGIV and MHOU on the EIGR entry.
4. METHOD(COUPLED) is only used when STRUCTURE and FLUID COUPLED problem. The corresponding EIGRL or EIGR requires either the frequency range of interest or ND (number of roots desired) entry. The real coupled modes computation is done with combination of Lanczos method and Subspace iteration method.
     METHOD(COUPLED) is recommended for heavy fluid (like liquids) model. When it is applied to the light fluid model, it might require more coupled modes to get the correct result. Real coupled method is also supported in SOL 103, SOL 111, SOL 112, SOL 200 (ANALYSIS) and SOL 400 (ANALYSIS=LINEAR). When METHOD(COUPLED) is used with both METHOD(STRUCTURE) and METHOD(FLUID), real coupled modes computation using Subspace iteration method will use structural and fluid modes for the initial guess of coupled modes computation. This might help to reduce the number of iteration for real coupled modes computation.
