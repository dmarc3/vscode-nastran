## [REPCASE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.REPCASE.Case.xhtml) - Repeat Output Subcase Delimiter

Delimits and identifies a repeated output subcase.

#### Format:

```nastran
REPCASE=n
```

#### Example:

```nastran
REPCASE=137
```

```text
┌───────────┬────────────────────────────────────────────────┐
│ Describer │ Meaning                                        │
├───────────┼────────────────────────────────────────────────┤
│ n         │ Subcase identification number. (Integer  >  1) │
└───────────┴────────────────────────────────────────────────┘
```

#### Remarks:

1. n must be strictly increasing (i.e., must be greater than all previous subcase identification numbers).
2. REPCASE defines a subcase that is used to make additional output requests for the previous real subcase. This command is required because multiple output requests for the same item are not permitted in the same subcase.
3. One or more repeated subcases (REPCASEs) must immediately follow the subcase (SUBCASE) to which they refer.
4. REPCASE may be used only in statics and normal modes analysis. In normal modes analysis, output for only one mode is obtained. This output corresponds to the SUBCASE preceding the REPCASE.
5. If the referenced subcases contain thermal loads or element deformations, the user must define the temperature field in the REPCASE with a TEMP(LOAD) Case Control command, or the element deformation state with a DEFORM command.
6. Repcase is not applicable to SOLs 400 and 700.
