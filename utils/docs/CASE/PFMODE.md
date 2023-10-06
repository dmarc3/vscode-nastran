## [PFMODE (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.PFMODE.Case.xhtml) - Modal Participation Factor (MPF) Output Request

Requests the form and type of modal participation factor (MPF) output.

#### Format:

![casecontrol4a01252.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01252.jpg?_LANG=enus)  

#### Examples:

```nastran
SET 20 = 11/T3, 33/T3, 55/T3
SET 30 = 420., 640., 660.
PFMODE(STRUCTURE, SOLUTION = 30, FILTER = 0.01, SORT = ABSD) = 20
SET 40 = 1222, 1223
SET 50 = 10., 12.
PFMODE(FLUID, STRUCTMP=ALL, PANELMP=ALL, SOLUTION=50, SORT=ABSD) = 40
PEAKOUT NPEAK=4, NEAR=2.0,
PFMODE(FLUID, STRUCTMP=ALL, PANELMP=ALL, SOLUTION=PEAK) = 40
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STRUCTURE    │ Requests output of MPFs for the response of structural degrees of freedom. See Remark 8.          │
│              │ (Default).                                                                                        │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLUID        │ Requests output of MPFs for the response of acoustic grid points (one degree of freedom per       │
│              │ point). See Remark 9.                                                                             │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                   │
│ (blank)      │                                                                                                   │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                   │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                   │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command),       │
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both   │
│ .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                             │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRTMSG       │ Request generation of diagnostic messages for badly-defined output sets during PF computations.   │
│              │  These badly defined sets generally produce no output. See Remark 15..                            │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT         │ Keyword selecting the sort type. Default is sorting by increasing natural mode number. See Remark │
│              │ 7.                                                                                                │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ sorttype     │ Sort option: ABSA     output will be sorted by absolute value in ascending order. ABSD     output │
│              │ will be sorted by absolute value in descending order. ALGA     output will be sorted by algebraic │
│              │ value in ascending order. ALGD     output will be sorted by algebraic value in descending order.  │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KEY          │ Keyword selecting the output item to be used for sorting; default is FRACTION. See Remark 7.      │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ sortitem     │ Item from the item list, see the following table, on which the sort operation is performed.       │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ITEMS        │ Keyword specifying data selected for output to the .pch file                                      │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ itemlist     │ One or more of the items in the following table:                                                  │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

```text
┌────────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│ Item       │ Description                                                                                  │
│ Identifier │                                                                                              │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ RESPONSE   │ Modal participation factor.                                                                  │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ PROJECTION │ Projected modal participation factor.                                                        │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ FRACTION   │ Normalized projected modal participation factor.                                             │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ SCALED     │ Projected modal participation factor divided by largest magnitude of all modal participation │
│            │ factors.                                                                                     │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODEDISP   │ Real and imaginary part of modal participation factors. See Remark 7.                        │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODERESP   │ Magnitude and phase relative to total response of modal participation factors. See Remark 7. │
└────────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

```text
┌──────────┬──────────────────────────────────────────────────────────────────────────────────────────────┐
│          │ If more than one item is selected, the list must be enclosed in parentheses.                 │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLUIDMP  │ Keyword to select output of fluid MPFs. See Remarks 2. and 9.                                │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│          │ Number of lowest fluid modes for which MPFs will be computed. See Remark 9.                  │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ STRUCTMP │ Keyword to select output of structural MPFs. See Remarks 8. and 9.                           │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│          │ Number of lowest structural modes for which MPFs will be computed. See Remarks 8. and 9.     │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ PANELMP  │ Keyword to select output of panel MPFs. See Remark 2.                                        │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ setp     │ Identifier of a set of panels.                                                               │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ SOLUTION │ Selects a set of excitation frequencies for which MPFs will be processed. Default is all     │
│          │ excitation frequencies. PEAK activates the PEAKOUT automatic peak frequency extraction. See  │
│          │ PEAKOUT Case Control Command for detailed description of PEAK parameters. See Remark 10.     │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ setf     │ Identifier of a set of excitation frequencies. See Remark 10.                                │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ FILTER   │ Keyword specifying the value of a filter to be applied to the printed output. See Remark 11. │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ fratio   │ Filter value (Default is 0.001). See Remark 11.                                              │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ NULL     │ Keyword specifying the power of ten used to detect a null response. See Remark 12.           │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ ipower   │ Power of ten used to detect a null response (Default is 12). See Remark 12.                  │
├──────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ setdof   │ Identifier of a set of structural degrees of freedom or acoustic grid points (one degree of  │
│          │ freedom per point) for which MPFs are to be processed. See Remark 3.                         │
└──────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. All PFMODE(FLUID), PFPANEL, and PFGRID Case Control commands must reference the same set of acoustic grid points.
2. Keywords FLUIDMP and PANELMP are only valid if FLUID is specified.
3. If STRUCTURE is specified,  setdof  must reference a set of structural degrees of freedom. If FLUID is specified,  setdof  must reference a set of acoustic grid points.
4. Acoustic MPFs are available in a coupled modal frequency response analysis (SOL 111) only.
5. Printed output includes results for ALL the data items described in the Item List Table.
6. Punched output includes results for only the data items selected by the ITEMS keyword.
7. MPFs are sorted by increasing order of mode number unless the SORT keyword specifies a different sorting order. If a sorting order is specified, the KEY keyword selects the item that is used for sorting. When MODEDISP is selected, sorting is based on the magnitude. When MODERESP is selected, sorting is based on the real part.
8. The STRUCTURE option selects MPF calculations for structural degrees of freedom. The STRUCTMP value defines the number of lowest structural modes used in final output preparation prior to any filtering. The default is ALL. If STRUCTMP=NONE, no structural MPF is generated.
9. The FLUID option selects MPF calculations for acoustic grid points (one degree of freedom per point). The STRUCTMP value defines the number of lowest structural modes used in final output preparation of acoustic structure MPFs prior to any filtering. The default is NONE. The FLUIDMP value defines the number of lowest fluid modes used in final output preparation of acoustic fluid MPFs prior to any filtering. The default is NONE.
10. The SOLUTION keyword can be used to select a subset of solutions available. If  setf  is specified, the items in the set are excitation frequencies.
11. The filter is applied to the real part of the normalized projected participation factors. Only participation factors that pass the filter are output.
12. If the magnitude of the total response at a selected response degree of freedom is less than
10 - ipowr ,  then no MPFs are processed. If  ipower  is not in the range of 1 to 31, the default of 12 is used.
13. Acoustic panel MPFs are normalized using the panel response instead of the total response.
14. If present, only the output of acoustic structural MPFs will include the load participation factor. The load participation factor has a mode number of 0 and a resonance frequency of 0. Structural MPFs will not include the load participation factor.
15. Output sets that define no valid model degrees of freedom for data recovery produce no PF output. This condition is usually discovered prior to actual computations and an informational message is generated. Occasionally, when multiple subcases are involved and one of the subcases references an invalid set, the PF calculations are still performed for any valid combinations. PRTMSG can be used to aid in identification of invalid set data under these conditions.
