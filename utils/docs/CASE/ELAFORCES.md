## [ELAFORCES (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.ELAFORCES.Case.xhtml) - Elastic Forces Output Request

Requests the form and type of elastic forces output.

#### Format:

![casecontrol4a00898.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00898.jpg?_LANG=enus)  

#### Examples:

```nastran
ELAFORCE=ALL
ELAF(REAL, PUNCH, PRINT)=17
ELAFORCE=25
ELAFORCE(SORT2, PRINT)=20
```

```text
┌──────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as a tabular listing of grid points for each load, frequency, eigenvalue, │
│              │ or time, depending on the solution sequence.                                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output will be presented as a tabular listing of frequency or time for each grid point.            │
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
│ REAL or IMAG │ Requests rectangular format (real and imaginary) of complex output. Use of either REAL or IMAG     │
│              │ yields the same output.                                                                            │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output. Phase output is in degrees.         │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Elastic forces for all points will be output. See Remarks 2.                                       │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ No elastic force will be output.                                                                   │
├──────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only points with identification numbers  │
│              │ that appear on this SET command will be output (Integer  > 0).                                     │
└──────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Refrain from using ALL in transient analysis which may produce voluminous output.
2. See Remark   under  , for a discussion of SORT1 and SORT2.
3. ELAFORCE=NONE suppresses the generation of elastic forces output.
4. Although ELAFOR selects the desired grid IDs, it is to be noted that the connections should be included in the computation. Hence, F  of a point the requested set can be also expressed as  ![casecontrol4a00902.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00902.jpg?_LANG=enus)  
5. ELAFORCE is available for SOL 108, 109, 111, 112 and SOL 200 with ANALYSIS=DFREQ, MFREQ and MTRAN. Note that ELAFORCE is available for output only and can not be utilized as design response.
6. ELAFORCE does not support external SE via OTM due to limitation.
7. ELAFORCE does not support DOMAINSOLVER with PARTOPT=grid.
