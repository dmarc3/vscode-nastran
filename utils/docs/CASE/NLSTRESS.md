## [NLSTRESS (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.NLSTRESS.Case.xhtml) - Nonlinear Element Stress Output Request

Requests the form and type of nonlinear element stress output in SOLs 106 and 400.

#### Format:

![casecontrol4a01214.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01214.jpg?_LANG=enus)  

#### Examples:

```nastran
NLSTRESS=5
NLSTRESS (SORT1,PRINT,PUNCH,PHASE)=15
NLSTRESS(PLOT)=ALL
NLSTRESS(NLOUT=23)=ALL
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                   │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as a tabular listing of elements for each load.                  │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output will be presented as a tabular listing of load for each element type.              │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                           │
│ (blank)      │                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command)│
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section.│
│ Both .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Stresses for all nonlinear elements will be output.                                       │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only stresses for elements with │
│              │ identification numbers that appear on this SET command will be output (Integer  >  0).    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ No nonlinear element stress will be output (Default).                                     │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ NLOUT        │ For SOL 400 only. Allows the selection of additional types of nonlinear output.           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────┤
│ m            │ Identification of a NLOUT Bulk Data entry. (Integer > 0)                                  │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. ALL should not be used in a transient problem due to potentially excessive output.
2. See Remark 1 under   for a discussion of SORT1 and SORT2.
3. If there is a stress request, the default output set is that of the STRESS request.
4. For NLTRAN analysis, NLSTRESS does not support SORT1 selection.
