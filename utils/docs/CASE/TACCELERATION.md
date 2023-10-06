## [TACCELERATION (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.TACCELERATION.Case.xhtml) - Acceleration Output Request for trim components, TRMC

Requests the form and type of acceleration output for TRMC.

#### Format:

![casecontrol4a01392.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01392.jpg?_LANG=enus)  

#### Example:

```nastran
SET 20 = 3/103, 5/0, 12/ALL $
TACCELERATION=ALL
TACC(REAL, PUNCH, PRINT)=20
TACCE=20
TACCELE(SORT2, PRINT)=20
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as a tabular listing of grid points for each load and frequency.         │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output will be presented as a tabular listing of frequency for each grid point.                   │
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
│ REAL or IMAG │ Requests rectangular format (real and imaginary) of complex output. Use of either REAL or IMAG    │
│              │ yields the same output.                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output. Phase output is in degrees.        │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ TRMC acceleration for all points of all TRMCs will be output. See Remarks 2.                      │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ No TRMC acceleration will be output.                                                              │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only points with identification numbers │
│              │ that appear on this SET command will be output (Integer > 0). SET 20 in above examples section is │
│              │ to request SET 103(not present) for TRMC 3, none for TRMC 5 and ALL for TRMC 12.                  │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Refrain from using ALL which may produce voluminous output.
2. See Remark 1 under   for a discussion of SORT1 and SORT2.
3. TACC=NONE suppresses the generation of TRMC acceleration output.
4. TACCELERATION is supported only with PARAM,TRMBIM,PHYSICAL
5. TACCELERATION is available for PEM jobs of SOL 108, 111 and SOL 200 with ANALYSIS=DFREQ and MFREQ. Note that TACCELERATION is available for output only and cannot be utilized as design response.
6. For restart PEM job, TACCE request must remain the same as cold start PEM job.
