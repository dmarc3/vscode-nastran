## [SERESP (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SERESP.Case.xhtml) - Superelement Response Sensitivity

Specifies the superelement identification numbers for which the design sensitivity matrices will be generated.

#### Format:

![casecontrol4a01320.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01320.jpg?_LANG=enus)  

#### Examples:

```nastran
SERESP=ALL
SERESP=18
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Requests design sensitivity matrix generation for all superelements. This is the default value if │
│           │ SERESP is missing.                                                                                │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command. Design sensitivity matrices will │
│           │ be generated for superelements with identification numbers that appear on this SET command        │
│           │ (Integer  >  0).                                                                                  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i         │ Identification number of a single superelement for which the design sensitivity matrix will be    │
│           │ generated.                                                                                        │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command, if present, then it must be located before the first SUBCASE command.
2. Zero (0) is the identification number of the residual structure, and can only appear as a member of a SET.
3. For a further discussion of this command, see the  MSC Nastran Reference Guide .
4. If i is used, the superelement identification number must be unique with respect to any SET identification numbers used.
5. If both the SEDV and SERESP commands are not present, then the design variable processing and design sensitivity matrix generation will be performed for all superelements.
