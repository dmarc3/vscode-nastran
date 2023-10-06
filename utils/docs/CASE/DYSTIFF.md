## [DYSTIFF (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.DYSTIFF.Case.xhtml) - Dynamic Stiffness Output Request

Requests the form and type of dynamic stiffness output in SOL 108, 111, 200 and SOL 400 only.

![casecontrol4a00856.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a00856.jpg?_LANG=enus)  

#### Examples:

```nastran
DYSTIFF = ALL
DYSTIFF (REAL, PUNCH, PRINT)=17
DYSTIFF = 25
DYSTIFF (SORT2, PRINT)=20 
```

```text
┌──────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as a tabular listing of grid points for each frequency.                │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT2        │ Output will be presented as a tabular listing of frequency for each grid point.                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                 │
│ (blank)      │                                                                                                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                 │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command),     │
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both │
│ .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                           │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REAL or IMAG │ Requests rectangular format (real and imaginary) of complex output. Use of either REAL or IMAG  │
│              │ yields the same output.                                                                         │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output. Phase output is in degrees.      │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Dynamic Stiffness at all points will be output. See remark 2.                                   │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only dynamic stiffness of points with │
│              │ identification numbers that appear on this SET command will be output. (Integer >0).            │
├──────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ No dynamic Stiffness will be output (Default).                                                  │
└──────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. DYSTIFF is available for SOL 108, 111 and SOL 200 and 400 with ANALYSIS=DFREQ and MFREQ. Note that DYSTIFF is available for output only and cannot be utilized as the design response in SOL 200.
2. See Remark   under   for a discussion of SORT1 and SORT2.
3. DYSTIFF=NONE suppresses the generation of dynamic stiffness output.
4. Dynamic Stiffness, d  at a grid point is computed as, d =f /u  where f  is the load applied and u  is the complex displacement. The dynamic stiffness will be output for the grids having load applied on it.
5. Refrain from using ALL which may produce voluminous output.
6. The dynamic stiffness output will be subjected to the mechanical load only.
7. Dynamic stiffness output is not supported for enforced motion analysis. The results will be zero for enforced motion analysis.
