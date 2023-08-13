## [SEDV (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SEDV.Case.xhtml) - Superelement Design Variable Processing

Specifies the superelement identification numbers for which the design variables will be processed.

#### Format:

![casecontrol4a01302.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01302.jpg?_LANG=enus)  

#### Examples:

```nastran
SEDV=ALL
SEDV=18
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                          │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Requests design variable processing for all superelements. This is the default value if SEDV is  │
│           │ missing in the file.                                                                             │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command. Design variable processing will │
│           │ be performed for superelements with identification numbers that appear on this SET command       │
│           │ (Integer  >  0).                                                                                 │
├───────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i         │ Identification number of a single superelement for which design variable processing will be      │
│           │ performed (Integer  >  0).                                                                       │
└───────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command, if present, must be located before the first SUBCASE command.
2. Zero (0) is the identification number of the residual structure, and can only appear as a member of a SET.
3. For a further discussion of superelement sensitivity analysis, see the  MSC.Nastran Design Sensitivity and Optimization User’s Guide .
4. If i is used, the superelement identification number must be unique with respect to any SET identification numbers used.
5. If both the SEDV and SERESP commands are not present, then the design variable processing and design sensitivity matrix generation will be performed for all superelements.
