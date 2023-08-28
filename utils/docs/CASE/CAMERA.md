## [CAMERA](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.CAMERA1.xhtml) - Microfilm Plotter Options

Specifies microfilm plotter options.

#### Format:

![casecontrol4b01515.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/../../../assets/casecontrol4b01515.jpg?_LANG=enus)  

#### Example:

```nastran
CAMERA FILM
```

```text
┌────────────┬───────────────────────────────────────────────────────────────┐
│ Describers │ Meaning                                                       │
├────────────┼───────────────────────────────────────────────────────────────┤
│ FILM       │ Requests 35 mm or 16 mm film and positive or negative images. │
├────────────┼───────────────────────────────────────────────────────────────┤
│ PAPER      │ Requests positive prints.                                     │
├────────────┼───────────────────────────────────────────────────────────────┤
│ BOTH       │ Requests positive prints and 35 mm or 16 mm film.             │
└────────────┴───────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. If the CAMERA command is not specified, then CAMERA PAPER BLANK FRAMES 0 is assumed.

2. If FILM or BOTH is specified, then these options must be communicated to the plotter operator through normal means of communications at the installation.

3. If FILM or BOTH are specified and if n is greater than 0 then n blank frames will be inserted between plots. The plotter must be operated in the manual mode in order to have blank frames inserted between positive prints. If blank frames are desired only on film, and not on paper, the plotter must be operated in the automatic mode.

