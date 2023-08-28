## [PLOTID (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.PLOTID.Case.xhtml) - Plotter Identification

Defines a character string that will appear on the first frame of any plotter output.

#### Format:

```nastran
PLOTID=title
```

#### Example:

```nastran
PLOTID=BLDG. 125 BOX 91
```

```text
┌───────────┬───────────────────────┐
│ Describer │ Meaning               │
├───────────┼───────────────────────┤
│ title     │ Any character string. │
└───────────┴───────────────────────┘
```

#### Remarks:

1. PLOTID must appear before the OUTPUT(PLOT) or OUTPUT(XYOUT) Case Control commands.
2. The presence of PLOTID causes a special header frame to be plotted, with the supplied identification plotted several times. The header frame allows plotter output to be identified easily.
3. If no PLOTID command appears, no ID frame will be plotted.
4. The PLOTID header frame will not be generated for the table plotters.
