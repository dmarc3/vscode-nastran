## [SEEXCLUDE (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.SEEXCLUDE.Case.xhtml) - Superelement Matrix and Load Assembly Exclusion

Specifies the superelement identification numbers for which all matrices and loads will not be assembled into the downstream superelement.

#### Format:

![casecontrol4a01304.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01304.jpg?_LANG=enus)  

#### Examples:

```nastran
SEEXCLUDE=ALL
SEEXCLUDE=18
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ All upstream superelements will be excluded.                                                   │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command. Only those superelements with │
│           │ identification numbers that appear on this SET command will be excluded (Integer  >  0).       │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ i         │ Identification number of a single superelement for which matrices will be excluded (Integer  > │
│           │  0).                                                                                           │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command, if present, must be located before the first SUBCASE command.
2. If i is   used, the superelement identification number must be unique with respect to any SET identification numbers used.
3. This command is not meaningful when applied to the residual structure.
4. For a further discussion of this command, see the  MSC Nastran Handbook for Superelement Analysis.
5. If the SEEXCLUDE command is specified in a restart of SOLs 101 through 200, then PARAM,SERST,MANUAL must be specified. Also, the SEKR command must be specified for the superelement immediately downstream from the excluded superelement. For example, if superelement 10 is excluded in the following superelement tree:
,
![casecontrol4a01306.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01306.jpg?_LANG=enus)
     then the user must specify the following commands in the Case Control Section:

```nastran
SEKR = 30
PARAM,SERST,MANUAL
```
