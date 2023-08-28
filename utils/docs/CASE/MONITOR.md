## [MONITOR (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.MONITOR.Case.xhtml) - Print Selection for Monitor Data

Specifies options in the printing of monitor data.

#### Format:

![casecontrol4a01174.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01174.jpg?_LANG=enus)  

#### Example:

```nastran
MONITOR(PHASE,NOPNT1)=ALL
MONITOR(IMAG,NODSP1)=ALL
```

```text
┌──────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                          │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REAL or IMAG │ Requests rectangular format (real and imaginary) of complex output. Use of either REAL or IMAG   │
│              │ yields the same output (Default).                                                                │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output. Phase output is in degrees.       │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NODSP1       │ Do not include MONDSP1 results in the MONITOR point prints (default is to provide these prints). │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPNT1       │ Do not include MONPNT1 results in the MONITOR point prints (default is to provide these prints). │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPNT2       │ Do not include MONPNT2 results in the MONITOR point prints (default is to provide these prints). │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NOPNT3       │ Do not include MONPNT3 results in the MONITOR point prints (default is to provide these prints). │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Print all monitor point results, except for those deselected.                                    │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ Do not print monitor point results                                                               │
└──────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. The MONITOR command is required in order to obtain MONITOR results in the printed output in SOLs 101, 103, 108, 109, 111, 112, 146, 200 and 400 (ANALYSIS = NLSTAT or NLTRAN).
2. SOL 144 does not require the MONITOR command and is ignored.
3. The MONITOR command should be above the subcase level or in the first subcase (above the step level for SOL 400). MONITOR commands in subcases subsequent to the first one or in any steps for SOL 400 are ignored.
4. MONPNT1 is not applicable in SOL 103.
5. The MONITOR command is not required for SOL 144 except in the special case of MONPNT3 with any exclusion flags other than SMAD. Monitor points with exclusion flags require special processing of the GRID point force data and are not recommended because of the potential excessive cost.
6. Results for dynamic solutions (SOLs 108, 109, 111, 112, 146 and 400 with NLTRAN) will be in SORT2 format. All other solutions will be in SORT1 format.
