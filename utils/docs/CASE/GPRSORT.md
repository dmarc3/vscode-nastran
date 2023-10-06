## [GPRSORT (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.GPRSORT.Case.xhtml) - Composites Ply Results Sorted Output

Request sorted output of composites ply results (stress, strain, and failure indices) by global ply ID for a given element set.

#### Format:

![casecontrol4a01046.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01046.jpg?_LANG=enus)  

#### Examples:

```nastran
GPRSORT=ALL
GPRSORT=22
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL       │ All composite elements referencing a PCOMPG property entry type. See Remarks 1. and 2. │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────┤
│ n         │ Set identification number of a previously appearing SET command.                       │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Composite element output will be sorted by global ply ID and element ID. Note that this sorted output is only available for composite elements referencing a PCOMPG property entry. Global ply IDs can only be specified on the PCOMPG entry.
2. Composite elements referencing the PCOMP property entry will be excluded from the sorted output.
