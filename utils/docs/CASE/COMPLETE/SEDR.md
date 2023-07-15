## [SEDR (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SEDR.Case.xhtml) - Superelement Data Recovery

Specifies the superelement identification numbers for which data recovery will be performed.

#### Format:

![casecontrol4a01300.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01300.jpg?_LANG=enus)  

#### Examples:

```nastran
SEDR=ALL
SEDR=7
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Performs data recovery for all superelements.                                                    │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command. Data recovery will be performed │
│           │ for superelements with identification numbers that appear on this SET command (Integer  >  0).   │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i         │ Identification number of a single superelement for which data recovery will be performed         │
│           │ (Integer  >  0).                                                                                 │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command, if present, must be located before the first SUBCASE command.
2. Zero (0) is the identification number for the residual structure, and can only appear as a member of a SET.
3. For a further discussion of this command, see   in the  MSC Nastran Reference Guide .
4. If i is used, the superelement identification number must be unique with respect to any SET identification numbers used.
5. If this command is not present, data recovery is performed for all superelements for which there are output requests (i.e., the default for this command is SEDR=ALL).
6. The presence of the EXTDROUT Case Control command or the user PARAMeter EXTDROUT forces SEDR=ALL.
