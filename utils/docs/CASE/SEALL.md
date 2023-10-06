## [SEALL (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SEALL.Case.xhtml) - Superelement Generation and Assembly

Specifies the superelement identification numbers of Phase 1 processing in which all matrices and loads are generated and assembled. Controls execution of the solution sequence.

#### Format:

![casecontrol4a01298.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01298.jpg?_LANG=enus)  

#### Examples:

```nastran
SEALL=ALL
SEALL=7
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Generate and assemble all superelements.                                                           │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command. Only superelements with           │
│           │ identification numbers that appear on this SET command will be generated and assembled (Integer  > │
│           │  0).                                                                                               │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i         │ Identification number of a single superelement that will be generated and assembled (Integer  >    │
│           │ 0).                                                                                                │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command, if present, must be located before the first SUBCASE command.
2. Zero (0) is the identification number of the residual structure, and can only appear as a member of a SET.
3. For a further discussion of this command, see   in the  MSC Nastran Reference Guide .
4. If i is used, the superelement identification number must be unique with respect to any SET identification numbers used.
5. This command combines, in one command, the functions of the SEMG, SELG, SEKR, SELR, and SEMR commands.
6. This command does not control superelement data recovery (Phase 3). See the   Case Control command description.
7. SEALL=ALL is the default but can be overridden by specifying any of the following Phase 1 commands: SEALL, SEMG, SELG, SEKR, SELR, or SEMR.
