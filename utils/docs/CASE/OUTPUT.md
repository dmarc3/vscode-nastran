## [OUTPUT (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.OUTPUT.Case.xhtml) - Case Control Delimiter

Delimits the various types of commands for the structure plotter, curve plotter, grid point stress.

#### Format:

![casecontrol4a01238.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01238.jpg?_LANG=enus)  

#### Examples:

```nastran
OUTPUT(POST)
OUTPUT(PLOT)
OUTPUT(XYOUT)
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT      │ Beginning of the structure plotter request. This command must precede all structure plotter       │
│           │ control commands. Plotter commands are described in OUTPUT(PLOT) Commands.                        │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ POST      │ Beginning of grid point stress SURFACE and VOLUME commands. This command must precede all SURFACE │
│           │ and VOLUME commands. These commands are described in OUTPUT(PLOT) Commands.                       │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ XYOUT or  │ Beginning of curve plotter request. This command must precede all curve plotter control commands. │
│ XYPLOT    │ XYPLOT and XYOUT are equivalent. Curve plotter commands are described in X-Y PLOT Commands.       │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The structure plotter request OUTPUT(PLOT), the curve plotter request OUTPUT(XYOUT or XYPLOT), and the grid point stress requests (OUTPUT(POST)) must follow the standard Case Control commands.
2. If OUTPUT is specified without a describer, then the subsequent commands are standard Case Control commands.
3. Case Control commands specified after OUTPUT(POST) are SURFACE and VOLUME.
4. This command must appear at the end of normal Case Control just above the Begin Bulk Command. Any Case Control command, controlling, say, selection and flow of the MSC Nastran run such as TEMP(LOAD), that occurs after this entry, will be ignored.
