## [CSCALE](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.CSCALE1.xhtml) - Character Scale Factor

Defines scale factor for characters in the plot frame.

#### Format:

```nastran
CSCALE cs
```

#### Example:

```nastran
CSCA 2.0
```

```text
┌───────────┬──────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                              │
├───────────┼──────────────────────────────────────────────────────────────────────┤
│ cs        │ Scale factor applied to characters in the plot frame (Default = .5). │
└───────────┴──────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. CSCALE is used to control the spacing of characters when plots are made with the NASTRAN plotter and postprocessed with the MSC/NASPLOT routine. For example, if the SCALE FACTOR on the NASPLOT data command is 2.0, a value for cs of 0.5 will result in characters of default size (.07 inches) at the regular spacing. A value of 1.8 produces good spacing when using the postprocessing plotter programs NASTPLT, TEKPLT, and NEUPS. On the other hand, to double the size of both the plot and the characters, the SCALE FACTOR and the CSCALE FACTOR on the NASPLOT data command should both be set equal to 2.0.

2. The CSCALE command must immediately precede the PLOTTER command. If a second CSCALE command is specified, then a second PLOTTER command must also be specified.
