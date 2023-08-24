## [AESMETH](https://help.hexagonmi.com/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.AESMETH.xhtml)

Default    = SELECT

Solution method for static aeroelastic analysis.

```text
┌────────┬─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ SELECT │ selects the DIRECT method on models with less than 50000 DOF in the solution set; otherwise     │
│        │ selects AUTO.                                                                                   │
├────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ AUTO   │ selects the reduced basis method for an approximate solution, which is used as starting vectors │
│        │ for an ITER solution.                                                                           │
├────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ DIRECT │ selects the direct solution.                                                                    │
├────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ RITZ   │ selects the reduced basis approximate solution.                                                 │
├────────┼─────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ITER   │ selects the iterative solution.                                                                 │
└────────┴─────────────────────────────────────────────────────────────────────────────────────────────────┘
```
