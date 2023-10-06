## [HTFLOW (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.HTFLOW.Case.xhtml) - Elemental Heat Flow Output Request

Requests heat flow output at selected structural elements.

#### Format:

![casecontrol4a01076.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01076.jpg?_LANG=enus)  

#### Example:

```nastran
HTFLOW = ALL
HTFLOW = 15
```

```text
┌───────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                         │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT     │ The printer will be the output medium.                                                          │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPRINT   │ Generate, but do not print out, the output.                                                     │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH     │ The punch file will be the output medium.                                                       │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ Heat flow for all structural elements will be output.                                           │
├───────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification of previously appearing SET command. Only structural elements with           │
│           │ identification numbers that appear on this SET command will be included in the heat flow output │
│           │ (Integer  >  0).                                                                                │
└───────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Elemental heat flow output is available for steady state thermal analysis (SOL 101 and SOL 153) and transient thermal analysis (SOL 159).
2. Heat flow is computed from the applied heat loads and the effect of convection and radiation heat transfer on boundary elements (CHBDYE, CHBDYG, and CHBDYP).
3. See Remarks  -  of the descriptions of CHBDYE Bulk Data for the side conventions of solid elements, shell elements, and line elements.
