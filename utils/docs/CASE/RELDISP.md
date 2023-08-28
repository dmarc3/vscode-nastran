## [RELDISP (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.RELDISP.Case.xhtml) - Relative Displacement Output Request

Requests the form and type of relative displacement output with respect to a structural grid point in SOL 101, 103, 105, 108, 109, 111, 112, 200 and SOL 400 only.

#### Format:

![casecontrol4a01272.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01272.jpg?_LANG=enus)  

#### Example:

```nastran
RELDISP(REAL, PUNCH, PRINT,REFSET=10)=20
RELDISP(REFSET=10)=20
```

```text
┌──────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SORT1        │ Output will be presented as a tabular listing of grid points for each frequency.                  │
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
│ the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both .op2 and│
│ .h5 file can be created simultaneously. Note .xdb file is being deprecated.                                      │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REFSET (=m)  │ Set number of the previously appearing SET command having Reference Structural Grid ID present in │
│              │ the main bulk data w.r.t relative displacement is requested.                                      │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REAL or IMAG │ Requests rectangular format (real and imaginary) of complex output. Use of either REAL or IMAG    │
│              │ yields the same output.                                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Requests polar format (magnitude and phase) of complex output. Phase output is in degrees.        │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL          │ Relative displacement for all points will be output. See Remarks 2.                               │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NONE         │ No relative displacement will be output                                                           │
├──────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ n            │ Set identification of a previously appearing SET command. Only relative displacements of points   │
│              │ with identification numbers that appear on this SET command will be output. (Integer >0).         │
└──────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. RELDISP is available for SOL 101, 103, 105, 108, 109, 111, 112, 200 and SOL400 only.
2. RELDISP can be requested against only one grid for all the different subcases. The reference set should be same for all the subcases.
3. REFSET entry needs to be defined for getting the relative displacement.
4. See Remark   under  , for a discussion of SORT1 and SORT2.
5. RELDISP (refset =m) =NONE suppresses the generation of relative displacement output.
6. Relative Displacement between two grids is the algebraic difference of the displacement of both the grids.
7. S points or E points are not supported as reference point against which relative displacement can be calculated.
8. For superelements, the reference grid can be only in residual structure and relative displacement output can be requested for residual structure only.
9. The reference set grid should be a structural grid only with respect to which the relative displacement is requested.
10. The reference set grid should be present in the main bulk data section only.
