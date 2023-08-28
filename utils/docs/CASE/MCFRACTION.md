## [MCFRACTION (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MCFRACTION.Case.xhtml) - Modal Contribution Fractions Output Request

Requests the form and type of modal contribution fraction output.

#### Format:

![casecontrol4a01110.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01110.jpg?_LANG=enus)  

![casecontrol4a01112.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01112.jpg?_LANG=enus)  

![casecontrol4a01114.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01114.jpg?_LANG=enus)

#### Example:

```nastran
SET 1001 = 10.0, 20.0, 100.0    
SET 2001 = 716/T3, 809/T3, 412/T1
MCFRACTION (STRUCTURE,PRINT,PUNCH,ITEM=FRACTION,
                       SORT=ABSD,KEY=PROJECTION,SOLUTION=1001)=2001
MCFRACTION (ITEMS=(FRACTION,PROJECTION),FILTER=0.01)=2001
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STRUCTURE    │ Request pertains to structure points only.                                                        │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                   │
│ (blank)      │                                                                                                   │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                   │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                   │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command), while │
│ the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both .op2    │
│ and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                                  │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REAL or IMAG │ Requests rectangular format (real and imaginary) of complex output.                               │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output.                                    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT         │ Keyword selecting one of the sort type options. Default is to produced output in increasing       │
│              │ natural mode number order.                                                                        │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ sorttype     │ One of the following modal contribution fraction output sorting options: ABSA - output will be    │
│              │ sorted by absolute value in ascending order. ABSD - output will be sorted by absolute value in    │
│              │ descending order. ALGA - output will be sorted algebraically in ascending order. ALGD - output    │
│              │ will be sorted algebraically in descending order.                                                 │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KEY          │ Keyword selecting a sorting operation key quantity.                                               │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ sortitem     │ Item from the item list table on which the SORT operation is performed. (Default is FRACTION.)    │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ITEMS        │ Keyword specifying data selection options.                                                        │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ itemlist     │ One (or more) of the following modal contribution fraction output items. If more than one item is │
│              │ selected, the list must be enclosed in parentheses:                                               │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

```text
┌────────────┬─────────────────────────────────────────────────────────────────────────────────┐
│ Item       │ Description                                                                     │
│ Identifier │                                                                                 │
├────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ RESPONSE   │ Each mode’s response at each degree of freedom is selected.                     │
├────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ PROJECTION │ Projection of modal response on solution.                                       │
├────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ FRACTION   │ Fraction of total displacement per mode (PROJECTION divided by total).          │
├────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ SCALED     │ Scaled magnitude (PROJECTION divided by largest magnitude of modal response).   │
├────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ MODEDISP   │ Modal displacements (complex solution at each DOF by mode number).              │
├────────────┼─────────────────────────────────────────────────────────────────────────────────┤
│ MODERESP   │ Modal response for each mode (polar format with respect to total displacement). │
└────────────┴─────────────────────────────────────────────────────────────────────────────────┘
```

```text
┌──────────┬────────────────────────────────────────────────────────────────────────────────────────────┐
│ SOLUTION │ Keyword specifying the output solution time step, forcing frequency, or complex eigenvalue │
│          │ selections for which modal fractions will be generated (Default = ALL).                    │
├──────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ m        │ Results for solutions in SET m will be output.                                             │
├──────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ FILTER   │ Keyword specifying the value of the printed output data filter.                            │
├──────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ fratio   │ Value of output filter ratio (Default = 0.001).                                            │
├──────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ NULL     │ Keyword specifying the power of ten used to detect a null response quantity.               │
├──────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ ipowr    │ The power of ten used to detect a null response quantity (Default = 12).                   │
├──────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ n        │ Results for grid point components in SET n will be output.                                 │
├──────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL      │ Results for all solutions and/or grid point components will be output.                     │
├──────────┼────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE     │ No modal contribution fractions will be output.                                            │
└──────────┴────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The MCFRACTION Case Control command is useful in modal frequency response (SOL 111), modal transient response (SOL 112), and modal complex eigenvalue analysis (SOL 110) solution sequences only. If superelements are used, its use is restricted to residual structure data recovery operations only. MCFRACTION is not supported in SOL 200 or 400.
2. Printed output includes results for all of the data items described in the itemlist table.
3. Punched output includes results for only the data items selected by the ITEMS keyword.
4. Modal contribution fractions are sorted by increasing order of mode number unless the SORT keywords specifies a particular sorting order. If a sorting order is specified, the KEY keyword selects the particular data item in the printed results tabular output listing that is sorted. When MODEDISP is selected, the magnitude is sorted. When MODERESP is selected, the real portion of the response is sorted.
5. The SOLUTION keyword can be used to select a subset of the solutions available. If SET m is specified, the items in the SET list are forcing frequency values, time step values, or complex eigenvalue mode numbers, depending upon the solution sequence used.
6. The FILTER keyword specifies a filter ratio value that is used to limit the amount of printed output produced. It applies to the data item selected by the KEY keyword if it is specified. If no KEY keyword is present, the default value od KEY=FRACTION will be used. The maximum value for the selected data item across all natural modes is determined. If the ratio of the data item value to the maximum data item value is less than fratio for any natural mode, no output for that natural mode is produced.
7. If the magnitude of the total response at a selected grid pint component is less than  ![casecontrol4a01118.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01118.jpg?_LANG=enus) , no modal contribution fraction output is generated for that degree of freedom. If ipowr is not in the range of 1 to 31, the default value of 12 is used for ipowr, producing a null response threshold of  ![casecontrol4a01120.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01120.jpg?_LANG=enus) .
8. For modal transient response solution sequences, response quantities are real numbers. There are no imaginary terms. Therefore, polar representations of the data has no meaning. Furthermore, projections of responses onto the total response are simply the individual modal contribution to the total response at a degree of freedom. Thus, the only items available for output are the individual modal response magnitude (PROJECTION), the modal fraction (FRACTION), and the scaled response magnitude (SCALED). Selection of any of the other items from the itemlist table causes selection of the modal response magnitude (PROJECTION) item.
9. A request of MCFRACTION output for a SET that contains no degrees-of-freedom in the analysis set, will result in the message: “SYSTEM WARNING MESSAGE 2001 (MCFRAC)”
