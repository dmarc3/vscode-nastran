## [SELGENERATE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SELGENERATE.Case.xhtml) - Superelement Load Generation

Specifies the superelement identification numbers for which static loads will be generated.

#### Format:

![casecontrol4a01312.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01312.jpg?_LANG=enus)  

#### Examples:

```nastran
SELGENERATE=ALL
SELGENERATE=18
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Generates static loads for all superelements.                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command. Static load matrices will only be │
│           │ generated for superelements with identification numbers that appear on this SET command            │
│           │ (Integer  >  0).                                                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i         │ Identification number of a single superelement for which load matrices will be generated           │
│           │ (Integer  >  0).                                                                                   │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command, if present, must be located before the first SUBCASE command.
2. Zero (0) is the identification number of the residual structure, and can only appear as a member of a SET.
3. For a further discussion of this command, see   in the  MSC Nastran Reference Guide .
4. If i   is used, the superelement identification number must be unique with respect to any SET identification numbers used.
5. SEALL=ALL is the default, but can be overridden by specifying any of the following Phase 1 commands: SEALL, SEMG, SELG, SEKR, SELR, or SEMR.
