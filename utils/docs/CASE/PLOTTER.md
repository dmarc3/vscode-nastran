## [PLOTTER](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.PLOTTER1.xhtml) - Plot File Format

Selects format of plot file for interpretation by plotter postprocessor.

#### Format:

![casecontrol4b01545.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01545.jpg?_LANG=enus)  

#### Example:

```nastran
PLOTTER NAST
```

```text
┌────────────┬──────────────────────────────────────────────────────────────┐
│ Describers │ Meaning                                                      │
├────────────┼──────────────────────────────────────────────────────────────┤
│ NAST       │ Specifies format suitable for Postscript plotters (Default). │
├────────────┼──────────────────────────────────────────────────────────────┤
│ SC         │ Specifies Stromberg-Carlson microfilm plotter format.        │
└────────────┴──────────────────────────────────────────────────────────────┘
```

#### Remark:

1. If no PLOTTER command is specified, then PLOTTER NAST is the default.

2. If “PLOTTER NAST” is specified (or taken by default) and if the format of the PLOT file has been changed to formatted through the use of an ASSIGN statement, plot data will be generated in PostScript mode directly instead of being generated in binary mode.  PostScript plot control information may be specified using the SYS= describer on the ASSIGN statement or by using the SYSFIELD= command-line keyword, specifying the control information using the  PLOT(keyword=value,...)  options.  The valid keywords are the same as those that can be specified for the PLOTPS or MSCPLOTPS utility programs except that the “begin”, “debug”, “dump”, “end”, “format” and “output” keywords are not allowed.

