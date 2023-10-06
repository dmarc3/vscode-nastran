## [PTITLE](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.PTITLE.xhtml) - Plot Frame Title

Defines a character string that will appear at the top of the plot frame on the line below the sequence number.

#### Format:

```nastran
PTITLE   ptitle
```

#### Example:

```nastran
PTITLE   RIGHT WING -- LOAD CASE 3
```

```text
┌───────────┬─────────────────────────────────────────────────────┐
│ Describer │ Meaning                                             │
├───────────┼─────────────────────────────────────────────────────┤
│ ptitle    │ Any character string (Character, Default =  blank). │
└───────────┴─────────────────────────────────────────────────────┘
```

#### Remarks:

1. PTITLE may not be continued to the next command line.

2. Up to four lines of title information will be printed in the lower left-hand corner of each plot. The text for the top three lines is taken from the TITLE, SUBTITLE, and LABEL commands in the Case Control Section. (See the   for a description of the TITLE, SUBTITLE, and LABEL commands). The text for the bottom line may be of two forms depending on the type plot requested. One form contains the word UNDEFORMED SHAPE. The other form contains the type of plot (statics, modal, etc.) subcase number, load set or mode number, frequency or eigenvalue or time, and (for complex quantities) the phase lag or magnitude. The sequence number for each plot is printed in the upper corners of each frame. The sequence number is determined by the relative position of each PLOT execution command in the plot package. The information on the PTITLE command will be printed on the line below the sequence number. The date and (for deformed plots) the maximum deformation are also printed at the top of each frame.

