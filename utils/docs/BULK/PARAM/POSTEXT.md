## [POSTEXT](https://nexus.hexagon.com/documentationcenter/bundle/MSC_Nastran_2022.4/page/Nastran_Combined_Book/qrg/parameters/TOC.POSTEXT.xhtml)

Default = NO

Under PARAM,POST,-1 and -2, and if PARAM,POSTEXT,YES is specified, then the following data blocks are also written to the .op2 file specified by PARAM,OUNIT2.

```text
┌────────────┬────────────┬───────────────────────────────────────────────────┐
│ Data Block │ PARAM POST │ Description                                       │
│ Name       │            │                                                   │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ FRL        │ -1, -2     │ Frequency response list (modal frequency response │
│            │            │ only).                                            │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ BHH        │ -1, -2     │ Modal damping matrix (modal frequency response    │
│            │            │ only).                                            │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ KHH        │ -1, -2     │ Modal stiffness matrix (modal frequency response  │
│            │            │ only).                                            │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ BGPDT      │ -1         │ Basic grid point definition table.                │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ PVT0       │ -1, -2     │ User parameter value table                        │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ CASECC     │ -1         │ Case Control table                                │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ EQEXIN(S)  │ -1         │ Equivalence external to internal grid ID table    │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ CLAMA      │ -1, -2     │ Complex eigenvalue table                          │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ OEDE1      │ -1, -2     │ Element energy loss output table                  │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ OEKE1      │ -1, -2     │ Element kinetic energy output table               │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ OUGV2      │ -1, -2     │ Displacement output table in SORT2                │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ PSDF       │ -1, -2     │ Power spectral density table                      │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ OGPWG      │ -1, -2     │ Grid point weight generator output table          │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ TOL        │ -1, -2     │ Time output list                                  │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ OPHSA      │ -1, -2     │ Solution set eigenvectors (modal frequency        │
│            │            │ response only)                                    │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ LAMA       │ -1         │ Eigenvalue summary table                          │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ ONRGY2     │ -1         │ Element kinetic energy (obsolete)                 │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ PSDFH      │ -1, -2     │ Power spectral density table for modal            │
│            │            │ coordinates                                       │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ DSCM2      │ -1, -2     │ Design sensitivity coefficient matrix             │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ DSCMCOL    │ -1, -2     │ Design sensitivity parameters table               │
├────────────┼────────────┼───────────────────────────────────────────────────┤
│ MPOUT      │ -1,-2      │ Monitor point outputs                             │
└────────────┴────────────┴───────────────────────────────────────────────────┘
```
