## [PEN](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.PEN.xhtml) - Pen Color and Size Assignments

Generates a message on the printed output which may be used to inform the plotter operator as to what size and color pen point to mount in the various pen holders.

#### Format:

```nastran
PEN  pn  [ COLOR  cname ]
```

#### Example:

```nastran
PEN 2 COLOR RED
```

```text
┌────────────┬────────────────────────────────────────────────┐
│ Describers │ Meaning                                        │
├────────────┼────────────────────────────────────────────────┤
│ pn         │ Pen identification number (Integer >  0).      │
├────────────┼────────────────────────────────────────────────┤
│ COLOR      │ Flag indicating the next word is a color name. │
├────────────┼────────────────────────────────────────────────┤
│ cname      │ Pen color (Character).                         │
└────────────┴────────────────────────────────────────────────┘
```

#### Remarks:

1. The actual number of pens available will depend on the plotter hardware configuration at each installation.

2. The PEN command does not control the pen used in generating the plot. See the PEN describer on the   command.

3. The PEN command is optional and is not appropriate for microfilm plotters.

