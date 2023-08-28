## [SEUPPLOT](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4b/TOC.SEUPPLOT1.xhtml) - Superelement Plot Delimiter

Assigns the subsequent PLOT or XYPLOT commands to a superelement and all of its upstream superelements.

#### Format:

```nastran
SEUPPLOT  seid
```

#### Example:

```nastran
SEUPPLOT  7
```

```text
┌───────────┬─────────────────────────────────────────────────────┐
│ Describer │ Meaning                                             │
├───────────┼─────────────────────────────────────────────────────┤
│ seid      │ Superelement identification number (Integer  >  0). │
└───────────┴─────────────────────────────────────────────────────┘
```
#### Remarks:

1. See also related command SEPLOT.

2. Any PLOT or XYPLOT commands appearing above all SEUPPLOT (or SEPLOT) commands will apply in all SEUPPLOT (or SEPLOT) packets.

3. For multiple PLOT or XYPLOT commands, there should be a SEUPPLOT command with each PLOT. For the special case where the PLOTs or XYPLOTs refer to the same superelements and use the same FIND, a single SEUPPLOT followed by a single FIND may be placed above all the commands.

