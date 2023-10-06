## [NLLOAD (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.NLLOAD.Case.xhtml) - Nonlinear Load Output Request

Requests the form and type of nonlinear load output for transient problems.

#### Format:

![casecontrol4a01188.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01188.jpg?_LANG=enus)    

#### Example:

```nastran
NLLOAD=ALL
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT     │ The printer will be the output medium.                                                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH     │ The punch file will be the output medium.                                                      │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Nonlinear loads for all solution points will be output.                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE      │ Nonlinear loads will not be output.                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of a previously appearing SET command. Only nonlinear loads for points with │
│           │ identification numbers that appear on this SET command will be output (Integer  >  0).         │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Nonlinear loads are output only in the solution (d or h) set.
2. The output is available in SORT2 format only.
3. Both PRINT and PUNCH may be used.
4. NLLOAD=NONE allows overriding an overall output request.
