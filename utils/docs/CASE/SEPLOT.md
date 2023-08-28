## [SEPLOT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.SEPLOT1.xhtml) - Superelement Plot Delimiter

Assigns the subsequent PLOT or XYPLOT commands to one or more superelements.

#### Format:

```nastran
SEPLOT seid1 [ seid2 ... ]
```

#### Examples:

```nastran
SEPLOT 5
SEPLOT 0 3 7 200
```

```text
┌───────────┬─────────────────────────────────────────────────────┐
│ Describer │ Meaning                                             │
├───────────┼─────────────────────────────────────────────────────┤
│ seidi     │ Superelement identification number (Integer  >  0). │
└───────────┴─────────────────────────────────────────────────────┘
```

#### Remarks:

1. See also related command SEUPPLOT.

2. Any PLOT or XYPLOT commands appearing above all SEPLOT (or SEUPPLOT) commands will apply in all SEPLOT (or SEUPPLOT) packets.

3. For multiple PLOT or XYPLOT commands, there should be a SEPLOT command with each PLOT. For the special case where the PLOTs or XYPLOTs refer to the same superelements and use the same FIND, a single SEPLOT followed by a single FIND may be placed above all commands.
