## [MDLABEL](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MDLABEL.xhtml) - Module Output Label

Defines a label or name to be printed in the Module’s results output page headings.

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDLABEL MID     LABEL           
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MDLABEL 400     LEFT REAR FENDER, MODEL XYZ2000
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                        │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ MID       │ Module identification number. (Integer ≥ 0, Default=0)                         │
├───────────┼────────────────────────────────────────────────────────────────────────────────┤
│ LABEL     │ Label associated with Module MID for results output page headings. (Character) │
└───────────┴────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. MDLABEL can only be specified in the main Bulk Data Section and is ignored in-between the BEGIN MODULE=n and ENDMODULE commands.
2. Only one MDLABEL per Module may be specified.
3. The label will appear in all Module’s results output page headings. However, in some headings the label may be truncated.
4. This entry is valid only if Modules exist.
