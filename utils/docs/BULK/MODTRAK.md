## [MODTRAK](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/bulkno/TOC.MODTRAK.xhtml) - Mode Tracking Parameters

Specifies parameters for mode tracking in design optimization (SOL 200).

#### Format:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MODTRAK SID     LOWRNG  HIGHRNG MTFILTER                                        
```

#### Example:

```nastran
$---1---$---2---$---3---$---4---$---5---$---6---$---7---$---8---$---9---$---10--$
MODTRAK 100     1       26      0.80                                            
```

```text
┌───────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ SID       │ Sets identification number that is selected in the Case Control Section with the MODTRAK command.  │
│           │ See Remark 1. (Integer; no Default)                                                                │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LOWRNG    │ Lowest mode number in range to search.  See Remark 2. (Integer > 0; Default  =  0.  If nonzero,    │
│           │ LOWRNG < HIGHRNG.)                                                                                 │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HIGHRNG   │ Highest mode number in range to search.  See Remark 2. (Integer > 0; Default  = number of          │
│           │ eigenvalues extracted.  If nonzero, LOWRNG  < HIGHRNG.)                                            │
├───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ MTFILTER  │ Filtering parameter used in mode cross-orthogonality check.  See Remark 3. (Real; Default  =  0.9) │
└───────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. Only the designed modes for the subcase will be tracked.  A designed mode is one that is used in the design model (in connection with either objective or constraints) and, therefore, identified on a DRESP1 entry.
2. The range of modes LOWRNG through HIGHRNG, inclusive, will be used to track the designed modes.  If LOWRNG and HIGHRNG are both blank, then all computed modes will be used to search for the designed modes.  Since large numbers of computed modes will result in higher computational costs, limiting the search range with LOWRNG and HIGHRNG is recommended.
3. Modes are considered to correlate if their mass normalized cross orthogonalities are greater than MTFILTER.
