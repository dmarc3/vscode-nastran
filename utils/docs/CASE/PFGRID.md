## [PFGRID (Case)](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.PFGRID.Case.xhtml) - Acoustic Grid Participation Factor Output Request

Requests the form and type of acoustic grid participation factor output.

#### Format:

![casecontrol4a01248.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01248.jpg?_LANG=enus)  

#### Example:

```nastran
SET 10 = 11217
SET 20 = 25., 30., 35.
PFGRID(PHASE, SOLUTION=20) = 10
SET 40 = 11217
PEAKOUT NPEAK=4, NEAR=2.0,
PFGRID(PLOT, PHASE, SOLUTION=PEAK) = 40
```

```text
┌──────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer    │ Meaning                                                                                          │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PRINT or     │                                                                                                  │
│ (blank)      │                                                                                                  │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PUNCH        │                                                                                                  │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PLOT         │                                                                                                  │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ * The .op2 binary database file will be generated with “PARAM,POST, X” (or the POST Case Control command),      │
│ while the .h5 binary database file will be generated with “HDF5OUT” entry specified in Bulk Data Section. Both  │
│ .op2 and .h5 file can be created simultaneously. Note .xdb file is being deprecated.                            │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ REAL or IMAG │ Real and imaginary part of complex results will be output (Default).                             │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PHASE        │ Magnitude and phase of complex results will be output.                                           │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRIDS        │ Keyword selecting the structural grid points to be processed; the default is all structural grid │
│              │ points.                                                                                          │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ setg         │ Identifier of a set containing the identifiers of the structural grid points to be processed.    │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SOLUTION     │ Keyword selecting a set of excitation frequencies for which the participation factors will be    │
│              │ processed. Default is all excitation frequencies. PEAK activates the PEAKOUT automatic peak      │
│              │ frequency extraction. See PEAKOUT Case Control Command for detailed description of PEAK          │
│              │ parameters.                                                                                      │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ setf         │ Identifier of a set of excitation frequencies.                                                   │
├──────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ setdof       │ Identifier of a set of fluid degrees of freedom for which the participation factors are to be    │
│              │ processed.                                                                                       │
└──────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. All PFMODE(FLUID), PFPANEL, and PFGRID Case Control commands must reference the same set of fluid degrees of freedom.
2. Acoustic grid participation factors are available in a coupled frequency response analysis (SOL 108 and SOL 111).
3. The SOLUTION keyword can be used to select a subset of solutions available. If set setf is specified, the items in the set are excitation frequencies.
