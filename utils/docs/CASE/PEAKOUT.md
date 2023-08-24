## [PEAKOUT (Case)](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/TOC.PEAKOUT.Case.xhtml) - Control peaks identification process for frequency response analysis

#### Format:

```nastran
![casecontrol4a01246.jpg](https://help-be.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/casecontrol4a/../../../assets/casecontrol4a01246.jpg?_LANG=enus)  
```

#### Example:

```nastran
PEAKOUT NPEAK=4, NEAR=2.0, LFREQ=10.0, HFREQ=200.0, RTYPE=DISP, PSCALE=DBA 
```

```text
┌───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Describer │ Meaning                                                                                           │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NPEAK     │ Requests the desired number of peaks to extract. See remark 2. (Integer, Default=5).              │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ NEAR      │ Minimum allowed frequency between two peaks. If two peaks are closer than this value, the lower   │
│           │ frequency peak will be ignored. (Real, Default=0.01 Hz )                                          │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ LFREQ     │ Lowest frequency used in peak identification. (Real, Default=lowest forcing frequency or 0.0 Hz)  │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ HFREQ     │ Highest frequency used in peak identification. (Real, Default=highest forcing frequency or 1.0e10 │
│           │ Hz)                                                                                               │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RTYPE     │ Results type for peak identification in structural domain. (Default=DISP)                         │
├───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ PSCALE    │ Scaling method for acoustic pressure results in fluid domain. See remark 3. (Default=NONE)        │
└───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Remarks:

1. This command is meaningful only in frequency response analysis (SOLs 108 and 111) and SOL 200 with DFREQ and MFREQ. It is ignored in all other analyses.
2. The actual number of peaks found may be fewer than the desired number.
3. When requesting dB or dBA, the parameter PREFDB is used as a reference pressure for dB calculation, see ACOUT parameter.
4. All GRIDs referenced on any setdof of PFMODE, PFGRID and PFPANEL requests are required (but not limited to) on a DISP output command. The DISP command must be placed above the SUBCASE level.
5. If non sparse data recovery is requested using PARAM,SPARSEDR,NO, then also PARAM,DDRMM,-1 is required. Sparse Data recovery is default.
6. External super elements are not supported
7. PARAM, PTHRES can be used to request the PEAKOUT result that exceeds a prescribed frequency-dependent threshold value. Refer the User Parameter Description of   for more details.
