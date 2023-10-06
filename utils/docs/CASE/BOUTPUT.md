## [BOUTPUT (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.BOUTPUT.Case.xhtml) - Line Contact or 3D Contact Output Requests

Selects contact regions for output.

#### Format:

![casecontrol4a00834.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00834.jpg?_LANG=enus)  

#### Examples:

```nastran
BOUTPUT=ALL
BOUTPUT=5
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output is presented as a tabular listing of secondary nodes for each load or time depending on the │
│              │ solution sequence.                                                                                 │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output is presented as a tabular listing of load or time for each secondary node.                  │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                    │
│ (blank)      │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command), while  │
│ the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both .op2 and │
│ .h5 file can be created simultaneously. Note .xdb file is being deprecated.                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Histories of all the secondary nodes (all nodes for 3D Contact) listed in all the BOUTPUT Bulk     │
│              │ Data entries are output. If no BOUTPUT Bulk Data entries are specified, histories of all the       │
│              │ secondary nodes in all the contact regions are output.                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of previously appearing SET command. Only contact regions with identification   │
│              │ numbers that appear on the SET command are selected for output. If there is a BOUTPUT Bulk Data    │
│              │ entry for a contact region selected via the set command, histories for secondary nodes listed in   │
│              │ the Bulk Data entry are output. If there is no BOUTPUT Bulk Data entry for a contact region        │
│              │ selected via the set command, histories for all the secondary nodes in that contact region are     │
│              │ output.                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Result histories for secondary nodes are not calculated or output.                                 │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. BOUTPUT is processed in SOLs 101, 106, 129, 153, 159 and 400 only.
For other solution sequences, only the initial contact status may be output when presence of BCTABLE or BCTABL1 with ID=0.
2. SORT1 is the default in SOLs 106 and 153. SORT2 is the default in SOLs 129 and 159.
3. Only SORT1 is available for 3D Contact.
4. The initial contact status may be output when presence of BCTABLE/ID=0. Please note that all the contact force/stress in the initial state are zero. Only the contact status is relevant.

