## [PFPANEL (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.PFPANEL.Case.xhtml) - Acoustic Panel Participation Factor Output Request

Requests the form and type of acoustic panel participation factor output.

#### Format:

![casecontrol4a01260.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01260.jpg?_LANG=enus)  

#### Example:

```nastran
SET 10 = 10., 12.
SET 20 = 1222, 1223
PFPANEL (SOLUTION=10, FILTER=0.01, SORT=ABSD) = 20
SET 30 = 5001/T2, 6502/T3
PFPANEL (STRUCTURE, SOLUTION=10) = 30
SET 40 = 11217
PEAKOUT NPEAK=4, NEAR=2.0,
PFPANEL(SOLUTION=PEAK, FILTER=0.01, SORT=ABSD) = 40
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FLUID        │ Request output of MPFs for the response of acoustic grid points (one degree of freedom per point). │
│              │ See Remark 11. (Default)                                                                           │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ STRUCTURE    │ Request output of MPFs for the response of structure degrees of freedom. See Remark 12.            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                    │
│ (blank)      │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                    │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command),        │
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both    │
│ .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                              │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRTMSG       │ Request generation of diagnostic messages for badly-defined output sets during PF computations.    │
│              │  These badly defined sets generally produce no output. See Remark 12..                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REAL or IMAG │ Real and imaginary part of complex results will be output (Default).                               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Magnitude and phase of complex results will be output.                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PANEL        │ Keyword to select the panels to be processed; default is all panels.                               │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ setp         │ Identifier of a set of panels.                                                                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT         │ Keyword selecting the sort type. Default is alphabetic sorting by panel name.                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ sorttype     │ Sort option: ABSA         Output will be sorted by absolute value in                    ascending  │
│              │ order. ABSD          Output will be sorted by absolute value in                    descending      │
│              │ order. ALGA           Output will be sorted by algebraic value in                       ascending  │
│              │ order. ALGD          Output will be sorted by algebraic value in                    descending     │
│              │ order.                                                                                             │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ KEY          │ Keyword selecting the output item to be used for sorting; default is FRACTION.                     │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ sortitem     │ Item from the item list, see the following table, on which the sort operation is performed.        │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ITEMS        │ Keyword specifying data selected for output to the .pch file.                                      │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ itemlist     │ One or more of the items in the following table:                                                   │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
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
│ MODEDISP   │ Real and imaginary part of modal participation factors.                                      │
├────────────┼──────────────────────────────────────────────────────────────────────────────────────────────┤
│ MODERESP   │ Magnitude and phase relative to total response of modal participation factors.               │
└────────────┴──────────────────────────────────────────────────────────────────────────────────────────────┘
```

```text
┌──────────┬───────────────────────────────────────────────────────────────────────────────────────────────┐
│          │ If more than one item is selected, the list must be enclosed in parentheses.                  │
├──────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ SOLUTION │ Keyword selecting a set of excitation frequencies for which the participation factors will be │
│          │ processed. Default is all excitation frequencies. PEAK activates the PEAKOUT automatic peak   │
│          │ frequency extraction. See PEAKOUT Case Control Command for detailed description of PEAK       │
│          │ parameters.                                                                                   │
├──────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ setf     │ Identifier of a set of excitation frequencies.                                                │
├──────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ FILTER   │ Keyword specifying the value of a filter to be applied to the printed output.                 │
├──────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ fratio   │ Filter value (Default is 0.001), see Remark 7.                                                │
├──────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ NULL     │ Keyword specifying the power of ten used to detect a null response, see Remark 8.             │
├──────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ ipower   │ Power of ten used to detect a null response (Default is 12), see Remark 8.                    │
├──────────┼───────────────────────────────────────────────────────────────────────────────────────────────┤
│ setdof   │ Identifier of a set of fluid degrees of freedom for which the participation factors are to be │
│          │ processed.                                                                                    │
└──────────┴───────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. All PFMODE(FLUID), PFPANEL, and PFGRID Case Control commands must reference the same set of fluid degrees of freedom.
2. Acoustic panel participation factors are available in a coupled frequency response analysis (SOL 108 and SOL 111).
3. Printed output includes results for all the data items described in the itemlist table.
4. Punched output includes results for only the data items selected by the ITEMS keyword.
5. Panel participation factors are alphabetically sorted by panel names unless the SORT keyword specifies a different sorting order. If a sorting order is specified, the KEY keyword selects the item that is used for sorting. When MODEDISP is selected, sorting is based on the magnitude. When MODERESP is selected, sorting is based on the real part.
6. The SOLUTION keyword can be used to select a subset of solutions available. If set setf is specified, the items in the set are excitation frequencies.
7. The filter is applied to the real part of the normalized projected participation factors. Only participation factors that pass the filter are output.
8. If the magnitude of the total response at a selected response degree of freedom is less than
10 -ipowr , then no modal participation factors are processed. If ipower is not in the range of 1 to 31, the default of 12 is used.
9. If present, output includes the load participation factor. The panel name of the load participation factors is –LOAD-.
10. The FLUID option selects panel PF calculation for acoustic grid points (one degree of freedom per point) and setdof should be identification numbers.
11. The STRUCTURE option selects panel PF calculation for structure grid points and setdof should be identification numbers and component codes.
12. Output sets that define no valid model degrees of freedom for data recovery produce no PF output.  This condition is usually discovered prior to actual computations and an informational is generated.  Occasionally, when multiple subcases are involved and one of the subcases references an invalid set, the PF calculations are still performed for any valid combinations.  PRTMSG can be used to aid in identification of invalid set data under these conditions.
