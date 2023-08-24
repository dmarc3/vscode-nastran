## [SOLADJC](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.SOLADJC.xhtml)

Default = 0

PARAM SOLADJC indicates if adjoint solution vectors are to be calculated during the analysis:

```text
┌───────────┬──────────────────────────────────────────────────┐
│ -1        │ Do not calculate adjoint solution vectors during │
│           │ the analysis. Any required adjoint solution      │
│           │ vectors will be computed during sensitivity      │
│           │ analysis.                                        │
├───────────┼──────────────────────────────────────────────────┤
│ >= 0      │ For ANALYSIS=DFREQ, the adjoint vectors will be  │
│           │ computed during the solution if:                 │
│           │ 1.All frequency response DRESP1 entries are grid │
│           │ responses.                                       │
│           │ 2.Each subcase has the same set of excitation    │
│           │ frequencies.                                     │
│           │ 3.The number of degrees-of-freedom referenced on │
│           │ DRESP1 entries < (number of independent design   │
│           │ variables + number of type-2 properties + number │
│           │ of spawned nonlinear beam library properties) x  │
│           │ (number of subcases.)                            │
│           │ 4.PARAM AUTOADJ=YES (Default)                    │
├───────────┼──────────────────────────────────────────────────┤
│ 999999    │ For ANALYSIS=MFREQ, the adjoint vectors will be  │
│           │ computed during the solution if the four items   │
│           │ above are satisfied and SOLADJC=999999.          │
│           │ SOLADJC=999999 cannot be used in conjunction     │
│           │ with FREQ3, FREQ4 or FREQ5 entries to specify    │
│           │ excitation frequencies.                          │
└───────────┴──────────────────────────────────────────────────┘
```
