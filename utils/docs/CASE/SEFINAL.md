## [SEFINAL (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SEFINAL.Case.xhtml) - Final Superelement for Assembly

Specifies the superelement identification number for the final superelement to be assembled.

#### Format:

![casecontrol4a01308.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01308.jpg?_LANG=enus)  

#### Example:

```nastran
SEFINAL=14
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a previously appearing SET command. Each superelement identification number │
│           │ appearing on the SET command must belong to a disjoint model (Integer  >  0).                     │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i         │ Identification number of the final superelement to be assembled (Integer  >  0).                  │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If this command is not present, the program selects the order of the superelements for assembly operations.
2. This command, if present, must be located before the first SUBCASE command.
3. If i is used, the superelement identification number must be unique with respect to any SET identification numbers used.
4. This command can be used on restarts to ensure that minor modeling changes do not also change the processing order. For this usage, inspect the SEMAP table to determine which superelements were final superelements on the prior run.
5. See the  MSC Nastran Handbook for Superelement Analysis  for a further discussion of this command.
