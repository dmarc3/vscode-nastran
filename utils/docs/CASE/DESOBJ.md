## [DESOBJ (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.DESOBJ.Case.xhtml) - Design Objective

Selects the DRESP1, DRESP2 or DRESP3 entry to be used as the design objective.

#### Format:

![casecontrol4a00844.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00844.jpg?_LANG=enus)  

#### Examples:

```nastran
DESOBJ=10
DESO=25
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                  │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ MIN       │ Specifies that the objective is to be minimized.                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ MAX       │ Specifies that the objective is to be maximized.                                         │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a DRESP1, DRESP2 or DRESP3 Bulk Data entry (Integer  >  0). │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. A DESOBJ command is required for a design optimization task and is optional for a sensitivity task. Only one DESOBJ command may appear in a Case Control Section.
2. The referenced DRESPi entry must define a scalar response (e.g., WEIGHT or VOLUME).
3. If the DESOBJ command refers to a global response, such as weight, it should appear above the first subcase. If the DESOBJ command refers to a subcase-dependent response such as an element stress, it should appear in that subcase. If it refers to a subcase dependent response but is inserted above the first subcase, it will select the response from the first subcase for the objective and ignore the responses in subsequent subcases.
4. Using DREPS2 with weight factors, SOL200 can support multiple objective optimization.
5. MSC Nastran MultiOpt  utility supports Multi Model Optimization (MMO) and Global Optimization (GO), see  Design Sensitivity and Optimization User’s Guide  
